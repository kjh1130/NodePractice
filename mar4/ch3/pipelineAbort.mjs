import {pipeline} from 'stream/promises';
import zlib from 'zlib';
import fs from 'fs';

const ac = new AbortController();
const signal = ac.signal;

setTimeout(() => ac.abort(), 1);
await pipeline(
    fs.createReadStream('./mar4/ch3/readme4.txt'),
    zlib.createGzip(),
    fs.createWriteStream('./mar4/ch3/readme4.txt.gz'),
    {signal},
);