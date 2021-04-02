var url="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/";
var container=document.querySelector(".container");
for(var i=1;i<=100;i++){
    var x=document.createElement("img");
    var y=url+i+".png?raw=true";
    console.log(y);
    x.setAttribute("src",y);
    x.classList.add("sprite");
    container.append(x);
    // https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/10001.png?raw=true
}
var add=document.querySelector("#add");
var remove=document.querySelector("#remove");
var l=100;
add.addEventListener("click",function(){
    var x=document.createElement("img");
    l++;
    var y=url+l+".png?raw=true";
    
    console.log(y);
    x.setAttribute("src",y);
    x.classList.add("sprite");
    container.append(x);
    
})
remove.addEventListener("click",function(){
    var x=document.querySelectorAll("img");
    var y=x[l-1];
    y.remove();
    l--;
    
})
