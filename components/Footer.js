import Link from "next/link";

import { YEAR_TO_BUMP } from "../constants";

const Footer = ({ license, links, repo, commitID }) => (
  <footer className="flex py-4 text-center md:mt-10 mt-5">
    <div className="md:w-7/12 mx-auto font-semibold">
      <div className="md:text-sm mb-10">
        {links.map(({ url, label }) => (
          <Link
            key={url + label}
            href={url}
            className="md:mx-4 mb-1 md:inline block"
          >
            {label}
          </Link>
        ))}
        <Link href={repo} className="mx-4">
          Source Code
        </Link>
      </div>

      <div className="text-sm font-normal text-neutral-400">
        <p>
          &copy; {YEAR_TO_BUMP}{" "}
          <Link
            className="text-neutral-600"
            target="_blank"
            rel="noopener noreferer"
            href="https://github.com/faultables"
          >
            faultables
          </Link>{" "}
          • All media is licensed under{" "}
          <Link className="underline" href={license.url}>
            {license.name}
          </Link>{" "}
          unless stated otherwise •{" "}
          <Link
            className="text-neutral-600"
            target="_blank"
            rel="noopener noreferer"
            href={`${repo}/commit/${commitID}`}
          >
            {commitID}
          </Link>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
