import axios from "axios"
import Link from "next/link"

async function getData() {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=20')
    return data
}

const PostPage = async () => {
    const data = await getData()
    return(
        <>
        <table border={1}>
            <thead>
                <th>id</th>
                <th>email</th>
                <th>body</th>
            </thead>
            <tbody>
                {
                    data.map((a) => (
                        <tr key={a.id}>
                            <td>{a.id}</td>
                            <td>{a.email}</td>
                            <td>
                                <Link href={`./posts/${a.id}`}>{a.email}{a.body}</Link>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </>
    )
}

export default PostPage;