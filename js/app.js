let f1=document.getElementById("btn")

function func(){
  f1.style.backgroundColor="green"
}

f1.addEventListener("click",func)

let f2=document.getElementById("rangevalue")
let f3=document.getElementById("volume")
let f4=document.getElementById("rect")
f2.value=5
f3.innerHTML=f2.value
f4.style.backgroundColor="red";

f4.style.width=100;

f2.addEventListener("input",()=>{
  f3.innerHTML=f2.value
  f4.style.width=(f2.value*20)+'px'
  if(f2.value>8){
    f4.style.backgroundColor="green";
  }
  if(f2.value<=8){
    f4.style.backgroundColor="red";
  }
})


function dfs(){
let uppercase="ABCDEFGHIJKLMNOPQRSTUV"
let lowercase="abcdefghijklmnopqrstuvwxyz"
let numbers="1234567890"
let symbols="!@#$%^&*"

const siz=document.getElementById("volume")
const ucase=document.getElementById("box1")
const lcase=document.getElementById("box2")
const symb=document.getElementById("box3")
const num=document.getElementById("box4")


let getrandomdata=(dataset)=>{
  return dataset[Math.floor(Math.random()*dataset.length)]
}

let arr=[]
let lnth=siz.innerHTML
console.log(lnth)
for(i=0;i<lnth;i++){
  if(ucase.checked){
    arr.push(getrandomdata(uppercase))
  }
  if(arr.length==lnth) break;
  if(lcase.checked){
    arr.push(getrandomdata(lowercase))
  }
  if(arr.length==lnth) break;
  if(symb.checked){
    arr.push(getrandomdata(symbols))
  }
  if(arr.length==lnth) break;
  if(num.checked){
    arr.push(getrandomdata(numbers))
  }
  if(arr.length==lnth) break;
}


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


shuffle(arr)
let final=""
for(i=0;i<arr.length;i++){
  final+=arr[i]
}
let f5=document.getElementById("test")
f5.value=final

}

let gnr8r=document.getElementById("btn");
gnr8r.addEventListener("click",dfs)


