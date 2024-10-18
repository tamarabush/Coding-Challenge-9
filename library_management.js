//TASK 1 - Create a Book Class:

class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true;
    } //created book class with properties

getDetails() {
    return (`Title: ${this.title} Author: ${this.author} ISBN: ${this.ISBN}`);
    //returning the details of the code 
}
get isAvailable() {
    return this._isAvailable;
    //using the get method that returns true f its available 
}

set isAvailable(statusUpdate) {
    this._isAvailable = statusUpdate
    //using the set method to update the status of the book
}}



//TASK 2 - Create a Section Class:

class Section {
    constructor(name) {
        this.name = name;
        this.books = [];
    } //created section class with properties 

addBook(book) {
    this.books.push(book);
    //using the push method to push the book class into the empty array
}

getAvailableBooks() {
    return this.books.filter(book => book.isAvailable).length;
    //returns the total number of available books in the section
}


//TASK 5 - Create VIPPatron class with inheritance from Patron:
calculateTotalBooksAvailable() {
    return this.getAvailableBooks();
} // calculates the total number of books that are available 


listBooks() {
    return this.books.reduce((list, book) => {
        return list + (`${book.title} - ${book.isAvailable ? "Available" : "Borrowed"}\n`);
    }, "");
    //using the reduce method to list all books in the section, to show title and availability
  }   
}



//TASK 3 - Create a Patron Class:

class Patron {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    } //created class patron 

    borrowBook(book) {
        if (book.isAvailable) {
            book.isAvailable = false;
            this.borrowedBooks.push(book);
        //used an if statement to see if the book is available, pushed the books in the empty array
        }
        else {
            console.log(`${book.title} is not available at this time.`);
        //if book is not available it wil console log this message 
        }
    }

    returnBook (book) {
        const borrowedBook = this.borrowedBooks.find(boo => boo === book);
        if (borrowedBook) {
            book.isAvailable = true;
        this.borrowedBooks = this.borrowedBooks.filter(boo => boo !== book);
        //using in if statement, find, and filter method to see if the book is borrowed
        }
        else {
            console.log(`This book was not borrowed by ${this.name}.`);
        //is the book was not borrowed it will console this message
        }      
    }
}



//TASK 4 - Create a VIPPatron Class that Inherits from Patron:

class VIPPatron extends Patron {
    constructor (name) {
        super(name);
        this.priority = true;
    }
    //created class that inherits from the patron class

    borrowBook(book) {
        if (book.isAvailable) {
            super.borrowBook(book); 
        }
        //created an if statement check if the book  is available
        else {
            console.log(`${book.title} is currently not available, but VIP patrons have priority.`);
        //if not it will console log this message
        }
    }
}

  

  

  