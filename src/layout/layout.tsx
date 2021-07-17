import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/layout.scss'

type Props = {
    children: React.ReactNode
};

const Layout: React.FC<Props> = props =>{
    let location = useLocation();

    return  (
        <div className="layout">
            <div className="navbar">
                <div className="nav-header">Frontend Development Exams</div>
                <div className="nav-list">
                    <Link to={`/form`} className={`btn ${location.pathname === '/form' ? 'btn-primary' : 'btn-light'} m-1`}>Forms</Link>
                    <Link to={`/pokemon`} className={`btn ${location.pathname === '/pokemon' ? 'btn-primary' : 'btn-light'} m-1`}>Pokemon's</Link>
                    <Link to={`/order`} className={`btn ${location.pathname === '/order' ? 'btn-primary' : 'btn-light'} m-1`}>Function</Link>
                </div>
            </div>
            <div className="wraper">
                {props.children}
            </div>
        </div>
    );
}

export default Layout;