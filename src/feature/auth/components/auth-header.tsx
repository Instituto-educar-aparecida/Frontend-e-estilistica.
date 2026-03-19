import { FaGraduationCap } from "react-icons/fa";

interface IHeader {
  subtitle?: string;
}

export default function HeaderAuth({ subtitle }: IHeader) {
  return (
    <header className="flex flex-col items-center mb-8">
      <div className="w-12 h-12 bg-linear-to-br from-violet-400 to-violet-500 rounded-xl flex items-center justify-center shadow-xl shadow-violet-900/30 mb-4">
        <FaGraduationCap className="text-white text-2xl" />
      </div>
      <div className="text-center">
        <h1 className="text-xl font-bold tracking-tight text-white uppercase">
          INSTITUTO{" "}
          <span className="bg-linear-to-br from-violet-400 to-violet-500 bg-clip-text text-transparent font-bold">
            EDUCAR
          </span>
        </h1>
        <p className="text-gray-400 text-xs mt-1 font-medium">{subtitle}</p>
      </div>
    </header>
  );
}
