const display = document.querySelector(".display");
const submitBtn = document.querySelector("#submit");
const log = console.log;

let myLibrary = [];

// manually create book and push to array for testing

const book1 = new Book("Bob", "Bob The Builder", "200", true);

myLibrary.push(book1);

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

log(myLibrary);

// loop through array and update display

function updateDisplay(){
    myLibrary.forEach((item) => {
        // create div to hold components
        let card = document.createElement("div");
        card.classList.add("card");
        // create text to append to card variable
        let author = document.createElement("p");
        let title = document.createElement("p");
        let pages = document.createElement("p");
        let isRead = document.createElement("p");

        author.textContent = item.author;
        title.textContent = item.title;
        pages.textContent = item.pages;
        isRead.textContent = item.isRead;
        
        let textArray = [author, title, pages, isRead];

        // loop through text content to append to card
        textArray.forEach((text) => {
            card.appendChild(text);
        });

        display.appendChild(card);
    });
};

updateDisplay();