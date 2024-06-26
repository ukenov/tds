import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/main/components/home';
import DisplayUsersPage from 'pages/users/components/user-container/user-display';
import Navbar from 'pages/main/components/navbar';
import NotFoundPage from 'pages/main/components/not-found';
import DisplayEditUserPage from 'pages/users/components/edit-user-display';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element= {<DisplayUsersPage />} />
                <Route path="/user/edit/:userId" element={<DisplayEditUserPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}
