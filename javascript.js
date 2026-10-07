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


/* Sample Data
----------------------------- */
// For Testing The Hobbit by J.R.R. Tolkien, 295 pages, not read yet
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, false);


/* Display Library Table
-------------------------- */
const tbody = document.querySelector("tbody");

for (let i = 0; i < myLibrary.length; i++) {
    let currentBook = myLibrary[i];
    console.log(currentBook);
    
    // Create a new table row
    const tr = document.createElement("tr");

    /* Book ID
    const row_id = document.createElement("td");
    row_id.textContent = currentBook.id;
    tr.appendChild(row_id);
    */


    // Book Title
    const row_title = document.createElement("td");
    row_title.textContent = currentBook.title;
    row_title.setAttribute("data-label", "title");
    tr.appendChild(row_title);
    

    // Book Author
    const row_author = document.createElement("td");
    const by = document.createElement("span");
    by.setAttribute("aria-hidden", true);
    by.textContent = "by ";
    row_author.appendChild(by);
    row_author.textContent += currentBook.author;
    row_author.setAttribute("data-label", "author");
    tr.appendChild(row_author);


    // Number of Pages
    const row_pages = document.createElement("td");
    row_pages.textContent = `${currentBook.pages} pages`;
    row_pages.setAttribute("data-label", "pages");
    tr.appendChild(row_pages);


    // Reading Status
    const row_status = document.createElement("td");
    row_status.setAttribute("data-label", "status");
    
        // Create a checkbox
        const switch_status =document.createElement("input");
        switch_status.setAttribute("type", "checkbox");

        const switch_status_id = `${currentBook.id}_status`;
        switch_status.setAttribute("id", switch_status_id);

        // Create a label
        const label_status = document.createElement("label");
        label_status.setAttribute("for", switch_status_id);
        label_status.textContent = "Already Read";

        if (currentBook.read) {
            switch_status.checked = true;
        } 


        
    // row_status.textContent = switch_status;
    row_status.appendChild(switch_status);
    row_status.appendChild(label_status);
    tr.appendChild(row_status);


    // Remove Button
    const row_remove = document.createElement("td");
    row_remove.setAttribute("data-label", "remove");

        // Create a button
        const btn_remove = document.createElement("button")
        
        btn_remove.type = "button"

        btn_remove.setAttribute("data-id", currentBook.id);
        
        btn_remove.textContent = `Remove ${currentBook.title} from my library.`

  
    row_remove.appendChild(btn_remove);
    tr.appendChild(row_remove);

    tbody.appendChild(tr);

}

/* Add a New Book Dialog
----------------------- */
