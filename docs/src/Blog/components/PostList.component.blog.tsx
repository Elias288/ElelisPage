import { motion } from "framer-motion";
import { useEffect } from "react";
import Loading from "./Loading.component.blog";
import PostInfo from "./PostInfo.component.blog";
import SideBar from "./SideBar.component.blog";
import usePostFilter from "../context/usePostFilter";

function PostListBlog() {
    const {posts} = usePostFilter()

    useEffect(() => {
        document.title = 'Blog-Inicio';
        window.scroll(0, 0);
    }, []);

    return (
        <Loading>
            <div className="postList md:flex md:justify-center">
                <div className="md:flex md:justify-center md:w-10/12">

                    <SideBar />

                    <motion.div
                        className="postList w-full flex flex-col gap-10 mt-10 md:px-0 md:max-w-[800px] md:gap-4"
                        initial={{ y: "100vh" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {
                            posts.map((post, i) =>
                                <PostInfo post={post} key={i} />
                            )
                        }
                    </motion.div>
                    
                </div>
            </div>
        </Loading>
    );
}

export default PostListBlog;