const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/NapbnbDataBase');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoose connection error:'));
db.once('open', () => console.log('mongoose - we\'re connected'));

const homeSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  owner: String,
  ownerPicture_url: { type: String, unique: true },
  propertyType: String,
  title: String,
  score: Number,
  location: String,
  numberOfGuests: Number,
  numberOfRooms: Number,
  numberBeds: Number,
  numberOfBaths: Number,
  numberOfViews: Number,
  homeHighlights: {},
  descriptionSummary: String,
  description: {},
  amenities: {},
  sleepingArrangments: {},
  smoking: Boolean,
  petSuitable: Boolean,
  partiesOrEvents: Boolean,
  noSafeForChildrenUnder: Number,
  checkInStartTime: Number,
  checkInEndTime: Number,
  checkOutTime: Number,
  selfCheckInWithLockBox: Boolean,
  rules: String,
  rulesToAcknoledge: String,
  cancellationType: Number,
  cancelationSummary: String,
  nightsOfStayVary: Boolean,
  nightsOfMinimumStay: Number,
  nightsOfMinimumStayForDateRange: {},
  daysFromLastUpdate: Number,
});

const Home = mongoose.model('Home', homeSchema);

const save = (homeArray, callback) => {
  homeArray.forEach((home) => {
    const item = new Home(home);

    item.save((err) => {
      if (err) return console.error(err);
      console.log('success saving a home!');
      return console.log('db item.save success');
    });
  });
  callback();
};

const get = (id, callback) => {
  Home.find({ id }, (err, item) => {
    if (err) console.log('error from get db function', err);
    callback(item);
    console.log('from the get db request ->', item);
  });
};

module.exports.save = save;
module.exports.get = get;
