import React from "react";
import './Sidebar.css';

// No se puede 

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
                        <div className="dropdown">
                            <button className="dropbtn">Dropdown</button>
                            <div id="myDropdown" className="dropdown-content">
                                <ul>
                                    <li>
                                        <a href="#">Recent</a>
                                    </li>
                                    <li>
                                        <a href="#">In Progress</a>
                                    </li>
                                    <li>
                                        <a href="#">Completed</a>
                                    </li>
                                </ul>  
                            </div>
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