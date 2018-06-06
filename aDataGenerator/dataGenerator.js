const db = require('../database/index');

const loremIpsum = [
  'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
  'adipiscing', 'elit', 'curabitur', 'vel', 'hendrerit', 'libero',
  'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut',
  'orci', 'gravida', 'imperdiet', 'nullam', 'purus', 'lacinia',
  'a', 'pretium', 'quis', 'congue', 'praesent', 'sagittis',
  'laoreet', 'auctor', 'mauris', 'non', 'velit', 'eros',
  'dictum', 'proin', 'accumsan', 'sapien', 'nec', 'massa',
  'volutpat', 'venenatis', 'sed', 'eu', 'molestie', 'lacus',
  'quisque', 'porttitor', 'ligula', 'dui', 'mollis', 'tempus',
  'at', 'magna', 'vestibulum', 'turpis', 'ac', 'diam',
  'tincidunt', 'id', 'condimentum', 'enim', 'sodales', 'in',
  'hac', 'habitasse', 'platea', 'dictumst', 'aenean', 'neque',
  'fusce', 'augue', 'leo', 'eget', 'semper', 'mattis',
  'tortor', 'scelerisque', 'nulla', 'interdum', 'tellus', 'malesuada',
  'rhoncus', 'porta', 'sem', 'aliquet', 'et', 'nam',
  'suspendisse', 'potenti', 'vivamus', 'luctus', 'fringilla', 'erat',
  'donec', 'justo', 'vehicula', 'ultricies', 'varius', 'ante',
  'primis', 'faucibus', 'ultrices', 'posuere', 'cubilia', 'curae',
  'etiam', 'cursus', 'aliquam', 'quam', 'dapibus', 'nisl',
  'feugiat', 'egestas', 'class', 'aptent', 'taciti', 'sociosqu',
  'ad', 'litora', 'torquent', 'per', 'conubia', 'nostra',
  'inceptos', 'himenaeos', 'phasellus', 'nibh', 'pulvinar', 'vitae',
  'urna', 'iaculis', 'lobortis', 'nisi', 'viverra', 'arcu',
  'morbi', 'pellentesque', 'metus', 'commodo', 'ut', 'facilisis',
  'felis', 'tristique', 'ullamcorper', 'placerat', 'aenean', 'convallis',
  'sollicitudin', 'integer', 'rutrum', 'duis', 'est', 'etiam',
  'bibendum', 'donec', 'pharetra', 'vulputate', 'maecenas', 'mi',
  'fermentum', 'consequat', 'suscipit', 'aliquam', 'habitant', 'senectus',
  'netus', 'fames', 'quisque', 'euismod', 'curabitur', 'lectus',
  'elementum', 'tempor', 'risus', 'cras',
];

const names = [
  "Jaosha", "Kingston", "Sean-Ray", "Evann", "Shergo", "Lokesh",
  "Kofi", "Taegan", "Tye", "Manas", "Caidan", "Toby", "AJ", "Kori", "Arturo", "Diarmid",
  "Lennex", "Rishi", "Kalum", "Walter", "Surien", "Lochlann", "Kory", "Kelvan", "Darren",
  "Rogan", "Codie", "Maisum", "Obosa", "Shazil", "Lawrie", "Aleksandar", "Jae", "Bertie",
  "Killian", "Suraj", "Joss", "Kerr", "Miguel", "Albie", "Pietro", "Kruz", "Ceejay", "Zuriel", 
  "Lachlann", "Teagan", "Deegan", "Zachary-Marc", "Madison-Jake", "Alvin", "Rorie",
  "Carson", "Thiago", "Dyllan", "Russell", "Kurtis-Jae", "Magnus", "Rudi", "Tian",
  "Aryian", "Immanuel", "Jacki", "Sorley", "Roger", "Tayye", "Fares", "Abir", "Solomon",
  "Tisloh", "Ikemsinachukwu", "Israel", "Ayren", "Leighton", "Craig-James", "Latif",
  "Tiernan", "Marco", "Conner", "Zhong", "Lucas", "Allesandro", "Rowen", "Coby", "Fox",
  "Luc", "Zhong", "Pearsen", "Roger", "Selasi", "Sohaib", "Dolan", "Torquil", "Thrinei",
  "Jonathan", "Kaidyn", "Amolpreet", "Jameil", "Buddy", "Conlyn", "Corey-James",
];

