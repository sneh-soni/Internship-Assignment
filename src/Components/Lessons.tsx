import { useState } from "react";
import LessonsList from "./LessonsList";

const Lessons = ({ title, lessons }: any) => {
  const [isHidden, setIsHidden] = useState<any>(true);

  return (
    <li className="">
      <div
        className=" cursor-pointer flex justify-between items-center my-7"
        onClick={() => setIsHidden(!isHidden)}
      >
        <p>{title}</p>
        <img
          src="/down.svg"
          className={`invert w-4 ${isHidden ? "" : "rotate-180"}`}
        />
      </div>
      {isHidden ? (
        ""
      ) : (
        <ul>
          {lessons.map((lession: any) => (
            <LessonsList
              key={lession.number}
              number={lession.number}
              title={lession.title}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default Lessons;
