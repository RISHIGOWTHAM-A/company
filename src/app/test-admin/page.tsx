import { createSupabaseServer } from "@/app/lib/supabase/server";

export default async function TestAdminPage() {
  const supabase = await createSupabaseServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold">Test Admin Access</h1>
      
      <div className="mt-4 space-y-4">
        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">User Info:</h2>
          {user ? (
            <>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>ID:</strong> {user.id}</p>
              <p><strong>Created:</strong> {user.created_at}</p>
            </>
          ) : (
            <p className="text-red-400">No user found</p>
          )}
        </div>

        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">App Metadata:</h2>
          <pre className="text-sm bg-gray-900 p-2 rounded overflow-auto">
            {JSON.stringify(user?.app_metadata || {}, null, 2)}
          </pre>
        </div>

        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">User Metadata:</h2>
          <pre className="text-sm bg-gray-900 p-2 rounded overflow-auto">
            {JSON.stringify(user?.user_metadata || {}, null, 2)}
          </pre>
        </div>

        <div className="bg-gray-800 p-4 rounded">
          <h2 className="text-lg font-semibold mb-2">Role Check:</h2>
          <p><strong>app_metadata.role:</strong> {user?.app_metadata?.role || 'undefined'}</p>
          <p><strong>Is admin?</strong> {user?.app_metadata?.role === 'admin' ? '✅ YES' : '❌ NO'}</p>
        </div>
      </div>
    </div>
  );
}
