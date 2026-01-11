"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabase/client";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) {
        router.replace("/auth/signin");
        return;
      }

      // Check app_metadata instead of database
      const role = sessionData.session.user.app_metadata?.role;
      
      if (role !== "admin") {
        router.replace("/dashboard");
      }
    };

    checkAdmin();
  }, [router]);

  return <>{children}</>;
}
