// console.log("hi madam !")

// let name="bhanu";

// const namj="you cant change this";

// const bank_name="SecureBank";
// let Coustumer_name="bhanu prakash";
// let account_type="Savings";
// const coustumer_id='1001';
// let account_bal=1000;
// const limt=100000;
// let account_status =true;
// let credit_card=false;
// let last_due_date;
// let loan_officer;

// console.log("Welcome to :"+bank_name + "Mr"+name);
// console.log("your account is :"+account_type+" and you account Id is :"+coustumer_id);
// console.log("your account balance is :"+account_bal);
// console.log("your account status is :"+account_status);
// console.log("Do you have a credit card ? "+credit_card);

// const name="bhanu_prakash";
// let balance=10000;
// let card=true;
// let previous_loan=false;
// let cbil=700;

// if(balance!=500){
//     console.log("your are not eligible for the loan because your balance is less than 500.")
// }else if(balance>500 || balance<=10000 && cbil>=100 && previous_loan==false){
//     console.log("You are eligible for the loan")
// }else{
//     console.log("Welcome to "+name);
// }

// const bank_name="Secure_Bank",first_name="bhanu",last_name="prakash";
// const unique_id =1001;
// let current_balance=100,transfer_limt=10000, request_transfer_amt=1100;
// let kyc =true,account_status=true,loan=null;
// let debit_card;
// console.log("Welcome to "+bank_name+"."+first_name+" "+last_name+". Your bank id is :"+unique_id+" and your amount which is in your bank account is :"+current_balance+". You have loan ?"+loan+".");
// if(account_status!=true){
//     console.log("Your tarnsetion is denied due to inactive account. ");
// }else if(account_status==true && request_transfer_amt==transfer_limt){
//     console.log ("your limt is insufficent to transfer the balance.");
// }else if(request_transfer_amt>=current_balance){
//     console.log("You dont have sufficent funds to transfer money.")
// }else{
//     let temp=current_balance-request_transfer_amt;
//     console.log("successfully Transferd and your current balance is :"+temp+".");
// }


// let arr=["bhanu","thanu","janu","vanu"];
// console.log("You array are :"+arr);
// console.log(arr[1]);
// arr.push("hi");
// console.log("Your array after pushing the hi :"+arr)
// arr.pop();
// console.log("YOu array after pop :"+arr);
// arr.unshift("special")
// console.log("YOu array after adding the special one :"+arr);
// arr.shift();
// console.log("YOu array after removing the special one :"+arr);
// arr.splice(1,1);
// console.log("YOu final arrays is :"+arr);
// arr.reverse;
// console.log("your reverse array is :"+arr);


// let arr=[10,20,30,40,50,600,70,80,90];
// let result=0,large=0;
// for(let i=0;i<arr.length;i++){
//     result=result+arr[i];
//     if(large<=arr[i])
//         large=arr[i];
// }
// console.log(result);
// console.log(large)


// const dailyLimit=20000;
// let currentBalance=10000;
// let remaining_limt=dailyLimit;
// let pending_withdrawa=[5000, 25000, 10000, 2000];
// for(let i=0;i<pending_withdrawa.length;i++){
//     if(pending_withdrawa[i]<=currentBalance && pending_withdrawa[i]<=dailyLimit){
//     currentBalance=currentBalance-pending_withdrawa[i];
//     remaining_limt=pending_withdrawa[i]-remaining_limt;
//     console.log("Transaction of :"+pending_withdrawa[i]+" Approved. New Balance :"+pending_withdrawa[i]);
//     }else{
//         console.log("transtion declined");
//     }
// }



// function add(input1,input2){
//     tol=input1+input2;
//     sum=tol;
//     return sum;
// }
// let a=[10, 20, 30, 40, 50 , 60 , 70 , 80 , 90 ]
// fina=[];
// for (let i=0;i<a.length-1;i++){
//     let result=add(a[i],a[i+1]);
//     fina.push(result);
// }
// for(let i=0;i<fina.length;i++){
//     console.log("you sum for the "+i+" array is :"+fina[i])
// }


// const daily_limt=10000;
// let remaining_limt=daily_limt,current_balance=1000000;
// let final_output=[];
// function check(tarnsetion_amt,remaining_limt){
//     if(tarnsetion_amt>remaining_limt){
//         console.log("you transction is decline due to insufficent fundus or limt reached.")
//     }else if(tarnsetion_amt>current_balance){
//         console.log("insufficent balance. ");
//     }else{
//         current_balance=current_balance-tarnsetion_amt;
//         remaining_limt=remaining_limt-tarnsetion_amt;
//     }
//     return current_balance;
// }
// let pending_trans=[100,200,300,4040,500,600,700,800,900,1000];
// for(let i=0;i<pending_trans.length;i++){
//     output=check(pending_trans[i],remaining_limt)
//     final_output.push(output);
// }
// for(let i=0;i<pending_trans.length;i++){
//     console.log("Balance after transaction "+(i + 1)+" is: "+final_output[i]);
// }


// gemini did this
// function formatCurrency(amount) {
//     let formattedNumber = amount.toFixed(2);
//     let finalString = "$" + formattedNumber;
//     return finalString;
// }

// console.log(formatCurrency(5));
// console.log(formatCurrency(1234.567));
// console.log(formatCurrency(10.987));


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