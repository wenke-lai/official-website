import { cn } from "src/utils/styles";

type ServiceCardProps = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  menuItems: string[];
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  subtitle,
  icon,
  menuItems,
}) => {
  return (
    <article
      className={cn(
        // size
        "h-full p-4 min-h-32 divide-y-2",
        // colors
        "border rounded-md ",
        // clickable
        "hover:cursor-pointer hover:scale-110 active:scale-95"
      )}
    >
      <div className="pb-2 row between">
        <hgroup className="">
          <h3>{title}</h3>
          <h6>{subtitle}</h6>
        </hgroup>
        <span>{icon}</span>
      </div>
      <ul className="pt-4 pl-4 list-disc list-outside">
        {menuItems.map((item, index) => (
          <li key={index} className="list-item">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ServiceCard;
