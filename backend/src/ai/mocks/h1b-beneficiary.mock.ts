import { FormSchema } from '../../shared/interfaces/form-schema.interface';

export const H1B_BENEFICIARY_MOCK: FormSchema = {
  title: 'H1B Beneficiary Information',
  description: 'Basic beneficiary information required for H1B visa processing.',
  sections: [
    {
      id: 'personalInformation',
      title: 'Personal Information',
      fields: [
        {
          id: 'firstName',
          label: 'First Name',
          type: 'text',
          ui: {
            placeholder: 'Enter first name'
          },
          validation: {
            required: true,
            minLength: 2,
            maxLength: 50
          }
        },
        {
          id: 'lastName',
          label: 'Last Name',
          type: 'text',
          ui: {
            placeholder: 'Enter last name'
          },
          validation: {
            required: true,
            minLength: 2,
            maxLength: 50
          }
        },
        {
          id: 'email',
          label: 'Email Address',
          type: 'email',
          ui: {
            placeholder: 'Enter email address'
          },
          validation: {
            required: true,
            pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$'
          }
        },
        {
          id: 'dateOfBirth',
          label: 'Date of Birth',
          type: 'date',
          validation: {
            required: true
          }
        },
        {
          id: 'gender',
          label: 'Gender',
          type: 'select',
          options: [
            {
              label: 'Male',
              value: 'Male'
            },
            {
              label: 'Female',
              value: 'Female'
            },
            {
              label: 'Other',
              value: 'Other'
            }
          ],
          validation: {
            required: true
          }
        }
      ]
    },
    {
      id: 'passportInformation',
      title: 'Passport Information',
      fields: [
        {
          id: 'passportNumber',
          label: 'Passport Number',
          type: 'text',
          validation: {
            required: true
          }
        },
        {
          id: 'passportExpiryDate',
          label: 'Passport Expiry Date',
          type: 'date',
          validation: {
            required: true
          }
        }
      ]
    }
  ]
};