import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './Home';
import CalcPage from './CalcPage';
import QuotePage from './QuotePage';
import NotFound from './NotFound';

const App = () => (
  <>
    <Navigation />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<CalcPage />} />
      <Route path="/quote" element={<QuotePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;
