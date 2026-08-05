import { FormSchema } from "../../shared/interfaces/form-schema.interface";

export const EMPLOYEE_ONBOARDING_MOCK: FormSchema = {
  title: "Employee Onboarding",
  description: "Collect new employee onboarding information.",
  sections: [
    {
      id: "personalInformation",
      title: "Personal Information",
      fields: [
        {
          id: "firstName",
          label: "First Name",
          type: "text",
          validation: {
            required: true
          }
        },
        {
          id: "lastName",
          label: "Last Name",
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
          type: "tel"
        }
      ]
    },
    {
      id: "employmentInformation",
      title: "Employment Information",
      fields: [
        {
          id: "employeeId",
          label: "Employee ID",
          type: "text"
        },
        {
          id: "department",
          label: "Department",
          type: "select",
          options: [
            { label: "Engineering", value: "engineering" },
            { label: "Human Resources", value: "hr" },
            { label: "Finance", value: "finance" },
            { label: "Operations", value: "operations" }
          ]
        },
        {
          id: "joiningDate",
          label: "Joining Date",
          type: "date"
        }
      ]
    }
  ]
};