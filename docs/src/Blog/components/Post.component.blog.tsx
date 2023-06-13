import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IoArrowUpCircleSharp } from "react-icons/io5";


interface Props {
    post: Post
}

interface Post {
    id: string
    title: string
    date?: string
    content: string
    modified_date?: string
}

function PostComponent({ post }: Props) {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, [])

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="postComponent flex justify-center mt-8">
            <div className="px-4 w-full lg:w-[800px]">
                <ReactMarkdown
                    className="block content px-2 pt-1 pb-4 bg-white lg:px-4"
                    // skipHtml={true}
                    rehypePlugins={[rehypeRaw]}
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
                    {post.content}
                </ReactMarkdown>
                <hr />
                <small className="block pb-2 pt-1 text-right">
                    Fecha: {post.date} {post.modified_date !== '' && (<>- Modificado el {post.modified_date}</>)}
                </small>
            </div>
            {
                showTopBtn && (
                    <IoArrowUpCircleSharp className="fixed right-0 bottom-2 w-[4rem] h-[4rem] cursor-pointer" onClick={goToTop} />
                )
            }
        </div>
    );
}

export default PostComponent;