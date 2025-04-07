import Image from "next/image"
import Alterra from "@/../public/imgs/alterra.gif"

export default function AlterraLogo() {
  return (
    <>
      <div className="flex items-center justify-center mb-8">
        <Image src={Alterra} alt="Alterra Logo" className="w-25" />
        <span className="text-2xl font-bold ml-3">
          Alterra <span className="text-[#FF8601]">Corps</span>
        </span>
      </div>
    </>
  );
}
