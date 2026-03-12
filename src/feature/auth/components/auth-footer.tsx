import { Link } from "react-router";

export interface IFooterAuth {
  link: string;
  text: string;
  buttonText: string;
}

export default function FooterAuth({ link, text, buttonText }: IFooterAuth) {
  return (
    <footer className="mt-6 pt-6 border-t border-white/10 ">
      <p className="text-xs text-gray-400 text-center">
        {text}{" "}
        <Link
          to={link}
          className="text-violet-400 font-semibold hover:underline cursor-pointer"
        >
          {buttonText}
        </Link>
      </p>
    </footer>
  );
}
