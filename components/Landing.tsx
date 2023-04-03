import { MutableRefObject, useRef } from "react";
import { HiChevronDoubleDown } from "react-icons/hi2";

function Landing() {
  const scrollRef = useRef() as MutableRefObject<HTMLDivElement>;
  return (
    <>
      <section className="relative flex snap-center snap-always flex-col bg-white/10">
        <div className="relative mx-10 flex flex-col space-y-14 py-14 sm:mx-0 sm:items-center">
          <h1 className="text-4xl text-orange-600">Coding Blog For Everyone</h1>
          <p className="max-w-sm text-sm">
            Too many people get to the end of their lives and wish they’d done
            more. Let us show you how to create more time to not just exist, but
            to really live.
          </p>
          <button
            className="flex items-center space-x-3 text-xl"
            onClick={() => {
              scrollRef.current.scrollIntoView({ behavior: "smooth" });
            }}>
            <HiChevronDoubleDown className="h-8 w-8 animate-bounce" />
            <p>Scroll To Blogs</p>
          </button>
        </div>
        <div className="my-10 flex sm:justify-center">
          <img
            src="https://gcdnb.pbrd.co/images/wYBMovheqOqT.png?o=1"
            alt=""
            className="object-contain"
          />
        </div>
        <div ref={scrollRef}></div>
      </section>
    </>
  );
}

export default Landing;
