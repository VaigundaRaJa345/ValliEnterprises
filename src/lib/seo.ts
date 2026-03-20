export const keywordMap: Record<string, string> = {
  "iron": "Iron Removal Filters for Borewell Water in Chennai",
  "softener": "Advanced Water Softeners for Hard Water Problems",
  "domestic-ro": "Best Domestic RO Water Purifiers for Chennai Homes",
  "commercial-ro": "Commercial & Industrial RO Solutions for Factories & Schools",
  "stp": "STP & ETP Plants for Apartments and Industrial Wastewater",
  "borewell": "Specialized Water Treatment for High TDS Borewell Water",
  "school": "High-Capacity RO Drinking Water Systems for Schools",
  "industrial": "Heavy Duty Industrial Water Treatment Specialist in Chennai"
};

export function getDynamicIntent(query?: string): string {
  if (!query) return "Water Treatment Solutions & Services";
  
  const searchStr = query.toLowerCase();
  
  for (const [key, value] of Object.entries(keywordMap)) {
    if (searchStr.includes(key)) {
      return value;
    }
  }
  
  return `Water Treatment Solutions: ${query}`;
}
