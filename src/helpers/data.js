export const getIdUser = (userName, users) => {
    const getUser = users.find(user => user.username === userName)
    return getUser.id
}


