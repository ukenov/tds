import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from 'pages/test';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Test />} />
                <Route path="/users" element= {<Test />} />
                <Route path="/user/edit" element={<Test />} />
            </Routes>
        </BrowserRouter>
    )
}
