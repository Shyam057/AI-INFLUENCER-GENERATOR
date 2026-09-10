import { User, SupabaseClient } from "@supabase/supabase-js";
import { createClient as createBrowserClient } from "./client";

export interface UserProfile {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

/**
 * Checks if user exists in Supabase public.users DB.
 * If user is new, inserts their record into public.users.
 */
export async function syncUserToDatabase(
  user: User,
  customClient?: SupabaseClient
): Promise<{ isNewUser: boolean; profile: UserProfile | null }> {
  if (!user || !user.id) {
    return { isNewUser: false, profile: null };
  }

  const supabase = customClient || createBrowserClient();

  try {
    // 1. Check if user already exists in public.users
    const { data: existingUser, error: fetchError } = await supabase
      .from("users")
      .select("*")
      .eq("id", user.id)
      .maybeSingle();

    if (fetchError && fetchError.code !== "PGRST116") {
      console.warn("Notice checking user existence in Supabase DB:", fetchError.message);
    }

    if (existingUser) {
      // User already exists in DB
      return { isNewUser: false, profile: existingUser as UserProfile };
    }

    // 2. New user detected - save user information into Supabase DB
    const fullName =
      user.user_metadata?.full_name ||
      user.user_metadata?.name ||
      user.email?.split("@")[0] ||
      "Creator";

    const avatarUrl =
      user.user_metadata?.avatar_url ||
      user.user_metadata?.picture ||
      "";

    const newProfileData = {
      id: user.id,
      email: user.email || "",
      full_name: fullName,
      avatar_url: avatarUrl,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const { data: insertedUser, error: insertError } = await supabase
      .from("users")
      .insert(newProfileData)
      .select()
      .maybeSingle();

    if (insertError) {
      console.warn("Could not insert into public.users (check RLS / schema):", insertError.message);
      // Even if insert fails (e.g. table not created yet), return fallback profile data
      return { isNewUser: true, profile: newProfileData as UserProfile };
    }

    return {
      isNewUser: true,
      profile: (insertedUser || newProfileData) as UserProfile,
    };
  } catch (err) {
    console.error("Error in syncUserToDatabase:", err);
    return { isNewUser: false, profile: null };
  }
}

/**
 * Fetches user profile directly from public.users table.
 */
export async function getUserProfile(
  userId: string,
  customClient?: SupabaseClient
): Promise<UserProfile | null> {
  const supabase = customClient || createBrowserClient();
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", userId)
      .maybeSingle();

    if (error) {
      return null;
    }
    return data as UserProfile;
  } catch (err) {
    console.error("Error fetching user profile:", err);
    return null;
  }
}
