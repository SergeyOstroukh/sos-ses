import {createBrowserRouter, Navigate, Outlet, RouterProvider} from "react-router-dom";
import {Users} from "../components/users/Users.tsx";
import {Friends} from "../components/friends/Friends.tsx";
import {Layout} from "../pages/layout.tsx";
import {Profile} from "../components/profile/Profile.tsx";
import {AuthLogin} from "../components/authLogin/AuthLogin.tsx";
import {useGetAuthMeQuery} from "./authApi/authMeApi.ts";


const router = createBrowserRouter([
    {
        element: <PrivateRoutes/>,
        children: [
            {
                path: '/',
                element: <Layout />,
                children: [
                     {
                        path: 'users',
                        element: <Users />,
                    },
                    {
                        path: 'friends',
                        element: <Friends />,
                    },
                    {
                        path: 'profile/:userId',
                        element: <Profile />,
                    },

                ],
            },
        ],
    },
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: 'login',
                element: <AuthLogin />,
            },
            // {
            //     path: 'signup',
            //     element: <SignUpPage />,
            // },
            // {
            //     path: 'forgot-password',
            //     element: <ForgotPassword />,
            // },
            // {
            //     path: 'check-email',
            //     element: <CheckEmail />,
            // },
            // {
            //     path: 'create-new-password',
            //     element: <CreateNewPassword />,
            // },
            // {
            //     path: 'new-password-confirm',
            //     element: <NewPasswordConfirm />,
            // },
            // {
            //     path: '*',
            //     element: <PageNotFound />,
            // },
        ],
    },
])

export const Router = () => {
    return <RouterProvider router={router} />
}
function PrivateRoutes() {
    const { data, isLoading } = useGetAuthMeQuery({})
        if(isLoading)return 'isLoading...'
    return data?.resultCode === 1 ? <Navigate to="login" /> : <Outlet />
}