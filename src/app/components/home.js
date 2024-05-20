'use client'
import axios from "axios";
import { useState,useEffect } from "react";
import Link from "next/link";

const Home = () => {
    const [posts, setPosts] = useState([])
    const [isLoading, setLoading] = useState(true) 

    useEffect(() => {
        try{
            const getData = async () => {
                const {data} = await axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=20`)
                setPosts(data)
            }
            getData()
        }
        catch(error){
            console.log(error)
        }
        finally{
            setPosts(data)
        }
    },[])
    return(
        <>
        {
            isLoading ? 'Loading...' : posts.map((a) => (
                <div key={a.id}>
                    <Link href={`./posts/${a.id}`}>{a.title} </Link>
                </div>
            ))
        }
        </>
    )
}
export default Home;