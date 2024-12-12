 import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar.jsx';
import Header from './Header.jsx';

createRoot(document.getElementById('root')).render(
  <div className="box">
    <SideBar />
    <App />
  </div>
)
