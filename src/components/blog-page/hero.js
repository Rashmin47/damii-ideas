import Image from "next/image";
import classes from "./hero.module.css";
export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.jpeg"
          alt="An image showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Rashmin</h1>
      <p>I am a developer and I love coding.</p>
    </section>
  );
}
