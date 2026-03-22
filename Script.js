let boxes = document.querySelectorAll(".b");
let resetBtn = document.querySelector("#reset");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

const winPatterns = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];

boxes.forEach((box) => {
box.addEventListener("click", () => {

if(turnO){
box.innerText = "O";
turnO = false;
}else{
box.innerText = "X";
turnO = true;
}

box.disabled = true;
count++;

checkWinner();

});
});

const disableBoxes = () =>{
boxes.forEach((box)=>{
box.disabled = true;
});
}

const enableBoxes = () =>{
boxes.forEach((box)=>{
box.disabled = false;
box.innerText = "";
});
}

const showWinner = (winner)=>{
msg.innerText = `🎉 Winner is ${winner}`;
disableBoxes();
}

const checkWinner = () => {

for(let pattern of winPatterns){

let pos1Val = boxes[pattern[0]].innerText;
let pos2Val = boxes[pattern[1]].innerText;
let pos3Val = boxes[pattern[2]].innerText;

if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){

if(pos1Val === pos2Val && pos2Val === pos3Val){

showWinner(pos1Val);
return;

}
}
}

if(count === 9){
msg.innerText = "😮 Game Draw!";
}

};

resetBtn.addEventListener("click", ()=>{
turnO = true;
count = 0;
msg.innerText = "";
enableBoxes();
});