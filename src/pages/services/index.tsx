import { TbBrandAws, TbBrandPython, TbBrandReact } from "react-icons/tb";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div>
      <h2>Services</h2>

      <ServiceCard
        title="Cloud Service"
        icon={<TbBrandAws />}
        menuItems={[
          "Infrastructure Design",
          "Cloud Monitor",
          "Report and Audit",
        ]}
      />

      <ServiceCard
        title="Web Development"
        icon={<TbBrandReact />}
        menuItems={["React", "Tailwind CSS", "RESTful API"]}
      />

      <ServiceCard
        title="Backend Development"
        icon={<TbBrandPython />}
        menuItems={["RESTful API", "OAuth"]}
      />
    </div>
  );
};

export default Services;
