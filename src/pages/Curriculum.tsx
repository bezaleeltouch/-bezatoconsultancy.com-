import { useEffect } from 'react';
import { useParams, Link } from 'wouter';
import { coursesData } from '@/data/courses';
import { CheckCircle2, MapPin, Phone, Mail, ArrowLeft } from 'lucide-react';
import logoIcon from '@assets/FAVICON.png';

const levelBadge: Record<string, string> = {
  Basic: 'text-yellow-400',
  Intermediate: 'text-yellow-400',
  Advanced: 'text-yellow-400',
  Bonus: 'text-yellow-400',
};

export default function Curriculum() {
  const { slug } = useParams();
  const course = coursesData.find(c => c.slug === slug);

  useEffect(() => {
    if (course) document.title = `Curriculum - ${course.title} | BezaTo Consultancy`;
  }, [course]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Curriculum not found</h1>
        <Link href="/courses" className="text-purple-700 font-semibold">← Back to Programs</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header band */}
      <div className="bg-[#3b0a5c] text-white px-6 md:px-10 py-10 relative">
        <Link href="/courses" className="inline-flex items-center gap-2 text-purple-200/70 hover:text-yellow-400 text-sm font-semibold mb-6 transition-colors">
          <ArrowLeft size={16} /> Back to Programs
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <div className="bg-white rounded-xl p-2 flex items-center gap-2">
            <img src={logoIcon} alt="BezaTo icon" className="h-8 w-8 object-contain" />
            <span className="font-bold text-purple-900 text-lg pr-1">BezaTo</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">{course.title}</h1>
        <p className="text-purple-200/70 mt-2">{course.track}</p>

        <div className="inline-block mt-6 bg-white/10 border border-white/10 rounded-xl px-5 py-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-200/60 mb-1">Level</p>
          <p className={`text-lg font-bold ${levelBadge[course.level] ?? 'text-yellow-400'}`}>{course.level}</p>
        </div>
      </div>
      <div className="h-1.5 w-full bg-yellow-400" />

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-12">

        {/* Course Details + Investment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-lg font-bold text-purple-900 border-b-2 border-purple-900 inline-block pb-1 mb-5">Course Details</h2>
            <dl className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-gray-100 pb-3">
                <dt className="text-gray-500">Duration:</dt>
                <dd className="font-bold text-gray-900">{course.duration}</dd>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-3 gap-4">
                <dt className="text-gray-500 shrink-0">Tools Mastered:</dt>
                <dd className="font-bold text-gray-900 text-right">{course.tools.join(', ')}</dd>
              </div>
              {course.prerequisites && (
                <div className="flex justify-between gap-4">
                  <dt className="text-gray-500 shrink-0">Prerequisites:</dt>
                  <dd className="font-bold text-gray-900 text-right">{course.prerequisites}</dd>
                </div>
              )}
            </dl>
          </div>

          <div>
            <h2 className="text-lg font-bold text-purple-900 border-b-2 border-purple-900 inline-block pb-1 mb-5">Investment Options</h2>
            <dl className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-gray-100 pb-3">
                <dt className="text-gray-500">Online (Live):</dt>
                <dd className="font-bold text-emerald-600">{course.prices.online}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500">Physical (Lagos):</dt>
                <dd className="font-bold text-purple-700">{course.prices.physical}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Who is this for */}
        <div className="bg-purple-50 rounded-2xl p-6">
          <h3 className="font-bold text-purple-900 mb-2">Who is this for?</h3>
          <p className="text-gray-700 text-sm">{course.suitableFor}</p>
        </div>

        {/* Weekly Breakdown */}
        <div>
          <h2 className="text-2xl font-bold text-purple-900 mb-8 text-center">Weekly Breakdown</h2>
          <div className="space-y-6">
            {course.curriculum.map(week => (
              <div key={week.week} className="flex gap-4 items-start">
                <div className="shrink-0 w-11 h-11 rounded-full bg-purple-900 text-white flex items-center justify-center font-bold text-sm">
                  W{week.week}
                </div>
                <div className="flex-1 border border-gray-100 rounded-2xl p-5 shadow-sm">
                  <h4 className="font-bold text-purple-900 mb-3">{week.title}</h4>
                  <ul className="space-y-2">
                    {week.topics.map(topic => (
                      <li key={topic} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-yellow-500 shrink-0 mt-0.5" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Launchpad Bonus */}
        {!course.isBonus && (
          <div className="border border-gray-100 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-purple-900">Career Launchpad Bonus</h3>
            <p className="text-gray-500 text-sm mt-1 mb-6">Included free for every graduate of this track</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm">CV Optimization</p>
                <p className="text-gray-500 text-xs mt-1">ATS-friendly format tailored for analytics roles</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm">LinkedIn Revamp</p>
                <p className="text-gray-500 text-xs mt-1">Profile optimization to attract recruiters</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm">Upwork Strategy</p>
                <p className="text-gray-500 text-xs mt-1">Freelance profile setup and bidding strategy</p>
              </div>
            </div>
          </div>
        )}

        {/* Ready to enroll */}
        <div className="border-t border-gray-100 pt-8 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-purple-900 mb-4">Ready to Enroll?</h3>
          <a
            href={`https://wa.me/2349137730282?text=${encodeURIComponent(`Hello BezaTo, I am interested in the ${course.title} course. Please share details.`)}`}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 text-purple-700 font-semibold text-sm hover:text-yellow-600"
          >
            <Phone size={16} className="text-yellow-500" /> +234 913 773 0282 (WhatsApp)
          </a>
          <a href="mailto:bezaleeltouch82@gmail.com" className="flex items-center gap-3 text-purple-700 font-semibold text-sm hover:text-yellow-600">
            <Mail size={16} className="text-yellow-500" /> bezaleeltouch82@gmail.com
          </a>
          <div className="flex items-start gap-3 text-gray-500 text-sm">
            <MapPin size={16} className="text-yellow-500 shrink-0 mt-0.5" />
            <span>Ogbomosho Avenue Dopemu<br />Lagos, Nigeria</span>
          </div>
        </div>

        <p className="text-xs text-gray-400 text-center pt-4">© {new Date().getFullYear()} BezaTo Consultancy. Confidential curriculum.</p>
      </div>
    </div>
  );
}
