const { readFile, writeFile } = require('../utilis');

module.exports = async (req, res) => {
  const authors = await readFile('authors.json');

  const { authorId } = req.params;
  const author = authors.find(({ id }) => id === authorId);

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

  const authorUpdated = {
    id: authorId,
    name,
    avatar,
    email,
    username,
    website,
    bio
  };

  const updatedAuhors = authors.map(author =>
    author.id === authorUpdated.id ? authorUpdated : author
  );

  await writeFile('authors.json', updatedAuhors);

  res.json({ MSG: 'author updated', authorUpdated });
};