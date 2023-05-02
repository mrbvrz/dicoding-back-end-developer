const books = require('../books');

const getAllBooksHandler = (request, h) => {
    const { name, reading, finished } = request.query;

    if (name !== undefined) {
        const BooksName = books.filter((books) =>
            books.name.toLowerCase().includes(name.toLowerCase())
        );

        const response = h.response({
            status: 'success',
            data: {
                books: BooksName.map((books) => ({
                    id: books.id,
                    name: books.name,
                    publisher: books.publisher,
                })),
            },
        });

        response.code(200);
        return response;
    } else if (reading !== undefined) {
        const BooksReading = books.filter(
            (books) => Number(books.reading) === Number(reading)
        );

        const response = h.response({
            status: 'success',
            data: {
                books: BooksReading.map((books) => ({
                    id: books.id,
                    name: books.name,
                    publisher: books.publisher,
                })),
            },
        });

        response.code(200);
        return response;
    } else if (finished !== undefined) {
        const BooksFinished = books.filter(
            (books) => books.finished == finished
        );

        const response = h.response({
            status: 'success',
            data: {
                books: BooksFinished.map((books) => ({
                    id: books.id,
                    name: books.name,
                    publisher: books.publisher,
                })),
            },
        });

        response.code(200);
        return response;
    } else {
        const response = h.response({
            status: 'success',
            data: {
                books: books.map((books) => ({
                    id: books.id,
                    name: books.name,
                    publisher: books.publisher,
                })),
            },
        });

        response.code(200);
        return response;
    }
};

module.exports = getAllBooksHandler;
