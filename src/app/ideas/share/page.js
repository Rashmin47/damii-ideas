import ImagePicker from "@/components/ideas/image-picker";
import classes from "./page.module.css";

export default function ShareIdeaPage() {
  async function shareIdea(formData) {
    "use server";
    const idea = {};
  }
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite idea</span>
        </h1>
        <p>Or any other idea you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareIdea}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker />
          <p className={classes.actions}>
            <button type="submit">Share Idea</button>
          </p>
        </form>
      </main>
    </>
  );
}
