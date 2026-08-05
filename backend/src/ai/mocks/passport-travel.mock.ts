import { FormSchema } from "../../shared/interfaces/form-schema.interface";

export const PASSPORT_TRAVEL_MOCK: FormSchema = {
  title: "Passport & Travel History",
  description: "Collect passport and travel history information.",
  sections: [
    {
      id: "passportInformation",
      title: "Passport Information",
      fields: [
        {
          id: "passportNumber",
          label: "Passport Number",
          type: "text",
          validation: {
            required: true
          }
        },
        {
          id: "issuingCountry",
          label: "Issuing Country",
          type: "select",
          options: [
            { label: "India", value: "IN" },
            { label: "United States", value: "US" },
            { label: "Canada", value: "CA" },
            { label: "United Kingdom", value: "UK" }
          ],
          validation: {
            required: true
          }
        },
        {
          id: "issueDate",
          label: "Issue Date",
          type: "date"
        },
        {
          id: "expiryDate",
          label: "Expiry Date",
          type: "date",
          validation: {
            required: true
          }
        }
      ]
    },
    {
      id: "travelHistory",
      title: "Travel History",
      fields: [
        {
          id: "lastVisitedCountry",
          label: "Last Visited Country",
          type: "text"
        },
        {
          id: "lastEntryDate",
          label: "Last Entry Date",
          type: "date"
        },
        {
          id: "visaType",
          label: "Visa Type",
          type: "select",
          options: [
            { label: "B1/B2", value: "B1B2" },
            { label: "F1", value: "F1" },
            { label: "H1B", value: "H1B" },
            { label: "L1", value: "L1" }
          ]
        }
      ]
    }
  ]
};