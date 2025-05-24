# Marketash - Fresh from the Farm, Straight to You 🌾

An intelligent agri-tech platform connecting farmers directly to buyers, featuring AI-powered crop disease detection and Buy Now, Pay Later (BNPL) services.

## Features

### 🌾 Agri-Link Marketplace
- Farmers can list products with detailed information
- Buyers can place orders and bids
- Smart wallet system for secure transactions
- Real-time chat between buyers and farmers

### 🤖 AI-Powered Crop Disease Detector
- Upload crop photos for disease diagnosis
- Get instant analysis and treatment recommendations
- Works with multiple crop types

### 💳 Farmer's BNPL Program
- Access credit for agricultural inputs
- Custom repayment plans
- Credit scoring based on platform activity

### 👨‍💻 Admin Dashboard
- Full platform monitoring
- User management
- Transaction oversight

## Tech Stack

- React + TypeScript
- Tailwind CSS
- Supabase (Database & Authentication)
- Vite (Build Tool)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file with:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Database Setup

The application uses Supabase for data storage and real-time features. The database schema includes:

- User profiles (farmers/buyers)
- Products
- Bids
- Transactions
- Chat rooms and messages
- Wallet management
- Credit applications

## Deployment

This project is configured for deployment on Netlify with continuous integration from GitHub.

## License

MIT