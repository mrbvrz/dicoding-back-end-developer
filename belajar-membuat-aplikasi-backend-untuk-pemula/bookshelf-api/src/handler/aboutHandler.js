const aboutHandler = (request, h) => {
    const response = h
        .response({
            course: 'Belajar Membuat Aplikasi Backend Untuk Pemula',
            vendor: 'Dicoding',
            path: 'Back-End Developer',
            link: 'https://www.dicoding.com/academies/261/corridor',
            appname: 'Bookself API',
            author: {
                name: 'Hasan Suryaman',
                email: 'hasan.suryaman@gmail.com',
                website: 'https://hasansuryaman.com',
            },
        })
        .code(200);
    return response;
};

module.exports = aboutHandler;
