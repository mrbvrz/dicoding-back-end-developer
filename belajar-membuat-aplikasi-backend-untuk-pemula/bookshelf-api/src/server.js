const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const server = Hapi.server({
    port: process.env.PORT || 3000,
//     host: 'localhost',
    routes: {
        cors: {
            origin: ['*'],
        },
    },
});

server.route(routes);

const init = async () => {
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();

module.exports = server;
