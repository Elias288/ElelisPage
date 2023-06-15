import React, { createContext, useEffect, useState } from "react"
import Post from "../../Utils/Post.interface"
import postList from "../../post.json";

interface Props {
    children: React.ReactNode
}

interface PostFilterValues {
    posts: Array<Post>,
    categoriesToFilter: Array<string>,
    addCategory: (cat: string) => void,
    clearCategories: () => void
}

export const PostFilterContext = createContext<PostFilterValues>({
    posts: [],
    categoriesToFilter: [],
    addCategory: () => [],
    clearCategories: () => []
})

export const PostFilterProvider: React.FC<Props> = ({children}) => {
    const [posts, setPosts] = useState<Array<Post>>([])
    const [categoriesToFilter, setCategoriesToFilter] = useState(Array<string>)

    useEffect(() => {
        setPosts(postList)
    }, [])

    const addCategory = (category: string) => {
        const index = categoriesToFilter.indexOf(category)

        if (index === -1 ){
            setCategoriesToFilter([ ...categoriesToFilter, category ])
            return filter([ ...categoriesToFilter, category ])
        }

        const newCategoriesToFilter = [... categoriesToFilter]
        newCategoriesToFilter.splice(index, 1)
        setCategoriesToFilter(newCategoriesToFilter)

        filter(newCategoriesToFilter)
    }

    const clearCategories = () => {
        setCategoriesToFilter([])
        setPosts(postList)
    }

    const filter = (categoriesToSearch: Array<string>) => {
        
        if (categoriesToSearch.length === 0 ) return setPosts(postList)
        
        const newListPost = postList.filter((p: Post) => {
            return categoriesToSearch.every(cat => p.categories.includes(cat))
        })

        setPosts(newListPost)
    }

    return (
        <PostFilterContext.Provider
            value={{
                posts,
                categoriesToFilter,
                addCategory,
                clearCategories
            }}
        >
            {children}
        </PostFilterContext.Provider>
    )
}