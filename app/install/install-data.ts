export const SCRIPT_TAG = `<script src="https://app.dreamneighborhood.com/explorer/sdk.js" async></script>`;

export type Platform = {
  slug: string;
  name: string;
  emoji: string;
  tagline: string;
  steps: { title: string; body: string }[];
  notes?: string[];
};

export const platforms: Record<string, Platform> = {
  squarespace: {
    slug: "squarespace",
    name: "Squarespace",
    emoji: "▢",
    tagline: "Add Dream Neighborhood to your Squarespace site in under 2 minutes.",
    steps: [
      {
        title: "Open your Squarespace dashboard",
        body: "Sign in at squarespace.com and select the site you want to add the popup to.",
      },
      {
        title: "Go to Settings → Advanced → Code Injection",
        body: "From the left menu, click Settings, then Advanced, then Code Injection.",
      },
      {
        title: "Paste the script into the FOOTER box",
        body: "Copy the snippet below and paste it into the Footer code injection field. Do NOT use the Header field.",
      },
      {
        title: "Save changes",
        body: "Click Save in the top-left corner. The popup will appear on every page within a minute.",
      },
    ],
    notes: [
      "Code Injection requires a Business plan or higher in Squarespace.",
      "If you use multiple sites, add the script to each one — they're all included in your subscription.",
    ],
  },
  wix: {
    slug: "wix",
    name: "Wix",
    emoji: "✦",
    tagline: "Embed the Dream Neighborhood popup on your Wix site.",
    steps: [
      {
        title: "Open your Wix Editor",
        body: "Sign in to wix.com and click Edit Site.",
      },
      {
        title: "Add a Custom Code element",
        body: "Click Settings (in the top menu) → Custom Code → Add Custom Code.",
      },
      {
        title: "Paste the script",
        body: "Paste the snippet into the Code box. Set Place Code in to Body — End.",
      },
      {
        title: "Apply to All pages and save",
        body: "Choose Apply to: All pages, Load code: Once, then click Apply.",
      },
    ],
    notes: ["Custom Code requires a Premium Wix plan."],
  },
  wordpress: {
    slug: "wordpress",
    name: "WordPress",
    emoji: "Ⓦ",
    tagline: "Add Dream Neighborhood to any WordPress theme — classic or block-based.",
    steps: [
      {
        title: "Install a header/footer scripts plugin",
        body: "We recommend the free plugin “WPCode — Insert Headers and Footers” or “Insert Headers and Footers by WPBeginner”.",
      },
      {
        title: "Activate the plugin",
        body: "In your WordPress admin, go to Plugins → Add New, search for the plugin name, install and activate.",
      },
      {
        title: "Open the plugin's settings",
        body: "Navigate to Settings → Insert Headers and Footers (or the equivalent in WPCode).",
      },
      {
        title: "Paste the snippet into the Footer field",
        body: "Paste the script into the field labelled Scripts in Footer (or Body) and click Save.",
      },
    ],
    notes: [
      "If you build with Elementor, Divi, or other page builders, the plugin still works fine.",
      "Self-hosted WordPress only — WordPress.com requires a Business plan to add custom scripts.",
    ],
  },
  webflow: {
    slug: "webflow",
    name: "Webflow",
    emoji: "❖",
    tagline: "Add the popup to your Webflow project in seconds.",
    steps: [
      {
        title: "Open Project Settings",
        body: "From your Webflow Designer, click the project name and choose Project Settings.",
      },
      {
        title: "Go to the Custom Code tab",
        body: "In Project Settings, click Custom Code in the top menu.",
      },
      {
        title: "Paste the script in the Footer Code field",
        body: "Paste the snippet into the Footer Code section, then click Save Changes.",
      },
      {
        title: "Publish your site",
        body: "Click Publish in the top-right of Webflow Designer to push the change live.",
      },
    ],
    notes: ["Custom Code requires a paid Webflow plan."],
  },
  shopify: {
    slug: "shopify",
    name: "Shopify",
    emoji: "🛍",
    tagline: "Add Dream Neighborhood to your Shopify storefront.",
    steps: [
      {
        title: "Open your Shopify admin",
        body: "Go to admin.shopify.com and select Online Store → Themes.",
      },
      {
        title: "Edit theme code",
        body: "Click Actions → Edit code on your active theme.",
      },
      {
        title: "Open theme.liquid",
        body: "In the Layout folder, open the file theme.liquid.",
      },
      {
        title: "Paste before </body>",
        body: "Scroll to the bottom of the file. Paste the snippet on the line right before the closing </body> tag, then click Save.",
      },
    ],
  },
  godaddy: {
    slug: "godaddy",
    name: "GoDaddy",
    emoji: "🏷",
    tagline: "Add the popup to your GoDaddy Website Builder site.",
    steps: [
      {
        title: "Open your GoDaddy site editor",
        body: "Sign in at godaddy.com and click Edit Website.",
      },
      {
        title: "Add an HTML section",
        body: "Click Add Section → Choose HTML. Place it once anywhere on the page (it's invisible).",
      },
      {
        title: "Paste the script into the HTML block",
        body: "Click Custom Code and paste the snippet into the box. Click Done.",
      },
      {
        title: "Publish your site",
        body: "Click Publish in the top-right corner.",
      },
    ],
    notes: ["The HTML section must be added on every page that should show the popup, OR add it once in the global footer."],
  },
  other: {
    slug: "other",
    name: "Other / HTML site",
    emoji: "<>",
    tagline: "Generic instructions for any HTML-based website or platform.",
    steps: [
      {
        title: "Open the HTML file or template that controls every page",
        body: "Look for a file named index.html, base.html, layout.html, or your platform's equivalent global template.",
      },
      {
        title: "Find the closing </body> tag",
        body: "Scroll to the bottom of the file until you see </body>.",
      },
      {
        title: "Paste the snippet right before </body>",
        body: "The script must run on every page. Save the file.",
      },
      {
        title: "Deploy or refresh your site",
        body: "Push the change to your hosting provider, or click your platform's Publish button.",
      },
    ],
    notes: [
      "If you can't find the right template, book a free 15-minute install call from the dashboard — we'll do it for you.",
    ],
  },
};

export const platformList = [
  platforms.squarespace,
  platforms.wix,
  platforms.wordpress,
  platforms.webflow,
  platforms.shopify,
  platforms.godaddy,
  platforms.other,
];
