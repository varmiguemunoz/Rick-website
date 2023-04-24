import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../pages/home"
import Dashboard from "../pages/dashboard";
import NotFound from "../pages/notFound";
import UserAccount from "../pages/userAccount";

export default function RoutesApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/myaccount" element={<UserAccount />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}