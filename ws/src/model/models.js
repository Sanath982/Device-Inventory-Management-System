const SystemCollection = require('../utilities/connection');

const SystemDb = {}

SystemDb.getProducts = (value,type) => {
    return SystemCollection.getSystemCollection().then(model => {
        if(type == 1){
            // console.log("in 1");
            return model.findOne({ "systemId": parseInt(value,10) }).then( productData =>  {
                if(productData){
                     return productData
                }else {
                    return null
            }
        })
        }
        if(type == 2){
            return model.findOne({ "systemName": value }).then(productData => { return productData })
        }
        if(type == 3){
            return model.findOne({ "user": value }).then(productData => { return productData })
        }
    })
}

SystemDb.updateDetails = (id) => {
    return SystemCollection.getSystemCollection().then(model => {
        return model.updateOne({systemId : parseInt(id)},{ $set :{'user' : null}})
            .then(productData => { if (productData.nModified > 0) return true })
    })
}

SystemDb.updateUserDetails = (id,user) => {
    return SystemCollection.getSystemCollection().then(model => {
        return model.updateOne({systemId : parseInt(id)},{ $set :{'user' : user}})
            .then(productData => { if (productData.nModified > 0) return true })
    })
}

SystemDb.createSystem = (id,name) => {
    // console.log(id,name);
    return SystemCollection.getSystemCollection().then(model => {
        return model.find({systemId : parseInt(id)}).then(data => {
            if(data.length == 0){
                return model.create({systemId : parseInt(id), systemName : name, user : null})
            .then(productData => { 
             if (productData) return true })
            }
            else{
                return null
            }
        })
        
    })
}

SystemDb.deleteSystem = (id) => {
    return SystemCollection.getSystemCollection().then(model => {
        return model.deleteOne({systemId : parseInt(id)})
            .then(productData => {
                console.log(productData);
                
                if (productData.deletedCount == 1) return true })
    })
}

SystemDb.displaySystem = () => {
    return SystemCollection.getSystemCollection().then(model => {
        return model.find()
            .then(productData => {
                // console.log(productData);
                
                if (productData) return productData
                else return false
            })
    })
}
module.exports = SystemDb;