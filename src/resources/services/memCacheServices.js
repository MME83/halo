const NodeCache = require('node-cache');

const { EX_MEM_CACHE } = require('../../common/constants');

const myCache = new NodeCache();

module.exports = {
    getMemCache: (uniqueKey) => {
        if (myCache.has(uniqueKey)) {
            process.stdout.write(`\n the film: '${uniqueKey}' has been retrieved from memory`);

            return myCache.get(uniqueKey);
        }

        return null;
    },

    setMemCache: (uniqueKey, result) => {
        myCache.set(uniqueKey, result, [EX_MEM_CACHE]);

        process.stdout.write(`\n the film: '${uniqueKey}' has been cached in memory`);
    },
};
