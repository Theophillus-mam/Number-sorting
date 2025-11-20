var numbers = [2,1,6,3,4,10,9,]

function ascendingNum(){
  
    for(let i=0; i< numbers.length; i++) {
      for(let j = 0 ; j < numbers.length-1-i; j++){  //console.log(i);
        if(numbers[j] > numbers[j+1]){

          
            let temp =numbers[j]
            numbers[j] = numbers[j+1];
            numbers[j+1] = temp;
           
    }
}
}
console.log(numbers)
document.getElementById('display').innerHTML = numbers;
}
