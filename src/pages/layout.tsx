import s from './Layout.module.css'
import {NavLink, Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div className={s.appWrapper}>
            <header className={s.appWrapper__header}>
                <div>Logo</div>
            </header>
            <nav className={s.appWrapper__nav}>
                <NavLink to="/profile">Profile</NavLink>
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
