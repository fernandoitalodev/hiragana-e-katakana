import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="light flex h-screen flex-col items-center justify-between bg-[url('/bgsite.png')] bg-contain bg-no-repeat bg-center">
      <div className=" w-10/12 m-auto  text-center">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white ">
          Pratique seu conhecimento de{" "}
          <span className="font-semibold text-green-600">Hiragana </span> e{" "}
          <span className="font-semibold text-blue-600">Katakana</span>
        </h1>

        <Link href={"/game"}>
          <button className="btn-blue">Iniciar</button>
        </Link>
      </div>
    </main>
  );
}
