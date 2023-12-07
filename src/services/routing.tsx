import { Navigate, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Dialogs, Friends, Layout, Profile, Users } from '@/components'
import { useGetAuthMeQuery } from '@/services/API'

const router = createBrowserRouter([
  {
    children: [
      {
        children: [
          {
            element: <Users />,
            path: 'users',
          },
          {
            element: <Friends />,
            path: 'friends',
          },
          {
            element: <Profile />,
            path: 'profile/:userId',
          },
          {
            element: <Dialogs />,
            path: 'dialogs',
          },
        ],
        element: <Layout />,
        path: '/',
      },
    ],
    element: <PrivateRoutes />,
  },
  {
    children: [
      // {
      //   element: <AuthLogin />,
      //   path: 'login',
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
    element: <Layout />,
    path: '/',
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const { data, isLoading } = useGetAuthMeQuery({})

  if (isLoading) {
    return 'isLoading...'
  }

  return data?.resultCode === 1 ? <Navigate to={'login'} /> : <Outlet />
}
