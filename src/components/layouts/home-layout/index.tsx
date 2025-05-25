import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SearchIcon } from "lucide-react";
import React from "react";
import { AuthButton } from "../../buttons/auth-button";
import { Sidebar } from "./sidebar";
import Title from "./title";

export const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <Navbar />
        <div className="flex min-h-screen pt-16">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 flex h-16 items-center bg-white px-2 pr-5">
      <div className="flex w-full items-center gap-4">
        <section className="flex shrink-0 items-center">
          <SidebarTrigger />
          <Title />
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
