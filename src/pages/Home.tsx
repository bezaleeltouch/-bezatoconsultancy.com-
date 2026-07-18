import { useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight, Sparkles, Users, Award, TrendingUp, BookOpen } from 'lucide-react';
import { coursesData } from '@/data/courses';
import { blogData } from '@/data/blog';
import { CourseCard } from '@/components/CourseCard';
import { BlogCard } from '@/components/BlogCard';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';
import founderImg from '/founder.png';
import logoIcon from '@assets/FAVICON.png';

export default function Home() {
  useEffect(() => {
    document.title = "BezaTo Consultancy | Premium Data Analytics Training";
  }, []);

  const featuredCourses = coursesData.filter(c => !c.isBonus).slice(0, 3);

  return (
    <Layout>

      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] bg-[#0e0620] flex items-center overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-[#0e0620] to-[#1a0535]" />

        {/* Gold orb glow */}
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-yellow-400/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-purple-700/10 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 py-24 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[92vh]">

            {/* Left: Copy */}
            <div className="space-y-8 py-16">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400"></span>
                </span>
                <span className="text-xs font-bold text-yellow-400 uppercase tracking-wider">Next cohort enrolling now</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight">
                  Master the data.
                </h1>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-300">
                  Command your career.
                </h1>
              </div>

              <p className="text-lg text-purple-200/60 leading-relaxed max-w-xl">
                BezaTo Consultancy delivers premium, intensive training in data analytics, machine learning, database management, and business intelligence — building analysts who lead decisions, not just process data.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-300 text-purple-900 font-black rounded-full px-8 h-14 text-base shadow-[0_0_60px_-10px_rgba(252,194,1,0.6)] hover:shadow-[0_0_80px_-10px_rgba(252,194,1,0.8)] transition-all duration-300 hover:scale-105">
                  <Link href="/courses">
                    Explore Programs <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <WhatsAppCTA
                  message="Hello BezaTo, I'm interested in starting a data analytics career. How do I begin?"
                  text="Speak with an Advisor"
                  size="lg"
                  className="h-14"
                />
              </div>

              {/* Stat strip */}
              <div className="pt-10 grid grid-cols-3 gap-6 border-t border-white/5">
                {[
                  { n: '200+', l: 'Analysts Trained' },
                  { n: '6', l: 'Specialist Tracks' },
                  { n: '100%', l: 'Career-Ready Focus' },
                ].map(s => (
                  <div key={s.n}>
                    <p className="text-3xl font-black text-white">{s.n}</p>
                    <p className="text-xs text-purple-200/40 font-semibold uppercase tracking-widest mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Founder card */}
            <div className="hidden lg:flex justify-end items-center">
              <div className="relative w-[430px]">
                {/* Main card */}
                <div className="relative rounded-3xl overflow-hidden shadow-[0_40px_100px_-20px_rgba(75,0,130,0.5)]">
                  <img
                    src={founderImg}
                    alt="BezaTo Founder"
                    className="w-full h-[540px] object-cover object-top"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0620] via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-bold text-lg">Bezaleel's Touch</p>
                    <p className="text-yellow-400/80 text-xs font-semibold uppercase tracking-widest mt-0.5">Founder & Lead Analyst</p>
                  </div>
                </div>

                {/* Floating badge top-right */}
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-purple-900 rounded-2xl px-4 py-3 shadow-xl">
                  <div className="flex items-center gap-2">
                    <Award size={18} className="shrink-0" />
                    <div>
                      <p className="text-xs font-black uppercase tracking-wide">Top Analyst</p>
                      <p className="text-[10px] font-semibold opacity-70">6+ Years Experience</p>
                    </div>
                  </div>
                </div>

                {/* Floating stat card bottom-left */}
                <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl px-5 py-4 shadow-2xl">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">Students Enrolled</p>
                  <p className="text-3xl font-black text-purple-900 mt-0.5">200 <span className="text-yellow-400">+</span></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── TRUST / ABOUT ─────────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* Image side */}
            <div className="relative order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={founderImg}
                  alt="BezaTo Consultancy Founder"
                  className="w-full h-[480px] object-cover object-top"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-3xl bg-yellow-400/20 -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-purple-900/10 -z-10" />

              {/* Floating testimonial */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl border border-gray-100">
                <p className="text-sm font-semibold text-gray-800 italic">"From zero to building executive dashboards in 4 weeks."</p>
                <p className="text-xs text-gray-400 mt-1.5">— BezaTo Graduate, Power BI Track</p>
              </div>
            </div>

            {/* Copy side */}
            <div className="order-1 lg:order-2 space-y-7">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-700">About BezaTo</span>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 leading-tight">
                  Not just a bootcamp.<br />
                  <span className="text-purple-900">An institution.</span>
                </h2>
              </div>

              <p className="text-gray-500 leading-relaxed text-lg">
                We bridge the gap between academic theory and real-world application. Whether you're a student needing SPSS for your thesis, a professional building boardroom Power BI dashboards, or an entrepreneur deploying machine learning models — BezaTo gives you the tools, mentorship, and clarity to excel.
              </p>

              <ul className="space-y-5">
                {[
                  {
                    icon: <Award size={20} />,
                    title: 'Industry-Grade Curriculum',
                    desc: 'Designed to match exactly what corporate, research, and tech employers demand globally.'
                  },
                  {
                    icon: <TrendingUp size={20} />,
                    title: 'Career Launchpad — Free for All Graduates',
                    desc: 'CV optimization, LinkedIn revamp, and Upwork/freelance strategy included at no extra cost.'
                  },
                  {
                    icon: <Sparkles size={20} />,
                    title: 'AI Bonus Class for Every Student',
                    desc: 'Every enrolment includes a 2-week Prompt Engineering workshop — use AI to work 10× faster as an analyst.'
                  },
                  {
                    icon: <Users size={20} />,
                    title: 'Online & Physical Classes',
                    desc: 'Live Zoom sessions or hands-on in-person classes at our Dopemu, Lagos venue.'
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="bg-purple-50 text-purple-700 p-2.5 rounded-xl shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3 pt-2">
                <img src={logoIcon} alt="BezaTo" className="h-8 w-8" />
                <span className="text-sm text-gray-400">Based in Lagos, Nigeria · Training students globally</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── TRACKS OVERVIEW ───────────────────────────────────────────────── */}
      <section className="py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-700">Our Curriculum</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">Six specialist paths.</h2>
            <p className="text-gray-500 text-lg">Every track is designed for a specific outcome — find yours.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="border-purple-200 text-purple-900 hover:bg-purple-900 hover:text-white font-bold h-13 px-10 rounded-full transition-all duration-300">
              <Link href="/courses">
                See All 6 Programs + Bonus Class <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <section className="py-28 bg-[#0e0620] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />

        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400/70">The Process</span>
            <h2 className="text-4xl md:text-5xl font-black">Your journey to analyst</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: '01', icon: <BookOpen size={28} />, title: 'Choose Your Track', desc: 'Select from Business, Research, Financial, Database, Python/R Analytics, or Machine Learning.' },
              { n: '02', icon: <Users size={28} />, title: 'Pick Your Format', desc: 'Online live sessions or premium Physical classes at our Lagos venue.' },
              { n: '03', icon: <TrendingUp size={28} />, title: 'Train with Real Data', desc: 'Intensive weeks with production-grade datasets and AI-augmented workflow.' },
              { n: '04', icon: <Award size={28} />, title: 'Launch Your Career', desc: 'Graduate with a portfolio, CV, LinkedIn profile, and our Career Launchpad bonus.' },
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full hover:bg-white/8 hover:border-yellow-400/20 transition-all duration-300">
                  <div className="text-5xl font-black text-white/5 mb-4 leading-none select-none">{step.n}</div>
                  <div className="text-yellow-400 mb-4">{step.icon}</div>
                  <h4 className="font-bold text-white text-lg mb-3">{step.title}</h4>
                  <p className="text-purple-200/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-yellow-400/20 z-10">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOUNDER QUOTE ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center max-w-5xl mx-auto">
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-64 h-64 lg:w-full lg:h-80">
                <div className="rounded-3xl overflow-hidden h-full shadow-xl">
                  <img src={founderImg} alt="BezaTo Founder" className="w-full h-full object-cover object-top" />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-yellow-400 rounded-2xl px-3 py-2">
                  <p className="text-xs font-black text-purple-900 uppercase tracking-wide">Top Analyst 2024</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <div className="text-6xl text-yellow-400 font-black leading-none select-none">"</div>
              <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight -mt-4">
                Every serious learner deserves a clear, structured path from zero to employable — not just a certificate.
              </blockquote>
              <p className="text-gray-500 leading-relaxed">
                That conviction is what BezaTo is built on. We don't just teach you to click buttons in Excel or drag visuals in Power BI. We teach you to think like an analyst — to ask the right questions, handle messy data, and communicate insights that drive decisions.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <div className="w-10 h-0.5 bg-yellow-400"></div>
                <div>
                  <p className="font-bold text-purple-900">Bezaleel's Touch</p>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Founder, BezaTo Consultancy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INSIGHTS ──────────────────────────────────────────────────────── */}
      <section className="py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
            <div className="max-w-xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-700">Insights</span>
              <h2 className="text-4xl font-black text-gray-900">
                Data strategy for modern analysts.
              </h2>
              <p className="text-gray-500 text-sm">Practical guides, career advice, and tool deep-dives — written for professionals at every level.</p>
            </div>
            <Button asChild variant="ghost" className="text-purple-900 font-bold hover:bg-purple-50 shrink-0">
              <Link href="/blog">
                Read All Articles <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {blogData.slice(0, 3).map(post => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="py-28 bg-yellow-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(75,0,130,0.5) 1px, transparent 0)', backgroundSize: '24px 24px' }} />

        <div className="container mx-auto px-6 relative text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-purple-900/50 bg-purple-900/10 px-4 py-1.5 rounded-full">Limited Cohort Spots</span>
            <h2 className="text-4xl md:text-6xl font-black text-purple-900 leading-tight">
              Ready to become a<br />top-tier analyst?
            </h2>
            <p className="text-lg text-purple-900/60 max-w-xl mx-auto">
              Join the next BezaTo cohort. Classes fill up fast — message us today to secure your place and get the full course calendar.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5 pt-2">
              <a
                href="https://wa.me/2349137730282?text=Hello%20BezaTo%2C%20I'm%20ready%20to%20enrol.%20Please%20share%20the%20next%20cohort%20details."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-purple-900 hover:bg-[#0e0620] text-white font-black px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-base"
              >
                Enrol Now on WhatsApp <ArrowRight size={20} />
              </a>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-purple-900/30 text-purple-900 hover:bg-purple-900 hover:text-white font-bold h-14 px-8 rounded-full">
                <Link href="/contact">View Schedules</Link>
              </Button>
            </div>
            <p className="text-xs text-purple-900/40 font-semibold uppercase tracking-wider">📱 WhatsApp & Text only — No calls</p>
          </div>
        </div>
      </section>

    </Layout>
  );
}
