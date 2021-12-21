const express = require('express');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');

const { filmRoutes } = require('./resources/routes');

const handleErrors = require('./middlewares/globalHandleErrors');

const { swaggerJson } = require('../docs');

const app = express();

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.send('Welcome to mme83 simple app!');
        return;
    }

    next();
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(
    swaggerJson,
    {
        explorer: true,
        swaggerOptions: {
            displayRequestDuration: true,
            docExpansion: 'none',
            filter: false,
            showExtensions: true,
            showCommonExtensions: true,
            displayOperationId: true,
        },
    },
));
app.use('/film', filmRoutes);
app.use(handleErrors);

module.exports = app;
