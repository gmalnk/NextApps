import { seedTaskdata } from "db/action";
export default function SeedDatabase() {
  return (
    <div className="m-5">
      <form action={seedTaskdata}>
        <button
          type="submit"
          className="px-8 py-4 mx-10 my-5 text-lg font-semibold text-black bg-slate-100 hover:underline hover:cursor-pointer hover:bg-slate-600 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
