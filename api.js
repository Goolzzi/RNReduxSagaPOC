const people = [
    { name: 'Nader', age: 36 },
    { name: 'Amanda', age: 24 },
    { name: 'Jason', age: 44 }
]
import { API_URL } from './constants'

export default (email) => {
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/api/v1/password/forgot`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
            })
        })
        .then((res) => res.json()) 
        .then((data) => {
            resolve(data.message)
        })
    })
}