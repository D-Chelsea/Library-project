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
  const accId = account.id
  let total = 0
  books.forEach(book => book.borrows.forEach(borrow => accId === borrow.id && total++))
  return total
}


function getBooksPossessedByAccount(account, books, authors) {
  let books_taken = [];
  books.forEach(book=>{
     if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
      books_taken.push(book);
    }
  })
  books_taken.forEach(book=>{
    const anAuthor = authors.find(person => person.id === book.authorId);
    book['author'] = anAuthor;
  })
  return books_taken;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
