import { UserModel } from "../model/userModel.js";
import bcrypt, { hash } from "bcrypt";
export const RegisterMiddleware = (req, res, next) => {
  const body = req.body;
  UserModel.findOne({ username: body.username }).then((IsShow) => {
    if (body.age < 18) {
      return res.send({ message: "yasiniz 18-den azdir" });
    }
    if (!IsShow) {
      bcrypt.hash(body.password, 10, (err, hash) => {
        body.password = hash;
        next();
      });
    } else {
      return res.send({
        message: "bu istifadeci var",
      });
    }
  });
};
