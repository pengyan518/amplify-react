// pages
import DashboardLayout from "./components/DashboardLayout";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import PrivacyPolicy from "./components/PrivacyPolicy";

// other
import {FC} from "react";


// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'signin-route',
        title: 'Sign In',
        path: '/signin',
        enabled: true,
        component: SignIn
    },
    {
        key: 'signup-route',
        title: 'Sign Up',
        path: '/signup',
        enabled: true,
        component: SignUp
    },
    {
        key: 'dashboard-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: DashboardLayout
    },
    {
        key: 'privacy-route',
        title: 'Privacy Policy',
        path: '/privacy-policy',
        enabled: true,
        component: PrivacyPolicy
    },
]