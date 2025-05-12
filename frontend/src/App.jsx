import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import TicTacToe from './components/games/tictactoe/Tictactoe';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container max-w-[98%] mx-auto px-4 pt-4">
          <Routes>
            <Route path="/" element={
              <>
                <h1 className="text-4xl font-bold text-center mb-4 animate-fade-in m-0">
                  My Games
                </h1>
                <Carousel />
              </>
            } />
            <Route path="/games/tictactoe" element={<TicTacToe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
