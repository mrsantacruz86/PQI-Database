# House Audits data models.

## Items:

1.  Medication (15 points)
    - Medication Documents
    - Medication Storage
    - Working Nebulizers
    - First Aid Kit
    - Expired Medication
2.  Safety and Security (33 points)
    - Doors remain locked
    - Fire Extinguisher
    - Hazardous items must be locked.
    - Outlets must have outlet covers
    - Evacuation Routes
    - Exit Signs
    - Window Screens
    - Grounds, cottage and rooms are free of hazardous items.
    - Alarms are working
    - Cameras are working.
    - Stove or oven off.
    - Skid-proof mats in shower
3.  Health and Cleanliness (20 points)
    - Water Temperature
    - Gloves
    - Thermostats
    - Cleanliness of Kitchen, bedrooms, bathrooms, living room (free from mold).
    - Clothes and towels must be clean.
    - Personal Hygiene Items
    - Floors, walls, and windows must be clean.
    - Garbage Containers
4.  Documentation (10.5 points)
    - Visitor Log
    - Water Filter log
    - Correct Menu Posted
    - Journal
    - Activity Calendar
    - Updated emergency contacts.
    - Required Posters
5.  Organization (6 points)
    - Closets
    - Children's personal-items
    - Beds
    - Drawers
    - Storage
    - Center station
6.  Furniture and Equipment (7 points)
    - TVs are working
    - Games are working and age appropriate.
    - Facility must have the required amount of chairs, tables and beds.
    - Appliances must be kept clean.
    - All maintenance issues should be reported to Operations Dept.
    - Furniture and equipment in good condition.
    - No Structural damage to facility
7.  Program Requirements (3 points)
    - PREA Phone
    - PREA Posters
    - Bulletin Board organized
    - Complaint Boxes.
    - Grievance Policies posted.
8.  Supplies and storage (4 points)

    - Dishware/Utensils
    - Laundry soap closed
    - Food should be labeled and expired items should be removed.
    - Food items properly stored (freezer, refrigerator and cabinets)

9.  Optional (1.5 points)

---

## Point values

| category      | # of items | value   |
| ------------- | ---------- | ------- |
| medications   | 5          | 3       |
| safety        | 12         | 2.75    |
| health        | 8          | 2.5     |
| documentation | 7          | 1.5     |
| organization  | 6          | 1       |
| furniture     | 7          | 1       |
| program       | 3          | 1       |
| supplies      | 4          | 1       |
| optional      | 1          | 1.5     |
|               |            | **100** |

---

## Data Model

House Audit

```json
{
  "date": "date of the audit",
  "house": "house number",
  "auditor": "name of the auditor",
  "score": 100,
  "categories": {
    "medications": {
      "totalItems": 5,
      "itemValue": 3,
      "items": {
        Medication Documents:{
            "select": false,
            "comment": "string"
        },
        Medication Storage
        Working Nebulizers
        First Aid Kit
        Expired Medication
      }
    },
    "safety": { "totalItems": 5, "itemValue": 3, "items": {

    } },
    "health": { "totalItems": 5, "itemValue": 3, "items": {} },
    "documentation": { "totalItems": 5, "itemValue": 3, "items": {} },
    "organization": { "totalItems": 5, "itemValue": 3, "items": {} },
    "furniture": { "totalItems": 5, "itemValue": 3, "items": {} },
    "program": { "totalItems": 5, "itemValue": 3, "items": {} },
    "supplies": { "totalItems": 5, "itemValue": 3, "items": {} },
    "optional": { "totalItems": 5, "itemValue": 3, "items": {} }
  }
}
```
