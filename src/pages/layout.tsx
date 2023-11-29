import s from './Layout.module.css'
import {NavLink, Outlet} from "react-router-dom";
import {useGetAuthMeQuery} from "../services/authApi/authMeApi.ts";



export const Layout = () => {
    const {data, isLoading} = useGetAuthMeQuery({})

    if(isLoading) return 'isLoading...'
    return (
        <div className={s.appWrapper}>
            <header className={s.appWrapper__header}>
                <div>Logo</div>
            </header>
            <nav className={s.appWrapper__nav}>
                <NavLink to={`/profile/${data.data.id}`}>Profile</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/friends">Friends</NavLink>
                <NavLink to="/messages">Messages</NavLink>
            </nav>
            <div className={s.appWrapper__content}>
                <Outlet />
            </div>
        </div>
    );
};
