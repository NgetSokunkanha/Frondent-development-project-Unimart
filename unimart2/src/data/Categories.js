
export const categories = [
  {label: "Fresh Produce", count: "120+ items", iconColor: "#3a7d1e", bg: "#edf7e5" },
  {label: "Personal Care", count: "80+ items",  iconColor: "#e91e8c", bg: "#fce4f0" },
  {label: "Health Store",  count: "60+ items",  iconColor: "#0077cc", bg: "#e3f0fb" },
  {label: "Beauty",        count: "95+ items",  iconColor: "#9b59b6", bg: "#f3e8fb" },
  {label: "Snacks",        count: "150+ items", iconColor: "#f47c20", bg: "#fff3e5" },
  {label: "Beverages",     count: "70+ items",  iconColor: "#e53935", bg: "#fce4e4" },
  {label: "Frozen Food",   count: "45+ items",  iconColor: "#00897b", bg: "#e0f5f1" },
  {label: "Breakfast",     count: "55+ items",  iconColor: "#f9a825", bg: "#fffbea" },
];

export const categoryNames = ["All", ...categories.map((c) => c.label)];