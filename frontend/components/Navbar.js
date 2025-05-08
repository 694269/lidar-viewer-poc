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
    <nav className="bg-gradient-to-r from-gray-900 to-black p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/img/RO-Website-Logo-2388917.webp"
              alt="Logo"
              width={40}
              height={40}
              className="cursor-pointer transition-transform hover:scale-105"
            />
          </Link>
          <div className="flex space-x-6">
            <Link 
              href="/upload" 
              className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Upload
            </Link>
            <Link 
              href="/viewer-list" 
              className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Viewer
            </Link>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
