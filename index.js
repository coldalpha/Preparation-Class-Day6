function book(nameBook, quantity) {
    this.nameBook = nameBook;
    this.Quantity = quantity;
    this.purchased = function() {
        if (this.Quantity > 0) {
            console.log("Book " + nameBook + " can be purchased");
        } else {
            console.log("Book " + nameBook + " Can't be purchased");
        }
    };
}

let PercyJackson = new book("PercyJackson and The Sea Of Monster", 0);
let HarryPotter = new book("HarryPotter : The Order of The Phoenix", 10);