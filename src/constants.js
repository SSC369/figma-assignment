const HEADER_OPTIONS = {
  call: { name: "call", bgColor: "#EFF8FF", color: "#1570EF" },
  whatsapp: { name: "whatsapp", bgColor: "#ECFDF3", color: "#039855" },
  remarks: { name: "remarks", bgColor: "#EFF8FF", color: "#1570EF" },
  send: { name: "send", bgColor: "#EFF8FF", color: "#1570EF" },
};

const ASSIGNEES_SHOW_LIMIT = 3;
const OVERVIEW_SHOW_LIMIT = 3;
const HOME_ROUTE = "/";

const LEAD_TABS = {
  "lead-details": "lead-details",
  activities: "activities",
  remarks: "remarks",
  documents: "documents",
  "call-log": "call-log",
  "history-log": "history-log",
};

const LEAD_TABS_NAVIGATE = {
  "lead-details": "/",
  activities: "activities",
  remarks: "remarks",
  documents: "documents",
  "call-log": "call-log",
  "history-log": "history-log",
};

const FIELD_TYPES = {
  CHECKBOX_GROUP: "CHECKBOX_GROUP",
  DATE: "DATE",
  MULTI_SELECT: "MULTI_SELECT",
  PHONE_NUMBER: "PHONE_NUMBER",
  LONG_TEXT: "LONG_TEXT",
  URL: "URL",
};
const DATE_FORMAT = "DD MMM YYYY, HH:MM A";
const FIELD_DATE_FORMAT = "DD MMM YYYY";
export {
  HEADER_OPTIONS,
  ASSIGNEES_SHOW_LIMIT,
  OVERVIEW_SHOW_LIMIT,
  LEAD_TABS,
  FIELD_TYPES,
  DATE_FORMAT,
  FIELD_DATE_FORMAT,
  HOME_ROUTE,
  LEAD_TABS_NAVIGATE,
};
