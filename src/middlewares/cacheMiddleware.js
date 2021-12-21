const { memCacheService, redisCacheService } = require('../resources/services');

const CustomError = require('../errors/errorHandler');
const HttpStatusCode = require('../common/statusCodes');
const regex = require('../common/regex');

module.exports = {
    isCached: async (req, res, next) => {
        try {
            const { title } = req.params;

            const modTitle = title.replace(regex.REGEX_SE_WS, '');

            const filmFromMem = await memCacheService.getMemCache(modTitle);

            if (filmFromMem) {
                return res.status(HttpStatusCode.OK).json(filmFromMem);
            }

            const filmFromRedis = await redisCacheService.getRedisCache(modTitle);

            if (filmFromRedis) {
                return res.status(HttpStatusCode.OK).json(filmFromRedis);
            }

            next();
        } catch (error) {
            throw new CustomError(HttpStatusCode.BAD_REQUEST, error.details[0].message);
        }
    },
};
