interface BlogSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const BlogSearch = ({ searchQuery, setSearchQuery }: BlogSearchProps) => {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search articles..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-6 py-4 rounded-full bg-[#e5e7e8] border border-white/50 focus:ring-2 focus:ring-[#6366f1] text-[#1e293b] placeholder-[#b4b7ba]"
      />
    </div>
  );
}; 