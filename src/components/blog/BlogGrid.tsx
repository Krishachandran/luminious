import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';

interface BlogGridProps {
  searchQuery: string;
  selectedCategory: string;
}

export const BlogGrid = ({ searchQuery, selectedCategory }: BlogGridProps) => {
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredPosts.map((post, index) => (
        <motion.article 
          key={post.id} 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <Link to={`/blog/${post.id}`} className="block">
            <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
              {/* Add image here when available */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-gray-500">{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="text-sm text-[#6366f1] capitalize">{post.category}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#1e293b] line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {post.excerpt}
              </p>
              <span className="text-[#6366f1] text-sm font-medium inline-flex items-center gap-1 group">
                Read More 
                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}; 