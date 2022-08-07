import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home'

const List = React.lazy(() => import('./List'))

export default function Router() {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/spaces/:spaceId/lists" element={<List />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}
