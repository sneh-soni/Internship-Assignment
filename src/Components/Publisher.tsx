import { useAppSelector } from "../Store/Hooks";
import { RootState } from "../Store/Store";

function Publisher() {
  const course = useAppSelector((state: RootState) => state.course);
  return (
    <div className="text-black w-full bg-white shadow-lg p-5 rounded-2xl flex flex-col justify-between items-start">
      <h2 className="font-semibold text-xl mb-5">Publisher</h2>
      <div className="flex gap-2 justify-center items-center">
        <div className="flex items-center justify-center bg-black text-white rounded-full h-10 w-10 font-bold">
          R
        </div>
        <div>
          <p className="font-semibold">{course.publisher.name}</p>
          <p className="text-gray-400">3D Artist</p>
        </div>
      </div>
      <p className="text-gray-400 mt-2">{course.publisher.description}</p>
      <p className="flex items-center gap-2 text-gray-400 mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="rgb(156 163 175)"
          stroke="rgb(156 163 175)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-star"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        <span>{course.rating} Instructor Rating</span>
      </p>
      <p className="flex items-center gap-2 text-gray-400 mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="rgb(156 163 175)"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-badge-check"
        >
          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
        <span>{course.publisher.reviews} Reviews</span>
      </p>
      <p className="flex items-center gap-2 text-gray-400 mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="rgb(156 163 175)"
          stroke="rgb(156 163 175)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-users"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
        <span>{course.publisher.students} Students</span>
      </p>
      <p className="flex items-center gap-2 text-gray-400 mt-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="rgb(156 163 175)"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-square-play"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="m9 8 6 4-6 4Z" />
        </svg>
        <span>{course.publisher.courses} Courses</span>
      </p>
    </div>
  );
}
export default Publisher;
