import { SearchIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { AuthButton } from "../../buttons/auth-button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Sidebar } from "./sidebar";

export const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <Navbar />
      <div className="pt-16">
        <Sidebar />
      </div>
      {children}
    </SidebarProvider>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 flex h-16 items-center bg-white px-2 pr-5">
      <div className="flex w-full items-center gap-4">
        <section className="flex shrink-0 items-center">
          <SidebarTrigger />
          <Link href="/" className="flex items-center text-xl">
            <Youtube />
            <span className="font-semibold tracking-tight">NewTube</span>
          </Link>
        </section>
        <section className="mx-auto flex max-w-3xl flex-1 justify-center">
          <SearchInput />
        </section>
        <section className="flex shrink-0 items-center gap-4">
          <AuthButton />
        </section>
      </div>
    </nav>
  );
};

const SearchInput = () => {
  return (
    <form className="flex w-full max-w-2xl">
      <input
        type="search"
        name="search"
        placeholder="Search"
        className="w-full rounded-l-full border py-2 pr-12 pl-4 focus:border-blue-500 focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-r-full border border-l-0 bg-gray-100 px-5 py-2.5 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <SearchIcon className="size-5" />
      </button>
    </form>
  );
};

const Youtube = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="red"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-10"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" fill="white" />
    </svg>
  );
};
