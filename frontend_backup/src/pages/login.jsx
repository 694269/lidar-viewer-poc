// frontend/src/pages/LoginPage.js
import { useState } from "react";
import { supabase } from "../src/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) {
      alert("❌ Failed to send magic link");
    } else {
      setSent(true);
    }
  };
<h1 className="text-3xl font-bold text-blue-600">Tailwind is working ✅</h1>
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        {sent ? (
          <p className="text-green-600 text-center">✅ Magic link sent to {email}</p>
        ) : (
          <>
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 mb-4 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Send Magic Link
            </button>
          </>
        )}
      </div>
    </div>
  );
}