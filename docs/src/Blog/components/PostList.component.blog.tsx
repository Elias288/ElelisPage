import { Link } from "react-router-dom";
import postList from "../../post.json";
import data from "../../utils/Categories.json";

function PostListBlog() {

    const getCategory = (key: string): string | undefined => {
        return (data as { [key: string]: string })[key]
    }

    return (
        <div className="postList w-full flex flex-col items-center gap-10 px-2 mt-8 lg:px-0">
            {
                postList.length &&
                postList.map((post, i) => {
                    return (
                        <Link to={`post/${post.id}`} className="post-card w-full max-w-[800px] mt-0 text-black group" key={i}>
                            <div className=" border-solid border-2 rounded-lg bg-white drop-shadow-lg group-hover:drop-shadow-none">

                                <div className="title bg-dark-blue pt-1 px-4 rounded-t-lg group-hover:bg-light-blue z-10">
                                    <h1 className="py-0 my-0 text-white truncate">{post.title}</h1>
                                </div>

                                <div className="tags flex flex-wrap gap-2 px-2 py-1">
                                    {
                                        post.categories && post.categories.map((category, i) => {
                                            return (
                                                <div key={i}
                                                    className="category bg-light-blue/[.7] px-2 py-1 text-white rounded-md border-b-4 border-b-light-blue"
                                                >
                                                    {getCategory(category)}
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <hr />

                                <div className="content px-2 pt-3">

                                    <p className="m-0 group-hover:text-black">{post.description}</p>

                                    <hr />

                                    <small className="block pb-2 pt-1 text-right group-hover:text-black">
                                        Publicado el {post.date} {post.modified_date !== '' && (<>- Modificado el {post.modified_date}</>)}
                                    </small>

                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    );
}

export default PostListBlog;