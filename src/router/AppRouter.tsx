import { createBrowserRouter } from "react-router";
import { LoginPage } from "../auth/pages/LoginPage";
import { Navigate } from "react-router";
import { CalendarPage } from "../calendar/pages/CalendarPage";

export const AppRouter = createBrowserRouter([
    {
        path:'/',
        element:<CalendarPage/>
    },
    {
        path:'/auth',
        element:<LoginPage/>
    },
    {
        path:'*',
        element:<Navigate to="/"/>
    }

]);

