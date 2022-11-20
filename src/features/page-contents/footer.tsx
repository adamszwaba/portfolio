import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin, FaMediumM } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-auto grid p-4 gap-4 grid-flow-col justify-center not-prose">
      <Link
        href="https://www.instagram.com/adamszwaba/"
        className="hover:text-teal-500 transition-colors ease-out delay-300"
      >
        <FaInstagram />
      </Link>
      <Link
        href="https://github.com/adamszwaba/"
        className="hover:text-teal-500 transition-colors ease-out delay-300"
      >
        <FaGithub />
      </Link>
      <Link
        href="https://medium.com/@szwaba.adam"
        className="hover:text-teal-500 transition-colors ease-out delay-300"
      >
        <FaMediumM />
      </Link>
      <Link
        href="https://www.linkedin.com/in/adam-szwaba/"
        className="hover:text-teal-500 transition-colors ease-out delay-300"
      >
        <FaLinkedin />
      </Link>
    </footer>
  );
};

export default Footer;
