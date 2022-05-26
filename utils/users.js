const users = [];

let userName = (id, username, room) => {
    const user = { id, username, room };
    users.push(user);
    return user;
}

let getCurrentUser = (id) => {
    return users.find(user => user.id ===id);
}

module.exports = {
    userName,
    getCurrentUser
};