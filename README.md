# Prudencia - Expense Tracker

**Prudencia** is a comprehensive financial management application built with Next.js. It helps users track their expenses, manage budgets, and gain insights into their financial habits through AI-powered analytics.

## Features

- **Dashboard Overview**: Get a visual summary of your financial status.
- **Budget Management**: Create, edit, and track budgets seamlessly.
- **Income Tracking**: Record and categorize different income sources.
- **Expense Logging**: Add, edit, and categorize expenses.
- **Financial Insights**: Receive AI-driven advice based on spending patterns.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Authentication**: Secure sign-up and sign-in functionality.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) (via [Neon](https://neon.tech/))
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **AI Integration**: [Google Generative AI (Gemini)](https://cloud.google.com/ai/generative-ai)

## Getting Started

### Prerequisites

- **Node.js** (v14 or later)
- **npm**, **Yarn**, or **Bun**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adhayan002/prudencia-expense-tracker
   ```

2. Navigate to the project directory:
   ```bash
   cd prudencia-expense-tracker
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

4. Set up environment variables:
   - Create a `.env.local` file in the root directory and add the following:
     
     ```bash
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
     CLERK_SECRET_KEY=your_clerk_secret_key
     NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
     NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
     NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
     NEXT_PUBLIC_DB=your_database_url
     ```

5. Run the development server:
   
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

```bash
prudencia-expense-tracker/
├── src/
│   ├── app/            # Application pages and routes
│   ├── components/     # Reusable UI components
│   ├── lib/            # Utility functions
│   └── utils/          # Database schema and configuration
└── README.md           # Project documentation
```

## Key Components

- **Dashboard**: Main overview of the user's financial status.
- **BudgetList**: Manages and displays user budgets.
- **IncomeList**: Tracks and shows income sources.
- **ExpenseListTable**: Lists and manages expenses.

## Contributing

Contributions are welcome! If you'd like to contribute, please submit a Pull Request or open an issue on GitHub.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- The [Next.js](https://nextjs.org/) team for the framework.
- [Clerk](https://clerk.dev/) for providing authentication services.
- [Google](https://cloud.google.com/ai/generative-ai) for their Generative AI API.
- [Neon](https://neon.tech/) for the serverless PostgreSQL database services.

---

This version follows a cleaner structure with headings, code blocks, and a logical project outline. It ensures clarity for anyone looking to use, contribute to, or understand the project.
