import Image from "next/image";
import Link from "next/link";
import Moment from "react-moment";
import "moment-timezone";

interface Props {
  posts: Posts[];
}

function Card({ posts }: Props) {
  return (
    <>
      <section className="relative min-h-screen snap-start scroll-mt-[40px] bg-white/10 pt-10">
        <div className="grid grid-cols-1 gap-8 md:mx-1 md:grid-cols-2 lg:mx-2 xl:grid-cols-3 2xl:mx-9">
          {posts.map((post) => (
            <div className="mx-auto mb-2 grid space-y-14 sm:px-4 md:px-0 lg:px-4">
              <div className="flex h-[350px] w-[350px] select-none flex-col space-y-3 rounded-xl bg-white/5 p-5 sm:h-[450px] sm:w-[500px] md:h-[500px] md:w-[375px] lg:w-[450px] xl:w-[425px] 2xl:w-[500px]">
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
                <div className="flex flex-1 items-center justify-between">
                  <div className=" flex space-x-5 text-white md:text-2xl">
                    <Image
                      src={post.author.avatar.url}
                      width={50}
                      height={50}
                      className="object-contain"
                      alt=""
                    />
                    <div className="">
                      <p className="text-lg text-white/80">
                        Author: {post.author.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        Published:{" "}
                        <Moment format="YYYY/MM/DD/HH:MM" withTitle>
                          {post.datePublished}
                        </Moment>
                      </p>
                    </div>
                  </div>
                  <Link href={"/" + post.slug}>
                    <p className=" cursor-pointer text-xl font-thin text-[#00FFFF] transition duration-200 hover:underline hover:opacity-90 sm:justify-end">
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
