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


// The Execution:

// Set the Stage: Declare a sealed variable for a dailyLimit (e.g., 20000). Declare a flexible variable for the currentBalance (e.g., 50000).

// The Data: Create an array containing four pending withdrawal requests (e.g., 5000, 25000, 10000, 2000).

// The Processor: Write a for loop that is designed to examine every single item in your array, one by one.

// The Logic Gate (Inside the Loop): Inside your loop, place an if/else condition. For every transaction amount the loop looks at, it must check:

// Is the requested amount less than or equal to the currentBalance AND less than or equal to the dailyLimit?

// If true: Subtract the amount from the currentBalance, deduct the amount from the remaining dailyLimit, and print a message saying "Transaction of [Amount] Approved. New Balance: [Balance]".

// If false: Do not change the balance or the limit. Print a message saying "Transaction of [Amount] Declined due to insufficient funds or limit breach."

const dailyLimit=20000;
let currentBalance=10000;
let remaining_limt=dailyLimit;
let pending_withdrawa=[5000, 25000, 10000, 2000];
for(let i=0;i<pending_withdrawa.length;i++){
    if(pending_withdrawa[i]<=currentBalance && pending_withdrawa[i]<=dailyLimit){
    currentBalance=currentBalance-pending_withdrawa[i];
    remaining_limt=pending_withdrawa[i]-remaining_limt;
    console.log("Transaction of :"+pending_withdrawa[i]+" Approved. New Balance :"+pending_withdrawa[i]);
    }else{
        console.log("transtion declined");
    }
}