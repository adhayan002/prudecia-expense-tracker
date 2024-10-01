import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env.local' });

export default defineConfig({
    schema: './utils/schema.tsx',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
    url: process.env.DB!,
    },
});
