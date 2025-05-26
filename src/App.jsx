import './App.css'
import Profile from './Components/Profile'
import maharaj from './assets/maharaj.png'
import SplitText from "./ReactBit/SplitText";
import Header from './Components/Header';
function App() {

  const handleAnimationComplete = () => {
    console.log("Letter animation completed!");
  };
  return (
    <div className="container" style={{ paddingTop: '120px' }}>
      <Header/>
      <img src={maharaj} alt="Shivaji Maharaj" className="image" />
      <div className="text">
        <Profile />
        
      </div>
    </div>
  )
}

export default App
