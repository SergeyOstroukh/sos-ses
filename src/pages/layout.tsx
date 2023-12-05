import s from './Layout.module.css'
import {NavLink, Outlet} from "react-router-dom";
import {useGetAuthMeQuery, useLogOutMutation} from "../services/authApi/authMeApi.ts";
import {Search} from "../assets/search.tsx";


export const Layout = () => {
    const {data, isLoading} = useGetAuthMeQuery({})
    const [logOut] = useLogOutMutation({})

    if (isLoading) return 'isLoading...'
    return (
        <div className={s.appWrapper}>
            <header className={s.appWrapper__header}>
                <div className={s.appWrapper__headerContent}>
                    <img
                        alt='logo'
                        className={s.header__logo}
                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRykDv6Mr1Pd7dSjVOVPUCb2ba6d2L0r5X47A&usqp=CAU'}/>
                    <section className={s.header__section}>
                        <h3 className={s.header__title}></h3>
                        <ul className={s.header__menu}>
                            <li className={s.header__menuItem}>
                                <a href="#">Home</a>
                            </li>
                            <li className={s.header__menuItem}>
                                <a href="#">Discussion</a>
                            </li>
                            <li className={s.header__menuItem}>
                                <a href="#">Weather</a>
                            </li>
                            <li className={s.header__menuItem}>
                                <a href="#">Pages</a>
                            </li>
                            <li className={s.header__menuItem}>
                                <a href="#">Blog</a>
                            </li>
                        </ul>
                        <Search color={'red'}/>
                    </section>
                    {data?.data.login && <button onClick={logOut}>logOut</button>}
                </div>
            </header>
            <div className={s.appWrapper__navPlusContent}>
                <div className={s.appWrapper__mainContent}>
                    <nav className={s.appWrapper__nav}>
                        <NavLink to={`/profile/${data?.data.id}`}>Profile</NavLink>
                        <NavLink to="/users">Users</NavLink>
                        <NavLink to="/friends">Friends</NavLink>
                        <NavLink to="/dialogs">Dialogs</NavLink>
                    </nav>
                    <div className={s.appWrapper__content}>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    );
};
