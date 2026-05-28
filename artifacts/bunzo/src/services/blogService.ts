import { blogPosts, BlogPost } from '../data/blog';
import { BlogCardProps } from '../types/blog';

export class BlogService {
  // Convert BlogPost to BlogCardProps format
  private static convertBlogPostToBlogCard(post: BlogPost): BlogCardProps {
    return {
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      image: post.image,
      author: post.author.name,
      date: post.publishedDate,
      content: post.content
    };
  }

  // Simulate API delay
  private static async simulateDelay(ms: number = 500): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Get all blog posts
  static async getAllBlogs(): Promise<BlogCardProps[]> {
    await this.simulateDelay();
    return blogPosts.map(this.convertBlogPostToBlogCard);
  }

  // Get blog post by ID
  static async getBlogById(id: number): Promise<BlogCardProps | null> {
    await this.simulateDelay();
    const post = blogPosts.find(p => p.id === id);
    return post ? this.convertBlogPostToBlogCard(post) : null;
  }

  // Get featured blog posts
  static async getFeaturedBlogs(): Promise<BlogCardProps[]> {
    await this.simulateDelay();
    const featured = blogPosts.filter(p => p.isFeatured);
    return featured.map(this.convertBlogPostToBlogCard);
  }

  // Get recent blog posts
  static async getRecentBlogs(count: number = 5): Promise<BlogCardProps[]> {
    await this.simulateDelay();
    const sorted = [...blogPosts].sort((a, b) => 
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    );
    return sorted.slice(0, count).map(this.convertBlogPostToBlogCard);
  }

  // Get blogs by category
  static async getBlogsByCategory(category: string): Promise<BlogCardProps[]> {
    await this.simulateDelay();
    const filtered = blogPosts.filter(p => 
      p.category.toLowerCase() === category.toLowerCase()
    );
    return filtered.map(this.convertBlogPostToBlogCard);
  }

  // Search blog posts
  static async searchBlogs(query: string): Promise<BlogCardProps[]> {
    await this.simulateDelay();
    const filtered = blogPosts.filter(p =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      p.content.toLowerCase().includes(query.toLowerCase()) ||
      p.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    return filtered.map(this.convertBlogPostToBlogCard);
  }
}