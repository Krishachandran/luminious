interface BlogCategoriesProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export const BlogCategories = ({ selectedCategory, setSelectedCategory }: BlogCategoriesProps) => {
  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'tutorials', name: 'Tutorials' },
    { id: 'insights', name: 'Insights' },
    { id: 'updates', name: 'Updates' },
    { id: 'news', name: 'News' }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-[#1e293b]">Categories</h2>
      <div className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category.id
                ? 'bg-[#6366f1] text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}; 