/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IoArrowUpCircleSharp } from "react-icons/io5";
import Loading from "./Loading.component.blog";
import Post from "../../Utils/Post.interface";
import categories from "../../Utils/Categories.json";

interface Props {
    post: Post
}

function PostSingleComponent({ post }: Props) {
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

    const getCategory = (key: string): string | undefined => {
        return (categories as { [key: string]: string })[key]
    }

    return (
        <Loading>
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

                    <div className="tags flex flex-row-reverse   flex-wrap gap-2 px-2 py-1">
                        {
                            post.categories && post.categories.map((category, i) => {
                                return (
                                    <button key={i}
                                        className="category bg-light-blue/[.7] px-2 py-1 text-white rounded-md border-b-4 border-b-light-blue hover:border-b-transparent hover:bg-light-blue"
                                    >
                                        {getCategory(category)}
                                    </button>
                                )
                            })
                        }
                    </div>

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
        </Loading>
    );
}

export default PostSingleComponent;