'use client'
import '../home.css';
import { useRouter } from 'next/navigation';

const Blog = () => {
    const router = useRouter()
    return(
        <div className="home-container">
            <h1>Blog haqida</h1>
            <button onClick={() => router.push('/blog/oneblog')}>Blogning bir turiga otish</button>
        </div>
    )
}
export default Blog;