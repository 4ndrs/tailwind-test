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
    <Table />
    <List2 />
  </main>
);

const people = [
  {
    name: "Kristen Ramos",
    title: "Regional Pradigm Technician",
    email: "kristen.ramos@example.com",
    img: Kristen,
  },
  {
    name: "Floyd Miles",
    title: "Product Directives Officer",
    email: "floyd.miles@example.com",
    img: Floyd,
  },
  {
    name: "Courtney Henry",
    title: "Senior Designer",
    email: "courtney.henry@example.com",
    img: Courtney,
  },
  {
    name: "Ted Fox",
    title: "VP, Hardware Engineering",
    email: "ted.fox@example.com",
    img: Ted,
  },
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

const Table = () => (
  <table className="w-[60rem]">
    <thead className="border-b border-slate-200 bg-slate-50">
      <tr>
        <th className="px-6 py-3 text-left text-sm font-medium text-slate-900">
          Name
        </th>
        <th className="px-6 py-3 text-left text-sm font-medium text-slate-900">
          Title
        </th>
        <th className="px-6 py-3 text-left text-sm font-medium text-slate-900">
          Email
        </th>
      </tr>
    </thead>
    <tbody>
      {people.map((person) => (
        <tr key={person.name} className="odd:bg-white even:bg-slate-50">
          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">
            {person.name}
          </td>
          <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
            {person.title}
          </td>
          <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
            {person.email}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const List2 = () => (
  <ul>
    {people.map((person) => (
      <li
        key={person.name}
        className="group/item flex items-center justify-between rounded-xl p-4 hover:bg-slate-100"
      >
        <div className="flex gap-4">
          <Image src={person.img} alt="" className="h-12 w-12 rounded-full" />
          <div className="w-full">
            <a className="font-semibold text-slate-900" href="#">
              {person.name}
            </a>
            <div className="text-slate-500">{person.title}</div>
          </div>
        </div>
        <a
          href="#"
          className="group/edit invisible flex items-start justify-between whitespace-nowrap rounded-full py-1 pl-4 pr-3 text-sm text-slate-500 transition hover:bg-slate-200 group-hover/item:visible"
        >
          <span className="font-semibold transition group-hover/edit:text-gray-700">
            Call
          </span>
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            className="h-5 w-5 text-slate-400 transition group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500"
          >
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </li>
    ))}
  </ul>
);

export default Playground;
