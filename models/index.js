const Location = require("./Location");
const Traveller = require("./Traveller");
const Trip = require("./Trip");

Traveller.hasMany(Trip)
Trip.belongsTo(Traveller)

Location.hasMany(Trip)
Trip.belongsTo(Location)

module.exports ={
    Traveller:Traveller,
    Location:Location,
    Trip:Trip,
}
