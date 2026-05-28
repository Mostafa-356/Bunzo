import { egyptianBurgers, BurgerData } from '../data/burgers';
import { BurgerType } from '../types/burger';

export class BurgerService {
  // Convert BurgerData to BurgerType format
  private static convertBurgerDataToBurgerType(burger: BurgerData): BurgerType {
    return {
      id: burger.id,
      name: burger.name,
      image: burger.image,
      time: burger.time,
      category: burger.category,
      isFavorite: burger.isFavorite,
      ingredients: burger.ingredients,
      directions: burger.directions,
      nutritionInfo: burger.nutritionInfo
    };
  }

  // Simulate API delay
  private static async simulateDelay(ms: number = 500): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Get all burgers
  static async getAllBurgers(): Promise<BurgerType[]> {
    await this.simulateDelay();
    return egyptianBurgers.map(this.convertBurgerDataToBurgerType);
  }

  // Get burger by ID
  static async getBurgerById(id: number): Promise<BurgerType | null> {
    await this.simulateDelay();
    const burger = egyptianBurgers.find(b => b.id === id);
    return burger ? this.convertBurgerDataToBurgerType(burger) : null;
  }

  // Get burgers by category
  static async getBurgersByCategory(category: string): Promise<BurgerType[]> {
    await this.simulateDelay();
    const filtered = egyptianBurgers.filter(b => 
      category === 'all' || b.category.toLowerCase() === category.toLowerCase()
    );
    return filtered.map(this.convertBurgerDataToBurgerType);
  }

  // Get favorite burgers
  static async getFavoriteBurgers(): Promise<BurgerType[]> {
    await this.simulateDelay();
    const favorites = egyptianBurgers.filter(b => b.isFavorite);
    return favorites.map(this.convertBurgerDataToBurgerType);
  }

  // Search burgers
  static async searchBurgers(query: string): Promise<BurgerType[]> {
    await this.simulateDelay();
    const filtered = egyptianBurgers.filter(b =>
      b.name.toLowerCase().includes(query.toLowerCase()) ||
      b.description.toLowerCase().includes(query.toLowerCase()) ||
      b.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(query.toLowerCase())
      )
    );
    return filtered.map(this.convertBurgerDataToBurgerType);
  }

  // Get random burgers
  static async getRandomBurgers(count: number = 4): Promise<BurgerType[]> {
    await this.simulateDelay();
    const shuffled = [...egyptianBurgers].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count).map(this.convertBurgerDataToBurgerType);
  }
}