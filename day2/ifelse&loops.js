const name="bhanu_prakash";
let balance=10000;
let card=true;
let previous_loan=false;
let cbil=700;

if(balance!=500){
    console.log("your are not eligible for the loan because your balance is less than 500.")
}else if(balance>500 || balance<=10000 && cbil>=100 && previous_loan==false){
    console.log("You are eligible for the loan")
}else{
    console.log("Welcome to "+name);
}

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