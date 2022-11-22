import { useState } from "react"

export const useFetching = (callback) => {

    const [isPostsLoading, setIsPostsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetching = async (...args) => {
        try {
            setIsPostsLoading(true)
            await callback(...args)
        }
        catch (e) {
            setError(e.message)
        }
        finally {
            setIsPostsLoading(false)
        }
    }
    
    return [fetching, isPostsLoading, error]
}