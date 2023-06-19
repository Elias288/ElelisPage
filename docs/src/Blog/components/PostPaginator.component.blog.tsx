import { useEffect, useState } from "react";
import Post from "../../Utils/Post.interface";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IoArrowUpCircleSharp, IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { ImLast, ImFirst } from "react-icons/im";

interface Props {
    data: Post
}

function PostPaginator({ data }: Props) {
    const [currentPage, setCurrentPage] = useState(1)
    const [showTopBtn, setShowTopBtn] = useState(false);
    const cantPages = data.contents.length

    const handleNextPage = () => {
        if (currentPage < cantPages) {
            window.scroll(0, 0)
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage !== 0) {
            window.scroll(0, 0)
            setCurrentPage(currentPage - 1);
        }
    };

    const handleLastPage = () => {
        if (currentPage < cantPages) {
            window.scroll(0, 0)
            setCurrentPage(cantPages);
        }
    };

    const handleFirstPage = () => {
        if (currentPage !== 0) {
            window.scroll(0, 0)
            setCurrentPage(1);
        }
    };

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, [])

    return (
        <>
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
                {data.contents[currentPage - 1]}
            </ReactMarkdown>

            {
                cantPages !== 1 && (
                    <div className="pageNav w-full flex justify-center gap-2 p-4">
                        <button onClick={handleFirstPage} className="btnPrev px-2 py-1 bg-blue-900 text-white rounded-md disabled:bg-blue-950 disabled:text-gray-500" disabled={currentPage === 1}>
                            <ImFirst />
                        </button>
                        <button onClick={handlePrevPage} className="btnPrev px-2 py-1 bg-blue-900 text-white rounded-md disabled:bg-blue-950 disabled:text-gray-500" disabled={currentPage === 1}>
                            <IoArrowBackOutline />
                        </button>

                        {currentPage} / {cantPages}

                        <button onClick={handleNextPage} className="btnNext px-2 py-1 bg-blue-900 text-white rounded-md disabled:bg-blue-950 disabled:text-gray-500" disabled={currentPage === cantPages}>
                            <IoArrowForwardOutline />
                        </button>
                        <button onClick={handleLastPage} className="btnNext px-2 py-1 bg-blue-900 text-white rounded-md disabled:bg-blue-950 disabled:text-gray-500" disabled={currentPage === cantPages}>
                            <ImLast />
                        </button>
                    </div>
                )
            }

            {
                showTopBtn && (
                    <IoArrowUpCircleSharp className="fixed right-0 bottom-2 w-[4rem] h-[4rem] cursor-pointer" onClick={goToTop} />
                )
            }
        </>
    );
}

export default PostPaginator;