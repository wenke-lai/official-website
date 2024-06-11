import { cn } from "src/utils/styles";

type ServiceCardProps = {
  index: string;
  title: string;
  icon: React.ReactNode;
  menuItems: string[];
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  index,
  title,
  icon,
  menuItems,
}) => {
  return (
    <article
      className={cn(
        // size
        "h-full gap-4 p-4 min-h-32",
        // colors
        "border-b-4  rounded-md  border-sky-300 ",
        // clickable
        " hover:cursor-pointer active:scale-95"
      )}
    >
      <div className="pb-4 row between">
        <hgroup className="">
          <h3>{index}</h3>
          <h3>{title}</h3>
        </hgroup>
        <span className="text-4xl">{icon}</span>
      </div>
      <menu className="list-disc">
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </menu>
    </article>
  );
};

export default ServiceCard;
