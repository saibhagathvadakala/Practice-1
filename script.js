// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some detail");
//             resolve("success");

//         },4000);

//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some detail");
//             resolve("success");

//         },4000);

//     });
// }

// console.log("fetching detail")
// let p1=asyncFunc1();
// p1.then((res)=>{
//     console.log("fetching detail")
//     let p2=asyncFunc2();
//     p2.then((res)=>{

//     });
// });
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success");
            
        }, 5000);
    });
}
(async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);

})();

// async function hello(){
//     console.log("hello");
// }


   



