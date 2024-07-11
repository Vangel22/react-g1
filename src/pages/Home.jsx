import { useEffect, useState } from "react";

const Home = () => {
    const token = window.localStorage.getItem("token");
    const [blogPosts, setBlogPosts] = useState([]);

    const fetchBlogPosts = async () => {
        const res = await fetch("/api/blog", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if(res.ok) {
            const data = await res.json();
            setBlogPosts(data);
        } else {
            console.log(res.statusText);
        }
    }

    useEffect(() => {
        fetchBlogPosts();
    }, [])

    return(
        <div>
            <h1>Blogs</h1>
            {
                blogPosts.map(post => 
                    <div key={post._id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                )
            }
        </div>
    )
}

export { Home }