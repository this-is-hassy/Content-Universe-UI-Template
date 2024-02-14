import Image from "next/image";
import huge from "./style.module.css";

export default function Home() {
  return (
    <>
      <main className="h-screen w-full">
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 transition ease-in delay-300 hover:delay-75 hover:scale-110 duration-300">
          <Image src="/cover.jpg" alt="cover img" width={300} height={400} />
        </div>

        {/* <div className="flex  justify-between w-full"> */}
        <div className="flex px-5 py-2 justify-between">
          <h2 className="flex justify-start  text-zinc-500  text-xs hover:scale-110 transition ease-out duration-500 delay-75 hover:duration-1000">
            FOR COLLABORATIONS
          </h2>
          <h2 className="flex justify-center mr-24 text-orange-400 font-black text-xs hover:scale-110 transition ease-out duration-500 delay-75 hover:duration-1000 ">
            CONTENT UNIVERSE
          </h2>
          <h2 className="flex justify-end  text-base hover:scale-110 transition ease-out duration-500 delay-75 hover:duration-1000 text-zinc-700 font-black">
            MENU
          </h2>
          {/* </div> */}
        </div>

        <div className="transform uppercase absolute top-24 left-5 w-10 ">
          <h1 className="text-orange-400 hover:scale-110 transition ease-out duration-500 delay-75 hover:duration-1000 font-bold">
            play video
          </h1>
          <h1 className="text-zinc-800 hover:scale-110 transition ease-out duration-500 delay-75 hover:duration-1000 font-bold">
            about us
          </h1>
        </div>
        <div className={huge.gapping}>
            <div className="relative my-16 pl-10 mx-auto text-lg transform uppercase max-w-2xl z-30 hover:scale-90 transition duration-500 delay-75 hover:duration-1000 ">
              we're content creation team and we're going to make some cool
              stuff for your
            </div>
        </div>
        <div className={huge.bolder}>
          <div className="overflow-hidden whitespace-nowrap top-48 absolute  w-full text-8xl z-0 ">
            <div className={huge.animpart1}>
              <h1>BRAND</h1>
              <h1>BRAND</h1>
              <h1>BRAND</h1>
              <h1>BRAND</h1>
            </div>
          </div>
          <div className={huge.bound}>
            <div className={huge.animpart2}>
              <div className="overflow-hidden whitespace-nowrap top-72 absolute  w-full text-8xl z-30  text-transparent ">
                <h1>BRAND</h1>
                <h1>BRAND</h1>
                <h1>BRAND</h1>
                <h1>BRAND</h1>
              </div>
            </div>
          </div>

          <div className={huge.animpart3}>
            <div className="overflow-hidden whitespace-nowrap top-96 absolute w-full text-8xl z-10 ">
              <h1>BRAND</h1>
              <h1>BRAND</h1>
              <h1>BRAND</h1>
              <h1>BRAND</h1>
            </div>
          </div>
        </div>
        <div>
          <h1 className="absolute bottom-5 left-5 transform uppercase font-bold text-xs hover:scale-110 transition   ease-out duration-500 delay-75 hover:duration-1000 text-zinc-700">
            scroll more for all services
          </h1>
          <h1 className="absolute bottom-5 right-5 transform uppercase underline font-bold text-xs hover:scale-110 transition ease-out duration-500 delay-75 hover:duration-1000 text-zinc-700">
            signature for our newspaper
          </h1>
        </div>
      </main>
    </>
  );
}
