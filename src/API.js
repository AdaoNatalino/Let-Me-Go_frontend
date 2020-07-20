const URL = `http://localhost:3001/`

// authorizedFetch("someURL", {
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ key: "value" }),
// })

const authorizedFetch = (url, options = {}) => {
  return fetch(url, {
    method: options.method,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getToken()}`,
    },
    body: options.body,
  })
}

const getAllItems = () => {
    return authorizedFetch(URL + "items")
    .then(resp => resp.json())
    .catch(error => console.log(error))
}

const getToken = () => localStorage.getItem("jwt");

const createNewUser = (userData) => {
    return fetch(URL + "users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ user: userData }),
      })
        .then((res) => res.json())
        .then((res) => {
            // console.log(res);
          localStorage.setItem("jwt", res.jwt);
          return res;
        })
}

const logInUser = (userData) => {
  return fetch(URL + `login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user: userData }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("jwt", res.jwt);
        return res;
      })
}

const validateToken = () => {
    return fetch(URL + "validate", {
        headers: {
            Authorization: `Bearer ${ getToken() }`,
        }
    })
    .then(res => res.json())
}

// used to create buttons
const getAllCategories = () => {
  return authorizedFetch(URL + "categories")
  .then(resp => resp.json())
  .catch(error => console.log(error))
}

const getChosenCategory = (categoryName) => {
  return authorizedFetch(URL + "categories/" + categoryName)
  .then(resp => resp.json())
  .catch(error => console.log(error))
}

const configObject = (request, key, data) => {
  const obj = {
    method: request,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ [key]: data }),
  }
  return obj
}

const createNewItem = (itemData) => {
  // const obj = configObject("POST", "item", itemData)
  // console.log(obj)
  // return authorizedFetch(URL + 'items', obj)
  // .then(resp => resp.json()).
  // catch(error => console.log(error))

  return authorizedFetch(URL + "items", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ item: itemData }),
  })
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
      // localStorage.setItem("jwt", res.jwt);
      return res;
    })
}

// const uploadImage = async e => {
//   const files = e.target.files
//   const data = new FormData()
//   data.append('file', files[0])
//   data.append("upload_preset", "sansonov")
//   // setLoading(true)
//   const res = await fetch("https://api.cloudinary.com/v1_1/dgvhmuqlq/image/upload",{
//      method: "POST",
//      body: data 
//   })
//   const file = await res.json()
//   // setImage(file.secure_url)
//   // setLoading(false)
// }

export default { 
  createNewUser, logInUser, validateToken, getAllItems, getAllCategories, getChosenCategory, 
  createNewItem
}  