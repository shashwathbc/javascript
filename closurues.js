const functionOne = (data) =>{
    console.log("in 1st function : ",data);
      const functionTwo =(check) =>{
          if(check){
              console.log('this also has this data' , data);
          }
      }
      functionTwo(true)
  }
  functionOne('test');


/*
function curryFunction(func) {
    return function curriedFunction(...args) {
        if (args.length >= func.length) {
            return func.call(this, ...args);
        }
        return function (..._args) {
            return curriedFunction.call(this, ...args, ..._args);
        }
    }
}

*/