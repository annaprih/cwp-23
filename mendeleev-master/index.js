/**
 * Created by annae on 16.02.2018.
 */
const mendeleev = require('mendeleev-stringify');
const fs = require('fs'),
    readline = require('readline');

const rd = readline.createInterface({
    input: fs.createReadStream('../elems.txt'),
    output: process.stdout,
    console: false
});

rd.on('line', function(line) {
    console.log(mendeleev(line));
});

