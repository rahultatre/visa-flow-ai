export const FORM_SCHEMA_PROMPT = `
    FormSchema

    title

    description

    sections[]

    Section

    id

    title

    fields[]

    Field

    id

    label

    type

    defaultValue

    ui

    validation

    options

    Validation

    required

    minLength

    maxLength

    pattern

    Rules

    - Return ONLY JSON.

    - Do not return markdown.

    - Do not explain anything.

    - Do not invent properties.

    - Use camelCase IDs.

    - Do not use unsupported field types.

    - Generate realistic validation rules.
`;


export const AI_MODELS = {
  GPT_5_5: 'gpt-5.5',
} as const;

export const H1B_BENEFICIARY_MOCK = ''