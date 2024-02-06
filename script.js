function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.haveRead;
    }
}


const bible = new Book("The Bible", "Jesus Christ", 123, true)