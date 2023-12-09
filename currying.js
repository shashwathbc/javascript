const currying = (a) =>{
   console.log('first' , a);
   return (b) =>{
    console.log('a+b' , a,b);
    return (c) =>{
        console.log('a+b+c' , a+b+c);
    }
   }
}

currying(6)(7)(8);

