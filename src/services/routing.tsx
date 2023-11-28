import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "../pages/Layout.tsx";
import {Users} from "../components/users/Users.tsx";


const router = createBrowserRouter([
    {
        element: '',
        children: [
            {
                path: '/',
                element: <Layout />,
                children: [
                     {
                        path: 'users',
                        element: <Users />,
                    },
                    // {
                    //     path: 'profile',
                    //     element: <PersonalInformation />,
                    // },
                    // {
                    //     path: 'cards',
                    //     element: <Cards />,
                    // },
                ],
            },
        ],
    },
    {
        path: '/',
        element: '',
        children: [
            // {
            //     path: 'login',
            //     element: <Login />,
            // },
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
// function PrivateRoutes() {
//     const { error } = useGetMeQuery()
//
//     return error ? <Navigate to="login" /> : <Outlet />
// }