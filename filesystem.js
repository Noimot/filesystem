var http = require('http')
var fs = require('fs')


fs.mkdir('./result', {recursive: true}, (err) => {
    if (err) throw err;
})

http.get("http://jsonplaceholder.typicode.com/posts", function (res){
    var data = "";
    res.on('data', function (chunk) {
        data + chunk
    });
    res.on('end', () => {
        fs.writeFile('result/posts.json', data, (err) =>{
            if (err) throw err;
        })
    });
    console.log('file created successfully')
});
