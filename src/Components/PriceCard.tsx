import { addToCart, buyNow } from "../Store/CourseSlice";
import { useAppDispatch, useAppSelector } from "../Store/Hooks";
import { RootState } from "../Store/Store";

export default function PriceCard() {
  const course = useAppSelector((state: RootState) => state.course);

  const dispatch = useAppDispatch();

  return (
    <div className="w-full">
      <h2 className="text-black my-5 text-xl font-bold lg:hidden">Pricing</h2>
      <div className="bg-white shadow-xl text-black p-6 rounded-xl">
        <p className="text-gray-400 text-xs mb-2 font-semibold">Full Course</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <h3 className="text-2xl font-bold">${course.price}</h3>
            <span className="text-gray-400 line-through">
              ${course.originalPrice}
            </span>
          </div>

          <div className="text-indigo-600 font-semibold bg-indigo-200/55 px-2 py-1 rounded-lg">
            {course.discount}%
          </div>
        </div>
        <div className="mt-4">
          <p className="font-semibold">Course includes:</p>
          <ul className="mb-6 flex flex-col gap-2">
            <li className="flex gap-2 text-gray-500">
              <img src={"/play.svg"} className="w-4" />
              <p>{course.videoHours} hours on-demand video</p>
            </li>
            <li className="flex gap-2 text-gray-500">
              <img src="/article.svg" className="w-4" />
              <p>{course.articles} Articles</p>
            </li>
            <li className="flex gap-2 text-gray-500">
              <img src="/folder.svg" className="w-4" />
              <p>{course.resources} Downloadable resources</p>
            </li>
            <li className="flex gap-2 text-gray-500">
              <img src="/pad.svg" className="w-4" />
              <p>Mobile version</p>
            </li>
          </ul>
        </div>
        <button
          onClick={() => dispatch(addToCart())}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg mb-2"
        >
          Add to cart
        </button>
        <button
          onClick={() => dispatch(buyNow())}
          className="w-full border border-indigo-600 bg-white text-indigo-600 py-2 rounded-lg"
        >
          Buy now
        </button>
        <p className="text-gray-400 font-semibold text-sm mt-4">
          30-Day money-back guarantee
        </p>
      </div>
    </div>
  );
}
