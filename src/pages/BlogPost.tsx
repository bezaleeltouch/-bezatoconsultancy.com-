import { useEffect } from 'react';
import { useParams, Link } from 'wouter';
import { Layout } from '@/components/Layout';
import { blogData } from '@/data/blog';
import { ArrowLeft, Clock } from 'lucide-react';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogData.find(p => p.slug === slug);

  useEffect(() => {
    if (post) document.title = `${post.title} | BezaTo Insights`;
  }, [post]);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h1>
          <Link href="/blog" className="text-purple-700 font-semibold">← Back to Insights</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-[#1a0a2e] py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="container mx-auto px-6 max-w-3xl relative space-y-5">
          <Link href="/blog" className="inline-flex items-center gap-2 text-yellow-400/80 text-sm font-semibold hover:text-yellow-400">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-yellow-400/80 bg-yellow-400/10 border border-yellow-400/20 px-4 py-1.5 rounded-full">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-purple-200/50 text-sm">
            <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
            <span>·</span>
            <span>{post.publishDate}</span>
          </div>
        </div>
      </div>

      <article className="container mx-auto px-6 py-16 max-w-3xl prose prose-lg prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed">
        {post.content}
      </article>

      <div className="container mx-auto px-6 pb-20 max-w-3xl">
        <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-2">Want to build these skills hands-on?</h3>
          <p className="text-gray-500 text-sm mb-6">Talk to us about which BezaTo track fits your goals.</p>
          <WhatsAppCTA
            message={`Hello BezaTo, I read the article "${post.title}" and would like to know more about your related course.`}
            text="Ask on WhatsApp"
          />
        </div>
      </div>
    </Layout>
  );
}
