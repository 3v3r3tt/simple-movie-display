export const fetchData = async (requestURL) => {
  const headers = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'ws-api': '2.1'
    }
  }

  try {
    const response = await fetch(requestURL, headers)
    const data = await response.json()
    return data
  } catch (e) {
    console.log('fetchGrid error: ', e)
  }
}
