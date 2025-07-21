/* eslint-disable react-refresh/only-export-components */
import { Outlet } from 'react-router-dom';
import { withPageTransition } from "../transition"

const Home = () => {
    return (
        <div className='relative z-20'>
            <Outlet />
        </div>
    )
}

export default withPageTransition(Home, "Home");