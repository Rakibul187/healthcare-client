import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - HealthCare`
    }, [title])
}

export default useTitle;