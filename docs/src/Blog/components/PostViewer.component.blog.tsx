import { useEffect, useState } from "react";
import Post from "../../Utils/Post.interface";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IoArrowUpCircleSharp } from "react-icons/io5";

interface Props {
  data: Post;
}

function PostViewer({ data }: Props) {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 400 ? setShowTopBtn(true) : setShowTopBtn(false);
    });
  }, []);

  return (
    <>
      {data.contents.map((content) => {
        return (
          <ReactMarkdown
            className="block content px-4 pt-1 pb-4 bg-white lg:px-8"
            // skipHtml={true}
            rehypePlugins={[rehypeRaw]}
            components={{
              code({ node, inline, className, style, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={a11yDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className="md-post-code" {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        );
      })}

      {showTopBtn && (
        <IoArrowUpCircleSharp
          className="fixed right-0 bottom-2 w-[4rem] h-[4rem] cursor-pointer"
          onClick={goToTop}
        />
      )}
    </>
  );
}

export default PostViewer;
