import Link from "next/link";
import Logo from "./logo";
import classes from "./main-navigation.module.css";

export default function BlogNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/blog/posts">Posts</Link>
          </li>
          <li>
            <Link href="/blog/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
