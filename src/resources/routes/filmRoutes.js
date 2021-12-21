const Router = require('express');

const router = new Router();

const { cacheMiddleware } = require('../../middlewares');
const { filmController } = require('../controllers');

router.get('/', filmController.getAllFilms);
router.get(
    '/:title',
    cacheMiddleware.isCached,
    filmController.getFilm,
);

module.exports = router;
