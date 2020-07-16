const URL = `http://localhost:3001/`

const getAllBeers = () => {
    return fetch(URL)
    .then(resp => resp.json())
    .catch(error => console.log(error))
}

const getToken = () => localStorage.getItem("jwt");

// const getUser = () => JSON.parse(atob(this.getToken().split(".")[1]));

const createNewUser = (userData) => {
    fetch(URL + "users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ user: userData }),
      })
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
          localStorage.setItem("jwt", res.jwt);
          return res;
        })
}

const logInUser = (userData) => {
  fetch(URL + `login`, {
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

const getUserProfile = () => {
  fetch(URL + "profile", {
    headers: {
      Authorization: `Bearer ${ getToken() }`,
    },
  })
    .then((res) => res.json())
    .then(console.log);
};

const validateToken = () => {
    return fetch(URL + "validate", {
        headers: {
            Authorization: `Bearer ${ getToken() }`,
        }
    })
    .then((res) => res.json())

}

export default { getAllBeers, createNewUser, logInUser, getUserProfile, validateToken }  