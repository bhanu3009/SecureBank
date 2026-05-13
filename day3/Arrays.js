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

let waitingRoom = ["Bhanu", "Alex", "Sarah", "John"];
let bedsAvailable = 3;
while (waitingRoom.length > 0 && bedsAvailable > 0) {
    let patient = waitingRoom.shift();
    console.log("Admitted: " + patient);
    bedsAvailable--;
}
console.log("Waiting room count: " + waitingRoom.length);