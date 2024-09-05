let inputString = "1,2,3"
let sum= 0

function sumOfString(input){
   let array = input.split(',')
   array.forEach(element => {
      console.log(Number(element))
      sum += Number(element)
      console.log(sum)
   });
   return sum
}

console.log(sumOfString(inputString))