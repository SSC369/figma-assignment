export default {
  leadId: "L789012",
  name: "Sarah Johnson",
  stage: {
    name: "Prospecting",
    color: "#FFC107",
  },
  assignees: [
    {
      id: "A002",
      name: "Bob Wilson",
      profilePic: "https://example.com/bob.jpg",
      lastUpdated: "2023-05-16T09:15:00Z",
    },
  ],
  overviewFields: [
    {
      fieldId: "OF001",
      name: "Email",
      value: "sarah.johnson@technovate.com",
      fieldType: "EMAIL",
    },
    {
      fieldId: "OF002",
      name: "Phone",
      value: {
        countryCode: "+44",
        phoneNumber: "2071234567",
      },
      fieldType: "PHONE_NUMBER",
    },
    {
      fieldId: "OF003",
      name: "Company",
      value: "TechnoVate Solutions",
      fieldType: "SMALL_TEXT",
    },
    {
      fieldId: "OF004",
      name: "Industry",
      value: "Software",
      fieldType: "DROPDOWN",
    },
    {
      fieldId: "OF005",
      name: "Annual Revenue",
      value: 5000000,
      fieldType: "NUMBER",
    },
    {
      fieldId: "OF006",
      name: "Lead Source",
      value: "Trade Show",
      fieldType: "DROPDOWN",
    },
    {
      fieldId: "OF007",
      name: "Notes",
      value: "Met at TechExpo 2023. Interested in AI-powered solutions.",
      fieldType: "LONG_TEXT",
    },
    {
      fieldId: "OF008",
      name: "Last Contact Date",
      value: "2023-05-12T11:45:00Z",
      fieldType: "DATE",
    },
    {
      fieldId: "OF009",
      name: "Products of Interest",
      value: ["AI Platform", "Data Analytics", "Cloud Services"],
      fieldType: "MULTI_SELECT",
    },
    {
      fieldId: "OF010",
      name: "Lead Score",
      value: 72,
      fieldType: "NUMBER",
    },
    {
      fieldId: "OF011",
      name: "Website",
      value: "https://www.technovate.com",
      fieldType: "SMALL_TEXT",
    },
    {
      fieldId: "OF012",
      name: "Company Size",
      value: "50-100",
      fieldType: "DROPDOWN",
    },
    {
      fieldId: "OF013",
      name: "Preferred Contact Method",
      value: ["Email"],
      fieldType: "CHECKBOX_GROUP",
    },
    {
      fieldId: "OF014",
      name: "Next Follow-up Date",
      value: "2023-05-22T14:00:00Z",
      fieldType: "DATE",
    },
    {
      fieldId: "OF015",
      name: "Budget",
      value: 100000,
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
          value: "456 Tech Lane, London, UK",
          fieldType: "LONG_TEXT",
        },
        {
          fieldId: "F002",
          name: "LinkedIn Profile",
          value: "https://www.linkedin.com/in/sarahjohnson",
          fieldType: "SMALL_TEXT",
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
          value: 2015,
          fieldType: "NUMBER",
        },
        {
          fieldId: "F004",
          name: "Public/Private",
          value: "Private",
          fieldType: "DROPDOWN",
        },
      ],
    },
    {
      id: "GOF003",
      name: "Product Requirements",
      fields: [
        {
          fieldId: "F005",
          name: "Key Features",
          value: ["Machine Learning", "Real-time Analytics", "API Integration"],
          fieldType: "MULTI_SELECT",
        },
        {
          fieldId: "F006",
          name: "Deployment Preference",
          value: "Hybrid",
          fieldType: "DROPDOWN",
        },
      ],
    },
    {
      id: "GOF004",
      name: "Current Tech Stack",
      fields: [
        {
          fieldId: "F007",
          name: "CRM",
          value: "Salesforce",
          fieldType: "SMALL_TEXT",
        },
        {
          fieldId: "F008",
          name: "ERP",
          value: "SAP",
          fieldType: "SMALL_TEXT",
        },
      ],
    },
    {
      id: "GOF005",
      name: "Decision Timeline",
      fields: [
        {
          fieldId: "F009",
          name: "Expected Decision Date",
          value: "2023-08-31T00:00:00Z",
          fieldType: "DATE",
        },
      ],
    },
    {
      id: "GOF006",
      name: "Competitors",
      fields: [
        {
          fieldId: "F010",
          name: "Other Vendors Considered",
          value: ["Vendor X", "Vendor Y"],
          fieldType: "MULTI_SELECT",
        },
      ],
    },
    {
      id: "GOF007",
      name: "Use Case",
      fields: [
        {
          fieldId: "F011",
          name: "Primary Use Case",
          value: "Predictive Maintenance",
          fieldType: "SMALL_TEXT",
        },
        {
          fieldId: "F012",
          name: "Expected ROI",
          value: 200,
          fieldType: "NUMBER",
        },
      ],
    },
    {
      id: "GOF008",
      name: "Technical Requirements",
      fields: [
        {
          fieldId: "F013",
          name: "Data Volume",
          value: "500GB per day",
          fieldType: "SMALL_TEXT",
        },
        {
          fieldId: "F014",
          name: "Security Requirements",
          value: [
            "Encryption",
            "Multi-factor Authentication",
            "GDPR Compliance",
          ],
          fieldType: "CHECKBOX_GROUP",
        },
      ],
    },
    {
      id: "GOF009",
      name: "Stakeholders",
      fields: [
        {
          fieldId: "F015",
          name: "CTO",
          value: "Michael Brown",
          fieldType: "SMALL_TEXT",
        },
        {
          fieldId: "F016",
          name: "CFO",
          value: "Emily Davis",
          fieldType: "SMALL_TEXT",
        },
      ],
    },
    {
      id: "GOF010",
      name: "Legal",
      fields: [],
    },
    {
      id: "GOF011",
      name: "POC Details",
      fields: [
        {
          fieldId: "F017",
          name: "POC Requested",
          value: true,
          fieldType: "CHECKBOX_GROUP",
        },
        {
          fieldId: "F018",
          name: "POC Start Date",
          value: "2023-06-15T00:00:00Z",
          fieldType: "DATE",
        },
      ],
    },
    {
      id: "GOF012",
      name: "Training Needs",
      fields: [
        {
          fieldId: "F019",
          name: "Training Format",
          value: "Online",
          fieldType: "DROPDOWN",
        },
      ],
    },
    {
      id: "GOF013",
      name: "Success Criteria",
      fields: [
        {
          fieldId: "F020",
          name: "Key Performance Indicators",
          value: ["Reduce Downtime", "Increase Efficiency", "Cost Savings"],
          fieldType: "MULTI_SELECT",
        },
      ],
    },
    {
      id: "GOF014",
      name: "Support Requirements",
      fields: [
        {
          fieldId: "F021",
          name: "Support Level",
          value: "24/7",
          fieldType: "DROPDOWN",
        },
        {
          fieldId: "F022",
          name: "SLA Requirements",
          value: "99.99% uptime",
          fieldType: "SMALL_TEXT",
        },
      ],
    },
    {
      id: "GOF015",
      name: "Additional Notes",
      fields: [
        {
          fieldId: "F023",
          name: "Miscellaneous Notes",
          value:
            "Client is expanding to US market next year. Potential for larger deal in the future.",
          fieldType: "LONG_TEXT",
        },
      ],
    },
  ],
};
