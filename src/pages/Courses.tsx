import { useEffect, useState } from 'react';
import { Layout } from '@/components/Layout';
import { coursesData } from '@/data/courses';
import { CourseCard } from '@/components/CourseCard';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import { WhatsAppCTA } from '@/components/WhatsAppCTA';

export default function Courses() {
  const [activeTrack, setActiveTrack] = useState<string>("all");

  useEffect(() => {
    document.title = "Programs & Training Tracks | BezaTo Consultancy";
  }, []);

  const tracks = Array.from(new Set(coursesData.filter(c => !c.isBonus).map(c => c.track)));
  const bonusCourse = coursesData.find(c => c.isBonus);

  const filteredCourses = activeTrack === "all"
    ? coursesData.filter(c => !c.isBonus)
    : coursesData.filter(c => c.track === activeTrack && !c.isBonus);

  return (
    <Layout>
      {/* Header */}
      <div className="bg-[#1a0a2e] py-20 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="container mx-auto px-6 max-w-4xl space-y-5 relative">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-yellow-400/80 bg-yellow-400/10 border border-yellow-400/20 px-4 py-1.5 rounded-full">Our Programs</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">World-Class Analytics Training</h1>
          <p className="text-lg text-purple-200/70 leading-relaxed max-w-2xl mx-auto">
            From Excel fundamentals to Machine Learning. Every program is built for real-world application, not just certification.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">

        {/* Class Formats Comparison */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-700">How We Teach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Choose Your Learning Format</h2>
            <p className="text-gray-500">Two premium ways to learn, tailored to your schedule and location.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-lg">
            <Table>
              <TableHeader className="bg-[#1a0a2e]">
                <TableRow className="border-0">
                  <TableHead className="w-[240px] font-bold text-white text-sm py-5 px-6">Feature</TableHead>
                  <TableHead className="font-bold text-yellow-400 text-sm text-center py-5">
                    🖥️ Online
                    <span className="block text-xs font-normal text-purple-200/50 mt-0.5">Live sessions via Zoom</span>
                  </TableHead>
                  <TableHead className="font-bold text-yellow-400 text-sm text-center py-5">
                    🏛️ Physical
                    <span className="block text-xs font-normal text-purple-200/50 mt-0.5">In-person · Dopemu, Lagos</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { label: "Delivery Mode", online: "Live Zoom / Google Meet", physical: "In-person classroom" },
                  { label: "Curriculum Access", online: true, physical: true },
                  { label: "Career Launchpad Bonus", online: true, physical: true },
                  { label: "Prompt Engineering Bonus Class", online: true, physical: true },
                  { label: "Guaranteed Power Supply", online: false, physical: true },
                  { label: "Free Unlimited Data / WiFi", online: false, physical: true },
                  { label: "In-person Peer Collaboration", online: false, physical: true },
                  { label: "Recorded Session Replay", online: true, physical: false },
                ].map((row, i) => (
                  <TableRow key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <TableCell className="font-medium text-gray-700 px-6 py-4">{row.label}</TableCell>
                    <TableCell className="text-center py-4">
                      {typeof row.online === 'boolean'
                        ? row.online
                          ? <CheckCircle2 className="mx-auto text-emerald-500 h-5 w-5" />
                          : <XCircle className="mx-auto text-gray-200 h-5 w-5" />
                        : <span className="text-sm text-gray-600">{row.online}</span>}
                    </TableCell>
                    <TableCell className="text-center py-4">
                      {typeof row.physical === 'boolean'
                        ? row.physical
                          ? <CheckCircle2 className="mx-auto text-purple-700 h-5 w-5" />
                          : <XCircle className="mx-auto text-gray-200 h-5 w-5" />
                        : <span className="text-sm text-gray-600 font-semibold">{row.physical}</span>}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Bonus class banner */}
        {bonusCourse && (
          <section className="mb-16 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-300 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0">
              <div className="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center">
                <Sparkles size={32} className="text-purple-900" />
              </div>
            </div>
            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-900/60">Bonus — Bundled with Every Course</span>
              <h3 className="text-2xl font-bold text-purple-900 mt-1">{bonusCourse.title}</h3>
              <p className="text-purple-900/70 mt-2 text-sm leading-relaxed">
                Every BezaTo student automatically gets this 2-week AI & prompt engineering workshop — completely free. Learn to use ChatGPT, Claude, and GitHub Copilot to work 10× faster as an analyst.
              </p>
            </div>
            <div className="shrink-0">
              <WhatsAppCTA
                message="Hello BezaTo, I want to learn about the Prompt Engineering bonus class included in courses."
                text="Ask About This Bonus"
                variant="outline"
                className="border-purple-900 text-purple-900"
              />
            </div>
          </section>
        )}

        {/* Course Catalog */}
        <div id="catalog" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Course Catalog</h2>
              <p className="text-gray-500 mt-1 text-sm">{filteredCourses.length} program{filteredCourses.length !== 1 ? 's' : ''} {activeTrack !== 'all' ? `in ${activeTrack}` : 'across all tracks'}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTrack('all')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${activeTrack === 'all' ? 'bg-purple-900 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                All Programs
              </button>
              {tracks.map(track => (
                <button
                  key={track}
                  onClick={() => setActiveTrack(track)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${activeTrack === track ? 'bg-purple-900 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {track.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        {/* Corporate / Partnership Section */}
        <section className="mt-28">
          <div className="bg-[#1a0a2e] rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-14 space-y-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400/70">For Organisations</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Partner with BezaTo.<br />
                  <span className="text-yellow-400">Hire pre-vetted analysts.</span>
                </h2>
                <p className="text-purple-200/60 leading-relaxed">
                  Looking to upskill your workforce or hire top data talent? Our graduates are trained on production-grade tools and real datasets — they contribute from day one. We offer corporate seminars, custom training programmes, and direct talent placement.
                </p>
                <ul className="space-y-3">
                  {[
                    'Private 1-on-1 Executive Training Sessions',
                    'Custom team upskilling programmes',
                    'Talent pipeline & direct recruitment',
                    'Custom dashboard development & consulting',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3 text-purple-200/80 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <WhatsAppCTA
                    message="Hello BezaTo, I represent an organisation and I'm interested in a corporate partnership — either team training or hiring your graduates."
                    text="Discuss a Partnership on WhatsApp"
                    size="lg"
                  />
                </div>
              </div>
              <div className="bg-white/5 p-10 md:p-14 flex flex-col justify-center space-y-8 border-l border-white/5">
                <h3 className="font-bold text-white text-lg">Why hire BezaTo graduates?</h3>
                <div className="space-y-6">
                  {[
                    { stat: '100%', label: 'graduate with a portfolio project' },
                    { stat: 'Day 1', label: 'productivity — no tool onboarding needed' },
                    { stat: 'FREE', label: 'talent sourcing for partner organisations' },
                  ].map(item => (
                    <div key={item.stat} className="flex items-center gap-4">
                      <span className="text-3xl font-black text-yellow-400 shrink-0 w-20">{item.stat}</span>
                      <span className="text-purple-200/60 text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <p className="text-sm italic text-purple-200/70">"The analysts we sourced from BezaTo needed zero onboarding. They built our first Power BI dashboard in the first week."</p>
                  <p className="text-xs text-purple-200/40 mt-3">— Operations Lead, West Africa FinTech</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
