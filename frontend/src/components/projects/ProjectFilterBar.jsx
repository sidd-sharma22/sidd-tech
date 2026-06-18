import { Search } from 'lucide-react';

export default function ProjectFilterBar({ tags, activeTag, onTagChange, sortOrder, onSortChange, searchQuery, onSearchChange }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-4">
      {/* Filter Pills */}
      <div className="flex items-center gap-2 flex-wrap flex-1">
        <span className="text-warm-800/50 mr-1">
          <Search size={16} />
        </span>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagChange(tag)}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
              activeTag === tag
                ? 'bg-accent text-white shadow-sm'
                : 'bg-white/50 text-warm-800 border border-warm-200 hover:border-accent/40 hover:text-accent'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Search + Sort */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-800/40" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-8 pr-3 py-2 text-xs bg-white/50 border border-warm-200 rounded-full text-warm-900 placeholder-warm-800/40 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 w-40"
          />
        </div>
        <select
          value={sortOrder}
          onChange={(e) => onSortChange(e.target.value)}
          className="px-3 py-2 text-xs bg-white/50 border border-warm-200 rounded-full text-warm-800 focus:outline-none focus:border-accent/50 cursor-pointer"
        >
          <option value="newest">Sort: Newest</option>
          <option value="oldest">Sort: Oldest</option>
        </select>
      </div>
    </div>
  );
}
