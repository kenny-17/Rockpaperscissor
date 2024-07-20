let yourscore=0;
let Ai=0;

const choice = document.querySelectorAll(".cho");
let comp; 

const Aichoice = () => {
    const arr = ["r", "p", "s"];
    let num = Math.floor(Math.random() * 3); 
    comp = arr[num]; 
}

choice.forEach(userchoice => {
    userchoice.addEventListener("click", () => {
        Aichoice(); 
        const whatclicked = userchoice.getAttribute("id");
        console.log(whatclicked, comp);
        const winmsg=document.querySelector(".winmsg");
        let aichoose;
        if(comp==="r" )
            aichoose="Rock";
        else if(comp==="p")
            aichoose="Paper";
        else
        aichoose="Scissor";

        if(whatclicked==="r" && comp==="s"){
            yourscore=yourscore+1;
            winmsg.innerText=`You Won , AI choose ${aichoose}`
            winmsg.classList.remove('vis');
            winmsg.style.backgroundColor = 'green';
        }
        
        else if(whatclicked==="s" && comp==="p"){
            yourscore=yourscore+1;
            winmsg.innerText=`You Won , AI choose ${aichoose}`
            winmsg.classList.remove('vis');
            winmsg.style.backgroundColor = 'green';
        }
        
        else if(whatclicked==="p" && comp==="r"){
            yourscore=yourscore+1;
            winmsg.innerText=`You Won , AI choose ${aichoose}`
            winmsg.classList.remove('vis');
            winmsg.style.backgroundColor = 'green';
        }
        
        if(whatclicked===comp){
            
            winmsg.innerText=`DRAW!!! , AI choose ${aichoose}`
            winmsg.classList.remove('vis');
            winmsg.style.backgroundColor = 'black';
        }

        else{
            Ai=Ai+1;
            winmsg.innerText=`Uh-OH , AI WON!! by choosing ${aichoose}`
            winmsg.classList.remove('vis');
            winmsg.style.backgroundColor = 'red';
        }

    let    you=document.querySelector(".you");
        you.innerText=yourscore;
        let    AiScore=document.querySelector(".comp");
        AiScore.innerText=Ai;
    });
});


