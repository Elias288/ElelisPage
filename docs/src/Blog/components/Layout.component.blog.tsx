import HeaderBlog from "./Header.component.blog";
import FooterBlog from "./Footer.component.blog";

interface Props {
    children: JSX.Element | string
}

function Layout({ children }: Props) {
    return (
        <div className="home w-full min-h-screen flex flex-col justify-between font-mono">
            <HeaderBlog />
            <div className="flex-1">
                {children}
            </div>
            <FooterBlog />
        </div>
    );
}

export default Layout;