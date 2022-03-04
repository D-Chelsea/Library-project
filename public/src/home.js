function sliceHelper (item){
  return item.slice(0,5)
}

function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
 const booksCheckedOut = books.filter(
  (book) => book.borrows.filter((record) => record.returned === false).length > 0
 )
 return booksCheckedOut.length
}

function getMostCommonGenres(books) {
  const bookGenres = books.map((book) => book.genre)
  const temp = []
  //create a new array of the genres using the map function 
  bookGenres.map((genre) => {
    //for each genre, first check to see if genre already exists in array
    const genreLocation = temp.findIndex((element) => element.name === genre)
    //If the genre exits increase the count by 1
    if (genreLocation >= 0) {
      //if the count is less than or equal to 0, create a count for the genre
      temp[genreLocation].count = temp[genreLocation].count + 1
    } else {
      //creating the array with genre and count
      temp.push({ name: genre, count: 1 })
    }
  })
  //sorting it and cutting the array off at 5
   temp.sort((a, b) => b.count - a.count)
  if (temp.length > 5) {
    return sliceHelper(temp)
  }
  return temp
}

function getMostPopularBooks(books) {
 return books.map((book) => {
   return { name: book.title, count: book.borrows.length };
  }).sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1)).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
 let result = []
 authors.forEach((author) => {
  const theAuthor = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  }
  books.forEach((book) => {
   if (book.authorId === author.id) {
    theAuthor.count += book.borrows.length
   }
  })
  result.push(theAuthor)
 })
 return sliceHelper(result.sort((a, b) => b.count - a.count))
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
