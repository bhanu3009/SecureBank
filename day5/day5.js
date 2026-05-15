const customerProfile={
    name:"bhanu",
    balance :50000,
    dailyLimit: 20000,
}

let arr=[
    {
    amount:100001,
    type : "CREDIT",
},{
    amount:13001,
    type : "DEBIT",
},{
    amount:200001,
    type : "CREDIT",
},
]

function processAccountBatch(customerProfile,arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i].type==="CREDIT"){
            customerProfile.balance=customerProfile.balance+arr[i].amount;
        }else if(arr[i].type==="DEBIT" && arr[i].amount<=customerProfile.balance && arr[i].amount<=customerProfile.dailyLimit) {
            customerProfile.balance = customerProfile.balance - arr[i].amount;
            customerProfile.dailyLimit = customerProfile.dailyLimit - arr[i].amount;
        }
    }
    return customerProfile;
}
let result;
result=processAccountBatch(customerProfile,arr);
console.log("Your final ans :",result);

