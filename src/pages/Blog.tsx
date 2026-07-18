import { useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { blogData } from '@/data/blog';
import { BlogCard } from '@/components/BlogCard';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';

export default function Blog() {
  useEffect(() => {
    document.title = "Insights & Resources | BezaTo Consultancy";
  }, []);

  const featuredPost = blogData[3]; // "How to Become a Data Analyst in 2025"
  const regularPosts = blogData.filter((_, i) => i !== 3);

  return (
    <Layout>
      {/* Header — matches the dark navy hero used across Home & Courses */}
      <div className="bg-[#1a0a2e] py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="container mx-auto px-6 max-w-3xl space-y-5 relative">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-yellow-400/80 bg-yellow-400/10 border border-yellow-400/20 px-4 py-1.5 rounded-full">Insights & Resources</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">BezaTo Insights</h1>
          <p className="text-lg text-purple-200/60 leading-relaxed">
            Practical career guides, deep-dive tool comparisons, and data strategy for analytics professionals at every stage — wherever you are in the world.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">

        {/* Featured post */}
        {featuredPost && (
          <section className="mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-700 mb-4 block">Featured</span>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full bg-gradient-to-br from-[#1a0a2e] to-purple-800 flex items-center justify-center relative">
                <span className="text-white/10 text-8xl font-black select-none">BT</span>
                <span className="absolute top-6 left-6 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-yellow-400 text-purple-900">
                  {featuredPost.category}
                </span>
              </div>
              <div className="p-8 lg:p-12 space-y-5">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{featuredPost.title}</h2>
                <p className="text-gray-500 leading-relaxed">{featuredPost.metaDescription}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400 font-semibold uppercase tracking-wider">
                  <span>{featuredPost.readTime}</span>
                  <span>·</span>
                  <span>{featuredPost.publishDate}</span>
                </div>
                <a
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 text-purple-900 font-bold hover:text-yellow-600 transition-colors"
                >
                  Read the full guide →
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Article grid */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {regularPosts.map(post => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 bg-yellow-400 rounded-3xl p-10 md:p-14 text-center">
          <h3 className="text-3xl md:text-4xl font-black text-purple-900 mb-4">Ready to put these skills into practice?</h3>
          <p className="text-purple-900/70 max-w-xl mx-auto mb-8">
            Every guide on this blog maps directly to a BezaTo programme. Message us and we'll help you pick the right track.
          </p>
          <div className="flex justify-center">
            <WhatsAppCTA
              message="Hello BezaTo, I read your blog and I'd like guidance on which course track is right for me."
              text="Talk to an Advisor on WhatsApp"
              size="lg"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}
