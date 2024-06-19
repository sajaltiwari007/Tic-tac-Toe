let boxes = document.querySelectorAll('.box');
let butt = document.querySelector('#play_again');
let butt2 = document.querySelector('#reset_game');

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let turnO = true;
let count=0;

boxes.forEach((box) =>{
    box.addEventListener("click" , ()=>{
        if(turnO){
            box.innerText = "O";
            box.style.color = 'green';
            turnO= false;

        } 
        else{
            box.innerText = "X";
            box.style.color = 'red';
            turnO = true;
        }
        box.disabled = true;
        count++;

        let check = checkWinner();

        if(count==9 && !check){
            gameDraw();
        }

    });
});

const checkWinner = () => {
    winPattern.forEach((arr) =>{
        let a = boxes[arr[0]].innerText;
        let b = boxes[arr[1]].innerText;
        let c = boxes[arr[2]].innerText;
        if(a!="" && b!="" && c!=""){
            if(a===b && b===c){
                showWinner(a);
                return true;
            }    
        }
    });
};

const showWinner = (temp) =>{
    // let element = document.querySelector('#msg');
    msg.textContent = 'Congratulation , Winner is '+temp; 
    let element2 = document.querySelector('.winner_box');
    element2.classList.remove("hide");
    disableBoxes();
}

const gameDraw = () =>{
    msg.textContent = 'Game Draw , Better Luck Next Time.'; 
    let element2 = document.querySelector('.winner_box');
    element2.classList.remove("hide");
    disableBoxes();

}

const disableBoxes = () =>{
    boxes.forEach((box)=>{
        box.disabled = true;
    })
}

const newGame = () =>{
    turnO = true;
    count=0;
    let element2 = document.querySelector('.winner_box');
    element2.classList.add("hide");
    enableBoxes();
}


const  enableBoxes = () =>{

    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText = "";
    })

}

butt.addEventListener('click', newGame);
butt2.addEventListener('click', newGame);
