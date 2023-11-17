

// один предмет
export async function getSubject() {
    setLoading(true)
    let res = await axios.get('http://localhost:1000/subject').then(({data}) => data).finally(setLoading(false))
    return res
  }

