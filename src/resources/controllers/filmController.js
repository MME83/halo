const db = require('../../db/db');

const { memCacheService, redisCacheService } = require('../services');

const HttpStatusCode = require('../../common/statusCodes');
const regex = require('../../common/regex');

module.exports = {
    getAllFilms: async (_req, res) => {
        await db.query('SELECT * FROM film ORDER BY film_id ASC', (error, results) => {
            if (error) {
                throw error;
            }

            res.status(HttpStatusCode.OK).json(results.rows);
        });
    },

    getFilm: async (req, res) => {
        const { title } = req.params;

        const modTitle = title.replace(regex.REGEX_SE_WS, '');

        const film = await db.query('SELECT * FROM film where title = $1', [modTitle]);

        if (!film.rows[0]) {
            return res.status(HttpStatusCode.NOT_FOUND).send('no film found');
        }

        memCacheService.setMemCache(modTitle, film.rows[0]);
        redisCacheService.setRedisCache(modTitle, film.rows[0]);

        return res.status(200).json(film.rows[0]);
    },
};
