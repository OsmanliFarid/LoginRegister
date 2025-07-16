import { compare } from "bcrypt";
import { UserModel } from "../model/userModel.js";

export const LoginMiddleware = (req, res, next) => {
  const { password, username } = req.body;
  UserModel.findOne({ username: username }).then((data) => {
    if (data) {
      compare(password, data.password, (err, result) => {
        if (result) {
          req.message = "ugurla login olundu";
          next();
        } else {
          return res
            .status(400)
            .send({ message: "parol veya username sehvdir" });
        }
      });
    } else {
      return res.status(400).send({ message: "parol veya username sehvdir" });
    }
  });
};
