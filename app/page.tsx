import ProjectList from '@/components/ProjectList';

const projects = [
  {
    title: 'World Cuisine Explorer',
    description: 'A vanilla JavaScript SPA that lets users explore countries and discover traditional meals from around the world.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'CountriesNow API', 'TheMealDB API'],
    link: 'https://sebasosax.github.io/my-final-project'
  },
  {
    title: 'CSE Service Network',
    description: 'A full-stack Node.js/Express app with PostgreSQL, EJS templating, authentication, and volunteer management features.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'EJS', 'bcrypt'],
    link: 'https://cse340-js-08cn.onrender.com'
  }
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I&apos;m a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <ProjectList projects={projects} />
    </main>
  );
}