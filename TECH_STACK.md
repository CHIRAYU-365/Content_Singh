# ContentCraft AI - Tech Stack

This document outlines the primary technologies and libraries used in the ContentCraft AI application.

## Core Framework & Language

*   **Framework:** [Next.js](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **UI Library:** [React](https://reactjs.org/)

## Styling & UI Components

*   **CSS Framework:** [Tailwind CSS](https://tailwindcss.com/)
*   **Component Library:** [ShadCN UI](https://ui.shadcn.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Animation:** [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)
*   **Class Merging:** [tailwind-merge](https://github.com/dcastil/tailwind-merge), [clsx](https://github.com/lukeed/clsx)

## State Management & Data Fetching

*   **Client-side State:** React Context API (`useState`, `useContext`, `useEffect`)
*   **Server/Client Data Fetching:** Primarily handled via Server Actions and direct AI flow calls.
*   **Query Client:** [TanStack Query (React Query)](https://tanstack.com/query/latest) (Used via `QueryProvider`, potentially for future caching needs)

## AI & Generative Features

*   **AI Toolkit:** [Genkit (Google AI)](https://firebase.google.com/docs/genkit)
    *   Used for defining AI prompts, flows, and interacting with generative models.
*   **AI Models:** Google AI Models (via `@genkit-ai/googleai` plugin)
    *   `gemini-1.5-flash-latest` (or similar for text/vision tasks)
    *   `gemini-2.0-flash-exp` (for experimental image generation)
*   **Schema Validation:** [Zod](https://zod.dev/) (Used within Genkit flows for input/output validation)

## Backend & Database

*   **Database:** [Firebase Firestore](https://firebase.google.com/docs/firestore) (Configuration present, currently used for storing history - *Note: History feature was recently removed but config remains*)
*   **Platform:** Deployed or intended for deployment on platforms supporting Next.js (e.g., Vercel, Firebase Hosting with Cloud Functions/Run).

## Accessibility & Internationalization (i18n)

*   **UI Text Translation:** Custom implementation using React Context and JSON files (`/src/locales`).
*   **Dynamic Content Translation:** Custom Genkit flow (`translate-content.ts`) likely interacting with a translation model via Google AI.
*   **Accessibility Features:** Manual implementation using React state, `localStorage`, and CSS variables for font size, style, and spacing adjustments.
*   **Text-to-Speech (TTS):** Browser's built-in `SpeechSynthesis` API.
*   **Speech-to-Text (STT):** Browser's built-in `SpeechRecognition` API.

## Development & Tooling

*   **Package Manager:** npm or yarn
*   **Build Tool:** Next.js (Turbopack enabled for development)
*   **Linting/Formatting:** ESLint, Prettier (Implicitly via Next.js defaults)
*   **Environment Variables:** `.env.local`

## Other Libraries

*   **Date Formatting:** [date-fns](https://date-fns.org/) (Potentially used in history or timestamp features)
*   **Forms:** [React Hook Form](https://react-hook-form.com/), [@hookform/resolvers](https://github.com/react-hook-form/resolvers) (Present, may be used for more complex forms if added later)
*   **Theming:** [next-themes](https://github.com/pacocoursey/next-themes)
