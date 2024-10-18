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



//TASK 6 - Create and Manage Sections and Patrons:

//create sections
const fictionSection = new Section("Fiction");
const scienceSection = new Section("Science");

//create books
const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", "1234567890");
const book2 = new Book("Normal People", "Sally Rooney", "0987654321");
const book3 = new Book("A Brief History of Time", "Stephen Hawking", "1122334455");

//add books to sections
fictionSection.addBook(book1);
fictionSection.addBook(book2);
scienceSection.addBook(book3);

//create patrons
const patron1 = new Patron("Josie");
const vipPatron1 = new VIPPatron("Diana");

//patrons borrowing books
patron1.borrowBook(book1);
vipPatron1.borrowBook(book2);
vipPatron1.borrowBook(book3);

//patrons returning books
patron1.returnBook(book1);
vipPatron1.returnBook(book2);

//calculate total available books
console.log(`Total available books in Fiction section: ${fictionSection.calculateTotalBooksAvailable()}`);
console.log(`Total available books in Science section: ${scienceSection.calculateTotalBooksAvailable()}`);

//list books in sections
console.log("Books in Fiction Section:\n" + fictionSection.listBooks());
console.log("Books in Science Section:\n" + scienceSection.listBooks());



  

  