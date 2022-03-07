const API = "http://localhost:5000/api/v1/user/"

async function registerUser(userData) {
  const res = await fetch(API + "register", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })

  const data = await res.json()

  if (data) {
    localStorage.setItem("user", JSON.stringify(data))
  }

  return data
}

async function loginUser(userData) {
  const res = await fetch(API + "login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  })

  const data = await res.json()

  if (data) {
    localStorage.setItem("user", JSON.stringify(data))
  }

  return data
}

function logoutUser() {
  localStorage.removeItem("user")
}

const authAPI = {
  registerUser,
  loginUser,
  logoutUser
}

export default authAPI

