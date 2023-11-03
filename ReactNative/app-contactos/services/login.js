const BASE_URL = 'https://mi-server.com'

const API_TOKEN = 'xxxxxxxxx-xxxxxxxx-xxxxxxxx'

const login = (formData) => {

  // return new Promise((resolve, reject) => {
  //   fetch(`${BASE_URL}/login`, {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(formData)
  //   })
  //     .then(res => resolve(res.json()))
  //     .catch(err => reject(err))
  // })
  console.log("Me voy a loguear al back con estas credenciales", formData)
  return new Promise((resolve, reject) => {
    return resolve({
      access_token: API_TOKEN
    })
  })
  


}


export default {
  login
}