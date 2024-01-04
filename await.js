const q = [1,2,4,22,2,56];    // largest : 56   secondLargest : 22   q.length == 5


const l = q[0];   //1
const sl = q[1];  //2


for(let i=0;i<q.length;i++){
    if(q[i] > l){
       l = q[i];
       sl = l;
    }
    else if (q[i] > sl && q[i] < l) {
      sl = q[1];
    }
}

console.log('ddddddddddddddddd' , l , sl)
