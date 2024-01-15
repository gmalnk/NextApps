export default function Display({ text }: { text: string }) {
  return (
    <div className=" py-4 px-8 text-white bg-gray-800 rounded-3xl">{text}</div>
  );
}
