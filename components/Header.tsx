import Link from "next/link";
import React from "react";

function Header() {
  return (
    <>
      <header className="flex h-16 w-full items-center bg-white/10">
        <Link href={"/"}>
          <h1 className="mx-5 md:mx-10 my-auto text-2xl text-[#FF00FF]">CodeBlog</h1>
        </Link>
      </header>
    </>
  );
}

export default Header;
