import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
const DUMMY_POST = [
  {
    title: "Next Js",
    image: "nextjs.png",
    slug: "next-js",
    content:
      "# NextJs is the react framework for production. It makes building full stack apps easier",
    date: "2022-10-29",
  },
  {
    title: "Next Js",
    image: "nextjs.png",
    slug: "next-js2",
    excerpt:
      "# NextJs is the react framework for production. It makes building full stack apps easier",
    date: "2022-10-29",
  },
];

export default function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}
