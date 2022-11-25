import { FaGithub } from 'react-icons/fa';
import Logo from './logo';
import NextLink from 'next/link';

const AppBar: React.FC = () => {
  return (
    <nav className="not-prose w-full py-2 shadow-md dark:bg-slate-900 bg-slate-100">
      <div className="container flex items-center justify-between">
        <NextLink href="/" className="flex items-center">
          <Logo width={24} height={24} />
          <span className="border-l-stone-600 border-l-[1px] ml-2 h-6 pl-2 flex-grow leading-6 hover:underline">
            @ Adam Szwaba
          </span>
        </NextLink>
        <NextLink
          href="https://github.com/adamszwaba/portfolio"
          className="bg-slate-200 px-3 py-1 dark:bg-slate-700 dark:hover:bg-slate-600 hover:bg-slate-300 transition-colors duration-200 rounded-md leading-6 flex items-center gap-1"
        >
          <FaGithub width={24} height={24} />
          Source
        </NextLink>
      </div>
    </nav>
  );
};
export default AppBar;
