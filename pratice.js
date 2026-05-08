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

const bank_name="Secure_Bank",first_name="bhanu",last_name="prakash";
const unique_id =1001;
let current_balance=100,transfer_limt=10000, request_transfer_amt=1100;
let kyc =true,account_status=true,loan=null;
let debit_card;
console.log("Welcome to "+bank_name+"."+first_name+" "+last_name+". Your bank id is :"+unique_id+" and your amount which is in your bank account is :"+current_balance+". You have loan ?"+loan+".");
if(account_status!=true){
    console.log("Your tarnsetion is denied due to inactive account. ");
}else if(account_status==true && request_transfer_amt==transfer_limt){
    console.log ("your limt is insufficent to transfer the balance.");
}else if(request_transfer_amt>=current_balance){
    console.log("You dont have sufficent funds to transfer money.")
}else{
    let temp=current_balance-request_transfer_amt;
    console.log("successfully Transferd and your current balance is :"+temp+".");
}