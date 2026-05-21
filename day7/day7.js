let hi=[
    {
        name:"bhanu",
        accountNumber:10001,
        balance:10000,
    },{
        name:"jhanu",
        accountNumber:20001,
        balance:2000,
    },{
        name:"thanu",
        accountNumber:30001,
        balance:30000,
    },{
        name:"phanu",
        accountNumber:40001,
        balance:40000,
    },{
        name:"ahanu",
        accountNumber:50001,
        balance:500,
    },{
        name:"ihanu",
        accountNumber:60001,
        balance:60000,
    },
];

let empt=[];
for (let i=0;i<hi.length;i++){
    if (hi[i].balance>10000)
        empt.push(hi[i]);
}
console.log("The list of the rich one is :",empt);

let rich=hi[0];
for (let i=0;i<hi.length;i++){
    if (hi[i].balance>rich.balance)
        rich=hi[i];
}

console.log("list of high no :",empt);
console.log(`The rich one is ${rich.name} and the amt is ${rich.balances}`);