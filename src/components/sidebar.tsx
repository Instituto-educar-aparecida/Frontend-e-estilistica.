import {
  LuCirclePlay,
  LuGraduationCap,
  LuHouse,
  LuUserRound,
} from "react-icons/lu";
import { Separator } from "./separator";

export function Sidebar() {
  return (
    <aside className="w-60 max-w-60 bg-[#1E293B] text-white h-screen border-r flex flex-col ">
      <header className="flex flex-row items-center gap-2 pl-8 pt-6 pb-5">
        <div className="bg-gradient-to-br from-violet-500 to-violet-800 p-2 rounded-lg  shadow-lg shadow-violet-600/50">
          <LuGraduationCap />
        </div>
        <div className="flex flex-col ">
          <h1 className="font-bold text-xs ">INSTITUTO</h1>
          <span className="text-[0.7rem] text-violet-500 font-semibold">
            Educar
          </span>
        </div>
      </header>

      <Separator />

      <div className="flex justify-between flex-1 flex-col ">
        <nav className="pt-8">
          <ul className="space-y-4 pl-8">
            <li className="flex gap-2 items-center py-2 border-l-2 border-transparent hover:bg-violet-600  cursor-pointer rounded-l-lg transition-all">
              <span className="flex flex-row items-center pl-2  gap-2">
                <LuHouse /> Início
              </span>
            </li>
            <li className="flex gap-2 items-center py-2 border-l-2 border-transparent hover:bg-violet-600 hover:border-violet-600 cursor-pointer rounded-l-lg transition-all">
              <span className="flex flex-row items-center  pl-2 gap-2">
                <LuCirclePlay /> Minhas Aulas
              </span>
            </li>
            <li className="flex gap-2 items-center py-2 border-l-2 border-transparent hover:bg-violet-600 hover:border-violet-600 cursor-pointer rounded-l-lg transition-all">
              <span className="flex flex-row items-center pl-2 gap-2">
                <LuUserRound />
                Minha conta
              </span>
            </li>
          </ul>
        </nav>

        <div>
          <Separator />
          <footer className="p-6">
            <div className="flex flex-col gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
              <span className="text-xs font-bold text-slate-400">SUPORTE</span>
              <span className="text-xs text-slate-300 leading-relaxed">
                Alguma dúvida técnica? Estamos aqui.
              </span>
              <button className="bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold py-2 rounded-md transition-colors shadow-md shadow-violet-900/20">
                Central de Ajuda
              </button>
            </div>
          </footer>
        </div>
      </div>
    </aside>
  );
}
