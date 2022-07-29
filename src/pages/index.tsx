import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home'
import List from './List'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/spaces/:spaceId/lists" element={<List />} />
      </Routes>
    </BrowserRouter>
  )
}
