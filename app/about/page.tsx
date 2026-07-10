import SkillCard from '@/components/SkillCard';

const skills = [
  'JavaScript',
  'Next.js',
  'Node.js / Express',
  'PostgreSQL',
  'Tailwind CSS',
  'Python',
];

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-8">
        I&apos;m a full-stack development student at BYU-Pathway, originally from Argentina.
        I&apos;ve worked on frontend and backend projects using JavaScript, Node.js, and Next.js,
        and I&apos;m passionate about building tools that combine technology with meaningful use cases.
      </p>
      <h3 className="text-2xl font-semibold mb-4">Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {skills.map((skill) => (
          <SkillCard key={skill} skill={skill} />
        ))}
      </div>
    </main>
  );
}