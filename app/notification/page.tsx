import Image from "next/image";
import Logo from "./assets/logo.svg";

const Notification = () => (
  <div className="h-screen w-screen bg-gray-50 p-5">
    <div className="mx-auto flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-lg">
      <div className="shrink-0">
        <Image className="h-12 w-12" alt="ChitChat logo" src={Logo} />
      </div>
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-slate-500">You have a message!</p>
      </div>
    </div>
  </div>
);

export default Notification;
