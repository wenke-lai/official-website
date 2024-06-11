type ResumeCardProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const ResumeCard: React.FC<ResumeCardProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <article className="min-h-[600px] grid grid-rows-[auto,1fr] divide-y divide-green-500 gap-2">
      <hgroup>
        <h3 className="text-sky-500">{title}</h3>
        <h4 className="py-2">{description}</h4>
      </hgroup>
      <div className="h-full p-4 overflow-y-auto bg-secondary">{children}</div>
    </article>
  );
};

export default ResumeCard;
