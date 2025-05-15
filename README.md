# Finitup - Static AI Research Platform Website

A fully static, GitHub Pages-compatible website for Finitup, a research platform that simulates an AI-based Decision Support System (DSS) for stock investment.

## Project Overview

This project is a static website built with:
- HTML
- JavaScript (React via CDN)
- Tailwind CSS (via CDN)
- Chart.js for data visualization

The site is designed to be 100% static and compatible with GitHub Pages, with no server-side rendering, backend, database, or dynamic behavior.

## File Structure

\`\`\`
finitup/
├── index.html                # Home page
├── strategies.html           # Investment strategies
├── reports.html              # Research reports
├── predictions.html          # Market predictions
├── research.html             # Research architecture
├── survey.html               # Research survey
├──

I apologize, but I need to adjust my approach based on your updated requirements. Let me create a fully static website using only HTML, CSS, and JavaScript (no TypeScript or React components).

```html file="index.html"
&lt;!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Finitup - AI Research Platform</title>
  <meta name="description" content="Finitup is a research platform that simulates an AI-based Decision Support System (DSS) for stock investment.">
  <link rel="icon" href="./assets/favicon.ico" type="image/x-icon">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: {
              50: '#eef2ff',
              100: '#e0e7ff',
              200: '#c7d2fe',
              300: '#a5b4fc',
              400: '#818cf8',
              500: '#6366f1',
              600: '#4f46e5',
              700: '#4338ca',
              800: '#3730a3',
              900: '#312e81'
            }
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif']
          }
        }
      }
    }
  </script>
  <link rel="stylesheet" href="./styles/main.css">
</head>
<body class="font-sans bg-white text-gray-900 min-h-screen flex flex-col">
  &lt;!-- Header/Navigation -->
  <header class="bg-white shadow-sm">
    <div class="container mx-auto px-4 md:px-6">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <a href="./index.html" class="flex-shrink-0 flex items-center">
            <img class="h-8 w-auto" src="./assets/logo.svg" alt="Finitup Logo">
            <span class="ml-2 text-xl font-bold text-primary-800">Finitup</span>
          </a>
        </div>
        
        <nav class="hidden md:ml-6 md:flex md:space-x-8">
          <a href="./strategies.html" class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">Strategies</a>
          <a href="./reports.html" class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">Reports</a>
          <a href="./predictions.html" class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">Predictions</a>
          <a href="./research.html" class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">Research</a>
          <a href="./survey.html" class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">Survey</a>
          <a href="./contact.html" class="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium">Contact</a>
        </nav>
        
        <div class="md:hidden">
          <button id="mobile-menu-button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      &lt;!-- Mobile menu, show/hide based on menu state -->
      <div id="mobile-menu" class="md:hidden hidden">
        <div class="pt-2 pb-3 space-y-1">
          <a href="./strategies.html" class="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">Strategies</a>
          <a href="./reports.html" class="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">Reports</a>
          <a href="./predictions.html" class="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">Predictions</a>
          <a href="./research.html" class="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">Research</a>
          <a href="./survey.html" class="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">Survey</a>
          <a href="./contact.html" class="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">Contact</a>
        </div>
      </div>
    </div>
  </header>

  &lt;!-- Main Content -->
  <main class="flex-grow">
    &lt;!-- Hero Section -->
    <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16 md:py-24">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-4xl md:text-5xl font-bold mb-6">AI for Smarter Market Decisions</h1>
            <p class="text-lg md:text-xl opacity-90 mb-8">
              Finitup is a research platform that simulates an AI-based Decision Support System (DSS) for stock investment. Our platform combines Large Language Models with Reinforcement Learning to provide data-driven investment insights.
            </p>
            <a href="./predictions.html" class="inline-block bg-white text-primary-700 hover:bg-gray-100 font-medium px-6 py-3 rounded-md shadow-md transition-colors">
              Explore Predictions
            </a>
          </div>
          <div class="flex justify-center">
            <img src="./assets/hero-illustration.svg" alt="AI Finance Illustration" class="max-w-full h-auto rounded-lg shadow-lg">
          </div>
        </div>
      </div>
    </section>

    &lt;!-- Features Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4 md:px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Research-Driven AI Investment Platform</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          &lt;!-- Feature 1 -->
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Investment Strategies</h3>
            <p class="text-gray-600 mb-4">
              Explore different AI-powered investment strategies tailored to various risk profiles and market conditions.
            </p>
            <a href="./strategies.html" class="text-primary-600 font-medium hover:text-primary-800">
              View Strategies →
            </a>
          </div>
          
          &lt;!-- Feature 2 -->
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Market Reports</h3>
            <p class="text-gray-600 mb-4">
              Access detailed analysis reports on major stocks, generated by our AI system using historical data.
            </p>
            <a href="./reports.html" class="text-primary-600 font-medium hover:text-primary-800">
              Browse Reports →
            </a>
          </div>
          
          &lt;!-- Feature 3 -->
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">AI Predictions</h3>
            <p class="text-gray-600 mb-4">
              View stock price predictions and confidence scores generated by our multi-agent reinforcement learning system.
            </p>
            <a href="./predictions.html" class="text-primary-600 font-medium hover:text-primary-800">
              See Predictions →
            </a>
          </div>
        </div>
      </div>
    </section>

    &lt;!-- Research Section -->
    <section class="py-16">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Academic Research Platform</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Finitup is designed for Information Systems researchers studying human-AI interaction in financial decision-making.
          </p>
        </div>
        <div class="flex justify-center">
          <a href="./research.html" class="inline-block bg-primary-100 text-primary-700 hover:bg-primary-200 font-medium px-6 py-3 rounded-md transition-colors">
            Learn About Our Research
          </a>
        </div>
      </div>
    </section>
  </main>

  &lt;!-- Footer -->
  <footer class="bg-gray-800 text-white py-12">
    <div class="container mx-auto px-4 md:px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="md:col-span-2">
          <div class="flex items-center mb-4">
            <img src="./assets/logo-white.svg" alt="Finitup Logo" class="h-8 w-auto">
            <span class="ml-2 text-xl font-bold">Finitup</span>
          </div>
          <p class="text-gray-300 mb-4 max-w-md">
            A research platform simulating AI-based decision support for stock investments.
            Designed for academic research on human-AI interaction in financial contexts.
          </p>
          <p class="text-gray-400 text-sm">
            © 2023 Finitup Research Platform. All rights reserved.
          </p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Platform</h3>
          <ul class="space-y-2">
            <li><a href="./strategies.html" class="text-gray-300 hover:text-white">Strategies</a></li>
            <li><a href="./predictions.html" class="text-gray-300 hover:text-white">Predictions</a></li>
            <li><a href="./reports.html" class="text-gray-300 hover:text-white">Reports</a></li>
            <li><a href="./research.html" class="text-gray-300 hover:text-white">Research</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Connect</h3>
          <ul class="space-y-2">
            <li><a href="./survey.html" class="text-gray-300 hover:text-white">Survey</a></li>
            <li><a href="./contact.html" class="text-gray-300 hover:text-white">Contact</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white">GitHub</a></li>
            <li><a href="#" class="text-gray-300 hover:text-white">Research Papers</a></li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
        <p>
          This platform is for academic research purposes only. Not financial advice.
          All stock data and predictions are simulated.
        </p>
      </div>
    </div>
  </footer>

  <script>
    // Mobile menu toggle
    document.getElementById('mobile-menu-button').addEventListener('click', function() {
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.toggle('hidden');
    });
  </script>
</body>
</html>
