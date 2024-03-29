import { Link } from "react-router-dom";
import Post from "../../Utils/Post.interface";
import categories from "../../Utils/Categories.json";
import usePostFilter from "../context/usePostFilter";

interface Props {
    post: Post
}

function PostInfo({ post }: Props) {
    const { categoriesToFilter, addCategory } = usePostFilter()

    const getCategory = (key: string): string | undefined => {
        return (categories as { [key: string]: string })[key]
    }

    return (
        <div className="post-card mt-0 text-black">
            <div className=" border-solid border-2 rounded-lg bg-white drop-shadow-lg">

                <Link to={`post/${post.id}`} className="title block bg-dark-blue py-1 px-4 rounded-t-lg hover:bg-light-blue z-10">
                    <h2 className="py-0 my-0 text-white truncate">{post.title}</h2>
                </Link>

                <div className="tags flex flex-wrap gap-2 px-2 py-1">
                    {
                        post.categories && post.categories.map((category, i) => {
                            if (categoriesToFilter.some(CTF => category === CTF)){
                                return (
                                    <button
                                        className="category bg-green-259544 px-2 py-1 cursor-pointer text-white rounded-md border-b-4 border-b-light-blue hover:border-b-transparent hover:bg-green-259544 md:hover:bg-light-blue"
                                        onClick={() => addCategory(category)}
                                        key={i}
                                    >
                                        {getCategory(category)}
                                    </button>
                                )
                            }

                            return (
                                <button
                                    className="category bg-light-blue/[.7] px-2 py-1 cursor-pointer text-white rounded-md border-b-4 border-b-light-blue hover:border-b-transparent hover:bg-light-blue md:hover:bg-green-259544"
                                    onClick={() => addCategory(category)}
                                    key={i}
                                >
                                    {getCategory(category)}
                                </button>
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
        </div>
    );
}

export default PostInfo;