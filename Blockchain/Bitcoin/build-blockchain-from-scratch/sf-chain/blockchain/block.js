const ChainUtil = require('../chain-util');
const { DIFFICULTY, MINE_RATE } = require('../config');

// Build a block from scratch
// A block contains
// genesis          - create a genesis block
// mineBlock        - mine a new block
// blockHash        - create block hash from last block hash and current block data
// adjustDifficulty - adjust difficulty for each block
// toString         - optional, show what's in a block
class Block {
    constructor(timestamp, lastHash, hash, data, nonce, difficulty) {
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty || DIFFICULTY;
    }

    toString() {
        return `Block -
          Timestamp : ${this.timestamp}
          Last Hash : ${this.lastHash.substring(0, 10)}
          Hash      : ${this.hash.substring(0, 10)}
          Nonce     : ${this.nonce}
          Difficulty: ${this.difficulty}
          Data      : ${this.data}
        `
    }

    static genesis() {
        return new this('Genesis time', '-----', 'f1r57-h45h', [], 0, DIFFICULTY);
    }

    // a new block hashes from timestamp, lash block hash, current block hash
    // current block data, nonce, adjusted difficulty
    static mineBlock(lastBlock, data) {
        const lastHash = lastBlock.hash;

        let hash, timestamp;
        let nonce = 0;
        let { difficulty } = lastBlock;
        timestamp = Date.now();

        do {
            nonce++;
            timestamp = Date.now()
            difficulty = Block.adjustDifficulty(lastBlock, timestamp);
            // get new hash from timestamp, lash block hash, current block data
            // nonce, difficulty
            hash = Block.hash(timestamp, lastHash, data, nonce, difficulty);
        } while (hash.substring(0, difficulty) !== '0'.repeat(difficulty));

        return new this(timestamp, lastHash, hash, data, nonce, difficulty);
    }

    static hash(timestamp, lastHash, data, nonce, difficulty) {
        return ChainUtil.hash(`${timestamp}${lastHash}${data}${nonce}${difficulty}`).toString();
    }

    static blockHash(block) {
        const { timestamp, lastHash, data, nonce, difficulty } = block;
        return Block.hash(timestamp, lastHash, data, nonce, difficulty);
    }

    static adjustDifficulty(lastBlock, currentTime) {
        let { difficulty } = lastBlock;

        if (lastBlock.timestamp + MINE_RATE > currentTime) {
            difficulty++;
            // console.log('Too Easy!');
        } else if (lastBlock.timestamp + MINE_RATE < currentTime) {
            difficulty--;
            // console.log('Too Hard!');
        }

        // difficulty = lastBlock.timestamp + MINE_RATE > currentTime
        //             ? difficulty + 1
        //             : difficulty - 1;

        return difficulty;
    }
}

module.exports = Block;