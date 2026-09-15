export const product = {
  dir: "Batchflow",
  slug: "batchflow",
  name: "Batchflow",
  tagline: "Turn data into progress.",
  eyebrow: "Import operations",
  action: "New import",
  accent: "#ff8a3d",
  accent2: "#ffc079",
  nav: ["Dashboard", "Imports", "Records", "Reports"],
  metrics: [
    ["Processing", "3"],
    ["Rows today", "42,810"],
    ["Success rate", "97.6%"],
    ["Average duration", "2m 18s"],
  ],
  activity: [
    "customers-sept.csv is 72% complete",
    "leads-emea.csv completed",
    "products.csv has 18 rejected rows",
  ],
} as const;
