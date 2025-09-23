import classes from "./page.module.css";
import Image from "next/image";
import { getIdea } from "@/lib/ideas";
import { notFound } from "next/navigation";
export default function IdeaDetailsPage({ params }) {
  const idea = getIdea(params.ideaSlug);

  if (!idea) {
    notFound();
  }
  idea.instructions = idea.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={idea.image} alt={idea.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{idea.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${idea.creator_email}`}>{idea.creator}</a>
          </p>
          <p className={classes.summary}>{idea.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: idea.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
