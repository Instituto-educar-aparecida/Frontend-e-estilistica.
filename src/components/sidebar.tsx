import {
  LuCirclePlay,
  LuGraduationCap,
  LuHouse,
  LuUserRound,
} from "react-icons/lu";
import { Separator } from "./separator";

export function Sidebar() {
  return (
    <aside className="w-60 max-w-60 bg-gray-900 text-white h-screen border-r ">
      <header className="flex flex-row items-center gap-2 pl-8 pt-6 pb-6">
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

      <div className="flex justify-between flex-col ">
        <nav className="pl-8">
          <ul>
            <li>
              <LuHouse /> Início
            </li>
            <li>
              <LuCirclePlay /> Minhas Aulas
            </li>
            <li>
              <LuUserRound />
              Minha conta
            </li>
          </ul>
        </nav>
        <Separator />
        <footer className="pl-8">
          <div>
            <span>SUPORTE</span>
            <span>Alguma dúvida técnica? Estamos aqui.</span>
            <button>Central de Ajuda</button>
          </div>
        </footer>
      </div>
    </aside>
  );
}
