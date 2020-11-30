import {SignUp} from "./pages/Signup"
import Navbar from "./components/navbar"
import './App.css';

function App() {
  console.log(process.env)
  return (
    <div className="App">
      <Navbar/>
     <SignUp/>
    </div>
  );
}

export default App;
