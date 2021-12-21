const app = require('./app');

const { PORT } = require('./common/config');

const start = async () => {
    try {
        app.listen(PORT, () => {
            process.stdout.write(`app is running on http://localhost:${PORT}/\n\n`);
        });
    } catch (err) {
        console.error(err);
    }
};

start().catch((err) => {
    console.error(err);
});
