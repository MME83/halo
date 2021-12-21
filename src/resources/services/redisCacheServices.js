const Redis = require('ioredis');

const { EX_REDIS_CACHE } = require('../../common/constants');

const redis = new Redis();

module.exports = {
    getRedisCache: async (cacheKey) => {
        const film = await redis.get(cacheKey);

        if (!film) {
            return null;
        }

        process.stdout.write(`\n the film: '${cacheKey}' has been retrieved from Redis`);

        return JSON.parse(film);
    },

    setRedisCache: async (cacheKey, film) => {
        process.stdout.write(`\n the film: '${cacheKey}' has been cached in Redis`);

        await redis.set(cacheKey, JSON.stringify(film), 'ex', EX_REDIS_CACHE);
    },
};
