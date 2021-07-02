const display = document.querySelector(".display");
const submitBtn = document.querySelector("#submit");

let myLibrary = [];

function Book(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
};

function addBook(){
    // create new book
    let author = document.querySelector("#author").value;
    let title = document.querySelector("#title").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read");

    let book = new Book(author, title, pages, read);

    // push book to array

    myLibrary.push(book);
};

