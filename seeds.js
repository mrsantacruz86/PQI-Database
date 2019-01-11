const {} = require('./models/HouseAudit');
const houseAuditItems = [
  {
    itemId: 1,
    name: "visitorLog",
    label: "Visitor Log",
    cat: "D",
    value:"",
    findings:""
  },
  {
    itemId: 2,
    name: "frontDoor",
    label: "Front door locked",
    cat: "S",
    value:"",
    findings:""
  },
  {
    itemId: 3,
    name: "filterLog",
    label: "Water Filter log",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 4,
    name: "fireExt",
    label: "Fire Extinguisher",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 5,
    name: "appliances",
    label: "Appliances",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 6,
    name: "menu",
    label: "Menu Posted",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 7,
    name: "dishware",
    label: "Dishware/Utensils",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 8,
    name: "cabinets",
    label: "Cabinets",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 9,
    name: "counters",
    label: "Counters",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 10,
    name: "kitchenClean",
    label: "Kitchen Cleanliness",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 11,
    name: "thermostats",
    label: "Thermostats",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 12,
    name: "closets",
    label: "Closets",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 13,
    name: "drawers",
    label: "Drawers",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 14,
    name: "beds",
    label: "Beds",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 15,
    name: "childPersItems",
    label: "Children's pers-items",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 16,
    name: "waterTemp",
    label: "Water Temperature",
    cat: "S",
    value:"",
    findings:""
  },
  {
    itemId: 17,
    name: "shower",
    label: "Shower/Tub",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 18,
    name: "sink",
    label: "Sink",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 19,
    name: "adaBathroom",
    label: "ADA Compiant Bathroom",
    cat: "S",
    value:"",
    findings:""
  },
  {
    itemId: 20,
    name: "toilet",
    label: "Toilet",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 21,
    name: "towel",
    label: "Towels",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 22,
    name: "toiletry",
    label: "Toiletry",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 23,
    name: "hampers",
    label: "Hampers",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 24,
    name: "perBoxes",
    label: "Personal Item Boxes",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 25,
    name: "journal",
    label: "Journal",
    cat: "D",
    value:"",
    findings:""
  },
  {
    itemId: 26,
    name: "medDocs",
    label: "Medication Documents",
    cat: "D",
    value:"",
    findings:""
  },
  {
    itemId: 27,
    name: "preaPhone",
    label: "PREA Phone",
    cat: "S",
    value:"",
    findings:""
  },
  {
    itemId: 28,
    name: "expiredFood",
    label: "Expired Food",
    cat: "S",
    value:"",
    findings:""
  },
  {
    itemId: 29,
    name: "nebulizer",
    label: "Working Nebulizers",
    cat: "S",
    value:"",
    findings:""
  },
  {
    itemId: 30,
    name: "firstAid",
    label: "First Aid Kit",
    cat: "S",
    value:"",
    findings:""
  },
  {
    itemId: 31,
    name: "medStorage",
    label: "Medication Storage",
    cat: "S",
    value:"",
    findings:""
  },
  {
    itemId: 32,
    name: "knives",
    label: "Knives stored",
    cat: "S",
    value:"",
    findings:""
  },
  {
    itemId: 33,
    name: "gloves",
    label: "Gloves",
    cat: "S",
    value:"",
    findings:""
  },
  {
    itemId: 34,
    name: "expiredMed",
    label: "Expired Medication",
    cat: "S",
    value:"",
    findings:""
  },
  {
    itemId: 35,
    name: "csLocked",
    label: "Center Station locked",
    cat: "S",
    value:"",
    findings:""
  },
  {
    itemId: 36,
    name: "furniture",
    label: "Furniture",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 37,
    name: "electronics",
    label: "Electronic Equipment",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 38,
    name: "bulletin",
    label: "Bulleting Board",
    cat: "D",
    value:"",
    findings:""
  },
  {
    itemId: 39,
    name: "evacRoutes",
    label: "Evacuation Routes",
    cat: "S",
    value:"",
    findings:""
  },
  {
    itemId: 40,
    name: "exitSigns",
    label: "Exit Signs",
    cat: "S",
    value:"",
    findings:""
  },
  {
    itemId: 41,
    name: "requiredPosters",
    label: "Required Posters",
    cat: "D",
    value:"",
    findings:""
  },
  {
    itemId: 42,
    name: "calendar",
    label: "Calendar",
    cat: "D",
    value:"",
    findings:""
  },
  {
    itemId: 43,
    name: "outlets",
    label: "Electrical outlets",
    cat: "S",
    value:"",
    findings:""
  },
  {
    itemId: 44,
    name: "table",
    label: "Table",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 45,
    name: "chairs",
    label: "Chairs",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 46,
    name: "chemicals",
    label: "Chemical's Storage",
    cat: "S",
    value:"",
    findings:""
  },
  {
    itemId: 47,
    name: "washDry",
    label: "Washer/Dryer",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 48,
    name: "storage",
    label: "Storage",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 49,
    name: "laundryDoor",
    label: "Laundry Door Locked",
    cat: "S",
    value:"",
    findings:""
  },
  {
    itemId: 50,
    name: "doorsWalls",
    label: "Doors/Walls",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 51,
    name: "alarms",
    label: "Alarms",
    cat: "S",
    value:"",
    findings:""
  },
  {
    itemId: 52,
    name: "floort",
    label: "Floors",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 53,
    name: "airFilters",
    label: "Air Filters/Vents",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 54,
    name: "garbageBin",
    label: "Garbage Containers",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 55,
    name: "windows",
    label: "Window/Screens",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 56,
    name: "lights",
    label: "Lamps/Light bulbs",
    cat: "H",
    value:"",
    findings:""
  },
  {
    itemId: 57,
    name: "yard",
    label: "Yard's Safety",
    cat: "H",
    value:"",
    findings:""
  }
 ]


