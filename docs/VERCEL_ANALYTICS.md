# Getting Started with Vercel Web Analytics

This guide explains how to use Vercel Web Analytics on the SK Auto World landing page, showing you how the package is integrated, how to enable it, and how to view your data in the Vercel dashboard.

## Prerequisites

- A Vercel account. If you don't have one, you can [sign up for free](https://vercel.com/signup).
- A Vercel project. If you don't have one, you can [create a new project](https://vercel.com/new).
- The Vercel CLI installed. If you don't have it, you can install it using the following command:

```bash
npm install -g vercel
# or
yarn global add vercel
# or
pnpm add -g vercel
```

## Installation

The `@vercel/analytics` package has already been added to this project. It's included in the `package.json` dependencies.

If you need to reinstall it, use:

```bash
npm install @vercel/analytics
# or
yarn add @vercel/analytics
# or
pnpm add @vercel/analytics
```

## Integration

The Analytics component has been integrated into the main App component (`src/App.jsx`). Here's how it was implemented:

### 1. Import the Analytics Component

At the top of `src/App.jsx`:

```jsx
import { Analytics } from '@vercel/analytics/react';
```

### 2. Add the Analytics Component

In the JSX return statement, the `<Analytics />` component is placed just before the closing `</div>` tag:

```jsx
function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white font-body">
      {/* All your page content */}
      
      <Analytics />
    </div>
  )
}
```

The `<Analytics />` component is a wrapper around the tracking script, offering seamless integration with React, including automatic route tracking.

> **Note:** There is no route support with the basic React implementation if you're not using React Router. For full route support, consider migrating to Next.js or using a similar framework.

## Enable Web Analytics in Vercel

To enable Web Analytics for your project:

1. Go to the [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab
4. Click **Enable** from the dialog

> **Note:** Enabling Web Analytics will add new routes (scoped at `/_vercel/insights/*`) after your next deployment.

## Deploy Your App to Vercel

Deploy your app using the Vercel CLI or by connecting your Git repository:

### Using Vercel CLI:

```bash
vercel deploy
```

### Using Git Integration:

We recommend [connecting your project's Git repository](https://vercel.com/docs/git) to Vercel, which will enable automatic deployments of your latest commits.

Once your app is deployed, it will start tracking visitors and page views.

> **Note:** If everything is set up properly, you should be able to see a Fetch/XHR request in your browser's Network tab from `/_vercel/insights/view` when you visit any page.

## View Your Data in the Dashboard

Once your app is deployed and users have visited your site, you can view your data:

1. Go to your [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click the **Analytics** tab

After a few days of visitor data, you'll be able to explore your data by viewing and filtering the analytics panels.

### Additional Features

Users on Pro and Enterprise plans can also add [custom events](https://vercel.com/docs/analytics/custom-events) to track user interactions such as:
- Button clicks
- Form submissions
- Purchases
- Custom business events

## Development

During development, the analytics script will still run but may not send data to the Vercel dashboard (depending on your deployment status).

To test locally:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Building for Production

To build the app for production:

```bash
npm run build
```

This creates an optimized build in the `dist` directory, ready for deployment.

## Privacy and Compliance

Learn more about how Vercel supports [privacy and data compliance standards](https://vercel.com/docs/analytics/privacy-policy) with Vercel Web Analytics.

## Next Steps

Now that Vercel Web Analytics is set up, you can explore:

- [Learn how to use the `@vercel/analytics` package](https://vercel.com/docs/analytics/package)
- [Set up custom events](https://vercel.com/docs/analytics/custom-events)
- [Learn about filtering data](https://vercel.com/docs/analytics/filtering)
- [Read about privacy and compliance](https://vercel.com/docs/analytics/privacy-policy)
- [Explore pricing](https://vercel.com/docs/analytics/limits-and-pricing)
- [Troubleshooting](https://vercel.com/docs/analytics/troubleshooting)

## Troubleshooting

### Analytics script not loading

1. Check that the `@vercel/analytics` package is installed
2. Verify the component is properly imported in App.jsx
3. Check the browser console for any errors
4. Ensure the project is deployed to Vercel (not running locally without proper deployment)

### No data appearing in dashboard

1. Wait a few minutes after deployment - it can take time for data to appear
2. Make sure you've actually visited the deployed site
3. Check the Network tab in browser DevTools for requests to `/_vercel/insights/*`
4. Verify Web Analytics is enabled in the Vercel project settings

### Custom events not working

1. Ensure you're on a Pro or Enterprise plan
2. Check the Vercel Analytics documentation for the latest implementation details
3. Verify custom event calls are in browser (client-side) code only
