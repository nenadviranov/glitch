const { readFile, writeFile } = require('../utilis');
const uuid = require('uuid');

module.exports = async (req, res) => {
  const authors = await readFile('authors.json');

  const { name, avatar, email, username, website, bio } = req.body;

  if (!name || name.length < 3) {
    throw new Error('Invalid name');
  }

  if (!avatar) {
    throw new Error('Author avatar is required');
  }

  if (!email || email.length < 6) {
    throw new Error('Invalid Author email');
  }

  if (!website || website.length < 6) {
    throw new Error('Invalid Author website');
  }

  if (!bio || bio.length < 20) {
    throw new Error('Bio requiered');
  }

  const author = {
    id: uuid.v4(),
    name,
    avatar,
    email,
    username,
    website,
    bio
  };

  await writeFile('authors.json', [...authors, author]);

  res.json({ MSG: 'author added', author });
};
