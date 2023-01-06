module.exports = function toReadable (number) {
   const numberToString = String(number).split('');
    let result = '';
     const firstSymbol = numberToString[0];
     const secondSymbol = numberToString[1];
     const thirdSymbol = numberToString[2];

     if (numberToString.length === 1 ){
        
        result = (firstSymbol === '0') ? 'zero' :
        (firstSymbol === '1') ? 'one' :
        (firstSymbol === '2') ? 'two' :
        (firstSymbol === '3') ? 'three' :
        (firstSymbol === '4') ? 'four' :
        (firstSymbol === '5') ? 'five':
        (firstSymbol === '6') ? 'six' :
        (firstSymbol === '7') ? 'seven':
        (firstSymbol === '8') ? 'eight':
        (firstSymbol === '9') ? 'nine':
        false;

        return result;
     }

     if (numberToString.length === 2 && numberToString[1] === '0'){
        result = (firstSymbol === '1') ? 'ten' :
        (firstSymbol === '2') ? 'twenty' :
        (firstSymbol === '3') ? 'thirty' :
        (firstSymbol === '4') ? 'forty' :
        (firstSymbol === '5') ? 'fifty':
        (firstSymbol === '6') ? 'sixty' :
        (firstSymbol === '7') ? 'seventy':
        (firstSymbol === '8') ? 'eighty':
        (firstSymbol === '9') ? 'ninety':
        false;

        return result;
    }

     if (numberToString.length === 2 &&  numberToString[0] === '1'){
        let result= (secondSymbol === '1') ? 'eleven' :
        (secondSymbol === '2') ? 'twelve' :
        (secondSymbol === '3') ? 'thirteen' :
        (secondSymbol === '4') ? 'fourteen' :
        (secondSymbol === '5') ? 'fifteen':
        (secondSymbol === '6') ? 'sixteen' :
        (secondSymbol === '7') ? 'seventeen':
        (secondSymbol === '8') ? 'eighteen':
        (secondSymbol === '9') ? 'nineteen':
        false;

        return result;
     }


     if (numberToString.length === 2){
        let firstPart = (firstSymbol === '2') ? 'twenty' :
        (firstSymbol === '3') ? 'thirty' :
        (firstSymbol === '4') ? 'forty' :
        (firstSymbol === '5') ? 'fifty':
        (firstSymbol === '6') ? 'sixty' :
        (firstSymbol === '7') ? 'seventy':
        (firstSymbol === '8') ? 'eighty':
        (firstSymbol === '9') ? 'ninety':
        false;

        let secondPart = (secondSymbol === '1') ? 'one' :
        (secondSymbol === '2') ? 'two' :
        (secondSymbol === '3') ? 'three' :
        (secondSymbol === '4') ? 'four' :
        (secondSymbol === '5') ? 'five':
        (secondSymbol === '6') ? 'six' :
        (secondSymbol === '7') ? 'seven':
        (secondSymbol === '8') ? 'eight':
        (secondSymbol === '9') ? 'nine':
        false;

        return result = firstPart + ' ' + secondPart;
    }

     if (numberToString.length === 3 && numberToString[1] === '0' && numberToString[2] === '0'){
         let firstPart = (firstSymbol === '1') ? 'one' :
        (firstSymbol === '2') ? 'two' :
        (firstSymbol === '3') ? 'three' :
        (firstSymbol === '4') ? 'four' :
        (firstSymbol === '5') ? 'five':
        (firstSymbol === '6') ? 'six' :
        (firstSymbol === '7') ? 'seven':
        (firstSymbol === '8') ? 'eight':
        (firstSymbol === '9') ? 'nine':
        false;

        return result = firstPart + ' ' + 'hundred'; 
     }

      if (numberToString.length === 3 && numberToString[1] === '0'){
         let firstPart = (firstSymbol === '1') ? 'one' :
        (firstSymbol === '2') ? 'two' :
        (firstSymbol === '3') ? 'three' :
        (firstSymbol === '4') ? 'four' :
        (firstSymbol === '5') ? 'five':
        (firstSymbol === '6') ? 'six' :
        (firstSymbol === '7') ? 'seven':
        (firstSymbol === '8') ? 'eight':
        (firstSymbol === '9') ? 'nine':
        false;

        let secondPart = (thirdSymbol === '1') ? 'one' :
        (thirdSymbol === '2') ? 'two' :
        (thirdSymbol === '3') ? 'three' :
        (thirdSymbol === '4') ? 'four' :
        (thirdSymbol === '5') ? 'five':
        (thirdSymbol === '6') ? 'six' :
        (thirdSymbol === '7') ? 'seven':
        (thirdSymbol === '8') ? 'eight':
        (thirdSymbol === '9') ? 'nine':
        false;

        return result = firstPart + ' ' + 'hundred' + ' ' + secondPart; 
     }

     if (numberToString.length === 3 && numberToString[1] === '1'){
        let firstPart = (firstSymbol === '1') ? 'one' :
        (firstSymbol === '2') ? 'two' :
        (firstSymbol === '3') ? 'three' :
        (firstSymbol === '4') ? 'four' :
        (firstSymbol === '5') ? 'five':
        (firstSymbol === '6') ? 'six' :
        (firstSymbol === '7') ? 'seven':
        (firstSymbol === '8') ? 'eight':
        (firstSymbol === '9') ? 'nine':
        false;

        let secondPart= (thirdSymbol === '0') ? 'ten' :
        (thirdSymbol === '1') ? 'eleven' :
        (thirdSymbol === '2') ? 'twelve' :
        (thirdSymbol === '3') ? 'thirteen' :
        (thirdSymbol === '4') ? 'fourteen' :
        (thirdSymbol === '5') ? 'fifteen':
        (thirdSymbol === '6') ? 'sixteen' :
        (thirdSymbol === '7') ? 'seventeen':
        (thirdSymbol === '8') ? 'eighteen':
        (thirdSymbol === '9') ? 'nineteen':
        false;

        return result = firstPart + ' ' + 'hundred' + ' ' + secondPart; 
     }

      if (numberToString.length === 3 && numberToString[2] === '0'){
        let firstPart = (firstSymbol === '1') ? 'one' :
        (firstSymbol === '2') ? 'two' :
        (firstSymbol === '3') ? 'three' :
        (firstSymbol === '4') ? 'four' :
        (firstSymbol === '5') ? 'five':
        (firstSymbol === '6') ? 'six' :
        (firstSymbol === '7') ? 'seven':
        (firstSymbol === '8') ? 'eight':
        (firstSymbol === '9') ? 'nine':
        false;

        let secondPart= (secondSymbol === '2') ? 'twenty' :
        (secondSymbol === '3') ? 'thirty' :
        (secondSymbol === '4') ? 'forty' :
        (secondSymbol === '5') ? 'fifty':
        (secondSymbol === '6') ? 'sixty' :
        (secondSymbol === '7') ? 'seventy':
        (secondSymbol === '8') ? 'eighty':
        (secondSymbol === '9') ? 'ninety':
        false;

        return result = firstPart + ' ' + 'hundred' + ' ' + secondPart; 
     }


     if (numberToString.length === 3){
        let firstPart = (firstSymbol === '1') ? 'one' :
        (firstSymbol === '2') ? 'two' :
        (firstSymbol === '3') ? 'three' :
        (firstSymbol === '4') ? 'four' :
        (firstSymbol === '5') ? 'five':
        (firstSymbol === '6') ? 'six' :
        (firstSymbol === '7') ? 'seven':
        (firstSymbol === '8') ? 'eight':
        (firstSymbol === '9') ? 'nine':
        false;

        let secondPart = (secondSymbol === '2') ? 'twenty' :
        (secondSymbol === '3') ? 'thirty' :
        (secondSymbol === '4') ? 'forty' :
        (secondSymbol === '5') ? 'fifty':
        (secondSymbol === '6') ? 'sixty' :
        (secondSymbol === '7') ? 'seventy':
        (secondSymbol === '8') ? 'eighty':
        (secondSymbol=== '9') ? 'ninety':
        false;

         let thirdPart = (thirdSymbol === '1') ? 'one' :
        (thirdSymbol === '2') ? 'two' :
        (thirdSymbol === '3') ? 'three' :
        (thirdSymbol === '4') ? 'four' :
        (thirdSymbol === '5') ? 'five':
        (thirdSymbol === '6') ? 'six' :
        (thirdSymbol === '7') ? 'seven':
        (thirdSymbol === '8') ? 'eight':
        (thirdSymbol === '9') ? 'nine':
        false;

        return result = firstPart + ' ' + 'hundred' + ' ' + secondPart + ' ' + thirdPart; 
      }
   

   return result;
}



