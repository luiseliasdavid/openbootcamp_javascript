

const factorialFor = (num)=>{
let resultado=1
for (let i=1 ;i<=10;i++){
    resultado= resultado*i

}
return resultado
}
console.log(factorialFor(10))

const factorialWhile = (num)=>{
   let resultado=1
   let i=1
   while(i<= num){
    resultado=resultado*i
    i++;
   }
   return resultado
}
console.log(factorialWhile(10))

const factorialBreack=(num)=>{
    let resultado=1
    let i=1   
while(true){
    resultado=resultado*i
    i++;
    if(i>10) break
}
return resultado
}
console.log(factorialBreack(10))