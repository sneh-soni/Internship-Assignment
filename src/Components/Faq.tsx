import { useState } from "react";
import { questions } from "../constants";

const FaqCard = ({ data, isActive, onToggle }: any) => {
  return (
    <li
      className="w-full border-l-2 shadow-md rounded-xl bg-white my-4 px-4 py-6 hover:cursor-pointer"
      onClick={onToggle}
    >
      <div className="flex justify-between">
        <p className="font-semibold">{data.question}</p>
        <button className="rounded px-2 text-black">
          {isActive ? <img src="/up.svg" /> : <img src="/down.svg" alt="" />}
        </button>
      </div>
      <p>{isActive && data.answer}</p>
    </li>
  );
};

export default function Faq() {
  const [isActive, setIsActive] = useState<any>(false);

  const handleButton = (id: any) => {
    setIsActive((prev: any) => (prev === id ? false : id));
  };

  return (
    <>
      <h3 className="hidden lg:block text-2xl font-bold mt-6 mb-4">
        Frequently asked questions
      </h3>
      <ul className="hidden lg:block w-full mt-6">
        {questions.map((faq) => (
          <FaqCard
            key={faq.id}
            data={faq}
            isActive={isActive === faq.id}
            onToggle={() => handleButton(faq.id)}
          />
        ))}
      </ul>
    </>
  );
}
