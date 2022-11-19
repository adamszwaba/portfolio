import { FaGithub } from 'react-icons/fa';
import Logo from './Logo';
import NextLink from 'next/link';

const AppBar: React.FC = () => {
  return (
    <nav className="w-full py-4 shadow-md mb-1 dark:bg-black dark:bg-opacity-20">
      <div className="container flex items-center justify-between">
        <NextLink href="/" className="flex items-center">
          <Logo width={32} height={32} />
          <span className="border-l-stone-600 border-l-[1px] ml-3 h-7 pl-3 flex-grow hover:underline dark:invert">
            @Adam Szwaba
          </span>
        </NextLink>
        <NextLink
          href="https://github.com/adamszwaba/portfolio"
          className="flex gap-2 items-center bg-slate-200 px-2 py-1 hover:bg-slate-300 transition-colors duration-200 rounded-sm"
        >
          <FaGithub width={24} height={24} />
          Source
        </NextLink>
      </div>
    </nav>
  );
};
export default AppBar;
