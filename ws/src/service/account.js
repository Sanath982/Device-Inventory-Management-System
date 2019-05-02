const SystemDb = require('../model/models');

const SystemService = {};

SystemService.getProducts = (value,type) => {
    return SystemDb.getProducts(value,type).then(productDetails => {
        if (productDetails) {
            return productDetails;
        }
        else {
            let err = new Error("no records found");
            err.status = 403;
            throw err;
        }
    })
}

SystemService.updateDetails = (id) => {
    return SystemDb.updateDetails(id).then(productDetails => {
        if (productDetails) {
            return "deallocation is successful";
        }
        else {
            let err = new Error("updation failed");
            err.status = 403;
            throw err;
        }
    })
}

SystemService.updateUserDetails = (id,user) => {
    return SystemDb.updateUserDetails(id,user).then(productDetails => {
        if (productDetails) {
            return "updation of user is successful";
        }
        else {
            let err = new Error("updation of user is failed");
            err.status = 403;
            throw err;
        }
    })
}

SystemService.createSystem = (id,name) => {
    return SystemDb.createSystem(id,name).then(productDetails => {
        if (productDetails) {
            return "system created successful";
        }
        else {
            let err = new Error("system creation failed");
            err.status = 403;
            throw err;
        }
    })
}

SystemService.deleteSystem = (id) => {
    return SystemDb.deleteSystem(id).then(productDetails => {
        if (productDetails) {
            return "system  deleted successful";
        }
        else {
            let err = new Error("system deletion failed");
            err.status = 403;
            throw err;
        }
    })
}

SystemService.displaySystem = () => {
    return SystemDb.displaySystem().then(productDetails => {
        if (productDetails) {
            return productDetails;
        }
        else {
            let err = new Error("system deletion failed");
            err.status = 403;
            throw err;
        }
    })
}

module.exports = SystemService;