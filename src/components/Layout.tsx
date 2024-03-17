import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import NotFound from './NotFound'

function Layout() {
    return (
        <>
            <a id='refresh-info' href='/'>Refresh the page at anytime to reset item positions</a>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Layout