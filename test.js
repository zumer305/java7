// q1


let arr=[1,2,3,4,5];
let avg=(arr)=>{
     let sum=0;
    for(let i=0;i<arr.length;i++){
   
    sum+=(arr[i]);
    }

    return sum/arr.length;
}
console.log(avg(arr));





let num=5;
let even=(num)=>{
   if(num%2==0) console.log("even");
   else console.log("not even");
}
even(num);