import IdeaItem from "./idea-item";
import classes from "./ideas-grid.module.css";
export default function IdeasGrid({ ideas }) {
  return (
    <ul className={classes.ideas}>
      {ideas.map((idea) => (
        <li key={idea.id}>
          <IdeaItem {...idea} />
        </li>
      ))}
    </ul>
  );
}
