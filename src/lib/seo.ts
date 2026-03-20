export interface IntentData {
  pageTitle: string;
  pageDescription: string;
}

export function getDynamicIntent(query?: string | null): IntentData {
  const defaultIntent: IntentData = {
    pageTitle: "Expert Water Purification Solutions",
    pageDescription: "Providing honest advice and quality products with reliable professional service."
  };

  const map: Record<string, IntentData> = {
    "iron": {
      pageTitle: "Iron Removal Filters for Borewell Water in Chennai",
      pageDescription: "Eliminate iron smell, color, and stains from your water with our specialized filtration systems."
    },
    "softener": {
      pageTitle: "Advanced Water Softeners for Hard Water Problems",
      pageDescription: "Prevents scaling in pipes, heaters, and boilers while improving soap efficiency and appliance life."
    },
    "domestic-ro": {
      pageTitle: "Best Domestic RO Water Purifiers for Chennai Homes",
      pageDescription: "Premium sales and service for all brands. Suitable for borewell, corporation, and mixed water sources."
    },
    "commercial-ro": {
      pageTitle: "Commercial & Industrial RO Solutions for Factories & Schools",
      pageDescription: "High-capacity systems designed for large water requirements with continuous, stable performance."
    },
    "stp": {
      pageTitle: "STP & ETP Plants for Apartments and Industrial Wastewater",
      pageDescription: "Complete sewage and effluent treatment plants to meet environmental standards and support reuse."
    },
    "borewell": {
      pageTitle: "Specialized Water Treatment for High TDS Borewell Water",
      pageDescription: "Honest advice and genuine spare parts for your specific borewell water condition."
    },
    "school": {
      pageTitle: "High-Capacity RO Drinking Water Systems for Schools",
      pageDescription: "Keep students healthy with safe, mineral-rich drinking water designed for educational institutions."
    },
    "industrial": {
      pageTitle: "Heavy Duty Industrial Water Treatment Specialist in Chennai",
      pageDescription: "Custom-built plants for factories with professional installation and reliable long-term support."
    }
  };

  if (!query) return defaultIntent;
  
  const searchStr = query.toLowerCase();
  
  for (const key in map) {
    if (searchStr.includes(key)) {
      return map[key];
    }
  }
  
  return {
    pageTitle: `Water Treatment: ${query}`,
    pageDescription: `Expert purification solutions for ${query} conditions in Chennai.`,
  };
}
