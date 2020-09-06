// const URL = `http://localhost:3001/`
const URL = "https://let-me-go.herokuapp.com/"

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
      return res;
    })
}

const configObject = (request, key = "", data = "") => {
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
  const obj = configObject("PATCH", "user", userData)
  return authorizedFetch(URL + "users/" + id, obj)
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
}

const requestNewTrade = (tradeData) => {
  const obj = configObject("POST", "trade", tradeData)
  return authorizedFetch(URL + "trades", obj)
  .then((res) => res.json())
  .then((res) => {
    return res;
  })
}

const getMyTrades = (id) => {
  return authorizedFetch(URL + "trades/" + id)
  .then(resp => resp.json())
  .catch(error => console.log(error))
}

const rejectTradeRequest = (tradeData, id) => {
  const obj = configObject("PATCH", "trade", tradeData)
  return authorizedFetch(URL + "trades/" + id, obj)
  .then((res) => res.json())
  .then((res) => {
    return res;
  })
}

const approveTradeRequest = (tradeData, id) => {
  const obj = configObject("PATCH", "trade", tradeData)
  return authorizedFetch(URL + "approve/" + id, obj)
  .then((res) => res.json())
  .then((res) => {
    return res;
  })
}

const getMyItems = (id) => {
  return authorizedFetch(URL + "myItems/" + id)
  .then(resp => resp.json())
  .catch(error => console.log(error))
}


const getChosenItem = (itemId) => {
  return authorizedFetch(URL + "items/" + itemId)
  .then(resp => resp.json())
  .catch(error => console.log(error))
}

const updateItemInfo = (itemData, id) => {
  const obj = configObject("PATCH", "item", itemData)
  return authorizedFetch(URL + "items/" + id, obj)
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
}


const deleteItem = (id) => {
  const obj = configObject("DELETE")
  return authorizedFetch(URL + "items/" + id, obj)
}

export default { 
  createNewUser, logInUser, validateToken, getAllCategories, getChosenCategory, getMyItems,
  createNewItem, updateUserInfo, requestNewTrade, getMyTrades, rejectTradeRequest, approveTradeRequest,
  getChosenItem, updateItemInfo, deleteItem
}  