import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoggedLayout } from '../layouts/LoggedLayout/LoggedLayout';
import { Home, Artists, Artist, Albums, Album, Profile } from "../pages";


export function LoggedNavigation() {
  return(
    <BrowserRouter>
    <LoggedLayout>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/artists' element={<Artists />} />
        <Route path='/artist/:id' element={<Artist />} />
        <Route path='/albums' element={<Albums />} />
        <Route path='/album/:id' element={<Album />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </LoggedLayout>
    </BrowserRouter>
  )
}