const task= new XMLHttpRequest();
task.open('GET','https://restcountries.com/v3.1/all');
let flagspic=[];
task.onload= function(){
    let data=JSON.parse(task.responseText);
    for(let item of data){
       flagspic.push(item.flags.png);
       console.log(item.name.official);
       console.log(item.flag);
       console.log(item.region);       
       console.log(item.subregion);
       console.log(item.population);

    }
    // var imageContainer = document.getElementById("flag");
   
    // for (let i = 0; i < flagspic.length; i++) {
    //     const imageUrl = flagspic[i];
    //     const imgElement = document.createElement("img");
    //     imgElement.src = imageUrl;
    //     imageContainer.appendChild(imgElement);
    // }  



};

task.send();
