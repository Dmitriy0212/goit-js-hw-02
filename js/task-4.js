function getShippingCost(country) {
  switch (country.toLowerCase()) {
    case 'China'.toLowerCase():
      return `Shipping to ${country.charAt(0).toUpperCase() + country.slice(1).toLowerCase()} will cost 100 credits`;
      break;
    case 'Chile'.toLowerCase():
      return `Shipping to ${country.charAt(0).toUpperCase() + country.slice(1).toLowerCase()} will cost 250 credits`;
      break;
    case 'Australia'.toLowerCase():
      return `Shipping to ${country.charAt(0).toUpperCase() + country.slice(1).toLowerCase()} will cost 170 credits`;
      break;
    case 'Jamaica'.toLowerCase():
      return `Shipping to ${country.charAt(0).toUpperCase() + country.slice(1).toLowerCase()} will cost 120 credits`;
      break;

    default:
      return 'Sorry, there is no delivery to your country';
  }
}

console.log(getShippingCost('AuStralia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
