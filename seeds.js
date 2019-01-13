const HouseAuditItem = require('./models/HouseAuditItem');
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/pqi-database";

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, autoIndex: false })
  .then(() => {
    console.log("MongoDB connected successfuly")
    seedAuditItems();
  })
  .catch(err => console.log(err));

const houseAuditList = [
  {
    itemId: 1,
    name: "visitorLog",
    label: "Visitor Log",
    cat: "Documents"
  },
  {
    itemId: 2,
    name: "frontDoor",
    label: "Front door locked",
    cat: "Safety"
  },
  {
    itemId: 3,
    name: "filterLog",
    label: "Water Filter log",
    cat: "Household"
  },
  {
    itemId: 4,
    name: "fireExt",
    label: "Fire Extinguisher",
    cat: "Household"
  },
  {
    itemId: 5,
    name: "appliances",
    label: "Appliances",
    cat: "Household"
  },
  {
    itemId: 6,
    name: "menu",
    label: "Menu Posted",
    cat: "Household"
  },
  {
    itemId: 7,
    name: "dishware",
    label: "Dishware/Utensils",
    cat: "Household"
  },
  {
    itemId: 8,
    name: "cabinets",
    label: "Cabinets",
    cat: "Household"
  },
  {
    itemId: 9,
    name: "counters",
    label: "Counters",
    cat: "Household"
  },
  {
    itemId: 10,
    name: "kitchenClean",
    label: "Kitchen Cleanliness",
    cat: "Household"
  },
  {
    itemId: 11,
    name: "thermostats",
    label: "Thermostats",
    cat: "Household"
  },
  {
    itemId: 12,
    name: "closets",
    label: "Closets",
    cat: "Household"
  },
  {
    itemId: 13,
    name: "drawers",
    label: "Drawers",
    cat: "Household"
  },
  {
    itemId: 14,
    name: "beds",
    label: "Beds",
    cat: "Household"
  },
  {
    itemId: 15,
    name: "childPersItems",
    label: "Children's pers-items",
    cat: "Household"
  },
  {
    itemId: 16,
    name: "waterTemp",
    label: "Water Temperature",
    cat: "Safety"
  },
  {
    itemId: 17,
    name: "shower",
    label: "Shower/Tub",
    cat: "Household"
  },
  {
    itemId: 18,
    name: "sink",
    label: "Sink",
    cat: "Household"
  },
  {
    itemId: 19,
    name: "adaBathroom",
    label: "ADA Compiant Bathroom",
    cat: "Safety"
  },
  {
    itemId: 20,
    name: "toilet",
    label: "Toilet",
    cat: "Household"
  },
  {
    itemId: 21,
    name: "towel",
    label: "Towels",
    cat: "Household"
  },
  {
    itemId: 22,
    name: "toiletry",
    label: "Toiletry",
    cat: "Household"
  },
  {
    itemId: 23,
    name: "hampers",
    label: "Hampers",
    cat: "Household"
  },
  {
    itemId: 24,
    name: "perBoxes",
    label: "Personal Item Boxes",
    cat: "Household"
  },
  {
    itemId: 25,
    name: "journal",
    label: "Journal",
    cat: "Documents"
  },
  {
    itemId: 26,
    name: "medDocs",
    label: "Medication Documents",
    cat: "Documents"
  },
  {
    itemId: 27,
    name: "preaPhone",
    label: "PREA Phone",
    cat: "Safety"
  },
  {
    itemId: 28,
    name: "expiredFood",
    label: "Expired Food",
    cat: "Safety"
  },
  {
    itemId: 29,
    name: "nebulizer",
    label: "Working Nebulizers",
    cat: "Safety"
  },
  {
    itemId: 30,
    name: "firstAid",
    label: "First Aid Kit",
    cat: "Safety"
  },
  {
    itemId: 31,
    name: "medStorage",
    label: "Medication Storage",
    cat: "Safety"
  },
  {
    itemId: 32,
    name: "knives",
    label: "Knives stored",
    cat: "Safety"
  },
  {
    itemId: 33,
    name: "gloves",
    label: "Gloves",
    cat: "Safety"
  },
  {
    itemId: 34,
    name: "expiredMed",
    label: "Expired Medication",
    cat: "Safety"
  },
  {
    itemId: 35,
    name: "csLocked",
    label: "Center Station locked",
    cat: "Safety"
  },
  {
    itemId: 36,
    name: "furniture",
    label: "Furniture",
    cat: "Household"
  },
  {
    itemId: 37,
    name: "electronics",
    label: "Electronic Equipment",
    cat: "Household"
  },
  {
    itemId: 38,
    name: "bulletin",
    label: "Bulleting Board",
    cat: "Documents"
  },
  {
    itemId: 39,
    name: "evacRoutes",
    label: "Evacuation Routes",
    cat: "Safety"
  },
  {
    itemId: 40,
    name: "exitSigns",
    label: "Exit Signs",
    cat: "Safety"
  },
  {
    itemId: 41,
    name: "requiredPosters",
    label: "Required Posters",
    cat: "Documents"
  },
  {
    itemId: 42,
    name: "calendar",
    label: "Calendar",
    cat: "Documents"
  },
  {
    itemId: 43,
    name: "outlets",
    label: "Electrical outlets",
    cat: "Safety"
  },
  {
    itemId: 44,
    name: "table",
    label: "Table",
    cat: "Household"
  },
  {
    itemId: 45,
    name: "chairs",
    label: "Chairs",
    cat: "Household"
  },
  {
    itemId: 46,
    name: "chemicals",
    label: "Chemical's Storage",
    cat: "Safety"
  },
  {
    itemId: 47,
    name: "washDry",
    label: "Washer/Dryer",
    cat: "Household"
  },
  {
    itemId: 48,
    name: "storage",
    label: "Storage",
    cat: "Household"
  },
  {
    itemId: 49,
    name: "laundryDoor",
    label: "Laundry Door Locked",
    cat: "Safety"
  },
  {
    itemId: 50,
    name: "doorsWalls",
    label: "Doors/Walls",
    cat: "Household"
  },
  {
    itemId: 51,
    name: "alarms",
    label: "Alarms",
    cat: "Safety"
  },
  {
    itemId: 52,
    name: "floort",
    label: "Floors",
    cat: "Household"
  },
  {
    itemId: 53,
    name: "airFilters",
    label: "Air Filters/Vents",
    cat: "Household"
  },
  {
    itemId: 54,
    name: "garbageBin",
    label: "Garbage Containers",
    cat: "Household"
  },
  {
    itemId: 55,
    name: "windows",
    label: "Window/Screens",
    cat: "Household"
  },
  {
    itemId: 56,
    name: "lights",
    label: "Lamps/Light bulbs",
    cat: "Household"
  },
  {
    itemId: 57,
    name: "yard",
    label: "Yard's Safety",
    cat: "Safety"
  }
];
const seedAuditItems = () => {
  HouseAuditItem.insertMany(houseAuditList)
    .then(res => console.log("created"))
    .catch(err => console.log(err));
};
