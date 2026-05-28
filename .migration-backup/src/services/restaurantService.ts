import { 
  restaurantLocations, 
  restaurantInfo, 
  chefTeam, 
  restaurantStats,
  RestaurantLocation,
  TeamMember
} from '../data/restaurant';

export class RestaurantService {
  // Simulate API delay
  private static async simulateDelay(ms: number = 300): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Get all restaurant locations
  static async getLocations(): Promise<RestaurantLocation[]> {
    await this.simulateDelay();
    return restaurantLocations;
  }

  // Get location by ID
  static async getLocationById(id: number): Promise<RestaurantLocation | null> {
    await this.simulateDelay();
    return restaurantLocations.find(location => location.id === id) || null;
  }

  // Get restaurant information
  static async getRestaurantInfo() {
    await this.simulateDelay();
    return restaurantInfo;
  }

  // Get chef team
  static async getChefTeam(): Promise<TeamMember[]> {
    await this.simulateDelay();
    return chefTeam;
  }

  // Get chef by ID
  static async getChefById(id: number): Promise<TeamMember | null> {
    await this.simulateDelay();
    return chefTeam.find(chef => chef.id === id) || null;
  }

  // Get restaurant statistics
  static async getRestaurantStats() {
    await this.simulateDelay();
    return restaurantStats;
  }

  // Get contact information
  static async getContactInfo() {
    await this.simulateDelay();
    return {
      locations: restaurantLocations,
      contact: restaurantInfo.contact,
      socialMedia: restaurantInfo.socialMedia
    };
  }
}