const houseType = [
  'ENTIRE CABIN', 'ENTIRE HOUSE', 'ENTIRE APARTMENT', 'PRIVATE ROOM', 'ENTIRE LOFT',
  'CAMPER', 'EARTH HOUSE', 'DOME HOUSE', 'TREE HOUSE', 'ENTIRE CABIN', 'ENTIRE HOUSE',
  'ENTIRE APARTMENT', 'PRIVATE ROOM', 'ENTIRE CABIN', 'ENTIRE HOUSE', 'ENTIRE APARTMENT',
];

const cities = [
  "Fort Wayne", "Pomona", "Racine", "Shreveport", "Corpus Christi", "Tulsa", "San Antonio",
  "Oklahoma City", "Santa Ana", "Thornton", "Fitchburg", "Vallejo", "Barnstable", "Lansing",
  "Bellevue", "Stockton", "Erie", "Sebastian", "Memphis", "Vero Beach", "Fort Lauderdale", "Layton",
  "Myrtle Beach", "Daly City", "Port St. Lucie", "Albany", "Atlanta", "Newburgh", "Huntington", "Columbia",
  "Moreno Valley", "Akron", "Fontana", "Riverside", "Grayslake", "Orlando", "Corpus Christi", "Lewisville",
  "Fullerton", "Inglewood", "Honolulu", "Tampa", "Arlington", "Coral Springs", "Springfield", "Nashville",
  "Monterey", "Hollywood", "Springfield", "Howell", "Elk Grove", "Lakeland", "Round Lake Beach", "Durham",
  "Baltimore", "Saginaw", "Denton", "Bellevue", "Macon", "Shreveport", "Orlando", "Howell", "Cape Coral",
  "Madison", "St. Paul", "Tyler", "Temecula", "Merced", "Tucson", "Virginia Beach", "Kenosha",
  "Westminster", "Havre de Grace", "Apple Valley", "Fargo", "High Point", "Nashville", "Brighton",
  "St. Paul", "Las Cruces", "Champaign", "Fayetteville", "Waterloo", "Santa Clara", "Macon", "Olympia",
  "Knoxville", "Visalia", "Waterbury", "Beaumont", "Bremerton", "Port Orange", "Garland", "Bonita Springs",
  "Providence", "Des Moines", "Omaha", "North Port", "Clarksville", "Norfolk",
];

const highlights = ['Sparkling clean', 'Great Location', 'Great check-in experience'];

const optionalDescriptionSections = ['Guess access', 'Interaction with guests', 'Other things to note'];

const amenitiesSections = ['Family features', 'Dining', 'Facilities', 'Guess access', 'Logistics', 'Bed and bath',
  'Safety features', 'Outdoor'];

const randomInterger = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const arbitrarySentence = (arrEntry, numOfWords, period) => {
  let outputString = '';
  for (let i = 0; i < numOfWords; i += 1) {
    if (i === 0) {
      let word = arrEntry[randomInterger(0, arrEntry.length - 1)].split('');
      word[0] = word[0].toUpperCase();
      word = word.join('');
      outputString += word;
    } else {
      outputString += ' ';
      outputString += arrEntry[randomInterger(0, arrEntry.length - 1)];
    }
  }
  if (period) {
    outputString += '.';
  }
  return outputString;
};

const highlightsArray = () => {
  const output = [];

  highlights.forEach((title) => {
    const obj = {
      title,
      comment: arbitrarySentence(loremIpsum, randomInterger(8, 16), true),
    };
    output.push(obj);
  });
  return output;
};

