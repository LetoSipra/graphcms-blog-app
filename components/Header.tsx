import Link from "next/link";
import React from "react";

function Header() {
  return (
    <>
      <header className="flex h-16 w-full items-center bg-white/10 text-[#00FFFF]">
        <Link href={"/"}>
          <div className="mx-10 flex space-x-10">
            <h1 className="text-2xl text-[#FF00FF]">CodeLog</h1>
            <ul className="my-auto flex space-x-3">
              <li>Home</li>
              <li>About</li>
            </ul>
          </div>
        </Link>
      </header>
    </>
  );
}

export default Header;
