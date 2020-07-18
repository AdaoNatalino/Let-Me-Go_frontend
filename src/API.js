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

export default { createNewUser, logInUser, validateToken, getAllItems, getAllCategories, getChosenCategory }  