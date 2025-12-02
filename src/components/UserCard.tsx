"use client";

import Avatar from "@/components/ui/Avatar";
import { useAuth } from "@/hooks/useAuth";
import { RiLogoutBoxRLine } from "@remixicon/react";
import Link from "next/link";

function UserCard() {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900">
              IPanel
            </Link>
            <Link
              href="/login"
              className="px-3 py-2 rounded-md text-sm font-medium text-blue-600 hover:bg-blue-50"
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <div className="flex items-center space-x-4 p-4">
        <div className="flex items-center space-x-2 text-sm text-gray-700">
          <Avatar
            className="border"
            src={user.picture}
            alt={user.name || user.email}
          />
          <div className="flex flex-col gap-1">
            <span className="font-medium text-base">
              {user.name || user.email}
            </span>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
              {user.role === "admin" ? "Admin" : "Usuario"}
            </span>
          </div>
        </div>

        <button
          onClick={() => logout()}
          className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50"
        >
          <RiLogoutBoxRLine className="mr-1" />
          Logout
        </button>
      </div>
    </>
  );
}

export default UserCard;
