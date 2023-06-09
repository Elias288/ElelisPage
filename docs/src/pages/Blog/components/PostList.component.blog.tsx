import { Link } from "react-router-dom";
import postList from "../../../post.json";

function PostListBlog() {
    return (
        <div className="postList w-full flex flex-col items-center px-2 lg:px-0">
            {postList.length &&
                postList.map((post, i) => {
                    return (
                        <div key={i} className="post-card w-full mb-4 border-solid border-2 max-w-[800px] bg-white">
                            <Link to={`post/${post.id}`}>
                                <div className="title bg-dark-blue text-white px-4 py-2 hover:bg-light-blue">
                                    <h1>{post.title}</h1>
                                </div>
                            </Link>

                            <div className="content px-2">
                                <small className="block pb-2 pt-1">Publicado el {post.date}</small>
                                <hr />

                                <p>{post.description}</p>
                                <small>Leer más...</small>
                            </div>

                        </div>
                    )
                })}
        </div>
    );
}

export default PostListBlog;