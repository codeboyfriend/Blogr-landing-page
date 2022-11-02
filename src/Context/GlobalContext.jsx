import { createContext } from "react";

const BlogrContext = createContext();

export const BlogrProvider = ({ children }) => {
    return (
        <BlogrContext.Provider>
            { children }
        </BlogrContext.Provider>
    )
}

export default BlogrContext;