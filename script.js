const inputs = document.querySelector(".inputs"),
resetBtn = document.querySelector(".reset-btn"),
userInput = document.querySelector(".user-input"),
Wrongletter = document.querySelector(".wrong-count span"),
Attempt = document.querySelector(".Attempt-left span"),
hint = document.querySelector(".hint span");


let word , maxAttempt = 8, incorrects = [] , corrects = [];

function wordfun(){

    let randomText = wordList[Math.floor(Math.random()* wordList.length)];
    Attempt.innerText = maxAttempt;

     word = randomText.word;
    maxAttempt = 8; corrects = []; incorrects = [];
    hint.innerText = randomText.hint;
    
    let html = "";

    for(let i=0; i < word.length; i++){
        html += `<input type="text" disabled >`;
    }

    Wrongletter.innerText = incorrects;
    inputs.innerHTML = html;
}

    wordfun();

        function initGame(e){
            let key = e.target.value;
    
            if(key.match(/^[A-Za-z]+$/) && !incorrects.includes(`${key}`) && !corrects.includes(key)){


                if(word.includes(key)){

                    for(let i = 0 ; i < word.length; i++){

                        if(word[i] === key){

                            corrects.push(key);

                            inputs.querySelectorAll("input")[i].value = key;

        }
    }
}

else{
    maxAttempt--;
    incorrects.push(`${key}`);

}

    Attempt.innerText = maxAttempt;
    Wrongletter.innerText = incorrects;
   
}
 

    userInput.value = "";
     
    setTimeout(()=>{
        if(corrects.length === word.length){
            alert(`Congrats! You found the Word ${word.toUpperCase()}`);
            wordfun();
        }
        else if(maxAttempt < 1){
            alert("Game Over ! You don't have Remaining Attempt");
    
            for(let i = 0 ; i < word.length; i++){
               
                inputs.querySelectorAll("input")[i].value = word[i] ;
            }
        }
    
    });

} 

resetBtn.addEventListener("click", wordfun);
userInput.addEventListener("input", initGame);
document.addEventListener("keydown", ()=> userInput.focus());