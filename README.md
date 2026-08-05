# VisaFlow AI

VisaFlow AI is an AI-powered dynamic form generation platform built with Angular 20 and Express.js.

Instead of manually developing forms, users describe a business requirement in natural language. The backend AI service generates a JSON-based form schema, and the Angular application renders a fully dynamic form using Reactive Forms.

---

## Features

- 🤖 AI-powered form schema generation
- 📝 Metadata-driven dynamic form rendering
- ⚡ Angular 20 with Signals
- 📋 Reactive Forms with dynamic validation
- 🎨 Angular Material UI
- 🔌 Express.js REST API
- 🏗️ Provider-based AI architecture
- 🧪 Mock AI provider for local development
- 📄 Shared schema contract between frontend and backend

---

## Tech Stack

### Frontend

- Angular 20
- TypeScript
- Angular Material
- Angular Signals
- Reactive Forms

### Backend

- Node.js
- Express.js
- TypeScript
- OpenAI SDK
- Pino Logger

---

## Project Structure

```
visa-flow-ai/
├── frontend/
├── backend/
└── docs/
```

---

## Documentation

- Getting Started
- Architecture
- API Reference
- Project Structure
- Architecture Decisions

## Current Status

The project currently uses a mock AI provider for schema generation to allow development without an OpenAI billing account.

Four sample schemas are available:

- H1B Beneficiary Information
- H1B Petitioner Information
- Passport & Travel History
- Employee Onboarding

Once an OpenAI API key with billing is configured, the mock provider can be replaced with the real OpenAI provider without changing the frontend.


## Demo Prompts

Try these prompts:

- Generate an H1B Beneficiary Information form
- Generate an H1B Petitioner Information form
- Generate a Passport and Travel History form
- Generate an Employee Onboarding form