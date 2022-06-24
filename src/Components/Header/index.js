import {Routes, Route, Link} from 'react-router-dom'


import HeaderStlyle from'../Header/header.scss'


import Main from '../pages/Main/Main.js'
import Point from '../pages/Point/Point.js'



function Header(){
    
    return(
        <>
    <div className="header-box" >
        <div id="navbarop" >
            <ul>
                <li><Link to="/Main">CÂU HỎI</Link></li>
                <li><Link to="/point">CẢM ƠN</Link></li>
            </ul>
        <Routes>
            <Route path="/Main" element={<Main />} />
            <Route path="/point" element={<Point />} />
        </Routes>
        </div>
    </div>


    </>
    
    
    
    )
}

export default Header;