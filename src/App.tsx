import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/styles/reset.css'
import '../src/assets/styles/style.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import { AuthProvider } from './hooks/useAuth';
import Login from './pages/dashboard/Login';
// import DashboardLayout from './components/DashboardLayout';
import Dashboard from './pages/dashboard';
import Protected from './components/Protected';
import Cars from './pages/Cars';

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='cars' element={<Cars />} />
        </Route>
        <Route path='/dashboard' >
          <Route index element={
            <Protected>
              <Dashboard />
            </Protected>} />
          <Route path='login' element={<Login />} />
        </Route >
      </Routes>
    </AuthProvider>
  )
}

export default App
