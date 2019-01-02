const Items = [
  {
    cottage: 35,
    auditor: {
      name: "Nelson Diaz",
      id: "5c20faa3d0f8051e08922fb0"
    },
    date: Date.now(),
    houseAudit: [
      {
        id: 1,
        name: "logbook",
        value: true,
        finding: ""
      },
      {
        id: 2,
        name: "medication",
        value: true,
        finding: ""
      },
      {
        id: 3,
        name: "furniture",
        value: true,
        finding: ""
      },
      {
        id: 4,
        name: "frontdoor",
        value: true,
        finding: ""
      }
    ],
    facilitiesAudit: [
      {
        id: 10,
        name: "kitchenSink",
        value: false,
        finding: "Sink is stuck"
      },
      {
        id: 11,
        name: "furniture",
        value: false,
        finding: "Couch is broken"
      },
      {
        id: 12,
        name: "frontdoor",
        value: true,
        finding: ""
      }
    ]
  }
];

export default Items;
