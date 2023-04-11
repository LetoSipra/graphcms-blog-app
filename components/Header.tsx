import Link from "next/link";
import React from "react";

function Header() {
  return (
    <>
      <header className="flex h-16 w-full items-center border-b border-b-white/20 bg-white/10">
        <Link href={"/"}>
          <h1 className="mx-5 my-auto text-2xl text-[#FF00FF] md:mx-10">
            CodeBlog
          </h1>
        </Link>
      </header>
    </>
  );
}

export default Header;
