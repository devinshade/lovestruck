import './App.css'
import Nav from './components/Nav'
import { Outlet } from "react-router-dom";
import Foot from './components/Foot';

function App() {
  return (<div>
    <Nav/>
    <main>
    <Outlet/>
    </main>
    <Foot/>
  </div>)
}
export default App
