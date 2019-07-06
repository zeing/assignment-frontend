import axios from 'axios';

export default () => {
  const promise = new Promise((resolve, reject) => {
    const location = 'bang%sue%4'
    let data = localStorage.getItem(location)
    if (!data) {
      let params = { location }
      axios
        .get('http://localhost:3000/scg', { params })
        .then((data) => {
          // success callback
          localStorage.setItem(location, JSON.stringify(data.data.result))
          resolve(data.data.result)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    } else {
      resolve(JSON.parse(data))
    }
  })
  return promise
}
