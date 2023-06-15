import categories from "../../Utils/Categories.json";

function SideBar() {

    const getCategory = (key: string): string | undefined => {
        return (categories as { [key: string]: string })[key]
    }

    return (
        <div className="sideNav flex-1 w-full flex flex-col items-center mt-10 rounded-md drop-shadow-lg mr-4">
            <div className="w-full h-full px-2 bg-white border-solid border-2 rounded-lg group-hover:drop-shadow-none md:min-w-[250px] md:max-w-[300px]">

                <div className="">
                    <h3>Sobre el blog</h3>
                </div>

                <hr />

                <div className="selectedCategory">
                    <h3>Categorias</h3>
                    <ul className="flex flex-wrap gap-2">
                        {
                            Object.keys(categories).map((key, i) => {
                                return (
                                    <li key={i} className="category bg-light-blue/[.7] px-2 py-1 text-white rounded-md border-b-4 border-b-light-blue hover:border-b-transparent hover:bg-light-blue">
                                        {getCategory(key)}
                                    </li>
                                )
                            })
                        }

                    </ul>
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