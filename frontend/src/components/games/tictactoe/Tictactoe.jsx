import { useState } from 'react'

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [isXturn, setXturn] = useState(true)
    const [winner, setWinner] = useState(null)

    const checkWinner = (board) => {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6] 
        ]

        for (let combination of winningCombinations) {
            const [a, b, c] = combination
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a]
            }
        }
        return null
    }

    const handleClick = (index) => {
        if (board[index] || checkWinner(board)) return

        const newBoard = [...board]
        newBoard[index] = isXturn ? "X" : "O"
        setBoard(newBoard)
        setXturn(!isXturn)

        const winner = checkWinner(newBoard)
        if (winner) {
            setWinner(winner)
        } else if (!newBoard.includes(null)) {
            setWinner("draw")
        }
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setXturn(true)
        setWinner(null)
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)]">
            <h1 className="text-4xl font-bold mb-8 animate-fade-in m-0">Tic&nbsp;Tac&nbsp;Toe</h1>
            
            <div className="mb-8 text-xl">
                {winner ? (
                    <p className="text-center">
                        {winner === "draw" ? "Draw!" : `Player ${winner} wins!`}
                    </p>
                ) : (
                    <p className="text-center">Player {isXturn ? "X" : "O"}'s turn</p>
                )}
            </div>

            <div className="grid grid-cols-3 mb-8">
                {board.map((square, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(index)}
                        disabled={winner || square}
                        className={`
                            w-24 h-24 text-5xl font-bold
                            ${index % 3 !== 2 ? 'border-r-4 border-base-content/20 border-gray-600' : ''}
                            ${index < 6 ? 'border-b-4 border-base-content/20 border-gray-600' : ''}
                            ${!square && !winner ? 'hover:bg-base-200/50' : ''}
                            ${square === 'X' ? 'text-error' : 'text-success'}
                            transition-colors duration-200
                        `}
                    >
                        {square}
                    </button>
                ))}
            </div>

            <button onClick={resetGame} className="btn btn-primary">Reset Game</button>
        </div>
    )
}

export default TicTacToe