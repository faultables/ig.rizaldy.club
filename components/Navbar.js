import Link from "next/link";

const Navbar = ({ name, logo }) => (
  <nav className="flex py-2 border-b">
    <div className="w-3/12 md:w-7/12 md:mx-auto">
      <div className="md:w-2/12">
        <Link href="/">
          {logo ? (
            <img alt={name} src={logo} className="w-full" />
          ) : (
            <h1 className="font-bold leading-relaxed tracking-tight text-2xl text-neutral-800">
              {name}
            </h1>
          )}
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;