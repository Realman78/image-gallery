
import fetch from 'node-fetch'

const createCommentFetcher = async (body) => {
    const res = await fetch('/api/comments/create', {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await res.json()
    return data.content
}

module.exports = {
    createCommentFetcher
}