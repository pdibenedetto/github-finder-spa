const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

// Get search results and set state
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })
  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  })
  const { items } = await response.json()

  return items
}

// Get initial users (testing purposes)
const fetchUsers = async () => {
  const response = await fetch(`${GITHUB_URL}/users`, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  })
  return response.json()
}

// Get a single user
export const getUser = async (login) => {
  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  })

  if (response.status === 404) {
    window.location = '/notfound'
  } else {
    return response.json()
  }
}

// Get user repositories and set state
export const getUserRepos = async (login) => {
  const params = new URLSearchParams({ sort: 'created', per_page: 10 })

  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  })
  return response.json()
}
