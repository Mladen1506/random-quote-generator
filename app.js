const generate = () => {
  let quotes = {
    "- Albert Camus" : '"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."',

    "- Robert A. Heinlein" : '"I am free because I know that I alone am morally responsible for everything I do. I am free, no matter what rules surround me. If I find them tolerable, I tolerate them; if I find them too obnoxious, I break them. I am free because I know that I alone am morally responsible for everything I do."',

    "- Lewis B. Smedes" : '"To forgive is to set a prisoner free and discover that the prisoner was you."',

    "- Maya Angelou" : '"When someone shows you who they are, believe them the first time."',

    "- Bob Marley": '"One good thing about music, when it hits you, you feel no pain."'
  }
  let authors = Object.keys(quotes);
  // console.log(authors);

  let author = authors[Math.floor(Math.random() * authors.length)];

  let quote = quotes[author];

  document.getElementById('quote').innerHTML = quote;
  document.getElementById('author').innerHTML = author;
}