const descriptionArray = () => {
  const output = [];
  const spaceDescription = {
    title: 'The space',
    comment: arbitrarySentence(loremIpsum, randomInterger(192, 288), true),
  };
  output.push(spaceDescription);
  optionalDescriptionSections.forEach((title) => {
    const obj = {
      title,
      comment: arbitrarySentence(loremIpsum, randomInterger(86, 192), true),
    };
    output.push(obj);
  });
  return output;
};

const specialStayRangeArray = () => {
  const output = [];
  let count = 0;

  for (let i = 0; i < randomInterger(0, 3); i += 1) {
    const obj = {
      startDate: new Date(2018, 7 + count, randomInterger(1, 15)),
      endDate: new Date(2018, 7 + count + 1, randomInterger(16, 30)),
      nightsOfMinimumStay: randomInterger(4, 6),
    };
    output.push(obj);
    count += 1;
    count += randomInterger(1, 2);
  }
  return output;
};

const amenitiesArray = () => {
  const output = [];
  const listOfItems = (numberOfEntries) => {
    const arrayOfEntries = [];
    for (let i = 0; i < numberOfEntries; i += 1) {
      const obj = {
        item: arbitrarySentence(loremIpsum, randomInterger(1, 2)),
        description: randomInterger(1, 100) > 25 ? '' : arbitrarySentence(loremIpsum, randomInterger(4, 14)),
      };
      arrayOfEntries.push(obj);
    }
    return arrayOfEntries;
  };

  const basics = {
    title: 'Basic',
    contents: listOfItems(randomInterger(4, 14)),
  };
  output.push(basics);
  for (let i = randomInterger(0, 3); i < randomInterger(4, 7); i += 1) {
    const obj = {
      title: amenitiesSections[i],
      contents: listOfItems(randomInterger(0, 8)),
    };
    output.push(obj);
  }
  const notIncluded = {
    title: 'Not Included',
    contents: listOfItems(randomInterger(2, 8)),
  };
  output.push(notIncluded);
  return output;
};

const homeData = [];

for (let i = 0; i < 100; i += 1) {
  const homeInstance = {
    id: i + 1000,
    owner: names[i],
    ownerPicture_url: `'https://s3-us-west-1.amazonaws.com/napbnb/owner'${i}.jpg`,
    propertyType: arbitrarySentence(houseType, 1),
    title: arbitrarySentence(loremIpsum, randomInterger(3, 8)),
    score: randomInterger(50, 100),
    location: cities[i],
    numberOfGuests: randomInterger(2, 12),
    numberOfRooms: randomInterger(1, 6),
    numberBeds: randomInterger(1, 6),
    numberOfBaths: randomInterger(2, 4),
    numberOfViews: randomInterger(5, 400),
    homeHighlights: highlightsArray(),
    descriptionSummary: arbitrarySentence(loremIpsum, randomInterger(25, 50), true),
    description: descriptionArray(),
    amenities: amenitiesArray(),
    sleepingArrangments: null,
    smoking: randomInterger(1, 100) < 25,
    petSuitable: randomInterger(1, 100) < 25,
    partiesOrEvents: randomInterger(1, 100) < 20,
    noSafeForChildrenUnder: randomInterger(1, 12),
    checkInStartTime: randomInterger(3, 6),
    checkInEndTime: randomInterger(9, 11),
    checkOutTime: 11,
    selfCheckInWithLockBox: randomInterger(1, 100) < 75,
    aules: arbitrarySentence(loremIpsum, randomInterger(8, 300), true),
    rulesToAcknoledge: arbitrarySentence(loremIpsum, randomInterger(6, 36), true),
    cancellationType: randomInterger(1, 5),
    cancelationSummary: arbitrarySentence(loremIpsum, randomInterger(20, 60), true),
    nightsOfStayVary: randomInterger(1, 100) < 75,
    nightsOfMinimumStay: randomInterger(2, 3),
    nightsOfMinimumStayForDateRange: specialStayRangeArray(),
    daysFromLastUpdate: randomInterger(5, 260),
  };
  homeData.push(homeInstance);
}

db.save(homeData);

module.exports.homeData = homeData;
