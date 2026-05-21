let hi=[
    {
        amounts:1000,
        types:"DEBIT",
        statusbar:"SUCCESS",
    },{
        amounts:2000,
        types:"CREDIT",
        statusbar:"SUCCESS",
    },{
        amounts:3000,
        types:"DEBIT",
        statusbar:"FAILED",
    },{
        amounts:4000,
        types:"CREDIT",
        statusbar:"SUCCESS",
    },{
        amounts:6000,
        types:"DEBIT",
        statusbar:"SUCCESS",
    },{
        amounts:9000,
        types:"CREDIT",
        statusbar:"SUCCESS",
    },
]

function filtering(arr){
    let success=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].statusbar==="SUCCESS")
            success.push(arr[i]);
    }
    let final_amt=0;
    for(let i=0;i<success.length;i++){
        if(success[i].types==="CREDIT"){
            final_amt=final_amt+success[i].amounts;
        }else if(success[i].types==="DEBIT"){
            final_amt=final_amt-success[i].amounts;
        }
    }
    return{
        temp_sucess: success,
        temp_reult:final_amt
    };
}

let result=filtering(hi);
console.log("your final result :",result);