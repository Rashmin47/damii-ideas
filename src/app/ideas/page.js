import IdeasGrid from "@/components/ideas/ideas-grid";
import classes from "./page.module.css";
import Link from "next/link";
import getIdeas from "../../lib/ideas";
import { Suspense } from "react";
import IdeasLoadingPage from "./loading-out";

async function Ideas() {
  const ideas = await getIdeas();
  return <IdeasGrid ideas={ideas} />;
}

export default function IdeasPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Interesting Ideas, created{""}
          <span className={classes.highlight}> by you</span>
        </h1>
        <p>Every problem can be solved—faster, better, smarter—together.</p>
        <p className={classes.cta}>
          <Link href="/ideas/share">Share your favourite idea.</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={
            <>
              <main>
                <p className={classes.loading}> Fetching Ideas...</p>
                <div className={classes["shimmer-wrapper"]}>
                  <div className={classes["shimmer-placeholder"]}></div>
                  <div className={classes["shimmer-placeholder"]}></div>
                  <div className={classes["shimmer-placeholder"]}></div>
                </div>
              </main>
            </>
          }
        >
          <Ideas />
        </Suspense>
      </main>
    </>
  );
}
