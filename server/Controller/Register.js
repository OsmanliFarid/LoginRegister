import { UserModel } from "../model/userModel.js";

export const RegisterCreate = (req, res) => {
  const body = req.body;
  UserModel.create(body)
    .then(() => {
      res.status(201).json({ message: "user created" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Server xətası" });
    });
};
