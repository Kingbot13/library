const display = document.querySelector(".display");
const formContainer = document.querySelector(".container");
const newBookBtn = document.querySelector("#new-book");
const submitBtn = document.querySelector("#submit");
const nodes = document.querySelectorAll(".card");
const log = console.log;

let myLibrary = [];

function Book(author, title, pages, read, exists){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.exists = exists;
};

function addBook(){
    // create new book
    let author = document.querySelector("#author").value;
    let title = document.querySelector("#title").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read");
    let exists = false;

    let book = new Book(author, title, pages, read, exists);

    // push book to array

    myLibrary.push(book);
};

// loop through array and update display


function updateDisplay(){
    
    let i = 0; // used to set data attribute
    
    myLibrary.forEach((item) => {
        
        if (item.exists === false){ // prevent duplicates

            // create remove button
            let removeBtn = document.createElement("button");
            removeBtn.textContent = "Remove";
            removeBtn.classList.add("remove");

            // create div to hold components
            let card = document.createElement("div");
            card.classList.add("card");

            // set data attribute to card
            card.setAttribute("data-key", i);

            // create toggle read button
            let readBtn = document.createElement("button");
            readBtn.textContent = "Toggle Read";
            readBtn.classList.add("read-btn");

            // create text to append to card variable
            let author = document.createElement("p");
            let title = document.createElement("p");
            let pages = document.createElement("p");
            let isRead = document.createElement("p");
            
            author.textContent = item.author;
            title.textContent = item.title;
            pages.textContent = `Pages: ${item.pages}`;
            
            if (item.read.checked === true){
                isRead.textContent = "Read: Yes";
                
            } else {
                isRead.textContent = "Read: No";
            };
            
            let textArray = [author, title, pages, isRead, removeBtn, readBtn];
            
            // loop through text content and buttons to append to card
            textArray.forEach((text) => {
                card.appendChild(text);
            });
            
            display.appendChild(card);
            item.exists = true;
            i++
        };
    });
};

// Event listner for new book button

newBookBtn.addEventListener("click", () => {
    formContainer.classList.toggle("hidden");
});

// Event listener for remove button

document.addEventListener("click", (e) => {
    if (e.target.className.includes("remove")){
        log(e);
        log(e.target);
        log(e.path);
        let card = parseInt(e.path[1].dataset.key);
        myLibrary.splice(card, 1);
        log(card);
        display.removeChild(display.childNodes[card]);
    };
});

// function removeBtnLogic() {
//     let removeBtnList = document.querySelectorAll(".remove");

    
//     removeBtnList.forEach((btn) => {
//         btn.addEventListener("click", () => {
//             let card = parseInt(btn.parentNode.dataset.key);
//             myLibrary.splice(card, 1);
//             log(card);
//             display.removeChild(display.childNodes[card]);
//             // alert("button has been clicked");
//         });
//     });
// };

// Event listener for submit button

submitBtn.addEventListener("click", () => {
    addBook();
    updateDisplay();
    // removeBtnLogic();
    formContainer.classList.toggle("hidden");
});    



