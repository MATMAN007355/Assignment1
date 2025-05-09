 for (let i = 3; i <= 100; i +=2){
    console.log(i);
}




let s = 3; 
while( s <= 100 ){
    console.log(s);
    s+=2
}
   


 for (let v = 1; v <= 100; v +=1){

    if(v % 3 == 0){
        console.log("fizz");

    }
    else if(v % 5 ==0){
        console.log('buzz')
    }
    else if(v % 3 & 5 == 0){
        console.log('fizzbuzz')
    }
    else(
        console.log(v)
    )
    
    

    
}
