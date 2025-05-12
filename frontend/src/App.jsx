import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container max-w-[98%] mx-auto px-4 pt-4">
          <h1 className="text-4xl font-bold text-center mb-4 animate-fade-in m-0">
            My Games
          </h1>
          <Routes>
            <Route path="/" element={<Carousel />} />
            {/* Add more routes for games and other pages later */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
