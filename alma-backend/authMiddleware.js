import service from "./service.js";

export default async (req, res, next) => {
    const users = await service.getAllUsers();
    const auth = req.header("Authorization");

    if (auth?.startsWith("Basic ")) {
        const authData = auth.substring(6).split(":");
        const email = authData[0];
        const password = authData[1];

        const user = users.find(user => user.email === email);

        if (user && user.password === password) {
            next();
            return;
        }
    }

    res.status(401).end("Unauthorized");
};
