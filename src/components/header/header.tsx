import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-100">
      <nav className="py-4">
        <div className="container lg:px-0 px-3 mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Logo
          </h1>
          <ul className="flex gap-4 items-center">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
