import { createContext, useState } from "react";

const BlogrContext = createContext();

export const BlogrProvider = ({ children }) => {
    const [open, setOpen] = useState(false)
    return (
        <BlogrContext.Provider value = {{
            open,
            setOpen
        }}>
            { children }
        </BlogrContext.Provider>
    )
}

export default BlogrContext;