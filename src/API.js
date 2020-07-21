const URL = `http://localhost:3001/`

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

const createNewItem = (itemData) => {
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
      return res;
    })
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

const updateUserInfo = (userData, id) => {
  return authorizedFetch(URL + "users/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ user: userData }),
  })
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
      return res;
    })



  // const obj = configObject("PATCH", "user", userData)
  // return authorizedFetch(URL + "users/" + id, obj)
}



export default { 
  createNewUser, logInUser, validateToken, getAllItems, getAllCategories, getChosenCategory, 
  createNewItem, updateUserInfo
}  