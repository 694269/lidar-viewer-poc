// frontend/components/Auth.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../supabaseClient";

export default function withAuth(Component) {
  return function AuthWrapped(props) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (!session && router.pathname !== "/login") {
          router.push("/login");
        } else {
          setUser(session?.user || null);
        }
        setLoading(false);
      });

      const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
        if (!session && router.pathname !== "/login") {
          router.push("/login");
        } else {
          setUser(session?.user || null);
        }
      });

      return () => listener?.subscription.unsubscribe();
    }, [router]);

    if (loading) return <div className="p-4">Checking auth...</div>;
    if (!user) return null;

    return <Component {...props} user={user} />;
  };
}