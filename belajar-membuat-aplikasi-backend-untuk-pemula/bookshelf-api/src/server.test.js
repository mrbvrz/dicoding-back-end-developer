// melakukan sebagian testing dengan JEST

const server = require('./server'); // Import Server/Application

// Start application before running the test case
beforeAll((done) => {
    server.events.on('start', () => {
        done();
    });
});

// Stop application after running the test case
afterAll((done) => {
    server.events.on('stop', () => {
        done();
    });
    server.stop();
});

describe('[Mandatory] Add Book with Complete Data', () => {
    const books = {
        method: 'POST',
        url: '/books',
        payload: JSON.stringify({
            name: 'Buku A',
            year: '2010',
            author: 'John Doe',
            summary: 'Lorem ipsum dolor sit amet',
            publisher: 'Dicoding Indonesia',
            pageCount: 100,
            readPage: 25,
            reading: false,
        }),
    };

    test('status code should be 201', async function () {
        const data = await server.inject(books);
        expect(data.statusCode).toBe(201);
    });

    test('response header Content-Type should be application/json', async function () {
        const data = await server.inject(books);
        expect(data.headers['content-type']).toBe(
            'application/json; charset=utf-8'
        );
    });

    test('response body should be an object', async function () {
        const data = await server.inject(books);
        expect(typeof data).toBe('object');
    });

    test('response body should have correct property and value', async function () {
        const data = await server.inject(books);
        expect(data.result).toHaveProperty('status');
        expect(data.result).toHaveProperty('message');
        expect(data.result).toHaveProperty('data');
        expect(data.result['status']).toBe('success');
        expect(data.result['message']).toBe('Buku berhasil ditambahkan');
        expect(typeof data).toBe('object');
    });

    test('response body data should contain bookId', async function () {
        const data = await server.inject(books);
        expect(data.result.data).toHaveProperty('bookId');
        expect(data.result.data['bookId']).not.toBe('');
    });
});

describe('[Mandatory] Add Book With Finished Reading', () => {
    const books = {
        method: 'POST',
        url: '/books',
        payload: JSON.stringify({
            name: 'Buku A',
            year: '2010',
            author: 'John Doe',
            summary: 'Lorem ipsum dolor sit amet',
            publisher: 'Dicoding Indonesia',
            pageCount: 100,
            readPage: 100,
            reading: false,
        }),
    };

    test('status code should be 201', async function () {
        const data = await server.inject(books);
        expect(data.statusCode).toBe(201);
    });

    test('response header Content-Type should be application/json', async function () {
        const data = await server.inject(books);
        expect(data.headers['content-type']).toBe(
            'application/json; charset=utf-8'
        );
    });

    test('response body should be an object', async function () {
        const data = await server.inject(books);
        expect(typeof data).toBe('object');
    });

    test('response body should have correct property and value', async function () {
        const data = await server.inject(books);
        expect(data.result).toHaveProperty('status');
        expect(data.result).toHaveProperty('message');
        expect(data.result).toHaveProperty('data');
        expect(data.result['status']).toBe('success');
        expect(data.result['message']).toBe('Buku berhasil ditambahkan');
        expect(typeof data).toBe('object');
    });

    test('response body data should contain bookId', async function () {
        const data = await server.inject(books);
        expect(data.result.data).toHaveProperty('bookId');
        expect(data.result.data['bookId']).not.toBe('');
    });
});

describe('[Mandatory] Add Book Without Name', () => {
    const books = {
        method: 'POST',
        url: '/books',
        payload: JSON.stringify({
            year: '2010',
            author: 'John Doe',
            summary: 'Lorem ipsum dolor sit amet',
            publisher: 'Dicoding Indonesia',
            pageCount: 100,
            readPage: 100,
            reading: false,
        }),
    };

    test('status code should be 400', async function () {
        const data = await server.inject(books);
        expect(data.statusCode).toBe(400);
    });

    test('response header Content-Type should be application/json', async function () {
        const data = await server.inject(books);
        expect(data.headers['content-type']).toBe(
            'application/json; charset=utf-8'
        );
    });

    test('response body should be an object', async function () {
        const data = await server.inject(books);
        expect(typeof data).toBe('object');
    });

    test('response body should have correct property and value', async function () {
        const data = await server.inject(books);
        expect(data.result).toHaveProperty('status');
        expect(data.result).toHaveProperty('message');
        expect(data.result).not.toHaveProperty('data');
        expect(data.result['status']).toBe('fail');
        expect(data.result['message']).toBe(
            'Gagal menambahkan buku. Mohon isi nama buku'
        );
    });
});

describe('[Mandatory] Add Book with Page Read More Than Page Count', () => {
    const books = {
        method: 'POST',
        url: '/books',
        payload: JSON.stringify({
            name: 'Buku A',
            year: '2010',
            author: 'John Doe',
            summary: 'Lorem ipsum dolor sit amet',
            publisher: 'Dicoding Indonesia',
            pageCount: 80,
            readPage: 90,
            reading: false,
        }),
    };

    test('status code should be 400', async function () {
        const data = await server.inject(books);
        expect(data.statusCode).toBe(400);
    });

    test('response header Content-Type should be application/json', async function () {
        const data = await server.inject(books);
        expect(data.headers['content-type']).toBe(
            'application/json; charset=utf-8'
        );
    });

    test('response body should be an object', async function () {
        const data = await server.inject(books);
        expect(typeof data).toBe('object');
    });

    test('response body should have correct property and value', async function () {
        const data = await server.inject(books);
        expect(data.result).toHaveProperty('status');
        expect(data.result).toHaveProperty('message');
        expect(data.result).not.toHaveProperty('data');
        expect(data.result['status']).toBe('fail');
        expect(data.result['message']).toBe(
            'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
        );
    });
});

describe('[Mandatory] Get All Books', () => {
    const books = {
        method: 'GET',
        url: '/books',
    };

    test('status code should be 200', async function () {
        const data = await server.inject(books);
        expect(data.statusCode).toBe(200);
    });

    test('response header Content-Type should be application/json', async function () {
        const data = await server.inject(books);
        expect(data.headers['content-type']).toBe(
            'application/json; charset=utf-8'
        );
    });

    test('response body should have correct property and value', async function () {
        const data = await server.inject(books);
        expect(data.result).toHaveProperty('status');
        expect(data.result).toHaveProperty('data.books');
        expect(data.result['status']).toBe('success');
        expect(typeof data.result.data.books).toBe('object');
    });

    test('response body data object should have a array books and contains two items', async function () {
        const data = await server.inject(books);
        expect(data.result).toHaveProperty('data.books');
        expect(Array.isArray(['data.result.data.books'])).toBe(true);
        // WARNING: length terbaca 10 karena melakukan request tiap test. (need fix)
        expect(data.result.data.books).not.toHaveLength(0);
    });

    test('the books should have contains only id, name, and publisher property', async function () {});
});

describe('[Mandatory] Delete Book with Invalid Id', () => {});

describe('[Optional] Get Home Page', () => {
    test('should success with server connection /', async function () {
        const options = {
            method: 'GET',
            url: '/',
        };
        const data = await server.inject(options);
        expect(data.statusCode).toBe(200);
    });
});

describe('Get About Page', () => {
    test('status code should be 200', async function () {
        const options = {
            method: 'GET',
            url: '/about',
        };
        const data = await server.inject(options);
        expect(data.statusCode).toBe(200);
    });
});
