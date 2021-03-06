import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Calc from './pages/Calc';
import Error from './pages/Error';
import Index from './pages/Index';
import Quotes from './pages/Quotes';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Index />} />
        <Route path="/calculator" element={<Calc />} />
        <Route path="/quote" element={<Quotes />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    <Footer />
  </>
);

export default App;
