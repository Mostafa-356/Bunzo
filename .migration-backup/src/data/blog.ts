// Egyptian Restaurant Blog Data
import post1 from "../assets/images/The Secret Behind Our Signature Egyptian Burger Spices.jpg";
import post2 from "../assets/images/From Cairo Streets to Gourmet BurgersTheBunzoStory.jpg";
import post3 from "../assets/images/The Heart of Every Bunzo Burger Experience.jpg";
import post4 from "../assets/images/Where Ancient Flavors Meet Contemporary Taste.jpg";
import user_dp from "../assets/images/user_dp.png";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  category: string;
  tags: string[];
  publishedDate: string;
  readTime: number;
  isFeatured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Secret Behind Our Signature Egyptian Burger Spices",
    excerpt: "Discover how ancient Egyptian spice blends create the unique flavors in every Bunzo burger.",
    content: `
      <p>Egypt has been the crossroads of spice trade for over 4,000 years. At Bunzo, we honor this rich heritage by incorporating traditional spice blends into every burger we craft.</p>
      
      <p>Our signature burger spice mix includes:</p>
      
      <ul>
        <li><strong>Dukkah</strong> - A blend of nuts, seeds, and spices that adds texture to our burger patties</li>
        <li><strong>Baharat</strong> - The seven-spice blend that brings warmth to our premium beef</li>
        <li><strong>Za'atar</strong> - Wild thyme blend that elevates our Mediterranean-style burgers</li>
        <li><strong>Harissa</strong> - North African chili paste for our Spicy Sahara burger</li>
      </ul>
      
      <p>Each burger tells a story of these ancient trade routes, bringing flavors that once traveled by camel caravan directly to your burger experience.</p>
    `,
    image: post1,
    author: {
      name: "Chef Ahmed Hassan",
      avatar: user_dp,
      role: "Head Chef & Burger Master"
    },
    category: "Heritage",
    tags: ["spices", "history", "egyptian-cuisine", "tradition"],
    publishedDate: "2024-03-15",
    readTime: 5,
    isFeatured: true
  },
  {
    id: 2,
    title: "From Cairo Streets to Gourmet Burgers: The Bunzo Story",
    excerpt: "Experience how authentic Cairo street food inspired our signature burger creations at Bunzo.",
    content: `
      <p>Walking through the bustling streets of Cairo, you'll encounter sizzling grills, aromatic burger spices, and the cheerful calls of street food vendors. This vibrant culture inspired every Bunzo burger.</p>
      
      <p>Our Cairo Street Classic burger pays homage to the legendary <em>kofta</em> sandwiches and street burgers that have made Cairo famous. The magic lies in:</p>
      
      <ul>
        <li>Hand-seasoned burger patties prepared fresh daily</li>
        <li>Grilling techniques perfected by generations of street cooks</li>
        <li>The perfect balance of Egyptian spices in every burger bite</li>
        <li>Using only the freshest local ingredients for our burgers</li>
      </ul>
      
      <p>When you bite into our Cairo Street Classic burger, you're experiencing centuries of Egyptian street food evolution in modern burger form.</p>
    `,
    image: post2,
    author: {
      name: "Fatma El-Masry",
      avatar: user_dp,
      role: "Burger Development Chef"
    },
    category: "Culture",
    tags: ["street-food", "cairo-burgers", "burger-culture", "egyptian-burgers"],
    publishedDate: "2024-03-10",
    readTime: 4,
    isFeatured: true
  },
  {
    id: 3,
    title: "Egyptian Hospitality: The Heart of Every Bunzo Burger Experience",
    excerpt: "Discover how traditional Egyptian hospitality enhances every burger meal at Bunzo.",
    content: `
      <p>In Egypt, sharing a meal is never just about food – it's about connection, community, and the ancient art of hospitality. At Bunzo, this tradition elevates every burger experience.</p>
      
      <p>Our Egyptian hospitality philosophy influences every burger we serve:</p>
      
      <ul>
        <li><strong>Generous burger portions</strong> - Because no guest should leave hungry</li>
        <li><strong>Warm service</strong> - Every burger order comes with genuine Egyptian care</li>
        <li><strong>Sharing platters</strong> - Our burger combos are perfect for families</li>
        <li><strong>Cultural stories</strong> - Learn about each burger's Egyptian heritage</li>
      </ul>
      
      <p>When you visit Bunzo, you don't just order a burger – you experience the warmth and generosity that makes Egyptian hospitality legendary worldwide.</p>
    `,
    image: post3,
    author: {
      name: "Yasmin Farouk",
      avatar: user_dp,
      role: "Customer Experience Manager"
    },
    category: "Hospitality",
    tags: ["hospitality", "burger-experience", "egyptian-culture", "customer-service"],
    publishedDate: "2024-03-05",
    readTime: 3,
    isFeatured: false
  },
  {
    id: 4,
    title: "Modern Egyptian Burgers: Where Ancient Flavors Meet Contemporary Taste",
    excerpt: "How Bunzo revolutionizes Egyptian cuisine by creating Instagram-worthy burgers with authentic flavors.",
    content: `
      <p>Egypt's youth love their heritage but crave innovation. At Bunzo, we've created the perfect fusion: ancient Egyptian flavors in modern, gourmet burger form.</p>
      
      <p>Our approach to modernizing Egyptian burgers includes:</p>
      
      <ul>
        <li><strong>Instagram-worthy presentation</strong> - Traditional Egyptian spices in photogenic burger formats</li>
        <li><strong>Fusion techniques</strong> - Combining Egyptian seasonings with international burger styles</li>
        <li><strong>Sustainable practices</strong> - Honoring Egyptian land with locally-sourced burger ingredients</li>
        <li><strong>Community spaces</strong> - Creating burger experiences that bring people together</li>
      </ul>
      
      <p>The result? Gourmet Egyptian burgers that make locals proud of their culinary heritage while attracting international food lovers seeking authentic Egyptian burger experiences.</p>
    `,
    image: post4,
    author: {
      name: "Omar Khalil",
      avatar: user_dp,
      role: "Modern Burger Innovation Chef"
    },
    category: "Innovation",
    tags: ["modern-burgers", "egyptian-innovation", "gourmet-burgers", "social-media"],
    publishedDate: "2024-02-28",
    readTime: 4,
    isFeatured: true
  }
];

export const blogCategories = [
  { id: 1, name: "Heritage", count: 1, description: "Stories of Egyptian burger traditions" },
  { id: 2, name: "Culture", count: 1, description: "Cairo street food meets modern burgers" },
  { id: 3, name: "Hospitality", count: 1, description: "The Bunzo burger experience" },
  { id: 4, name: "Innovation", count: 1, description: "Modern Egyptian burger creations" }
];

export const featuredPosts = blogPosts.filter(post => post.isFeatured);
export const recentPosts = blogPosts.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());