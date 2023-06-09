import { Navigate, useParams } from "react-router-dom";
import Layout from "../components/Layout.component.blog";
import postList from "../../../post.json";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useEffect } from "react";

interface Post {
    id: string
    title: string
    date?: string
    content: string
    modified_date?: string
}

function Post() {
    const { id } = useParams()
    const fechedPost: Post = { id: '', title: '', content: '' }

    useEffect(() => {
        document.title = `Blog-${fechedPost.id}`;
    });

    postList.forEach((post: Post) => {
        if (id === post.id) {
            fechedPost.id = post.id
            fechedPost.title = post.title
            fechedPost.content = post.content
            fechedPost.date = post.date ? post.date : "No date given"
            fechedPost.modified_date = post.modified_date ? post.modified_date : "No date given"
        }
    })

    if (!id) {
        return <Navigate to="/blog/404" />
    }

    

    return (
        <Layout>
            <div className="flex justify-center">
                <div className="px-4 w-[800px]">
                    <h1 className="py-2 font-bold uppercase">{fechedPost.title}</h1>
                    <small>Fecha: {fechedPost.date}</small>
                    <hr />
                    <ReactMarkdown children={fechedPost.content} className="pt-5 pb-2 px-2 bg-white lg:px-4" />
                </div>
            </div>
        </Layout>
    );
}

export default Post;