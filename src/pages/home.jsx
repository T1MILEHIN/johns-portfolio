/* eslint-disable react-refresh/only-export-components */
import { Outlet } from 'react-router-dom';
import transition from "../transition"

const Home = () => {
    return (
        <div className='relative bg-bodybg'>
            <Outlet />
        </div>
    )
}

export default transition(Home);