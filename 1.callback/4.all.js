let fs = require('fs');

function after(time, fn) {
    let school = {};
    return function(name,data) {
        school[name]=data;
        if(--time === 0){
            fn(school)
        }
    }
}

let out= after(2, function(result){
    console.log(result)
})

fs.readFile('./name.txt','utf8', function(err,data){
    console.log(data);
    out('name',data);
})

fs.readFile('./age.txt','utf8', function(err,data){
    console.log(data);
    out('age',data);
})