let fs = require('fs');

let event= {
    _arr:[],
    on(fn){   
        console.log(this._arr)
        this._arr.push(fn);
    },
    emit(){
        this._arr.forEach(fn=>fn())
    }
}

let school={};
event.on(function(){
    console.log('读取一个');
});
event.on(function(){
    if(Object.keys(school).length ==1) {
        console.log(school)
    }
});

fs.readFile('./name.txt','utf8', function(err,data){
    school.name=data;
    event.emit();
})

fs.readFile('./age.txt','utf8', function(err,data){
    school.age=data;
    event.emit();
})