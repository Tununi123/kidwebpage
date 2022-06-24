import {Routes, Route, Link} from 'react-router-dom'
import {useState, useEffect, useRef} from 'react'


import './Main.scss'
import Point from '../Point/Point.js'



 function Main() {
    // lưu các bộ câu hỏi
    const[quests, setQuest] = useState([]);
    // lưu các câu trả lời đúng
    const[answer, setAnswer] = useState([]);
    //lưu câu trả lời mình
    const[myanswer, setMyAnswer] = useState([]);
    // điểm
   const[points, setPoints] = useState(0);
    //lưu toàn bộ container 
     const answers = useRef();

    //gọi api lấy dữ liệu
    useEffect(() => {
    
        fetch('https://tununi123.github.io/testjsonapi/question.json')
        .then(res => res.json())
        .then(quest => {
            setQuest(quest);
            //lấy danh sách câu trả lời đúng
           setAnswer(quest.map(a=>a.anwser[a.right])) ;
           
            
        })
       
    },[])

    //hàm lấy danh sách câu trả lời của mình
    
       function takerightAnswer(){
       
        const answdata = answers.current.querySelectorAll(".anws");
        console.log(answdata);
        const topic = [];
        //lấy các phần tử của bộ câu hỏi và trả lời
        for ( const anns of answdata){
            // kiểm tra phần tử nào được check thì thêm vào mảng
            if (anns.checked === true )
            topic.push(anns.value);
            
        }
        console.log(topic,"mảng mình chọn");
        topic.length === 0 ? alert("chưa chọn câu trả lời") :setMyAnswer(topic);
       }
 
    
      // hàm tính điểm
       function point(){
        takerightAnswer();
            const diem = answer.concat(myanswer);
            var newArr = [];
            const diemlength = diem.length;
            for (let i = 0; i < diemlength; i++) {
              if (newArr.indexOf(diem[i]) === -1) {
                newArr.push(diem[i]);
              }
            }
            console.log(newArr,"mảng đã được gộp và loại phần tử trùng");
            console.log(answer,"mảng đáp án đúng");
           let diemcuoi = answer.length-(newArr.length - myanswer.length);
           // điểm của bài
         
            setPoints(diemcuoi);
            console.log(points,"điểm cuói cùng");
             
       }
    

    
    return(

        <>
       
        <div className="container-bigger">
        <div ref={answers} className="container">
        <p className="pointss">ĐIỂM CỦA BẠN : {points}</p>
            {quests.map((qs, index) => ( 
               <form key={index}>
                <div className="quest"> 
                    <p className="question">{qs.question}</p>
                    <p className="topic">{qs.topic}</p>
                        {qs.anwser.map((an, index) => 
                            <div className="storeanws" key={an}>
                                <input 
                                type="radio" 
                                name="answer" 
                                className="anws" 
                                id={an}
                                value={an}/>
                                
                                <label className="labelanws" htmlFor={an}>{an}</label>
                            
                            </div>)}
                </div>
                </form>
            ))}     
            <button className="pointer" onClick={point}>CHẤM ĐIỂM</button>
                           
        </div>
        </div>
        </>
    )
}


export default Main;