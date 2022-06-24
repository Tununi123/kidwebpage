
import {useState} from 'react'
import '../Title/Ttile.scss'

function Title(){
    const[show, setShow]=useState(true);
    return(
    <>
    <div id="title" style={{ display: show ? "block" : "none" }}>
        <h1 className="bigtitle">HỎI TRẺ EM</h1>
        <p>đây là những câu hỏi để xem xét hiểu biết trẻ em có khuynh hướng về những gì </p>
        {/* <button id="start" onClick={() => setShow((s) => !s)}>Bắt đầu</button> */}
    </div>
    </>
    )
}


export default Title;