#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR(255),
    username VARCHAR(255),
    added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    INSERT INTO messages (text, username) 
    VALUES
    ('Hello, World!', 'Bryan'),
    ('The Odin Project', 'Odin');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://leduong_render:n5rvHMIzmAbFDAnlaYLw8ZH1s76xXhZv@dpg-d37sgpje5dus739l6pe0-a.singapore-postgres.render.com/message_ju5k?ssl=true",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
