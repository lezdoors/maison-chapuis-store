import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import UtilityBar from './UtilityBar'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <UtilityBar />
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
