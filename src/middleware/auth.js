

import Jwt from "jsonwebtoken";


let verifyToken = (req, res, next) => {
  let token = req.headers.authorization;
console.log(token,"token verified");
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }


  Jwt.verify(token,
        'testing',
            (err, decoded) => {
              if (err) {
                return res.status(401).send({
                  message: "Unauthorized!",
                });
              }
              req.body.email = decoded.email;
              next();
            });
};

export default verifyToken;