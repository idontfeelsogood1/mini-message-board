const db = require('./pool')

async function getAllMessages() {
  const { rows } = await db.query('SELECT username, text, added FROM messages')
  return rows
}

async function addNewMessage(username, text) {
  await db.query('INSERT INTO messages (username, text) VALUES ($1, $2)', [username, text])
  console.log('Added message')
}

module.exports = {
  getAllMessages,
  addNewMessage
}

