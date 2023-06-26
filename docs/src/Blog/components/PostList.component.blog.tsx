import { motion } from "framer-motion";
import { useEffect } from "react";
import Loading from "./Loading.component.blog";
import PostInfo from "./PostInfo.component.blog";
import SideBar from "./SideBar.component.blog";
import usePostFilter from "../context/usePostFilter";

function PostListBlog() {
    const { posts } = usePostFilter()

    useEffect(() => {
        document.title = 'Blog-Inicio';
        window.scroll(0, 0);
    }, []);

    return (
        <Loading>
            <div className="postList md:flex md:justify-center">
                <div className="md:flex md:justify-center md:w-10/12">

                    <motion.div
                        className="postList w-full flex flex-col gap-10 mt-10 md:px-0 md:max-w-[800px] md:gap-4"
                        initial={{ y: "100vh" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {
                            posts.length === 0 && (
                                <div className="post-card mt-0">
                                    <div className=" border-solid border-2 rounded-lg bg-white drop-shadow-lg">
                                        <div className="title block bg-dark-blue py-1 px-4 rounded-lg z-10">
                                            <h2 className="text-white">Posts no encontrados</h2>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {
                            posts.map((post, i) =>
                                <PostInfo post={post} key={i} />
                            )
                        }
                    </motion.div>

                    <SideBar />
                </div>
            </div>
        </Loading>
    );
}

export default PostListBlog;