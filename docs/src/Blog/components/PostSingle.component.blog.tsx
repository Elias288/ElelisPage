/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import Loading from "./Loading.component.blog";
import Post from "../../Utils/Post.interface";
import PostPaginator from "./PostPaginator.component.blog";

interface Props {
    post: Post
}

function PostSingleComponent({ post }: Props) {
    useEffect(() => {
        window.scroll(0, 0)
    });

    return (
        <Loading>
            <div className="postComponent flex justify-center mt-8">
                <div className="px-4 w-full lg:w-[800px]">

                    <PostPaginator data={post}/>

                    <hr />

                    <small className="block pb-2 pt-1 text-right">
                        Fecha: {post.date} {post.modified_date !== '' && (<>- Modificado el {post.modified_date}</>)}
                    </small>
                </div>

            </div>
        </Loading>
    );
}

export default PostSingleComponent;