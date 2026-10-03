function Book (title, author, pages, read){
    if (!new.target) {
        throw Error ("You must use the 'new' operator to call theconstructor");
    }

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

// For Testing
let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());