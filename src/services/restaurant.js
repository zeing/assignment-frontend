import axios from 'axios';

export default () => {
  const promise = new Promise((resolve, reject) => {
    let data = localStorage.getItem('restaurant')
    if (!data) {
      let params = { location: 'bang%sue' }
      axios
        .get('http://localhost:3000', { params, crossdomain: true })
        .then((data) => {
          // success callback
          localStorage.setItem('restaurant', JSON.stringify(data.data))
          resolve(data.data)
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    } else {
      resolve(JSON.parse(data));
    }
  })
  return promise
}
