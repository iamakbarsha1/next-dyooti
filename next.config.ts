// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   // turboMode: true, // Enable Turbopack (experimental bundler for faster builds)
//   experimental: {
//     // turboMode: false, // Disable Turbopack and use Webpack instead
//   },
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove experimental turboMode as it's no longer supported
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Add SWC minify for better performance
  swcMinify: true,
  // Add this experimental feature to help with hydration
  experimental: {
    optimizePackageImports: ["lovedicons"],
  },
};

export default nextConfig;

// Here are the key changes and steps to implement:

// First, update your next.config.js with the new configuration:

// Removed the deprecated turboMode option
// Added necessary configuration for images and optimization

// In the Navbar component:

// Added a mounted state to handle hydration
// Only render the component after client-side hydration is complete
// Added proper type="button" to buttons
// Added z-index to dropdowns
// Improved hydration handling with proper mounting checks

// In your tsconfig.json, keep the moduleResolution as "node" as you have it - that's correct.

// To implement:

// Replace your current next.config.js with the new version
// Replace your Navbar component with the updated version
// Run these commands in order:

// bashCopy# Clear next.js cache
// rm -rf .next
// # Clear node_modules
// rm -rf node_modules
// # Remove package-lock.json
// rm package-lock.json
// # Reinstall dependencies
// npm install
// # Run the dev server
// npm run dev
// This solution should resolve both the hydration mismatch and the build issues. The key changes are:

// Proper handling of client-side only rendering
// Removal of deprecated configuration options
// Clean build setup
// Proper state management for mounted state

// The hydration mismatch was likely occurring because:

// The component was trying to render before hydration was complete
// The turboMode configuration was causing conflicts
// There were potential conflicts in the build cache

// Let me know if you still encounter any issues!
