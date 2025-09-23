import classes from "./idea-item.module.css";
import Image from "next/image";
import Link from "next/link";

export default function IdeaItem({ title, slug, image, summary, creator }) {
  return (
    <article className={classes.idea}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/ideas/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
