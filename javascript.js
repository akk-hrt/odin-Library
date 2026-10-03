const myLibrary = [];


function Book(title, author, pages, read, id){
    if (!new.target) {
        throw Error ("You must use the 'new' operator to call theconstructor");
    }
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        let reading_status = ''
        if (read) {
            reading_status = 'read'
        } else {
            reading_status = 'not read yet'
        }
        return `${this.title} by ${this.author}, ${this.pages} pages, ${reading_status}`
    }
}

function addBookToLibrary(title, author, pages, read){
    let id = crypto.randomUUID();
    let newItem = new Book(title, author, pages, read, id);

    myLibrary.push(newItem);
}

// For Testing The Hobbit by J.R.R. Tolkien, 295 pages, not read yet
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
// console.log(myLibrary[0].title);

const main = document.getElementById("main");


for (let i = 0; i < myLibrary.length; i++){
    let currentBook = myLibrary[i];
    console.log(currentBook.id);

    const card = document.createElement("div");
    card.setAttribute("class", "card");
    
    const h2 = document.createElement("h2");
    h2.setAttribute("class", "title");
    h2.textContent = currentBook.title;
    
    
    card.appendChild(h2);
    main.appendChild(card);
    
}
