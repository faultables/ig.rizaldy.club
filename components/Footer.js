import Link from "next/link";

import { YEAR_TO_BUMP } from "../constants";

const Footer = ({ license, links, repo, commitID }) => (
  <footer className="flex items-center justify-between flex-wrap py-4 text-center mt-10">
    <div className="w-10/12 md:w-7/12 mx-auto font-semibold">
      <div className="text-sm mb-10">
        {links.map(({ url, label }) => (
          <Link key={url + label} href={url} className="mx-4">
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
