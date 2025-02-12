document.getElementById('playButton').addEventListener('click', function() {
    this.style.display = 'none';
  });

  document.addEventListener('click', function handleUserInteraction() {
    const audio = document.getElementById('bgAudio');
    // Remove muted and try playing again
    audio.muted = false;
    audio.play().catch(err => console.log('Playback error:', err));
    // Remove the event listener after the first interaction
    document.removeEventListener('click', handleUserInteraction);
  });


function increaseFn(){

    let scaleYes = Number(window.getComputedStyle(btnYes).getPropertyValue('scale'));
    let scaleNo = Number(window.getComputedStyle(btnNo).getPropertyValue('scale'));
    
    let marginTopYes = window.getComputedStyle(btnYes).getPropertyValue('margin-top');
    let margin = scaleYes * 20;

    console.log(scaleYes);

    if(scaleNo == 1){
        btnNo.textContent = "Are you sure?"
        btnNo.style.fontSize = "24px";
        firstPic.style.display = "none";
        secondPic.style.display = "block";
    }
    if(scaleNo <= 0.95 && scaleNo >= 0.89){
        btnNo.textContent = "Pookie pleeeaaseee";
        btnNo.style.fontSize = "24px";
        secondPic.style.display = "none";
        thirdPic.style.display = "block";

        picsOnSides_pair1_left.style.display = "none";
        picsOnSides_pair1_right.style.display = "none";

        picsOnSides_pair2_left.style.display = "block";
        picsOnSides_pair2_right.style.display = "block";
    }
    if(scaleNo <= 0.85 && scaleNo >= 0.79){
        btnNo.textContent = "Don't do this to meee...";
        btnNo.style.fontSize = "24px";
        thirdPic.style.display = "none";
        fourthPic.style.display = "block";
    }
    if(scaleNo <= 0.75 && scaleNo >= 0.69){
        btnNo.textContent = "SAY YES";
        btnNo.style.fontSize = "24px";
        fourthPic.style.display = "none";
        fifthPic.style.display = "block";

        picsOnSides_pair2_left.style.display = "none";
        picsOnSides_pair2_right.style.display = "none";

        picsOnSides_pair3_left.style.display = "block";
        picsOnSides_pair3_right.style.display = "block";
    }
    if(scaleNo <= 0.65 && scaleNo >= 0.59){
        btnNo.textContent = "Erm.. actually you pressed no";
        btnNo.style.fontSize = "24px";
        fifthPic.style.display = "none";
        sixthPic.style.display = "block";
    }
    if(scaleNo <= 0.55 && scaleNo >= 0.49){
        btnNo.textContent = "You if you don't press YES..";
        btnNo.style.fontSize = "24px";
        sixthPic.style.display = "none";
        seventhPic.style.display = "block";

        picsOnSides_pair3_left.style.display = "none";
        picsOnSides_pair3_right.style.display = "none";

        picsOnSides_pair4_left.style.display = "block";
        picsOnSides_pair4_right.style.display = "block";
    }
    if(scaleNo <= 0.45 && scaleNo >= 0.39){
        btnNo.textContent = "I think you misclicked";
        btnNo.style.fontSize = "24px";
        seventhPic.style.display = "none";
        eightPic.style.display = "block";
    }

    if(scaleNo <= 0.3){
        btnNo.style.display = "none";
        eightPic.style.display = "none";
        ninthPic.style.display = "block";

        picsOnSides_pair1_left.style.display = "block";
        picsOnSides_pair1_right.style.display = "block";
    }

    btnNo.style.scale = scaleNo - 0.1;
    btnNo.style.position = "absolute";
    btnNo.style.left = Math.floor(Math.random() * 80) + "%";
    btnNo.style.top = Math.floor(Math.random() * 80) + "%";

    btnYes.style.scale = scaleYes + 0.4;
    btnYes.style.marginTop = margin + "px";

}


function finalClick() {

    btnYes.style.display = "none";
    btnNo.style.display = "none";

    firstPic.style.display = "none";
    secondPic.style.display = "none";
    thirdPic.style.display = "none";
    fourthPic.style.display = "none";
    fifthPic.style.display = "none";
    sixthPic.style.display = "none";
    seventhPic.style.display = "none";
    eightPic.style.display = "none";
    ninthPic.style.display = "none";
    tenthPic.style.display = "block";
    sub_header.style.display = "block";
    hearts_left.style.display = "block";
    hearts_right.style.display = "block";

    picsOnSides_pair1_left.style.display = "none";
    picsOnSides_pair1_right.style.display = "none";
    picsOnSides_pair2_left.style.display = "none";
    picsOnSides_pair2_right.style.display = "none";
    picsOnSides_pair3_left.style.display = "none";
    picsOnSides_pair3_right.style.display = "none";
    picsOnSides_pair4_left.style.display = "none";
    picsOnSides_pair4_right.style.display = "none";

    mainHeader.textContent = "♡♡♡ YIPEEEEEEEEE MY VALENTINE ♡♡♡";

    hearts_left.style.marginLeft = "100px";
    hearts_left.style.marginRight = "-100px";
}

function Start(){
    startBtn.className = "icon_dis";
    answer_buttons.style.display = "flex";

    picsOnSides_pair1_left.style.display = "block";
    picsOnSides_pair1_right.style.display = "block";
}

let startBtn = document.getElementById("icon");
let answer_buttons = document.getElementById("answer_buttons");

let btnNo = document.getElementById("button_no");
let btnYes = document.getElementById("button_yes");
let firstPic = document.getElementById("firstPic");
let secondPic = document.getElementById("secondPic");
let thirdPic = document.getElementById("thirdPic");
let fourthPic = document.getElementById("fourthPic");
let fifthPic = document.getElementById("fifthPic");
let sixthPic = document.getElementById("sixthPic");
let seventhPic = document.getElementById("seventhPic");
let eightPic = document.getElementById("eightPic");
let ninthPic = document.getElementById("ninthPic");

let mainHeader = document.getElementById("main_header");
let sub_header = document.getElementById("sub_header");
let hearts_left = document.getElementById("hearts_left");
let hearts_right = document.getElementById("hearts_right");

let picsOnSides_pair1_left = document.getElementById("picsOnSides_pair1_left");
let picsOnSides_pair1_right = document.getElementById("picsOnSides_pair1_right");

let picsOnSides_pair2_left = document.getElementById("picsOnSides_pair2_left");
let picsOnSides_pair2_right = document.getElementById("picsOnSides_pair2_right");

let picsOnSides_pair3_left = document.getElementById("picsOnSides_pair3_left");
let picsOnSides_pair3_right = document.getElementById("picsOnSides_pair3_right");

let picsOnSides_pair4_left = document.getElementById("picsOnSides_pair4_left");
let picsOnSides_pair4_right = document.getElementById("picsOnSides_pair4_right");