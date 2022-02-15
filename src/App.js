import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calc from './pages/Calc';
import Error from './pages/Error';
import Index from './pages/Index';
import Quotes from './pages/Quotes';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<Index />} />
      <Route path="/calculator" element={<Calc />} />
      <Route path="/quote" element={<Quotes />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
);

export default App;
