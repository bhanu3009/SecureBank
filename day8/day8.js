let databaseProfile={
    customerId:1001, 
    name:"bhanu", 
    email:"Bhanuprakasht588@gmail.com",
    phone:58493058,
    }

let formSubmission={
    email:"janu@gmail.com",
    phone:7897878,
}
function updateCustomerProfile(op1,op2){
    let fin={
        ...databaseProfile,
        ...formSubmission,
    }
    return fin;
}
let result=updateCustomerProfile(databaseProfile,formSubmission)
console.log("final list :",result);