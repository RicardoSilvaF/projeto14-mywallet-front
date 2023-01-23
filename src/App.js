import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage"
import NewIncomePage from "./pages/NewIncomePage"
import NewExpensePage from "./pages/NewExpensePage"
import UserContext from './contexts/UserContext';

export default function App (){
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/newincome" element={<NewIncomePage />} />
                    <Route path="/newexpense" element={<NewExpensePage />} />
                </Routes>
        </BrowserRouter>
      )
}