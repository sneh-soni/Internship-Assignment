import { useAppSelector } from "../Store/Hooks";
import { RootState } from "../Store/Store";

export default function Ratings() {
  const course = useAppSelector((state: RootState) => state.course);
  return (
    <div className="text-black w-full bg-white shadow-lg p-5 rounded-2xl flex justify-between items-center">
      <div className="flex gap-2 justify-center items-center">
        <p className="text-5xl">🤩</p>
        <div>
          <p className="font-semibold mb-1 text-xl">Rating</p>
          <p className="text-gray-400">{course.students} Students</p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex gap-1 mb-1">
          <img src="/star.svg" className="w-5" />
          <img src="/star.svg" className="w-5" />
          <img src="/star.svg" className="w-5" />
          <img src="/star.svg" className="w-5" />
          <img src="/halfStar.svg" className="w-5" />
        </div>
        <p className="font-semibold text-gray-400">{course.rating} Stars </p>
      </div>
    </div>
  );
}
