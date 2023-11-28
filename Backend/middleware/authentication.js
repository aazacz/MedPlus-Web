const express = require("express")
const jwt = require('jsonwebtoken')


const auth = (role) => (req, res, next) => {
    console.log("role   " + role);

    if (role === "User") {
        // console.log("req   "+JSON.stringify(req.headers, null, 2));
        const token = req.headers["authorization-key"]
        console.log("token in the auth section " + token);
       
        if (!token) {
            console.log("not authorosed");
            return res.json({ message: "Not Authorised" })
        }
        else {
            console.log("authorised");
            jwt.verify(token, process.env.jwtsecretUser, (err, decoded) => {
                if (err) {
                    console.log(err + "  not authorised agaiun");

                    if (err.name === 'TokenExpiredError') { //if token expired
                        console.log("Token has expired");
                        return res.json({ message: "TimedOut" });
                    }
                    res.json('not Authenticated')
                }
                else {
                    console.log("authorised again");

                    console.log(decoded.role);
                    console.log(decoded._id);
                    if (decoded.role === role) {
                        req.userId = decoded._id
                        req.role = decoded.role
                        next()
                    }
                }
            })
        }
    }
    else if(role === "Doctor"){
        const token = req.headers["authorization-key"]
        console.log("token in the auth section " + token);
       
        if (!token) {
            console.log("not authorosed");
            return res.json({ message: "Not Authorised" })
        }
        else {
            console.log("authorised 1");
            jwt.verify(token, process.env.jwtsecretDoctor, (err, decoded) => {
                if (err) {
                    console.log(err + "  not authorised agaiun");

                    if (err.name === 'TokenExpiredError') { //if token expired
                        console.log("Token has expired");
                        return res.json({ message: "TimedOut" });
                    }
                    res.json('not Authenticated')
                }
                else {
                    console.log("authorised again");

                    console.log(decoded.role);
                    console.log(decoded._id);
                    if (decoded.role === role) {
                        req.userId = decoded._id
                        req.role = decoded.role
                        next()
                    }
                }
            })
        }
    }
    
}
module.exports = auth