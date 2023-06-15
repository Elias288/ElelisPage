import { useContext } from "react";
import { PostFilterContext } from "./PostFilter.context.blog";

function usePostFilter() {
    const context = useContext(PostFilterContext)
    if(!context) throw new Error('usePostFilter must be used within a PostFilterContext')
    return context
}

export default usePostFilter;