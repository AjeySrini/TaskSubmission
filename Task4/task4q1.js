let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

let c=0;
let d=0;
for(let key in obj1){
    c++;
    if(obj1[key]==obj2[key]){
        d++;
    }
}
if(c==d){
console.log(true);
}else
console.log(false);