//creating a calback function .find off accounts to variable find accounts
//return variable if account matches the id in the function argument
function findAccountById(accounts, id) {
  const findAccount = accounts.find((account)=> account.id === id)
  return findAccount
}

//using the callback funtion of sort, im sorting account1 and checking if the character value is greater than account2
function sortAccountsByLastName(accounts) {
  const findByLastName = accounts.sort((account1,account2) => account1.name.last > account2.name.last ? 1 : -1)
  return findByLastName
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((accumulator, book) => {
    return (accumulator + book.borrows.filter(borrow =>
        borrow.id === account.id).reduce((accumulatorBorrows, borrow) =>
      accumulatorBorrows + 1,0)
    )
  }, 0)
}


function getBooksPossessedByAccount(account, books, authors) {
  let booksTaken = []
  books.forEach(book=>{
     if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
      booksTaken.push(book)
    }
  })
  booksTaken.forEach(book=>{
    const anAuthor = authors.find(person => person.id === book.authorId)
    book['author'] = anAuthor
  })
  return booksTaken
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
