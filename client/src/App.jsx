import './App.css'
import Nav from './components/Nav'
import { Outlet } from "react-router-dom";
import Foot from './components/Foot';

function App() {
  return (<>
    <Nav/>
    <main>
    <Outlet/>
    </main>
    <Foot/>
  </>)
}
export default App
