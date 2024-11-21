let squares = document.querySelectorAll(".square")
let title = document.querySelector(".title")
let current = "X"
let reset = document.querySelector("#reset")


// Reset Game After win 
const ResetAfterWin = ()=>{
    setTimeout(()=>{
        setInterval(()=> title.innerHTML += ".",1000)
        title.innerHTML = "Wait 3 secs"
        setTimeout(()=> location.reload(),3000)
    },1000)
}

const EndGame = (a , b , c)=>{
    title.innerHTML = `${squares[a].innerHTML} wins `
    squares[a].classList.add("checked")
    squares[b].classList.add("checked")
    squares[c].classList.add("checked")
}
// Winner 
const Xowinner = ()=>{
    // Vertical win
    if(squares[0].innerHTML == squares[1].innerHTML && squares[1].innerHTML == squares[2].innerHTML && squares[0].innerHTML !=  ''){
        EndGame(0,1,2)
        ResetAfterWin()
    }   
    else if (squares[3].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[5].innerHTML && squares[3].innerHTML){
        EndGame(3,4,5)
        ResetAfterWin()
    }
    else if (squares[6].innerHTML == squares[7].innerHTML && squares[7].innerHTML == squares[8].innerHTML && squares[6].innerHTML){
        EndGame(6,7,8)
        ResetAfterWin()
    }

    // Horizontal win
    else if (squares[0].innerHTML == squares[3].innerHTML && squares[3].innerHTML == squares[6].innerHTML && squares[6].innerHTML){
        EndGame(0,3,6)
        ResetAfterWin()
    }
    else if (squares[1].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[7].innerHTML && squares[1].innerHTML){
        EndGame(1,4,7)
        ResetAfterWin()
    }
    else if (squares[2].innerHTML == squares[5].innerHTML && squares[5].innerHTML == squares[8].innerHTML && squares[2].innerHTML){
        EndGame(2,5,8)
        ResetAfterWin()
    }

    // Axes win
    else if (squares[0].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[8].innerHTML && squares[0].innerHTML){
        EndGame(0,4,8)
        ResetAfterWin()
    }
    else if (squares[2].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[6].innerHTML && squares[2].innerHTML){
        EndGame(2,4,6)
        ResetAfterWin()
    }
}


// Loop on each xo square
squares.forEach((square) =>{
    square.addEventListener("click" , ()=>{
        if(current === "X" && square.innerHTML ==''){
            square.innerHTML = current
            current = "O"
            title.innerHTML = `${current} Turn Now`
        }
        else if (current === "O" && square.innerHTML ==''){
            square.innerHTML = current
            current = "X"
            title.innerHTML = `${current} Turn Now`
        }
        Xowinner()
    })
})


// Reset Game
const Reset = ()=>{
    squares.forEach((square) =>{
        square.innerHTML =""
        current = "X"
        title.innerHTML = "Xo Game"
        square.classList.remove("checked")
    })
}
reset.addEventListener("click" , Reset)