function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
 const booksCheckedOut = books.filter(
  (book) => book.borrows.filter((record) => record.returned === false).length > 0
 );
 return booksCheckedOut.length
}
//first map out teh genres and assign that to a variable'
//create an accumulator array
//map the genres again to see if teh genre is already in the array
// if the genre is in the array then the increase the count by one
//if it isnt create an object with the genre name and initital value of 1
//sort the object count value in order from greatest to least
//cut the list off at 5 objects.
function getMostCommonGenres(books) {
  const bookGenres = books.map((book) => book.genre)
  const bookObject = []
  bookGenres.map((genre) => {
    const genreLocation = bookObject.findIndex((element) => element.name === genre)
    if (genreLocation >= 0) {
      bookObject[genreLocation].count = bookObject[genreLocation].count + 1
    } else {
      bookObject.push({ name: genre, count: 1 })
    }
  })
  bookObject.sort((a, b) => b.count - a.count)
  if (bookObject.length > 5) {
    return bookObject.slice(0, 5)
  }
  return bookObject
}


function getMostPopularBooks(books) {
 return books.map((book) => {
   return { name: book.title, count: book.borrows.length };
  }).sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1)).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
 let result = [];
 authors.forEach((author) => {
  const theAuthor = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    theAuthor.count += book.borrows.length;
   }
  });
  result.push(theAuthor);
 });
 return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
