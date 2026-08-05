import { FormSchema } from "../../shared/interfaces/form-schema.interface";

export const H1B_PETITIONER_MOCK: FormSchema = {
  title: "H1B Petitioner Information",
  description: "Collect petitioner company information for H1B filing.",
  sections: [
    {
      id: "companyInformation",
      title: "Company Information",
      fields: [
        {
          id: "companyName",
          label: "Company Name",
          type: "text",
          ui: {
            placeholder: "Enter company name"
          },
          validation: {
            required: true,
            minLength: 3
          }
        },
        {
          id: "fein",
          label: "Federal Employer Identification Number (FEIN)",
          type: "text",
          ui: {
            placeholder: "12-3456789"
          },
          validation: {
            required: true
          }
        },
        {
          id: "yearEstablished",
          label: "Year Established",
          type: "number",
          validation: {
            required: true
          }
        },
        {
          id: "numberOfEmployees",
          label: "Number of Employees",
          type: "number"
        }
      ]
    },
    {
      id: "contactInformation",
      title: "Primary Contact",
      fields: [
        {
          id: "contactName",
          label: "Contact Name",
          type: "text",
          validation: {
            required: true
          }
        },
        {
          id: "email",
          label: "Email Address",
          type: "email",
          validation: {
            required: true
          }
        },
        {
          id: "phone",
          label: "Phone Number",
          type: "tel",
          validation: {
            required: true
          }
        }
      ]
    }
  ]
};