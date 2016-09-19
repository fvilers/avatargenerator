"use strict";

function ensureSsl (req, res, next) {
  if (process.env.NODE_ENV !== "production") {
    return next();
  }

  // Heroku version
  if (req.header("x-forwarded-proto") === "https") {
    return next();
  }

  // Classic version
  if (req.secure) {
    return next();
  }

  const httpsPort = req.app.get("https_port");
  let path = "https://" + req.hostname;

  if (httpsPort) {
    path += ":" + httpsPort;
  }

  path += req.originalUrl;
  
  res.redirect(301, path);
}

module.exports = ensureSsl;
