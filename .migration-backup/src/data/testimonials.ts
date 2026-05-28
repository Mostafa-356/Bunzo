// Customer Testimonials Data
import user_dp from "../assets/images/user_dp.png";

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  location: string;
  rating: number;
  review: string;
  burger: string;
  date: string;
  isVerified: boolean;
  customerType: 'Local' | 'Tourist' | 'Expat';
}

export const customerTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: user_dp,
    location: "London, UK (Tourist)",
    rating: 5,
    review: "I came to Cairo for the pyramids, but Bunzo became the highlight of my trip! The Pharaoh's Burger is absolutely incredible - it's like tasting 5000 years of Egyptian history in one bite. The staff explained the cultural significance of each ingredient. This is how you do cultural tourism through food!",
    burger: "The Pharaoh's Burger",
    date: "2024-03-10",
    isVerified: true,
    customerType: 'Tourist'
  },
  {
    id: 2,
    name: "Ahmed Mahmoud",
    avatar: user_dp,
    location: "Cairo, Egypt (Local)",
    rating: 5,
    review: "أخيراً مطعم يحترم التراث المصري! البرجر بتاعهم فيه طعم الشارع المصري الأصيل بس بشكل عصري. كل مرة آجي هنا بحس بفخر إني مصري. الطعم ده مش موجود في أي حتة تانية.",
    burger: "Cairo Street Classic",
    date: "2024-03-08",
    isVerified: true,
    customerType: 'Local'
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    avatar: user_dp,
    location: "Barcelona, Spain (Tourist)",
    rating: 5,
    review: "As a vegetarian traveler, I was worried about finding good food in Egypt. The Nile Valley Veggie burger completely changed my perspective! Fresh, flavorful, and the story behind each ingredient made it even more special. The herbs taste like they were picked this morning!",
    burger: "Nile Valley Veggie",
    date: "2024-03-05",
    isVerified: true,
    customerType: 'Tourist'
  },
  {
    id: 4,
    name: "Youssef Hassan",
    avatar: user_dp,
    location: "Alexandria, Egypt (Local)",
    rating: 4,
    review: "البرجر الإسكندراني ده خلاني أفتكر بيتنا في إسكندرية. الطعم أصيل والسمك طازج زي البحر المتوسط بالضبط. المكان ده بيحافظ على هويتنا المصرية وفي نفس الوقت عصري.",
    burger: "Alexandria Seafood Delight",
    date: "2024-03-03",
    isVerified: true,
    customerType: 'Local'
  },
  {
    id: 5,
    name: "James Mitchell",
    avatar: user_dp,
    location: "Sydney, Australia (Tourist)",
    rating: 5,
    review: "I'm a food blogger and I've eaten burgers all over the world, but nothing prepared me for the Spicy Sahara! The heat builds slowly and the flavors are incredibly complex. This isn't just fusion food - it's cultural storytelling through cuisine. Absolutely brilliant!",
    burger: "Spicy Sahara",
    date: "2024-02-28",
    isVerified: true,
    customerType: 'Tourist'
  },
  {
    id: 6,
    name: "Nour El-Din",
    avatar: user_dp,
    location: "Cairo, Egypt (Local Youth)",
    rating: 5,
    review: "أحلى حاجة في بونزو إنهم خلوا الأكل المصري كول وترندي. أصحابي الأجانب في الجامعة بيحبوا يجوا هنا عشان يتعرفوا على الثقافة المصرية. المكان ده بيخليني فخور بهويتي.",
    burger: "Cairo Street Classic",
    date: "2024-02-25",
    isVerified: true,
    customerType: 'Local'
  },
  {
    id: 7,
    name: "Lisa Chen",
    avatar: user_dp,
    location: "Singapore (Expat in Cairo)",
    rating: 5,
    review: "Living in Cairo as an expat, Bunzo has become my go-to place to understand Egyptian culture. The staff are so passionate about their heritage, and every visit feels like a cultural lesson. The food is exceptional, but the experience is what keeps me coming back.",
    burger: "The Pharaoh's Burger",
    date: "2024-02-20",
    isVerified: true,
    customerType: 'Expat'
  },
  {
    id: 8,
    name: "Mohammed Ali",
    avatar: user_dp,
    location: "Giza, Egypt (Local)",
    rating: 4,
    review: "المكان ده مش مجرد مطعم، ده تجربة ثقافية كاملة. البرجر لذيذ والخدمة ممتازة، بس الأهم إنهم بيحكوا قصة مصر من خلال الأكل. كل برجر له حكاية وتاريخ.",
    burger: "Bedouin Lamb Special",
    date: "2024-02-15",
    isVerified: true,
    customerType: 'Local'
  }
];

export const testimonialStats = {
  averageRating: 4.8,
  totalReviews: 1250,
  fiveStarPercentage: 85,
  touristSatisfaction: 96,
  localApproval: 92,
  repeatCustomers: 78
};

export const featuredTestimonials = customerTestimonials.filter(testimonial => testimonial.rating === 5);
export const touristTestimonials = customerTestimonials.filter(testimonial => testimonial.customerType === 'Tourist');
export const localTestimonials = customerTestimonials.filter(testimonial => testimonial.customerType === 'Local');