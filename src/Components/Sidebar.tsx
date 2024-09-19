import { courseData } from "../constants";
import { useAppSelector } from "../Store/Hooks";
import { RootState } from "../Store/Store";
import Lessons from "./Lessons";

export default function Sidebar() {
  const course = useAppSelector((state: RootState) => state.course);
  return (
    <aside className="hidden lg:block w-1/5 ml-5 py-5 text-gray-300">
      <div className="flex gap-1 items-center mb-7">
        {" "}
        <img src="/left.svg" className="-ml-2" />
        <p className="text-gray-300">Back to courses</p>
      </div>
      <div className="mb-7">
        <span className="text-gray-300">Course</span>
        <p className="text-xl font-semibold text-white mt-1">{course.title}</p>
      </div>
      <ul className="space-y-2">
        {courseData.map((data) => (
          <Lessons key={data.id} title={data.title} lessons={data.lessons} />
        ))}
      </ul>
    </aside>
  );
}
