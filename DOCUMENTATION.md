# ContentCraft AI - कंटेंट सिंह Documentation

## Overview

ContentCraft AI is a web application designed to assist users in generating various types of content using AI. It provides tools for text generation, image captioning, and text-to-image creation, with a focus on accessibility and multilingual support.

## Key Features

*   **Text Content Generator:**
    *   Generate text content (blog posts, social media updates, scripts, etc.) based on user prompts.
    *   Customize content tone (formal, casual, professional, witty, etc.).
    *   Select desired content length (short, medium, long, bullet points, paragraph).
    *   Choose the output language for the generated content (supports multiple Indian and international languages).
    *   **Accessibility Context:** Optionally indicate if the user has a disability and provide details to help tailor the generated content for better suitability.
    *   **Speech-to-Text:** Use the microphone to dictate prompts.
    *   **Text-to-Speech:** Listen to the AI-generated responses with play/pause/stop controls.
    *   **On-the-fly Translation:** Translate AI responses into various supported languages directly within the chat interface.
*   **Image-to-Caption Generator:**
    *   Upload an image (max 5MB).
    *   Select a desired tone for the captions.
    *   Generate multiple (3-5) relevant and engaging caption options suitable for social media.
    *   Copy generated captions easily with a dedicated button for each.
    *   Option to generate alternative caption sets.
*   **Text-to-Image Generator:**
    *   Generate images based on textual prompts using AI.
    *   Download the generated images.
*   **Multilingual UI:**
    *   Select the interface language from a dropdown menu (supports English and various Indian languages).
    *   UI elements and static text adapt to the selected language.
*   **Accessibility Controls:**
    *   Adjust font size (Small, Medium, Large).
    *   Select from a wide range of font styles, including dyslexia-friendly options like OpenDyslexic and Lexend.
    *   Modify text spacing: letter spacing, word spacing, and line height.
    *   Settings are saved in `localStorage` for persistence.
*   **Theme Customization:**
    *   Choose from multiple UI themes (Light, Dark, Greenish Blue, Creamy, Greyish Black, Turquoise, Lavender, High Contrast).
    *   Theme preference is saved.
*   **Responsive Design:** Adapts to different screen sizes (desktop and mobile).
*   **Modern UI:** Clean interface using ShadCN UI components, Tailwind CSS, rounded corners, and subtle effects.

## Getting Started

### Prerequisites

*   Node.js (Version 18 or later recommended)
*   npm or yarn

### Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Environment Variables:**
    Create a `.env.local` file in the project root and add the following environment variables:
    ```env
    # Firebase Configuration (Obtain from your Firebase project settings)
    NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id

    # Google Generative AI API Key (Obtain from Google AI Studio or Google Cloud)
    GOOGLE_GENAI_API_KEY=your_google_ai_api_key
    ```
    *   **Important:** Ensure the Google AI API key has access to the necessary models (e.g., `gemini-1.5-flash-latest`, `gemini-2.0-flash-exp`). Enable the Generative Language API in your Google Cloud project if using a Cloud key.

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will be available at `http://localhost:9002` (or the specified port).

5.  **Run the Genkit development server (optional, for local AI flow testing):**
    In a separate terminal:
    ```bash
    npm run genkit:dev
    # or for watching changes
    npm run genkit:watch
    ```
    The Genkit UI will be available at `http://localhost:4000`.

### Usage

*   Use the sidebar to navigate between different generation modes (Text, Image Caption, Text-to-Image).
*   Use the header dropdowns to change the UI language and access user settings (placeholder).
*   Use the accessibility controls (via the Accessibility icon in the sidebar footer) to adjust font size, style, and spacing.
*   Use the theme toggle (Palette icon in the sidebar footer) to change the UI theme.
*   Interact with the specific controls within each generator tab to create content.

## Project Structure

```
.
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js App Router pages and layouts
│   │   ├── (main)/     # Main application routes
│   │   │   └── page.tsx # Main page component
│   │   ├── layout.tsx    # Root layout
│   │   └── globals.css   # Global styles and Tailwind directives
│   ├── ai/             # AI-related code (Genkit)
│   │   ├── flows/        # Genkit flows (e.g., generate-content, generate-caption)
│   │   ├── ai-instance.ts # Genkit initialization
│   │   └── dev.ts        # Entry point for Genkit dev server
│   ├── components/     # Reusable UI components
│   │   ├── ui/           # ShadCN UI components
│   │   ├── providers/    # Context providers (Theme, Query, etc.)
│   │   └── ...           # Custom components (Header, SidebarNav, generators)
│   ├── contexts/       # React context definitions (Language, ActiveTab)
│   ├── hooks/          # Custom React hooks (use-toast, use-mobile)
│   ├── lib/            # Utility functions and libraries
│   │   ├── firebase/     # Firebase configuration
│   │   └── utils.ts      # General utility functions (cn)
│   ├── locales/        # JSON files for UI translations
│   └── types/          # TypeScript type definitions
├── .env.local          # Environment variables (ignored by Git)
├── components.json     # ShadCN UI configuration
├── next.config.ts      # Next.js configuration
├── package.json        # Project dependencies and scripts
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Contributing

(Add contribution guidelines if applicable)

## License

(Specify project license, e.g., MIT)
