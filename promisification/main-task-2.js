const users = [
    { name: "Mango", active: true },
    { name: "Poly", active: false },
    { name: "Ajax", active: true },
    { name: "Lux", active: false }
];

const toggleUserState = (allUsers, userName, callback) => {
    const updatedUsers = allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user
    );

    callback(updatedUsers);
};

const newToggleUserState = (allUsers, userName) => {
    return new Promise((resolve, reject) => {
        const updatedUsers = allUsers.map(user =>
            user.name === userName ? { ...user, active: !user.active } : user
        );

        resolve(updatedUsers);
    });
};

const newLogger = updatedUsers => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
toggleUserState(users, "Mango", newLogger);
toggleUserState(users, "Lux", newLogger);

/*
 * Должно работать так
 */
newToggleUserState(users, "Mango").then(newLogger);
newToggleUserState(users, "Lux").then(newLogger);
