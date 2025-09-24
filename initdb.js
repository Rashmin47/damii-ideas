const sql = require("better-sqlite3");
const db = sql("ideas.db");

const dummyIdeas = [
  {
    title: "Community Solar Sharing",
    slug: "community-solar-sharing",
    image: "/images/community-solar.png",
    summary:
      "A platform where households with solar panels can share excess energy with neighbors, reducing bills and promoting clean energy.",
    instructions: `
      1. Users register their households and solar capacity.
      2. Track energy generation and consumption in real time.
      3. Excess energy is allocated to nearby households in need.
      4. Implement a reputation and credit system for fairness.
    `,
    creator: "Anish Shrestha",
    creator_email: "anish@example.com",
  },
  {
    title: "Project Management Tool",
    slug: "project-management-tool",
    image: "/images/projectmanagementtool.png",
    summary:
      "A community where people trade skills—coding for guitar lessons, cooking for graphic design, and more—without money involved.",
    instructions: `
      1. Post a skill you can teach and a skill you want to learn.
      2. Match with like-minded learners in your area or online.
      3. Exchange knowledge through scheduled sessions.
      4. Build reputation through feedback after each exchange.
    `,
    creator: "Rashmin Sharma",
    creator_email: "rashmin@example.com",
  },
  {
    title: "Dami Ideas – The Platform Itself",
    slug: "dami-ideas-platform",
    image: "/images/damiideas.png",
    summary:
      "A collaborative platform to share, upvote, and refine ideas with guidance from like-minded people. Not just for tech—any idea is welcome.",
    instructions: `
      1. Post an idea with a summary and details.
      2. Community members upvote/downvote and add pros & cons.
      3. Reputation points reward valuable contributions.
      4. Ideas evolve into projects through shared experience.
    `,
    creator: "Dami Ideas Team",
    creator_email: "team@damiideas.com",
  },
  {
    title: "Neighborhood Compost Network",
    slug: "neighborhood-compost-network",
    image: "/images/dumplings.jpg",
    summary:
      "Connecting households to share compost bins, reducing food waste and creating free fertilizer for community gardens.",
    instructions: `
      1. Residents sign up to contribute biodegradable waste.
      2. Shared bins are placed at designated spots.
      3. Volunteers maintain bins and track compost quality.
      4. Finished compost is distributed to community gardens.
    `,
    creator: "Suman Karki",
    creator_email: "suman@example.com",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS ideas (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO ideas VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const idea of dummyIdeas) {
    stmt.run(idea);
  }
}

initData();
