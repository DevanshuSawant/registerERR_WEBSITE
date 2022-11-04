import { Navigate, Outlet } from 'react-router-dom'

let authEmail = localStorage.getItem('email');
const PrivateRoutes = () => {
    return (
        authEmail ? <Outlet/> : <Navigate to='/'/>
    )
}

export default PrivateRoutes