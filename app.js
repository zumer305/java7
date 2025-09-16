
// this.    means function ma uper waly var use krna
const student={
    name:"zumer",
    eng:10,
    math:10,
    physics:10,
    getavg()
    {
        let avg=(this.eng+this.math+this.physics)/3;
        console.log(avg);
        console.log(`${this.name} got avg of ${avg}`);
    }
}
student.getavg();




// this window object
function getavg(){
    console.log(this);
}
console.log(getavg());





console.log("hello");
console.log("hello");
console.log("hello");
// console.log(a); error
try{
console.log(a);
}
catch(err){
console.log("caught an error");
console.log(err);

}
console.log("hello2");
console.log("hello2");
console.log("hello2");




// arrow function
const add=(a,b) =>{
    console.log(a+b);
};
add(2,3);


const cube=(n) =>{
    console.log(n*n*n);
};
cube(2);


// best way to return
const power=(a,b)=>{
    return a**b;
};
console.log(power(2,2));


// without return
const mul= (a,b) =>(a*b);
console.log(mul(2,3));


// setTimeout function (1 time)
console.log("Hi there!");
// setTimeout(()=>{console.log("Apna college");},1000);  //bad me print ho ga
console.log("I am here");

// // setTimeout function (multiple time)
// console.log("Hi there!");
// setInterval(()=>{console.log("Apna college");},4000);  //bad me print ho ga bs yah multiple times
// console.log("I am here");



// function ka liya calling object hota------------- std. uska sab aya ga
const std={
    name:"zumer",
    age:12,
    roll:88,
    getname:function(){
        console.log(this);  //object scope
        console.log(this.name);

    },


};
std.getname();


//  arrow function ka liya calling object hota window
const std2={
    name:"zumer",
    age:12,
    roll:88,
    getname:()=>{
        console.log(this);  //parent scope
        console.log(this.name);

    },


};
std2.getname();



























