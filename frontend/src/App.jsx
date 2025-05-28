import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import TicTacToe from './components/games/tictactoe/Tictactoe';
import SnakeGame from './components/games/snake/Snake';
import PongGame from './components/games/pong/Pong'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container max-w-[98%] mx-auto px-4 pt-4">
          <Routes>
            <Route path="/" element={<Carousel />} />
            <Route path="/games/tictactoe" element={<TicTacToe />} />
            <Route path="/games/snake" element={<SnakeGame />} />
            <Route path="/games/pong" element={<PongGame />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
