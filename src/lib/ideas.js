import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
const db = sql("ideas.db");
export default async function getIdeas() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM ideas").all();
}

export function getIdea(slug) {
  return db.prepare("SELECT * FROM ideas WHERE slug = ?").get(slug);
}

export async function saveIdea(idea) {
  idea.slug = slugify(idea.title, { lower: true });
  idea.instructions = xss(idea.instructions);

  const extension = idea.image.name.split(".").pop();
  const fileName = `${idea.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await idea.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });
  idea.image = `/images/${fileName}`;
  db.prepare(
    `
    INSERT INTO ideas
    (title,summary,instructions,creator,creator_email,image,slug)
    VALUES
    (  
         @title,
         @summary,
         @instructions,
          @creator,
         @creator_email,
         @image,
         @slug)
    `
  ).run(idea);
}
