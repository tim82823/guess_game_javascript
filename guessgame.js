var min=1;
var max=10;
var randNum=Math.floor((max-min)*Math.random()+min);

function makeGuess(){
    var inputVal=parseInt(document.getElementById("input").value);
    if(randNum<inputVal){
        document.getElementById("clue").innerHTML="Too High! Try again."

    }
    else if(randNum>inputVal) {
        document.getElementById("clue").innerHTML="Too low! Try again."
    }
    else{
        document.getElementById("clue").innerHTML="correct!!"
        var names=["guess","title","input","btn"]

        names.forEach( name =>{
            var elem=document.getElementById(name);
            elem.parentNode.removeChild(elem);

        })
        
        document.getElementById("reload").style.visibility="visible"; 

    }
}

