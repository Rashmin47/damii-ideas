import sql from "better-sqlite3";
const db = sql("ideas.db");
export default async function getIdeas() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM ideas").all();
}

export function getIdea(slug) {
  return db.prepare("SELECT * FROM ideas WHERE slug = ?").get(slug);
}
