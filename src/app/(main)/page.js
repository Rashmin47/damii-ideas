import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>
              This isn’t a marketplace of money, it’s a marketplace of minds.
            </h1>
            <p>
              It is a living ecosystem where ideas of any kind—tech, art, social
              change, business, lifestyle, education—are welcomed, nurtured, and
              transformed.
            </p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community </Link>
            <Link href="/ideas">Explore Ideas </Link>
            <Link href="/blog">Read Blogs </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            Dami Ideas is a collaborative hub where raw sparks of imagination
            are turned into reality. Whether it’s a breakthrough tech solution,
            a social initiative, a business concept, or a creative
            experiment—every idea has a home here.
          </p>
          <p>
            Share your idea, and the community will help shape it. From upvotes
            to pros and cons, to lived experiences and guidance—you gain
            insights that polish and strengthen your vision. Here, ideas don’t
            get judged and forgotten; they grow, evolve, and move closer to real
            impact.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Dami Ideas?</h2>
          <p>
            Because great ideas are everywhere, but they need the right
            environment to flourish. Dami Ideas is more than a platform—it’s a
            community of dreamers, doers, and problem-solvers who believe in
            collaboration over competition.
          </p>
          <p>
            This isn’t a low-budget Shark Tank. It’s a marketplace of minds—a
            global campfire of creativity—where your vision is challenged,
            refined, and elevated by people who genuinely want to see it
            succeed.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Our Mission</h2>
          <p>
            We believe that ideas, when nurtured collectively, can transform the
            world. That’s why our mission is simple yet powerful:
          </p>
          <p>
            <strong>Every idea matters.</strong>
            <br />
            <strong>Every voice counts.</strong>
            <br />
            <strong>
              Every problem can be solved—faster, better, smarter—together.
            </strong>
          </p>
        </section>
      </main>
    </>
  );
}
