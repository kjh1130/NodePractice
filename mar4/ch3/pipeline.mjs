import {pipeline} from 'stream/promises';
import zlib from 'zlib';
import fs from 'fs';

await pipeline(
    fs.createReadStream('./mar4/ch3/readme4.txt'),
    zlib.createGzip(),
    fs.createWriteStream('./mar4/ch3/readme4.txt.gz'),
);