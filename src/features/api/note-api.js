const API = "http://localhost:5000/api/v1/notes/"

async function createNote(noteData, token) {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(noteData)
  })

  const data = await res.json()

  return data
}

async function allNotes(token) {
  const res = await fetch(API, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  })

  const data = await res.json()

  return data
}

async function singleNote(id, token) {
  const res = await fetch(API + id, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  })

  const data = await res.json()

  return data
}

async function deleteNote(id, token) {
  const res = await fetch(API + id, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  })

  const data = await res.json()

  return data
}

async function updateNote(id, noteData, token) {
  const res = await fetch(API + id, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(noteData)
  })

  const data = await res.json()

  return data
}

const noteAPI = {
  createNote,
  allNotes,
  singleNote,
  deleteNote,
  updateNote
}

export default noteAPI