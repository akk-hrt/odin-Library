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