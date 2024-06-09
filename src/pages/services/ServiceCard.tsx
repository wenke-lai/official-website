type ServiceCardProps = {
  title: string;
  icon: React.ReactNode;
  menuItems: string[];
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  icon,
  menuItems,
}) => {
  return (
    <article className="debug row gap-4 center">
      <hgroup className="row gap-2 middle">
        <h3>{title}</h3>
        <span>{icon}</span>
      </hgroup>
      <menu>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </menu>
    </article>
  );
};

export default ServiceCard;
