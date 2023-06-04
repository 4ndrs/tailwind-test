import Image from "next/image";

import Kristen from "./assets/kristen.avif";
import Floyd from "./assets/floyd.avif";
import Courtney from "./assets/courtney.avif";
import Ted from "./assets/ted.avif";

const Playground = () => (
  <main className="flex w-screen flex-col items-center gap-3">
    <h1 className="mt-3 text-3xl font-semibold text-slate-500">Playground</h1>
    <button className="rounded-full bg-violet-500 px-5 py-2 font-semibold text-white hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700">
      Save changes
    </button>

    <List />
  </main>
);

const people = [
  { name: "Kristen Ramos", email: "kristen.ramos@example.com", img: Kristen },
  { name: "Floyd Miles", email: "floyd.miles@example.com", img: Floyd },
  {
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    img: Courtney,
  },
  { name: "Ted Fox", email: "ted.fox@example.com", img: Ted },
];

const List = () => (
  <ul role="list" className="divide-y divide-slate-200 p-6">
    {people.map((person) => (
      <li key={person.name} className="flex py-4 first:pt-0 last:pb-0">
        <Image src={person.img} alt="" className="h-10 w-10 rounded-full" />
        <div className="ml-3 overflow-hidden">
          <p className="text-sm font-medium text-slate-900">{person.name}</p>
          <p className="truncate text-sm text-slate-500">{person.email}</p>
        </div>
      </li>
    ))}
  </ul>
);

export default Playground;
