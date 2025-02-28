async function findAndSaveUser(Users) {
    let user = await Users.findOn({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({gender:'m'})
}