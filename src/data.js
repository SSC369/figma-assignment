export default {
  leadId: "L123456",
  name: "John Doe",
  stage: {
    name: "Qualified",
    color: "#C01048",
    bgColor: "#FFF1F3",
  },
  assignees: [
    {
      id: "A001",
      name: "Alice Smith",
      profilePic: "https://example.com/alice.jpg",
      lastUpdated: "2023-05-15T10:30:00Z",
    },
  ],
  overviewFields: [
    {
      fieldId: "OF001",
      name: "Email",
      value: "john.doe@example.com",
      fieldType: "EMAIL",
    },
    {
      fieldId: "OF002",
      name: "Phone",
      value: {
        countryCode: "+1",
        phoneNumber: "5551234567",
      },
      fieldType: "PHONE_NUMBER",
    },
    {
      fieldId: "OF003",
      name: "Company",
      value: "Acme Corp",
      fieldType: "SMALL_TEXT",
    },
    {
      fieldId: "OF004",
      name: "Industry",
      value: "Technology",
      fieldType: "DROPDOWN",
    },
    {
      fieldId: "OF005",
      name: "Annual Revenue",
      value: 1000000,
      fieldType: "NUMBER",
    },
    {
      fieldId: "OF006",
      name: "Lead Source",
      value: "Website",
      fieldType: "DROPDOWN",
    },
    {
      fieldId: "OF007",
      name: "Notes",
      value: "Interested in our enterprise solution.",
      fieldType: "LONG_TEXT",
    },
    {
      fieldId: "OF008",
      name: "Last Contact Date",
      value: "2023-05-10T14:30:00Z",
      fieldType: "DATE",
    },
    {
      fieldId: "OF009",
      name: "Products of Interest",
      value: ["CRM", "Marketing Automation", "Analytics"],
      fieldType: "MULTI_SELECT",
    },
    {
      fieldId: "OF010",
      name: "Lead Score",
      value: 85,
      fieldType: "NUMBER",
    },
    {
      fieldId: "OF011",
      name: "Website",
      value: "https://www.acmecorp.com",
      fieldType: "SMALL_TEXT",
    },
    {
      fieldId: "OF012",
      name: "Company Size",
      value: "100-500",
      fieldType: "DROPDOWN",
    },
    {
      fieldId: "OF013",
      name: "Preferred Contact Method",
      value: ["Email", "Phone"],
      fieldType: "CHECKBOX_GROUP",
    },
    {
      fieldId: "OF014",
      name: "Next Follow-up Date",
      value: "2023-05-20T09:00:00Z",
      fieldType: "DATE",
    },
    {
      fieldId: "OF015",
      name: "Budget",
      value: 50000,
      fieldType: "NUMBER",
    },
  ],
  gofs: [
    {
      id: "GOF001",
      name: "Contact Information",
      fields: [
        {
          fieldId: "F001",
          name: "Address",
          value: "123 Main St, Anytown, USA",
          fieldType: "LONG_TEXT",
        },
        {
          fieldId: "F002",
          name: "Secondary Email",
          value: "john.d@personal.com",
          fieldType: "EMAIL",
        },
        {
          fieldId: "F001",
          name: "Address",
          value: "123 Main St, Anytown, USA",
          fieldType: "LONG_TEXT",
        },
        {
          fieldId: "F002",
          name: "Secondary Email",
          value: "john.d@personal.com",
          fieldType: "EMAIL",
        },
        {
          fieldId: "F001",
          name: "Address",
          value: "123 Main St, Anytown, USA",
          fieldType: "LONG_TEXT",
        },
        {
          fieldId: "F002",
          name: "Secondary Email",
          value: "john.d@personal.com",
          fieldType: "EMAIL",
        },
      ],
    },
    {
      id: "GOF002",
      name: "Company Details",
      fields: [
        {
          fieldId: "F003",
          name: "Founded Year",
          value: 2000,
          fieldType: "NUMBER",
        },
        {
          fieldId: "F004",
          name: "Public/Private",
          value: "Private",
          fieldType: "DROPDOWN",
        },
        {
          fieldId: "F005",
          name: "Number of Employees",
          value: 250,
          fieldType: "NUMBER",
        },
      ],
    },
    {
      id: "GOF003",
      name: "Social Media",
      fields: [
        {
          fieldId: "F006",
          name: "LinkedIn",
          value: "https://www.linkedin.com/company/acmecorp",
          fieldType: "SMALL_TEXT",
        },
        {
          fieldId: "F007",
          name: "Twitter",
          value: "@acmecorp",
          fieldType: "SMALL_TEXT",
        },
      ],
    },
    {
      id: "GOF004",
      name: "Product Interest",
      fields: [
        {
          fieldId: "F008",
          name: "Interested Products",
          value: ["CRM", "Analytics"],
          fieldType: "MULTI_SELECT",
        },
        {
          fieldId: "F009",
          name: "Current Solutions",
          value: ["Spreadsheets", "Email Marketing"],
          fieldType: "CHECKBOX_GROUP",
        },
      ],
    },
    {
      id: "GOF005",
      name: "Financial Information",
      fields: [
        {
          fieldId: "F010",
          name: "Credit Score",
          value: 750,
          fieldType: "NUMBER",
        },
      ],
    },
    {
      id: "GOF006",
      name: "Marketing",
      fields: [],
    },
    {
      id: "GOF007",
      name: "Sales Process",
      fields: [
        {
          fieldId: "F011",
          name: "First Contact Date",
          value: "2023-04-01T10:00:00Z",
          fieldType: "DATE",
        },
        {
          fieldId: "F012",
          name: "Sales Rep",
          value: "Jane Smith",
          fieldType: "SMALL_TEXT",
        },
      ],
    },
    {
      id: "GOF008",
      name: "Technical Requirements",
      fields: [
        {
          fieldId: "F013",
          name: "Preferred Deployment",
          value: "Cloud",
          fieldType: "DROPDOWN",
        },
      ],
    },
    {
      id: "GOF009",
      name: "Competition",
      fields: [
        {
          fieldId: "F014",
          name: "Competing Products",
          value: ["Competitor A", "Competitor B"],
          fieldType: "MULTI_SELECT",
        },
      ],
    },
    {
      id: "GOF010",
      name: "Decision Makers",
      fields: [
        {
          fieldId: "F015",
          name: "Primary Decision Maker",
          value: "Sarah Johnson",
          fieldType: "SMALL_TEXT",
        },
        {
          fieldId: "F016",
          name: "Decision Maker's Title",
          value: "CTO",
          fieldType: "SMALL_TEXT",
        },
      ],
    },
    {
      id: "GOF011",
      name: "Legal",
      fields: [
        {
          fieldId: "F017",
          name: "NDA Signed",
          value: true,
          fieldType: "CHECKBOX_GROUP",
        },
        {
          fieldId: "F018",
          name: "NDA Date",
          value: "2023-04-15T00:00:00Z",
          fieldType: "DATE",
        },
      ],
    },
    {
      id: "GOF012",
      name: "Support",
      fields: [
        {
          fieldId: "F019",
          name: "Support Level",
          value: "Premium",
          fieldType: "DROPDOWN",
        },
      ],
    },
    {
      id: "GOF013",
      name: "Custom Integration",
      fields: [
        {
          fieldId: "F020",
          name: "Integration Needed",
          value: true,
          fieldType: "CHECKBOX_GROUP",
        },
        {
          fieldId: "F021",
          name: "Integration Type",
          value: ["CRM", "ERP"],
          fieldType: "MULTI_SELECT",
        },
      ],
    },
    {
      id: "GOF014",
      name: "Training",
      fields: [
        {
          fieldId: "F022",
          name: "Training Required",
          value: true,
          fieldType: "CHECKBOX_GROUP",
        },
        {
          fieldId: "F023",
          name: "Number of Trainees",
          value: 25,
          fieldType: "NUMBER",
        },
      ],
    },
    {
      id: "GOF015",
      name: "Additional Notes",
      fields: [
        {
          fieldId: "F024",
          name: "Miscellaneous Notes",
          value: "Client expressed interest in future AI capabilities.",
          fieldType: "LONG_TEXT",
        },
      ],
    },
  ],
};
