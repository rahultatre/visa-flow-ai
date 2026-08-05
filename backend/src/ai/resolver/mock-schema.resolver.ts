import { FormSchema } from "../../shared/interfaces/form-schema.interface";
import { H1B_BENEFICIARY_MOCK } from "../mocks/h1b-beneficiary.mock";
import { H1B_PETITIONER_MOCK } from "../mocks/h1b-petitioner.mock";
import { PASSPORT_TRAVEL_MOCK } from "../mocks/passport-travel.mock";
import { EMPLOYEE_ONBOARDING_MOCK } from "../mocks/employee-onboarding.mock";

const MOCK_SCHEMAS = [
  {
    keywords: ['beneficiary', 'h1b beneficiary'],
    schema: H1B_BENEFICIARY_MOCK
  },
  {
    keywords: ['petitioner', 'company'],
    schema: H1B_PETITIONER_MOCK
  },
  {
    keywords: ['passport', 'travel'],
    schema: PASSPORT_TRAVEL_MOCK
  },
  {
    keywords: ['employee', 'onboarding'],
    schema: EMPLOYEE_ONBOARDING_MOCK
  }
];

export class MockSchemaResolver {

    static resolve(prompt: string): FormSchema {

        const value = prompt.toLowerCase();

        for (const { keywords, schema } of MOCK_SCHEMAS) {
            if (keywords.some(keyword => value.includes(keyword))) {
                return schema;
            }
        }

        return EMPLOYEE_ONBOARDING_MOCK;
    }
}
