export default [
  {
    leadId: "L123456",
    name: "Emily Johnson",
    stage: {
      name: "New Lead",
      color: "#4CAF50",
      bgColor: "#E8F5E9",
    },
    assignees: [
      {
        id: "A002",
        name: "Michael Brown",
        profilePic: "https://example.com/michael.jpg",
        lastUpdated: "2023-05-18T14:00:00Z",
      },
    ],
    overviewFields: [
      {
        fieldId: "OF001",
        name: "Email",
        value: "emily.johnson@example.com",
        fieldType: "EMAIL",
      },
      {
        fieldId: "OF002",
        fieldType: "PHONE_NUMBER",
        name: "Phone",
        value: {
          countryCode: "+1",
          phoneNumber: "5559876543",
        },
      },
      {
        fieldId: "OF003",
        name: "Company",
        value: "Globex Corporation",
        fieldType: "SMALL_TEXT",
      },
      {
        fieldId: "OF004",
        name: "Industry",
        value: "Finance",
        fieldType: "DROPDOWN",
      },
      {
        fieldId: "OF005",
        name: "Annual Revenue",
        value: 2000000,
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
            value: "456 Elm St, Metropolis, USA",
            fieldType: "LONG_TEXT",
          },
          {
            fieldId: "F002",
            name: "Secondary Email",
            value: "emily.j@personal.com",
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
            value: 1998,
            fieldType: "NUMBER",
          },
          {
            fieldId: "F004",
            name: "Public/Private",
            value: "Public",
            fieldType: "DROPDOWN",
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
            value: "https://www.linkedin.com/company/globex",
            fieldType: "SMALL_TEXT",
          },
        ],
      },
    ],
  },
  {
    leadId: "L123458",
    name: "Daniel Martinez",
    stage: {
      name: "Contacted",
      color: "#FF9800",
      bgColor: "#FFF3E0",
    },
    assignees: [
      {
        id: "A003",
        name: "Olivia Williams",
        profilePic: "https://example.com/olivia.jpg",
        lastUpdated: "2023-06-12T11:45:00Z",
      },
    ],
    overviewFields: [
      {
        fieldId: "OF001",
        name: "Email",
        value: "daniel.martinez@example.com",
        fieldType: "EMAIL",
      },
      {
        fieldId: "OF002",
        fieldType: "PHONE_NUMBER",
        name: "Phone",
        value: {
          countryCode: "+1",
          phoneNumber: "5558765432",
        },
      },
      {
        fieldId: "OF003",
        name: "Company",
        value: "Initech",
        fieldType: "SMALL_TEXT",
      },
      {
        fieldId: "OF004",
        name: "Industry",
        value: "Healthcare",
        fieldType: "DROPDOWN",
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
            value: "789 Oak St, Gotham, USA",
            fieldType: "LONG_TEXT",
          },
          {
            fieldId: "F002",
            name: "Secondary Email",
            value: "daniel.m@personal.com",
            fieldType: "EMAIL",
          },
        ],
      },
      {
        id: "GOF002",
        name: "Financial Information",
        fields: [
          {
            fieldId: "F010",
            name: "Credit Score",
            value: 800,
            fieldType: "NUMBER",
          },
        ],
      },
    ],
  },
  {
    leadId: "L123459",
    name: "Sophia Davis",
    stage: {
      name: "Proposal Sent",
      color: "#2196F3",
      bgColor: "#E3F2FD",
    },
    assignees: [
      {
        id: "A004",
        name: "James Johnson",
        profilePic: "https://example.com/james.jpg",
        lastUpdated: "2023-07-20T13:00:00Z",
      },
    ],
    overviewFields: [
      {
        fieldId: "OF001",
        name: "Email",
        value: "sophia.davis@example.com",
        fieldType: "EMAIL",
      },
      {
        fieldId: "OF002",
        name: "Phone",
        fieldType: "PHONE_NUMBER",
        value: {
          countryCode: "+1",
          phoneNumber: "5557654321",
        },
      },
      {
        fieldId: "OF003",
        name: "Company",
        value: "Hooli",
        fieldType: "SMALL_TEXT",
      },
      {
        fieldId: "OF113",
        name: "Languages",
        value: "English",
        fieldType: "SMALL_TEXT",
      },
    ],
    gofs: [
      {
        id: "GOF001",
        name: "Sales Process",
        fields: [
          {
            fieldId: "F011",
            name: "First Contact Date",
            value: "2023-06-01T15:00:00Z",
            fieldType: "DATE",
          },
          {
            fieldId: "F012",
            name: "Sales Rep",
            value: "Chris Evans",
            fieldType: "SMALL_TEXT",
          },
        ],
      },
      {
        id: "GOF002",
        name: "Decision Makers",
        fields: [
          {
            fieldId: "F015",
            name: "Primary Decision Maker",
            value: "John Doe",
            fieldType: "SMALL_TEXT",
          },
          {
            fieldId: "F016",
            name: "Decision Maker's Title",
            value: "CEO",
            fieldType: "SMALL_TEXT",
          },
        ],
      },
    ],
  },
  {
    leadId: "L123460",
    name: "Oliver Brown",
    stage: {
      name: "Negotiation",
      color: "#673AB7",
      bgColor: "#EDE7F6",
    },
    assignees: [
      {
        id: "A005",
        name: "Sophia Miller",
        profilePic: "https://example.com/sophia.jpg",
        lastUpdated: "2023-08-10T09:15:00Z",
      },
    ],
    overviewFields: [
      {
        fieldId: "OF001",
        name: "Email",
        value: "oliver.brown@example.com",
        fieldType: "EMAIL",
      },
      {
        fieldId: "OF002",
        name: "Phone",
        fieldType: "PHONE_NUMBER",
        value: {
          countryCode: "+1",
          phoneNumber: "5556543210",
        },
      },
      {
        fieldId: "OF003",
        name: "Company",
        value: "Aperture Science",
        fieldType: "SMALL_TEXT",
      },
    ],
    gofs: [
      {
        id: "GOF001",
        name: "Competition",
        fields: [
          {
            fieldId: "F014",
            name: "Competing Products",
            value: ["Product X", "Product Y"],
            fieldType: "MULTI_SELECT",
          },
        ],
      },
      {
        id: "GOF002",
        name: "Technical Requirements",
        fields: [
          {
            fieldId: "F013",
            name: "Preferred Deployment",
            value: "On-Premise",
            fieldType: "DROPDOWN",
          },
        ],
      },
    ],
  },
  {
    leadId: "L123461",
    name: "Emma Wilson",
    stage: {
      name: "Closed Won",
      color: "#F44336",
      bgColor: "#FFEBEE",
    },
    assignees: [
      {
        id: "A006",
        name: "Liam Roberts",
        profilePic: "https://example.com/liam.jpg",
        lastUpdated: "2023-09-01T11:30:00Z",
      },
    ],
    overviewFields: [
      {
        fieldId: "OF001",
        name: "Email",
        value: "emma.wilson@example.com",
        fieldType: "EMAIL",
      },
      {
        fieldId: "OF002",
        name: "Phone",
        fieldType: "PHONE_NUMBER",
        value: {
          countryCode: "+1",
          phoneNumber: "5555432109",
        },
      },
      {
        fieldId: "OF003",
        name: "Company",
        value: "Acme Inc.",
        fieldType: "SMALL_TEXT",
      },
    ],
    gofs: [
      {
        id: "GOF001",
        name: "Final Purchase",
        fields: [
          {
            fieldId: "F017",
            name: "Product Purchased",
            value: "Solution Z",
            fieldType: "SMALL_TEXT",
          },
          {
            fieldId: "F018",
            name: "Total Deal Value",
            value: 500000,
            fieldType: "NUMBER",
          },
        ],
      },
      {
        id: "GOF002",
        name: "After-Sales Support",
        fields: [
          {
            fieldId: "F020",
            name: "Support Contact",
            value: "support@acme.com",
            fieldType: "EMAIL",
          },
        ],
      },
      {
        name: "Work Experience",
        gof_id: "WORK1213",
        is_editable: true,
        fields: [
          {
            fieldId: "work-field-1",
            fieldType: "PLAIN_TEXT",
            name: "Company Name",
            value: "Innovative Solutions Inc.",
          },
          {
            fieldId: "work-field-2",
            fieldType: "PLAIN_TEXT",
            name: "Role",
            value: "Senior Software Engineer",
          },
          {
            fieldId: "work-field-3",
            fieldType: "PLAIN_TEXT",
            name: "Years of Experience",
            value: "5 years",
          },
          {
            fieldId: "work-field-4",
            fieldType: "STATUS",
            name: "Employment Status",
            value: {
              color: "blue",
              status: "In Progress",
              bgColor: "#bfdbfe",
            },
          },
          {
            fieldId: "work-field-5",
            fieldType: "LONG_TEXT",
            name: "Job Responsibilities",
            value:
              "Leading a team of developers to build high-performance software solutions.",
          },
        ],
      },
      {
        name: "Address Details",
        gof_id: "ADDR1617",
        is_editable: true,
        fields: [
          {
            fieldId: "addr-field-1",
            fieldType: "LONG_TEXT",
            name: "Home Address",
            value: "123 Elm Street, Springfield, IL, 62704",
          },
          {
            fieldId: "addr-field-2",
            fieldType: "PLAIN_TEXT",
            name: "Postal Code",
            value: "62704",
          },
          {
            fieldId: "addr-field-3",
            fieldType: "PLAIN_TEXT",
            name: "City",
            value: "Springfield",
          },
          {
            fieldId: "addr-field-4",
            fieldType: "PLAIN_TEXT",
            name: "State",
            value: "Illinois",
          },
          {
            fieldId: "addr-field-5",
            fieldType: "PLAIN_TEXT",
            name: "Country",
            value: "USA",
          },
          {
            fieldId: "addr-field-6",
            fieldType: "PHONE_NUMBER",
            name: "Landline",
            value: {
              countryCode: "+1",
              phoneNumber: "2175550123",
            },
          },
          {
            fieldId: "addr-field-7",
            fieldType: "PLAIN_TEXT",
            name: "Residence Type",
            value: "Owned",
          },
        ],
      },
      {
        name: "Education Details",
        gof_id: "EDU456",
        is_editable: true,
        fields: [
          {
            fieldId: "edu-field-1",
            fieldType: "PLAIN_TEXT",
            name: "Degree",
            value: "Master of Science in Data Science",
          },
          {
            fieldId: "edu-field-2",
            fieldType: "STATUS",
            name: "Graduation Status",
            value: {
              bgColor: "#bbf7d0",
              color: "green",
              status: "passed",
            },
          },
        ],
      },
      {
        name: "Social Profiles",
        gof_id: "SOC1819",
        is_editable: true,
        fields: [
          {
            fieldId: "soc-field-1",
            fieldType: "URL",
            name: "LinkedIn Profile",
            value: "https://linkedin.com/in/janedoe",
          },
          {
            fieldId: "soc-field-2",
            fieldType: "URL",
            name: "GitHub Profile",
            value: "https://github.com/janedoe",
          },
          {
            fieldId: "soc-field-3",
            fieldType: "URL",
            name: "Twitter Profile",
            value: "https://twitter.com/janedoe",
          },
          {
            fieldId: "soc-field-4",
            fieldType: "URL",
            name: "Portfolio",
            value: "https://janedoe.dev",
          },
          {
            fieldId: "soc-field-5",
            fieldType: "PLAIN_TEXT",
            name: "Instagram Handle",
            value: "@jane.doe",
          },
          {
            fieldId: "soc-field-6",
            fieldType: "PLAIN_TEXT",
            name: "YouTube Channel",
            value: "JaneDoeVlogs",
          },
          {
            fieldId: "soc-field-7",
            fieldType: "PLAIN_TEXT",
            name: "Medium Blog",
            value: "@janedoe.medium.com",
          },
          {
            fieldId: "soc-field-8",
            fieldType: "PLAIN_TEXT",
            name: "Personal Blog",
            value: "https://blog.janedoe.dev",
          },
        ],
      },
      {
        name: "Certifications",
        gof_id: "CERT123",
        is_editable: false,
        fields: [
          {
            fieldId: "cert-field-1",
            fieldType: "PLAIN_TEXT",
            name: "Certification Name",
            value: "Google Cloud Certified Professional",
          },
        ],
      },
      {
        name: "Project Links",
        gof_id: "PROJ1011",
        is_editable: true,
        fields: [
          {
            fieldId: "proj-field-1",
            fieldType: "URL",
            name: "Github Repository",
            value: "https://github.com/janedoe/project1",
          },
          {
            fieldId: "proj-field-2",
            fieldType: "URL",
            name: "Portfolio",
            value: "https://janedoe.dev",
          },
          {
            fieldId: "proj-field-3",
            fieldType: "PLAIN_TEXT",
            name: "Project Title",
            value: "AI-based Recommendation System",
          },
          {
            fieldId: "proj-field-4",
            fieldType: "PLAIN_TEXT",
            name: "Completion Year",
            value: "2022",
          },
        ],
      },
      {
        name: "Personal Information",
        gof_id: "PER789",
        is_editable: true,
        fields: [
          {
            fieldId: "per-field-1",
            fieldType: "PLAIN_TEXT",
            name: "Full Name",
            value: "Jane Doe",
          },
          {
            fieldId: "per-field-2",
            fieldType: "PHONE_NUMBER",
            name: "Mobile Number",
            value: {
              countryCode: "+44",
              phoneNumber: "7896543210",
            },
          },
          {
            fieldId: "per-field-3",
            fieldType: "PLAIN_TEXT",
            name: "Date of Birth",
            value: "1995-04-10",
          },
        ],
      },
      {
        name: "Payment Information",
        gof_id: "PAY1415",
        is_editable: true,
        fields: [
          {
            fieldId: "pay-field-1",
            fieldType: "PLAIN_TEXT",
            name: "Payment Method",
            value: "Credit Card",
          },
          {
            fieldId: "pay-field-2",
            fieldType: "PLAIN_TEXT",
            name: "Cardholder Name",
            value: "Jane Doe",
          },
          {
            fieldId: "pay-field-3",
            fieldType: "PLAIN_TEXT",
            name: "Amount Paid",
            value: "$200",
          },
          {
            fieldId: "pay-field-4",
            fieldType: "PLAIN_TEXT",
            name: "Payment Date",
            value: "2023-09-15",
          },
          {
            fieldId: "pay-field-5",
            fieldType: "URL",
            name: "Receipt Link",
            value: "https://payments.example.com/receipt1234",
          },
          {
            fieldId: "pay-field-6",
            fieldType: "PLAIN_TEXT",
            name: "Transaction ID",
            value: "TXN123456789",
          },
        ],
      },
    ],
  },
  {
    leadId: "L123444",
    name: "John Doe",
    stage: {
      name: "Qualified",
      color: "#4CAF50",
      bgColor: "#e8f5e9",
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
            fieldType: "URL",
          },
          {
            fieldId: "F007",
            name: "Twitter",
            value: "@acmecorp",
            fieldType: "URL",
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
  },
];
