import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  posts: Posts[];
}

function Card({ posts }: Props) {

  return (
    <>
      <section className="relative min-h-screen snap-start scroll-mt-[40px]">
        <div className="mx-2 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:mx-8">
          {posts.map((post) => (
            <div className="mx-auto mb-2 grid space-y-14 sm:px-4">
              <div className="flex h-[350px] w-[350px] select-none flex-col space-y-3 rounded-xl bg-white/10 p-5 sm:h-[450px] sm:w-[500px] md:h-[500px] md:w-[380px] lg:w-[450px] xl:w-[425px] 2xl:w-[500px]">
                <div className="break-words text-xl">
                  <h1 className="">{post.title}</h1>
                </div>
                <div className="relative h-80 w-full md:h-[320px]">
                  <Image
                    src={post.coverPhoto.url}
                    fill
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-1 items-center justify-between space-x-3">
                  <div className="text-xl text-white md:text-2xl">
                    <p></p>
                    <p className="text-xs text-gray-500">
                      Published: {post.datePublished}
                    </p>
                  </div>
                  <Link href={"/" + post.slug}>
                    <p className="flex w-full cursor-pointer justify-center text-xl font-thin text-[#00FFFF] transition duration-200 hover:underline hover:opacity-90 sm:justify-end sm:pr-5">
                      Read More
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Card;
