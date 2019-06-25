class Page:
    def __init__(self, data):
        self.data = data

class PageExporter:
    from enum import Enum

    class EXPORT_FORMAT(Enum):
        PLAIN_TEXT = 0,
        HTML = 1,
        XML = 2
    
    def __init__(self, format):
        self.format = format

        if self.format != self.EXPORT_FORMAT.PLAIN_TEXT:
            raise NotImplementedError("Export format " + str(format) + "  not supported yet.")

    def export(self, page):
        if self.format == self.EXPORT_FORMAT.PLAIN_TEXT:
            return page.data
            

class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
        self.currentPage = 0

    def nextPage(self):
        self.currentPage += 1
        if self.currentPage > len(self.pages) - 1:
            self.currentPage = 0
    
    def previousPage(self):
        self.currentPage -= 1
        if self.currentPage < 0:
            self.currentPage = len(self.pages) - 1
    
    def setPage(self, page):
        if page < 0:
            self.currentPage = 0
        elif page > len(self.pages) - 1:
            self.currentPage = len(self.pages) - 1
        else:
            self.currentPage = page

    def getCurrentPage(self):
        return self.pages[self.currentPage]

if __name__ == "__main__":
    book = Book(
        title = "Beauty and the Beast",
        author = "Walt Disney",
        pages = [
            Page("Beauty and the Beast by Walt Disney. Published a long time ago."),
            Page("NOW A MAJOR MOTION PICTURE!"),
            Page("Once upon a time was random person..")
        ]
    )
    exporter = PageExporter(PageExporter.EXPORT_FORMAT.PLAIN_TEXT)
    
    print("- BOOK START -")

    # I know I should be using the page variable but this is a test so eh
    for page in book.pages:
        print(exporter.export(book.getCurrentPage()))
        book.nextPage()
    
    print("- BOOK END -")