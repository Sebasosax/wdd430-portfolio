interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <article className="p-4 border-l-4 border-violet-600 bg-gray-50 rounded">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-3">{description}</p>
      <p className="text-sm text-gray-600 mb-4">
        <strong>Technologies:</strong> {technologies.join(', ')}
      </p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block bg-violet-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-violet-700 transition-colors">
          View Project
        </a>
      )}
    </article>
  );
}