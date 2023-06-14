function SideBar() {
    return (
        <div className="sideNav flex-1 w-full flex flex-col items-center px-4 mt-10 rounded-md drop-shadow-lg mr-4">
            <div className="w-full h-full max-w-[800px] px-2 bg-white border-solid border-2 rounded-lg group-hover:drop-shadow-none">
                <h2>SideBar</h2>
                <div className="">
                    Sobre el blog
                </div>

                <div className="">
                    Post Recientes
                </div>

            </div>
        </div>
    );
}

export default SideBar;