import { CourseData } from '@/data/courses';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Clock, Users, FileDown, Star } from 'lucide-react';
import { WhatsAppCTA } from './WhatsAppCTA';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  course: CourseData;
}

const levelColors: Record<string, string> = {
  Basic: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  Intermediate: 'bg-blue-100 text-blue-800 border-blue-200',
  Advanced: 'bg-orange-100 text-orange-800 border-orange-200',
  Bonus: 'bg-yellow-100 text-yellow-800 border-yellow-200',
};

const trackAccents: Record<string, string> = {
  'Business Analysis': 'from-purple-600 to-yellow-400',
  'Research Analysis': 'from-blue-600 to-cyan-400',
  'Financial Analysis & Econometrics': 'from-emerald-600 to-teal-400',
  'Database Management': 'from-orange-600 to-amber-400',
  'Data Analytics with Python / R': 'from-indigo-600 to-purple-400',
  'Machine Learning': 'from-rose-600 to-pink-400',
  'Bonus Class': 'from-yellow-500 to-amber-300',
};

export function CourseCard({ course }: CourseCardProps) {
  const accentGrad = trackAccents[course.track] ?? 'from-purple-600 to-yellow-400';

  return (
    <Card className="h-full flex flex-col transition-all duration-300 border border-gray-100 hover:border-purple-200 hover:shadow-xl hover:-translate-y-1 group overflow-hidden bg-white rounded-2xl">
      {/* Top accent bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${accentGrad}`} />

      {course.isBonus && (
        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 px-4 py-2 flex items-center gap-2 border-b border-yellow-100">
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
          <span className="text-xs font-bold text-yellow-700 uppercase tracking-wider">Bonus — Included Free with Any Course</span>
        </div>
      )}

      <CardHeader className="pb-3 pt-5">
        <div className="flex justify-between items-start mb-3 gap-2">
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${levelColors[course.level] ?? 'bg-gray-100 text-gray-700 border-gray-200'}`}>
            {course.level}
          </span>
          <div className="flex gap-1 flex-wrap justify-end">
            {course.tools.slice(0, 2).map(tool => (
              <span key={tool} className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-2 py-0.5 rounded-md whitespace-nowrap">
                {tool}
              </span>
            ))}
            {course.tools.length > 2 && (
              <span className="text-xs bg-gray-50 border border-gray-200 text-gray-500 px-2 py-0.5 rounded-md">
                +{course.tools.length - 2}
              </span>
            )}
          </div>
        </div>
        <h3 className="text-lg font-bold leading-tight text-gray-900 group-hover:text-purple-900 transition-colors">
          {course.title}
        </h3>
        <p className="text-xs font-semibold text-purple-700/70 uppercase tracking-wider mt-1">
          {course.track}
        </p>
      </CardHeader>

      <CardContent className="flex-grow space-y-4 pb-3">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-start gap-1.5">
            <Clock className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
            <span className="text-gray-500 text-xs">{course.duration}</span>
          </div>
          <div className="flex items-start gap-1.5">
            <Users className="h-4 w-4 text-purple-400 shrink-0 mt-0.5" />
            <span className="text-gray-500 text-xs line-clamp-2" title={course.suitableFor}>
              {course.suitableFor}
            </span>
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2.5">Investment</h4>
          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-1.5 text-xs text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                Online
              </span>
              <span className="font-bold text-gray-800 text-xs">{course.prices.online}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-1.5 text-xs text-gray-600">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-700 shrink-0"></span>
                Physical
              </span>
              <span className="font-bold text-purple-700 text-xs">{course.prices.physical}</span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0 pb-5 flex flex-col gap-2.5 px-4">
        {!course.isBonus && (
          <Button asChild variant="outline" size="sm" className="w-full border-gray-200 text-gray-600 hover:border-purple-300 hover:text-purple-800 text-xs gap-1.5 rounded-xl">
            <a href={`/curriculum/${course.slug}`} target="_blank" rel="noopener noreferrer">
              <FileDown size={13} />
              Download Curriculum
            </a>
          </Button>
        )}
        <div className="w-full">
          <WhatsAppCTA
            message={`Hello BezaTo, I am interested in the ${course.title} course. Please share details.`}
            text={course.isBonus ? "Ask About Bonus Class" : "Enrol via WhatsApp"}
            className="w-full"
            size="default"
          />
        </div>
      </CardFooter>
    </Card>
  );
}
