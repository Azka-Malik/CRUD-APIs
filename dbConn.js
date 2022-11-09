const Pool = require('pg').Pool

const pool = new Pool({
    user: 'mktomujkhttvlb',
    host: 'ec2-52-70-86-157.compute-1.amazonaws.com',
    database: 'd225dkjhtvvpqs',
    password: '44e83732dc143364f6a0a20a94df7ceb58a77653f6f3626682fbcac500525d8c',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

//export default pool;
module.exports =  pool;