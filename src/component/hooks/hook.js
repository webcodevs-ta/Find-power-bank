import { useEffect, useState } from "react"

const useFeedback = () => {
    const [feedback, setFeedback] = useState([])
    useEffect(() => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setFeedback(data))
    }, [])
    return [feedback, setFeedback]
}
export default useFeedback;