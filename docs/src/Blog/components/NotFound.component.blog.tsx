import { useRouteError } from "react-router-dom";
import Layout from "./Layout.component.blog";

function NotFound() {
    const error = useRouteError();
    console.log(error);
    
    return (
        <Layout>
            <>
                <p>Page Not Found</p>
                <h3>404</h3>
            </>
        </Layout>
    );
}

export default NotFound;