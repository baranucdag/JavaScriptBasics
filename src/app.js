// course assigments

//asigment 1 check if given numbers prime
function findPrime(...sayilar) {
  sayilar.forEach((element) => {
        if (element <= 1) return false;
        if (element === 2) return true;
        for (let i = 2; i < element; i++) {
          if (element % i === 0) {
            return false;
          }
        }
        console.log(element)
        return true;
  });
}

findPrime(1, 3, 5, 9, 12, 13,24,29);


//assigment 2 check if 2 numbers are friendly
function isFriendly(number1,number2){   
    if(findGcd(number1)==number2 && findGcd(number2)==number1){
        console.log("these numbers are friendly")
    }else console.log("these numbers are not friendly")
}

function findGcd(number){
    let totalgcd = 0;
    for(let i = 1;i<number;i++){
        if(number % i == 0){
            totalgcd = totalgcd + i;
        }
    }
    return totalgcd
}

isFriendly(220,284)
