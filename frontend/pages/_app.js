import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../supabaseClient";
import Navbar from "../components/Navbar";
import "../src/index.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const isStandalone = router.pathname === "/viewer-standalone";

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session && router.pathname !== "/login") {
        router.push("/login");
      }
      setLoading(false);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session && router.pathname !== "/login") {
        router.push("/login");
      }
    });

    return () => authListener?.subscription.unsubscribe();
  }, [router]);

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {isStandalone ? (
        <div className="flex-1 relative">
          <Component {...pageProps} />
        </div>
      ) : (
        <main className="max-w-6xl mx-auto p-4">
          <Component {...pageProps} />
        </main>
      )}
    </div>
  );
}

export default MyApp;
