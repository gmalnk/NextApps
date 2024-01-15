export default function StartButton({ callBack }: { callBack: any }) {
  return (
    <button
      onClick={callBack}
      className=" py-4 px-8 bg-blue-600 rounded-2xl font-semibold text-white hover:scale-110 hover:bg-blue-700 hover:ring-1 hover:ring-blue-200 hover:ring-offset-2 hover:border-blue-200 active:scale-95 mt-8"
    >
      {" "}
      StartButton
    </button>
  );
}
