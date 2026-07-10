interface SkillCardProps {
  skill: string;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-center font-medium text-blue-800">
      {skill}
    </div>
  );
}