import { useState } from "react";

const TicTacToe = () => {
    const [board, setBoard] = useState<string[]>(["", "", "","", "", "", "", "", ""]);
    const [player, setPlayer] = useState<string>("X");

    const placeElement = (index:number) => {
       if (board[index] === "") {
        board[index] = player;
        setPlayer(player === "X" ? "O" : "X");
        setBoard([...board]);
       }
    }
    
    const getWinner = () => {
        // let winner:string = "";
        let winningPositions:number[][] = [
            [0,1,2],
            [3,4,5], 
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        // let player1Positions:number[] = [];
        // let player2Positions:number[] = [];

        // for(let i:number = 0; i<board.length; i++) {
        //     if (board[i] === "X") {
        //         player1Positions.push(i);
        //     } else if (board[i] === "O") {
        //         player2Positions.push(i);
        //     }
        // }
        // for(let i:number = 0; i<winningPositions.length; i++) {
        //     let counterPlayer1:number = 0;
        //     let counterPlayer2:number = 0;
            
        //     for(let j:number = 0; j<winningPositions[i].length; j++) {
        //         if (winningPositions[i][j] === player1Positions[j]) {
        //             counterPlayer1++;

        //         } else if (winningPositions[i][j] === player2Positions[j]) {
        //             counterPlayer2++;
        //         }
        //     }
        //     if(counterPlayer1 === 3) {
        //         winner = "X Wins!";
        //     } else if (counterPlayer2 === 3) {
        //         winner = "O Wins!";
        //     }
        // }
        // return winner;
        for (let positions of winningPositions) {
            if (board[positions[0]] === board[positions[1]] && board[positions[1]] === board[positions[2]]) {
              return board[positions[0]]
            }
        }
    }

    return (
        <div style={{
            display: 'grid',
            gridTemplateRows: '70px 70px 70px',
            gridTemplateColumns: '70px 70px 70px',
            }}>
                {board.map((e, index)=> {
                    return (
                        <div 
                            key={index} 
                            style={{border:"1px solid black", textAlign: "center", fontSize:"50px"}}
                            onClick={() => placeElement(index)}
                            >
                                {e}
                            </div>
                    )
                })}
                
                <p>Winner: {getWinner()}</p>
                <div>
                    <button style={{borderRadius: "20px"}} onClick={() => {setBoard(["", "", "","", "", "", "", "", ""])}}>reset</button>
                </div>
        </div>
    )
}

export default TicTacToe;