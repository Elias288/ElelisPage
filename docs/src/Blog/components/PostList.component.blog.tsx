import postList from "../../post.json";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Loading from "./Loading.component.blog";
import PostInfo from "./PostInfo.component.blog";

function PostListBlog() {

    useEffect(() => {
        document.title = 'Blog-Inicio';
        window.scroll(0, 0);

    }, []);

    return (
        <Loading>
            <motion.div
                className="postList w-full flex flex-col items-center gap-10 px-2 mt-8 lg:px-0"
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {
                    postList.length &&
                    postList.map((post, i) =>
                        <PostInfo post={post} key={i} />
                    )
                }
            </motion.div>
        </Loading>
    );
}

export default PostListBlog;