import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 w-full py-8 sm:py-12 text-white bottom-0 fixed">
      <div className="sm:flex sm:flex-wrap md:py-4">
        <div className="px-8 w-full">
          <h5 className="text-xl font-bold mb-6">George Karagiannis</h5>
          <ul className="list-none footer-links">
            <li className="mb-2">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/georgekara13"
                className="text-gray-600 border-b border-solid border-transparent no-underline hover:text-gray-200 hover:text-underline"
              >
                Github
              </a>
            </li>
            <li className="mb-2">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://linkedin.com/in/george-karagiannis-790aba149"
                className="text-gray-600 border-b border-solid border-transparent no-underline hover:text-gray-200 hover:text-underline"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
