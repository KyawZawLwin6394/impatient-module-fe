import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './components/components/test';
export default function RouteFile() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Test />}></Route>
            </Routes>
        </BrowserRouter>
    )
}