const SuggestedCard = () => {
  return (
    <div className="flex gap-3 mb-4">
      <img src="/thumbnail.jpeg" className="rounded-xl w-[160px] h-[90px]" />
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-lg">Excel Course</p>
        <p className="text-gray-400">By Julia</p>
        <p className="flex gap-2">
          <img src="/star.svg" className="w-5" />
          <span className="text-gray-400">4.8</span>
        </p>
      </div>
    </div>
  );
};

function Suggested() {
  return (
    <div className="text-black w-full bg-white shadow-lg p-5 rounded-2xl flex flex-col justify-between items-start">
      <h2 className="font-semibold text-xl mb-5">Suggested courses</h2>
      <SuggestedCard />
      <SuggestedCard />
      <SuggestedCard />
      <SuggestedCard />
    </div>
  );
}
export default Suggested;
