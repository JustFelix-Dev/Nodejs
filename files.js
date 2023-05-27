const fs = require('fs');

// reading Files
fs.readFile('./docs/blogs.txt',( err,data )=>{
    if(err){
        console.log(err)
    }
    console.log(data.toString());
})

// writing Files
fs.writeFile('./docs/blogs.txt','OG Engineer', ()=>{
    console.log('File was written');
});
fs.writeFile('./docs/blogs2.txt', 'Felix is an astute Software Engineer',()=>{
    console.log('File Written');
})

// directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
       if(err){
        console.log(err);
       }
       console.log('Directory created');
    })
}else{
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('Directory deleted');
    })
}
// deleting files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('File Deleted!');
    })
};