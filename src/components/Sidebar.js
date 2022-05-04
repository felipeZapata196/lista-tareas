import React from "react";
import './Sidebar.css';

const SideBar = () => {

     

    return (
        <div className="container-all">
            <h1>Listapp</h1>
            <div className="content-list">
                <ul>
                    <li>
                        <a href="#">My account</a>
                    </li>
                    <li>
                        <a href="#">My Tasks</a>
                        <button onclick="myAccFunc()">Accordion</button>
                        <div className="content-filters">
                            <ol>
                                <li>
                                    <a href="#">Recent</a>
                                </li>
                                <li>
                                    <a href="#">In Progress</a>
                                </li>
                                <li>
                                    <a href="#">Completed</a>
                                </li>
                            </ol>  
                        </div>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar