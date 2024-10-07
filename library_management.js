//TASK 1 - Create a Book Class:

class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = true;
    } //created book class

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
}
}