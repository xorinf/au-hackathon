import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import ModuleView from './pages/ModuleView';
import RiskProfile from './pages/RiskProfile';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/onboarding" replace />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/learn/:moduleId" element={<ModuleView />} />
          <Route path="/risk-profile" element={<RiskProfile />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
