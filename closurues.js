const functionOne = (data) =>{
    console.log("in 1st function : ",data);
    var data = 0;
      const functionTwo =(check) =>{
          if(check){
              console.log('this also has this data' , data);
              data === check;
          }
      }
      functionTwo(10)
      return data;
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