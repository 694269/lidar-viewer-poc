// File: frontend/components/Navbar.js

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { supabase } from "../supabaseClient";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.clear();
    router.replace("/login");
    window.location.reload();
  };

  return (
    <nav className="bg-black p-4 shadow-md">
      <div className="container mx-auto flex items-center space-x-6 text-white">
        <Link href="/">
          <Image
            src="/img/RO-Website-Logo-2388917.webp"
            alt="Logo"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </Link>
        <Link href="/upload" className="hover:text-gray-300">Upload</Link>
        <Link href="/viewer-list" className="hover:text-gray-300">Viewer</Link>
        <button
          onClick={handleLogout}
          className="ml-auto bg-white text-black px-3 py-1 rounded hover:bg-gray-200"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
