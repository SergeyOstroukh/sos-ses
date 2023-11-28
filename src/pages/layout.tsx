import s from './Layout.module.css'
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div className={s.appWrapper}>
            <header className={s.appWrapper__header}>
                <div>Logo</div>
            </header>
            <nav className={s.appWrapper__nav}>
                <a >profileeeeee</a>
                <a >message</a>
                <a >Users</a>
            </nav>
            <div className={s.appWrapper__content}>
                <Outlet />
            </div>
        </div>
    );
};
