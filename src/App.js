
import {useState} from 'react'
import Header from '../src/Components/Header/index.js'
import Title from '../src/Components/Title/Title.js'



import '../src/App.scss'




function App() {
  const[show, setShow]=useState(true)
  const[show1, setShow1]=useState(false)
  const[show2, setShow2]=useState(true)
  //hide Title and show Header
const Changes = () => {
    setShow(false);
    setShow1(true);
    setShow2(false);
    
}

  return (
    <div className="allcontainer" >
      <div className="title" style={{ display: show ? "block" : "none" }}>
        <div >
          <Title/>
          <button style={{ display: show2 ? "block" : "none" }} className="startbtn" onClick={Changes}>Bắt đầu</button>
          <img className="kidimg" src="https://thumbs.dreamstime.com/z/happy-cute-kid-boy-think-problem-vector-163825117.jpg"/>
        </div>
      </div>
      <div style={{ display: show1 ? "block" : "none" }}>
        <Header/>
      </div>
    </div>
    
  );
}

export default App;
