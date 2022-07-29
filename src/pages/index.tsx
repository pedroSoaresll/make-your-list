import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home'
import List from './List'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list/:listId" element={<List />} />
      </Routes>
    </BrowserRouter>
  )
}
