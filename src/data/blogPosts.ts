interface BlogSection {
  type: 'heading' | 'paragraph' | 'list';
  content?: string;
  items?: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  content: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Our Services",
    excerpt: "Learn how to make the most of our platform with this comprehensive guide.",
    category: "tutorials",
    date: "March 15, 2024",
    imageUrl: "/blog/post1.jpg",
    content: [
      {
        type: 'paragraph',
        content: "Welcome to our comprehensive guide on getting started with our services. In this article, we will walk you through everything you need to know to make the most of our platform."
      },
      {
        type: 'heading',
        content: "Understanding the Basics"
      },
      {
        type: 'paragraph',
        content: "Before diving deep into advanced features, it is important to understand the core concepts of our platform."
      },
      {
        type: 'list',
        items: [
          'Setting up your account properly',
          'Navigating the dashboard',
          'Understanding key metrics',
          'Basic customization options'
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Industry Trends 2024",
    excerpt: "Discover the latest trends shaping the industry this year.",
    category: "insights",
    date: "March 10, 2024",
    imageUrl: "/blog/post2.jpg",
    content: [
      {
        type: 'paragraph',
        content: "The industry landscape is constantly evolving, and staying ahead of trends is crucial for success."
      },
      {
        type: 'heading',
        content: "Key Trends to Watch"
      },
      {
        type: 'list',
        items: [
          'Artificial Intelligence Integration',
          'Sustainable Practices',
          'Digital Transformation',
          'Customer Experience Focus'
        ]
      }
    ]
  }
]; 