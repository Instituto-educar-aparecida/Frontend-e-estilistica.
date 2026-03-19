import {
  LuCirclePlay,
  LuGraduationCap,
  LuHouse,
  LuMenu,
  LuUserRound,
  LuX,
} from "react-icons/lu";
import { Separator } from "./separator";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoBookOutline, IoSettingsOutline } from "react-icons/io5";
import { RiMedalLine } from "react-icons/ri";
import { GoHome } from "react-icons/go";
import { useState } from "react";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`
 bg-secondary text-gray-300 h-screen border-r border-gray-200/10 flex flex-col
      ${!isOpen ? "w-12 max-w-16" : "w-60 max-w-60"} transition-all duration-320 ease-in-out 
    `}
    >
      <header
        className={`z-10 ${isOpen ? " relative  pl-4 pt-4 pb-4" : "relative pl-2 pt-4 pb-4 pr-5"}
        `}
      >
        <div className="flex items-center gap-2">
          <div className="bg-linear-to-br from-violet-300 to-violet-900 p-2 rounded-lg  shadow-lg shadow-violet-400/20 text-gray-200">
            <LuGraduationCap />
          </div>

          {isOpen && (
            <div className="flex flex-col ">
              <h1 className="font-bold text-sm ">INSTITUTO</h1>
              <span className="text-caption text-violet-600 font-semibold">
                Educar
              </span>
            </div>
          )}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -right-3.75 z-50 top-6 -translate-y-1/2 p-1.5 rounded-lg hover:bg-white/10 transition-all shrink"
          title={!isOpen ? "Abrir" : "Fechar"}
        >
          {isOpen ? <LuX /> : <LuMenu />}
        </button>
      </header>

      <Separator />

      <div className="flex justify-between flex-1 flex-col overflow-hidden">
        <nav className="">
          {isOpen && (
            <div className="pb-3 pt-3">
              <span className="text-label font-bold pl-4  ">
                MENU PRINCIPAL
              </span>
            </div>
          )}
          <ul className="space-y ">
            <li className="flex gap-2 items-center py-2 border-r-2 border-transparent  hover:bg-violet-600/10 hover:border-violet-600 hover:text-violet-600 cursor-pointer  transition-all">
              <span className="flex flex-row  items-center pl-4  gap-2 min-w-13">
                <GoHome />
                {isOpen && (
                  <span className="text-sm font-medium whitespace-nowrap">
                    Início
                  </span>
                )}
              </span>
            </li>
            <li className="flex gap-2 items-center py-2 border-r-2 border-transparent hover:bg-violet-600/10 hover:border-violet-600 hover:text-violet-600 cursor-pointer   transition-all">
              <span className="flex flex-row  items-center pl-4  gap-2 min-w-13">
                <IoBookOutline />
                {isOpen && (
                  <span className="text-sm font-medium whitespace-nowrap">
                    Meus cursos
                  </span>
                )}
              </span>
            </li>
            <li className="flex gap-2 items-center py-2 border-r-2 border-transparent hover:bg-violet-600/10 hover:border-violet-600 hover:text-violet-600 cursor-pointer   transition-all">
              <span className="flex flex-row  items-center pl-4  gap-2 min-w-13">
                <RiMedalLine />
                {isOpen && (
                  <span className="text-sm font-medium whitespace-nowrap">
                    Certificado
                  </span>
                )}
              </span>
            </li>
          </ul>
          {isOpen && (
            <div className="pb-3 pt-3 overflow-hidden ">
              <span className="text-label font-bold pl-4  ">SUPORTE</span>
            </div>
          )}
          <li className="flex gap-2 items-center py-2 border-r-2 border-transparent hover:bg-violet-600/10 hover:border-violet-600 hover:text-violet-600 cursor-pointer   transition-all">
            <span className="flex flex-row  items-center pl-4  gap-2 min-w-13">
              <IoMdHelpCircleOutline />
              {isOpen && (
                <span className="text-sm font-medium whitespace-nowrap">
                  Central de Ajuda
                </span>
              )}
            </span>
          </li>
          <li className="flex gap-2 items-center py-2 border-r-2 border-transparent hover:bg-violet-600/10 hover:border-violet-600 hover:text-violet-600 cursor-pointer   transition-all">
            <span className="flex flex-row  items-center pl-4  gap-2 min-w-13">
              <IoSettingsOutline />
              {isOpen && (
                <span className="text-sm font-medium whitespace-nowrap">
                  Configurações
                </span>
              )}
            </span>
          </li>
        </nav>

        {isOpen && (
          <div>
            <Separator />
            <footer className="p-4 overflow-hidden">
              <div className="bg-white/5 p-4 rounded-2xl h-24">
                <span className="text-label font-bold leading-3.5">
                  PLANO DE APRENDIZADO
                </span>
                <progress
                  value={6}
                  max={10}
                  className="
                 h-1.5 w-full bg-gray-200 
    rounded-full overflow-hidden 
    appearance-none border-0 shadow-none progress-smooth
    [&::-webkit-progress-bar]:bg-gray-200 
    [&::-webkit-progress-bar]:rounded-full
    [&::-webkit-progress-value]:bg-linear-to-r 
    [&::-webkit-progress-value]:from-violet-600 
    [&::-webkit-progress-value]:to-violet-600
    [&::-webkit-progress-value]:rounded-full
    /* Firefox - COR SÓLIDA */
    [&::-moz-progress-bar]:bg-violet-600 
    [&::-moz-progress-bar]:rounded-full
    "
                />

                <span className="text-label font-normal">
                  24 de 30 dias concluídos
                </span>
              </div>
            </footer>
          </div>
        )}
      </div>
    </aside>
  );
}
