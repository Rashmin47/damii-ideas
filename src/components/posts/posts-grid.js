import PostItem from "./post-item";
import classes from "./posts-grid";

export default function PostsGrid(props) {
  const { posts } = props;
  if (!posts || posts.length === 0) {
    return <p>No posts found.</p>;
  }
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
