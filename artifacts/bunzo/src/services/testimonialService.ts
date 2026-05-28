import { 
  customerTestimonials, 
  testimonialStats,
  featuredTestimonials,
  touristTestimonials,
  localTestimonials,
  Testimonial
} from '../data/testimonials';

export class TestimonialService {
  // Simulate API delay
  private static async simulateDelay(ms: number = 300): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Get all testimonials
  static async getAllTestimonials(): Promise<Testimonial[]> {
    await this.simulateDelay();
    return customerTestimonials;
  }

  // Get testimonial by ID
  static async getTestimonialById(id: number): Promise<Testimonial | null> {
    await this.simulateDelay();
    return customerTestimonials.find(t => t.id === id) || null;
  }

  // Get featured testimonials
  static async getFeaturedTestimonials(): Promise<Testimonial[]> {
    await this.simulateDelay();
    return featuredTestimonials;
  }

  // Get tourist testimonials
  static async getTouristTestimonials(): Promise<Testimonial[]> {
    await this.simulateDelay();
    return touristTestimonials;
  }

  // Get local testimonials
  static async getLocalTestimonials(): Promise<Testimonial[]> {
    await this.simulateDelay();
    return localTestimonials;
  }

  // Get testimonials by customer type
  static async getTestimonialsByType(type: 'Local' | 'Tourist' | 'Expat'): Promise<Testimonial[]> {
    await this.simulateDelay();
    return customerTestimonials.filter(t => t.customerType === type);
  }

  // Get testimonials by rating
  static async getTestimonialsByRating(minRating: number): Promise<Testimonial[]> {
    await this.simulateDelay();
    return customerTestimonials.filter(t => t.rating >= minRating);
  }

  // Get testimonial statistics
  static async getTestimonialStats() {
    await this.simulateDelay();
    return testimonialStats;
  }

  // Get random testimonials
  static async getRandomTestimonials(count: number = 3): Promise<Testimonial[]> {
    await this.simulateDelay();
    const shuffled = [...customerTestimonials].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}