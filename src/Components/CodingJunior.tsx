import { useAppSelector } from "../Store/Hooks.ts";
import { RootState } from "../Store/Store.ts";
import Navbar from "./Navbar.tsx";
import Sidebar from "./Sidebar.tsx";
import Faq from "./Faq.tsx";
import PriceCard from "./PriceCard.tsx";
import Ratings from "./Ratings.tsx";
import Publisher from "./Publisher.tsx";
import Suggested from "./Suggested.tsx";

const CodingJunior: React.FC = () => {
  const course = useAppSelector((state: RootState) => state.course);

  return (
    <div className="bg-neutral-950 text-white">
      <Navbar />

      <main className="flex gap-5 justify-between">
        <Sidebar />

        <div className="w-full lg:w-4/5 bg-neutral-100 p-8 lg:p-6 rounded-t-2xl flex flex-col lg:flex-row gap-4 justify-center items-start">
          <div className="w-full lg:w-2/3">
            <div className="bg-gradient-to-br from-purple-950 to-purple-800 rounded-2xl p-8 mb-4 w-full h-[35vh] lg:h-[45vh] relative flex flex-col justify-between">
              <div className="w-3/4">
                <h1 className="text-2xl sm:text-3xl font-bold tracking-wide mb-2 uppercase">
                  {course.title}
                </h1>
                <p className="mb-4 text-sm tracking-wider line-clamp-2">
                  {course.subtitle}
                </p>
              </div>
              <p className="font-bold">INTRODUCTION</p>
              <button className="bg-gray-900/60 rounded-full p-3 absolute top-[44%] right-[46%] flex justify-center items-center">
                <img src="/playVid.svg" className="w-3 md:w-5" />
              </button>
            </div>

            <div className="text-black flex justify-between items-center">
              <div className="flex gap-2 justify-center items-center">
                <div className="flex items-center justify-center bg-black text-white rounded-full h-10 w-10 font-bold uppercase">
                  {course.publisher.name[0]}
                </div>
                <div>
                  <p className="font-bold">{course.publisher.name}</p>
                  <p className="text-gray-400">Publisher</p>
                </div>
              </div>
              <div className="flex gap-5 justify-center items-center">
                <div className="flex gap-2 justify-center items-center">
                  <img src="/heart.svg" className="h-5" />
                  <p className="font-semibold">{course.likes}</p>
                </div>
                <div className="flex gap-2 justify-center items-center">
                  <img src="/share.svg" className="h-5" />
                  <p className="font-semibold">Share</p>
                </div>
                <p className="font-semibold text-2xl">
                  &middot;&middot;&middot;
                </p>
              </div>
            </div>

            <div className="w-full text-black mt-6">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-400 leading-7">{course.description}</p>

              <h3 className="text-2xl font-bold mt-6 mb-4">Course details</h3>
              <div className="w-full flex flex-wrap items-center gap-4">
                <div className="bg-white shadow-lg py-4 px-6 rounded-2xl flex-1 text-nowrap">
                  <p className="font-semibold text-gray-400">Lessons</p>
                  <p className="flex gap-1 items-center justify-start text-black font-semibold">
                    <img src="/sqadPlay.svg" className="h-4" />
                    {course.lessons}
                  </p>
                </div>
                <div className="bg-white shadow-lg py-4 px-6 rounded-2xl flex-1 text-nowrap">
                  <p className="font-semibold text-gray-400">Duration</p>
                  <p className="flex gap-1 items-center justify-start text-black font-semibold">
                    <img src="/watch.svg" className="h-4" />
                    {course.duration}
                  </p>
                </div>
                <div className="bg-white shadow-lg py-4 px-6 rounded-2xl flex-1 text-nowrap">
                  <p className="font-semibold text-gray-400">Skill level</p>
                  <p className="flex gap-1 items-center justify-start text-black font-semibold">
                    <img src="/chart.svg" className="h-4" />
                    {course.skillLevel}
                  </p>
                </div>
                <div className="bg-white shadow-lg py-4 px-6 rounded-2xl flex-1 text-nowrap">
                  <p className="font-semibold text-gray-400">Views</p>
                  <p className="flex gap-1 items-center justify-start text-black font-semibold">
                    <img src="/eye.svg" className="h-4" />
                    {course.views}
                  </p>
                </div>
              </div>

              <Faq />
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col gap-8 justify-between">
            <PriceCard />
            <Ratings />
            <Publisher />
            <Suggested />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CodingJunior;
