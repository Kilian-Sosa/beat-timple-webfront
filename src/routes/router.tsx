import { Route, Routes } from 'react-router'
import { Menu } from "../components/Shared/Menu/Menu"
import BeatCreation from '../pages/BeatCreation'
import Home from '../pages/Home'

export const AppRouter = () => {
    return (
        <>
            <Menu />
            <Routes>
                <Route index element={<Home />} />
                <Route path="beat-creation" element={<BeatCreation />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </>
    )
}