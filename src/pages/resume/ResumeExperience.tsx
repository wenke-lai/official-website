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
    <article>
      <hgroup>
        <h5>{title}</h5>
        <p>{description}</p>
      </hgroup>
      <hr />
      <div>{children}</div>
    </article>
  );
};

export default ResumeCard;
