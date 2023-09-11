import Link from "next/link";
import classes from "./main-header.module.css";
function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav classes={classes.navigation}>
        <ul>
          <div className={classes.logo}>
            <Link href="/events">All Events</Link>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
