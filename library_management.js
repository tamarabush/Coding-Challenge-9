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

listBooks() {
    return this.books.reduce((list, book) => {
        return list + (`${book.title} - ${book.isAvailable ? "Available" : "Borrowed"}\n`);
    }, "");
    //using the reduce method to list all books in the section, to show title and availability
  }   
}