import { Navigate, useParams } from "react-router-dom";
import Layout from "../components/Layout.component.blog";
import postList from "../../post.json";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

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
        window.scroll(0, 0)
    }, [id]);

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
                <div className="px-4 w-full lg:w-[800px]">
                    <ReactMarkdown
                        className="block content px-2 pt-1 pb-4 bg-white lg:px-4"
                        skipHtml={true}
                        components={{
                            code({ node, inline, className, style, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '')
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        style={a11yDark}
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                    >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
                                ) : (
                                    <code className="md-post-code" {...props}>
                                        {children}
                                    </code>
                                )
                            },
                        }}
                    >
                        {fechedPost.content}
                    </ReactMarkdown>
                    <hr />
                    <small className="block pb-2 pt-1 text-right">
                        Fecha: {fechedPost.date} {fechedPost.modified_date !== '' && (<>- Modificado el {fechedPost.modified_date}</>)}
                    </small>
                </div>
            </div>
        </Layout>
    );
}

export default Post;