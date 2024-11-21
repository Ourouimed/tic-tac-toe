let squares = document.querySelectorAll(".square")
let title = document.querySelector(".title")
let reset = document.querySelector("#reset")
let current = "X"

// End Game After win 
const EndGame = (a , b , c)=>{
    title.innerHTML = `${squares[a].innerHTML} wins `
    squares[a].classList.add("checked")
    squares[b].classList.add("checked")
    squares[c].classList.add("checked")
    setTimeout(()=>{
        title.innerHTML = "Wait 3 secs"
        setInterval(()=> title.innerHTML += ".",1000)
        setTimeout(()=> location.reload(),3000)
    },1000)
}
// Winner 
const Xowinner = ()=>{
    // Vertical win
    if(squares[0].innerHTML == squares[1].innerHTML && squares[1].innerHTML == squares[2].innerHTML && squares[0].innerHTML !=  ''){
        EndGame(0,1,2)
    }   
    else if (squares[3].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[5].innerHTML && squares[3].innerHTML){
        EndGame(3,4,5)
    }
    else if (squares[6].innerHTML == squares[7].innerHTML && squares[7].innerHTML == squares[8].innerHTML && squares[6].innerHTML){
        EndGame(6,7,8)
    }

    // Horizontal win
    else if (squares[0].innerHTML == squares[3].innerHTML && squares[3].innerHTML == squares[6].innerHTML && squares[6].innerHTML){
        EndGame(0,3,6)
    }
    else if (squares[1].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[7].innerHTML && squares[1].innerHTML){
        EndGame(1,4,7)
    }
    else if (squares[2].innerHTML == squares[5].innerHTML && squares[5].innerHTML == squares[8].innerHTML && squares[2].innerHTML){
        EndGame(2,5,8)
    }

    // Axes win
    else if (squares[0].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[8].innerHTML && squares[0].innerHTML){
        EndGame(0,4,8)
    }
    else if (squares[2].innerHTML == squares[4].innerHTML && squares[4].innerHTML == squares[6].innerHTML && squares[2].innerHTML){
        EndGame(2,4,6)
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
