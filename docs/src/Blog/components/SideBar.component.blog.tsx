import categories from "../../Utils/Categories.json";
import usePostFilter from "../context/usePostFilter";
import { IoTrash } from "react-icons/io5";

function SideBar() {
    const { categoriesToFilter, addCategory, clearCategories } = usePostFilter()

    const getCategory = (key: string): string | undefined => {
        return (categories as { [key: string]: string })[key]
    }

    return (
        <div className="sideNav h-max flex-1 w-full flex flex-col items-center mt-10 rounded-md drop-shadow-lg md:mx-4 md:min-w-[250px] md:max-w-[300px]">
            <div className="w-full h-full px-2 bg-white border-solid border-2 rounded-lg group-hover:drop-shadow-none">

                <div className="">
                    <h3>Sobre el blog</h3>
                </div>

                <hr />

                <div className="selectedCategory">
                    <h3>Categorias</h3>

                    <ul className="flex flex-wrap gap-2 mt-2">
                        {
                            Object.keys(categories).map((key, i) => {

                                if (categoriesToFilter.some(CTF => key === CTF)) {
                                    return (
                                        <li
                                            className="category bg-green-259544 px-2 py-1 cursor-pointer text-white rounded-md border-b-4 border-b-light-blue hover:border-b-transparent hover:bg-green-259544 md:hover:bg-light-blue"
                                            onClick={() => addCategory(key)}
                                            key={i}
                                        >
                                            {getCategory(key)}
                                        </li>
                                    )
                                }

                                return (
                                    <li
                                        className="category bg-light-blue/[.7] px-2 py-1 cursor-pointer text-white rounded-md border-b-4 border-b-light-blue hover:border-b-transparent hover:bg-light-blue md:hover:bg-green-259544"
                                        onClick={() => addCategory(key)}
                                        key={i}
                                    >
                                        {getCategory(key)}
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <div className="formFilter flex gap-2 h-[36px] mt-2">
                        <button
                            onClick={() => clearCategories()}
                            className="btnClear flex-1 text-2xl bg-red-800 rounded-md flex justify-center cursor-pointer text-center disabled:cursor-auto disabled:bg-red-800/[.7]"
                            disabled={categoriesToFilter.length === 0}
                        >
                            <IoTrash
                            className="text-white h-[36px] w-[36px] py-2"
                            >
                                Clear
                            </IoTrash>

                        </button>
                    </div>
                </div>

                <hr />

                <div className="">
                    <h3>Post Recientes</h3>
                </div>

            </div>
        </div>
    );
}

export default SideBar;