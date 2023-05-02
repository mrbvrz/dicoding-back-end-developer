const aboutHandler = require('./handler/aboutHandler');
const addBooksHandler = require('./handler/addBooksHandler');
const deleteBooksHandler = require('./handler/deleteBooksHandler');
const editBooksHandler = require('./handler/editBooksHandler');
const getAllBooksHandler = require('./handler/getAllBooksHandler');
const getByIdBooksHandler = require('./handler/getByIdBooksHandler');

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: () => {
            return '<h1>Belajar Membuat Aplikasi Backend Untuk Pemula</h1>';
        },
    },
    {
        method: 'POST',
        path: '/books',
        handler: addBooksHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getByIdBooksHandler,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: editBooksHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBooksHandler,
    },
    {
        method: 'GET',
        path: '/about',
        handler: aboutHandler,
    },
];

module.exports = routes;
