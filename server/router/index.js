const adminRouter = require("./admin-auth.route");

module.exports = [
    { path: "/api/admin/auth", router: adminRouter },
];