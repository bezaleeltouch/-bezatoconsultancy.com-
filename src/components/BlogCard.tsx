import { Link } from 'wouter';
import { ArrowRight, Clock } from 'lucide-react';
import { BlogPostData } from '@/data/blog';

interface BlogCardProps {
  post: BlogPostData;
}

const categoryColors: Record<string, string> = {
  'Business Analysis': 'bg-purple-100 text-purple-800',
  'Research Analysis': 'bg-blue-100 text-blue-800',
  'Financial Analysis': 'bg-emerald-100 text-emerald-800',
  'Career Guide': 'bg-yellow-100 text-yellow-800',
  'Data Engineering': 'bg-orange-100 text-orange-800',
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="h-full flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 hover:border-purple-200 transition-all duration-300">
        <div className="aspect-[16/10] w-full bg-gradient-to-br from-[#1a0a2e] to-purple-800 relative overflow-hidden flex items-center justify-center">
          <span className="text-white/10 text-6xl font-black select-none">BT</span>
          <span className={`absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-white/90 text-gray-800'}`}>
            {post.category}
          </span>
        </div>
        <div className="p-6 flex flex-col flex-grow gap-3">
          <h3 className="font-bold text-lg text-gray-900 leading-snug group-hover:text-purple-900 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-grow">
            {post.metaDescription}
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-gray-50 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1 font-semibold text-purple-700 group-hover:gap-2 transition-all">
              Read <ArrowRight size={13} />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
