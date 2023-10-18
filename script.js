class Books {
    constructor(nameOfBook, authorName, year, price) {
        this.nameOfBook = nameOfBook;
        this.authorName = authorName;
        this.year = year;
        this.price = price;

    }

    ask_Price(discount) {
         this.price = this.price -(this.price/100) *discount
        return this.price;
    }
}
const myBook = new Books("An Artist", "Mikayil Müsfiq", "1920", 100)
myBook.ask_Price(20)
console.table(myBook);



