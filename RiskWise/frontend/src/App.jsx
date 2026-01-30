import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import InvestmentSelection from './pages/InvestmentSelection';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/investments" element={<InvestmentSelection />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Dashboard will contain the Newsletter view link */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
