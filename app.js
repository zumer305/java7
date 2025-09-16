
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








