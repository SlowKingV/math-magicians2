import { Route, Routes } from 'react-router-dom';
import Home from 'home.js';
import CalcPage from './CalcPage';
import QuotePage from './QuotePage';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/calculator" element={<CalcPage />} />
    <Route path="/quote" element={<QuotePage />} />
  </Routes>
);

export default App;
