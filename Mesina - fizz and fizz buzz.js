for ( var CM = 1; CM < 100; CM ++ ) {
  
    var checkForThree = CM % 3;
    var checkForFive = CM % 5;
  
    if ( (checkForThree == 0) && (checkForFive == 0) ) 
        console.log( "FizzBuzz");
    
  
    else if (checkForThree == 0)
      console.log( "Fizz");
    
    
    else if (checkForFive == 0)
      console.log( "Buzz");
    
   
    else
      console.log( CM );
  } 