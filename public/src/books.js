function findAuthorById(authors, id) {
  const found = authors.find((author) => author.id === id)
  return found
}

function findBookById(books, id) {
  const found = books.find((book) => book.id === id)
  return found
}

function partitionBooksByBorrowedStatus(books) {
  let checkedOut = []
  let available = []
  for (let book in books){
    books[book].borrows[0]['returned'] ? available.push(books[book]) : checkedOut.push(books[book])
  }
  const combinedBooks = [checkedOut, available]
  return combinedBooks
}

function getBorrowersForBook(books, accounts) {
  let result = []
  const borrower = books.borrows.forEach( borrow => {
    const account = accounts.find(accnt => accnt.id === borrow.id)
    account['returned'] = borrow.returned
    result.push(account)
  })
  return result.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
