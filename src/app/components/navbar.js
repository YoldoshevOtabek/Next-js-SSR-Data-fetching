'use client'
import { useRouter } from "next/navigation"
import '../navbar.css'

const Navbar = () => {
    const router = useRouter()
  return (
    <div className="nav-container">
        <button onClick={() => router.push('./')}>Home page</button>
        <button onClick={() => router.push('./blog')}>Blog page</button>
        <button onClick={() => router.push('./about')}>Post page</button>
        <button onClick={() => router.push('./posts')}>Posts</button>
    </div>
  )
}

export default Navbar