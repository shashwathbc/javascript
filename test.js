const functionOne = (data) =>{
    console.log("in 1st function : ",data);
      const functionTwo =(check) =>{
          if(check){
              console.log('this also has this data' , data);
          }
      }
      functionTwo(true)
  }
  functionOne('test')