'use strict';

export const wrapPromiseHandler = handler =>
  (req, res, next) =>
    handler(req, res)
      .then((body) => {
        if (!body) {
          res.send(204);
        } else {
          res.send(body);
        }
        next();
      })
      .catch(next);
