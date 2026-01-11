import { NextResponse } from "next/server";
import { supabaseAdmin } from "../../../lib/supabase/admin";

export async function GET() {
  try {
    // Check if environment variables are set
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json(
        { error: "Server configuration error: Missing environment variables" },
        { status: 500 }
      );
    }

    const { data, error } = await supabaseAdmin.auth.admin.listUsers();

    if (error) {
      console.error("Supabase admin error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data.users);
  } catch (err) {
    console.error("API route error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
