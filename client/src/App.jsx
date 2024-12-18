import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages/home/Home.css'
import './App.css'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer';
import NotFound from './pages/utils/NotFound';
import Loading from './pages/utils/Loading';
const HomePage = lazy(() => import('./pages/home/HomePage'))
const LuxuryWallpaper = lazy(() => import('./pages/luxuryWallpaper/LuxuryWallpaper'))
const LuxuryWallpaperDetails = lazy(() => import('./pages/luxuryWallpaper/LuxuryWallpaperDetails'))
const PremiumWallpaper = lazy(() => import('./pages/premiumWallpaper/PremiumWallpaper'))
const PremiumWallpaperData = lazy(() => import('./pages/premiumWallpaper/PremiumWallpaperData'))
const ContactUs = lazy(() => import('./pages/contactUs/ContactUs'))
const AboutUs = lazy(() => import('./pages/aboutUs/AboutUs'))
const HomeAccessories = lazy(() => import('./pages/homeAccesories/HomeAccesories'))
const HomeAccessoriesData = lazy(() => import('./pages/homeAccesories/HomeAccesoriesData'))
const OurApproach = lazy(() => import('./pages/ourApproach/OurApproach'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
      <Nav/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/luxuryWallpaper" element={<LuxuryWallpaper />} />
          <Route path="/luxuryWallpaper/:id" element={<LuxuryWallpaperDetails />} />
          <Route path="/premiumWallpaper" element={<PremiumWallpaper/>} />
          <Route path="/premiumWallpaper/:id" element={<PremiumWallpaperData />} />
          <Route path="/homeAccessories" element={<HomeAccessories />} />
          <Route path="/homeAccessories/:id" element={<HomeAccessoriesData />} />
          <Route path="/contactUs" element={<ContactUs/>} />
          <Route path="/aboutUs" element={<AboutUs/>} />
          <Route path="/our-approach" element={<OurApproach/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
