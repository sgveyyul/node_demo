const user = require('../mock_data/users');

exports.getUsers = (req, res, next) => {
    console.log(user.users)
    res.status(200).json({
        data: user.users
    });
};