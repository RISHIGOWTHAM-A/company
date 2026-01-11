"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabase/client";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const finishAuth = async () => {
      // ensures session is stored properly
      await supabase.auth.getSession();
      router.replace("/dashboard");
    };

    finishAuth();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Verifying your account...</p>
    </div>
  );
}
