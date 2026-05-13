

function processDailyBatch(input_arr,remaining_limt,remaining_limt){
        if(input_arr>current_balance && input_arr>=remaining_limt){
            console.log("insufficent balance or reached the daily transction limt. ");
        }else if(input_arr>remaining_limt){
            console.log("daily limit reached.");
        }else {
            current_balance=current_balance-input_arr;
            remaining_limt=remaining_limt-input_arr;
            console.log("You transcation is approved !")
        return current_balance;
        }
    }

const daily_limt=100000;
let remaining_limt=daily_limt,current_balance=10000;
let final_output=[];
let input_arr=[100,200,300,400,500,600,700,800,900];

for(let i=0;i<input_arr.length;i++){
    let output=processDailyBatch(input_arr[i],remaining_limt,remaining_limt);
    final_output.push(output);
}
for(let i = 0; i < input_arr.length; i++) {
    console.log("Balance after transaction " +(i + 1)+" is: "+ final_output[i]);
}

