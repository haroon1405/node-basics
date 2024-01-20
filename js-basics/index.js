console.log('Hello World');

let obj = {
    name: "Haroon",
    age: 18
};

console.log(`Hi ${obj.name}`);
console.log(`5 != 5 is ${5 != 5}`);
console.log(`${(5>9)?'Morning':'Night'}`);

for (let e of "Hello"){
    console.log(e);
}

for (let key in obj){
    console.log(`${key} : ${obj[key]}`)
}

let ages = [12,45,18,20];

ages.forEach((age)=>{
    console.log(age)
})
ages.splice(1,2,47,48)

console.log(ages)

let arr = [5,6,2,1,3];

let max = arr.reduce((prev,curr)=>{
    return ((curr>prev)?curr:prev)
})

console.log(max)

let prod = arr.reduce((prev,curr)=>{
    return prev*curr
})

console.log(prod)


class Human{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    alive(){
        constructor.log('Is alive')
    }
}


class Student extends Human{
    constructor(name,age,cgpa){
        super(name,age)
        this.cgpa = cgpa;
    }
    speak(){
        console.log('speak')
    }
    talk(){
        console.log('talk')
    }
}

let student1 = new Student('Haroon',18)


Callbacks
function getData(dataID,callback){
    setTimeout(()=>{
        console.log(`Data - ${dataID}`)
        if(callback){
            callback();
        }
    },2000)
}

getData(123,()=>{
    getData(456,()=>{
        getData(789)
    })
})

Promises
function getData(dataID){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(dataID)
        }, 2000);
    })
}

getData(123)
    .then((result) => {
    console.log(`Data - ${result}`)
    return getData(456) })
    .then((result) => {
    console.log(`Data - ${result}`) })
    .catch((err)=>{
        console.log(err)
    })

// Async Await
function getData(dataID){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(dataID)
        }, 2000);
    })
}

async function data(){
    let res1 = await getData(123);
    console.log(`Data - ${res1}`)
    let res2 = await getData(456);
    console.log(`Data - ${res2}`)
}
data()


APIS
async function getapi(){
    let result = await fetch('https://cat-fact.herokuapp.com/facts')
    let response = await result.json()
    console.log(response)
}
getapi()

fetch('https://cat-fact.herokuapp.com/facts')
.then((response)=>{
    return response.json()
})
.then((data)=>[
    console.log(data)
])


let divElmnt = document.querySelector('.inner-div');
let btn = document.querySelector('.button-js');

btn.addEventListener("click", () => {
    if (divElmnt.innerText == 'hello') {
        divElmnt.innerText = "Hello World";
        document.querySelector('.new-btn').remove()
    }
    else {
        divElmnt.innerText = "hello";
        let newElmnt = document.createElement('div');
        newElmnt.classList.add('new-btn', 'bg-green-500','w-fit','mx-auto', 'mt-2', 'text-white', 'p-2')
        newElmnt.innerText = 'Click on the button'
        btn.after(newElmnt)
    }
});