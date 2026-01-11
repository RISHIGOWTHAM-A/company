"use client";

import { useEffect, useState } from "react";
import { Plus, Mail } from "lucide-react";

type User = {
  id: string;
  email: string;
  phone: string | null;
  created_at: string;
};

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchUsers() {
    const res = await fetch("/api/admin/users");
    const data = await res.json();
    setUsers(data);
  }

  async function addUser() {
    setLoading(true);
    await fetch("/api/admin/users/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    setEmail("");
    setPassword("");
    setLoading(false);
    fetchUsers();
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-3xl font-bold">Users</h1>

          <div className="flex gap-2">
            <input
              className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={addUser}
              disabled={loading}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <Plus size={18} /> Add
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-zinc-800">
          <table className="w-full text-sm">
            <thead className="bg-zinc-900">
              <tr>
                <th className="text-left p-4">UID</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Phone</th>
                <th className="text-left p-4">Provider</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr
                  key={u.id}
                  className="border-t border-zinc-800 hover:bg-zinc-900/50"
                >
                  <td className="p-4 text-xs text-zinc-400">{u.id}</td>
                  <td className="p-4 flex items-center gap-2">
                    <Mail size={14} /> {u.email}
                  </td>
                  <td className="p-4">{u.phone ?? "-"}</td>
                  <td className="p-4">Email</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
