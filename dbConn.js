const Pool = require('pg').Pool

const pool = new Pool({
    user: 'aatfpvggamujgj',
    host: 'ec2-18-215-41-121.compute-1.amazonaws.com',
    database: 'd6sdrn4jo4jevn',
    password: '06680b4d47a42536b388a7ecb8f23c0d34b4b511ada61b1b43370a9eaf572d0f',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

//export default pool;
module.exports =  pool;