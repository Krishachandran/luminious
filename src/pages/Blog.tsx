import { useState } from 'react';
import { BlogHeader } from '../components/blog/BlogHeader';
import { BlogGrid } from '../components/blog/BlogGrid';
import { BlogCategories } from '../components/blog/BlogCategories';
import { BlogSearch } from '../components/blog/BlogSearch';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="container mx-auto px-4 py-16">
      <BlogHeader />
      
      <div className="flex flex-col md:flex-row gap-8 mt-12">
        <div className="md:w-3/4">
          <BlogSearch 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
          />
          <BlogGrid 
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
          />
        </div>
        
        <aside className="md:w-1/4">
          <BlogCategories 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </aside>
      </div>
    </div>
  );
} 