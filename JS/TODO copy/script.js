function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'Alice' })
    }, 1000)
  })
}

async function main() {
  const user = await getUser()
  console.log(user.name)
}
getUser()
main()