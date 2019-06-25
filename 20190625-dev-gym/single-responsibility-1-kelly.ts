// class BookTs {
//   getTitle(): string {
//     return "Beauty and the Beast";
//   }

//   getAuthor(): string {
//     return "Walt Disney";
//   }

//   turnPage(): void {
//     // turns the page
//   }

//   printCurrentPage(): void {
//     // prints current page
//   }
// }

interface Book {
  title: string;
  author: string;
  pageNumber: number;
}

class BookInfo {
  book: Book;

  setTitle(): void {
    this.book.title = "Beauty and the Beast";
  }
  setAuthor(): void {
    this.book.author = "Walt Disney";
  }

  getTitle(): string {
    return this.book.title;
  }
  getAuthor(): string {
    return this.book.author;
  }
}

class BookReadingFunctions {
  book: Book;

  pageForward(): void {
    // page forward
    this.book.pageNumber += 1;
  }
  pageBackward(): void {
    // page backward
    this.book.pageNumber -= 1;
  }
}

class BookPrint {
  book: Book;

  printCurrentPage(): number {
    return this.book.pageNumber;
  }
}