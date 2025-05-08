// frontend/src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import UploadPage from "../pages/UploadPage";
import ViewerPage from "../pages/ViewerPage";
import LoginPage from "../pages/login";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => listener?.subscription.unsubscribe();
  }, []);

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <Router>
      <Routes>
        {!user ? (
          <>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <>
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/viewer" element={<ViewerPage />} />
            <Route path="*" element={<Navigate to="/upload" replace />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;