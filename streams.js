const fs = require('fs');
 
const readText = fs.createReadStream('./docs/blogs3.txt', { encoding: 'utf-8'});
const writeText = fs.createWriteStream('./docs/blogs4.txt');

// readText.on('data',(chunk)=>{
//      console.log("-----NEW CHUNK-----");
//      console.log(chunk);
//      writeText.write('\n NEW CHUNK\n');
//      writeText.write(chunk)
// })

readText.pipe(writeText);