// import { TbBrandAws, TbBrandPython, TbBrandReact } from "react-icons/tb";
import {
  TbActivity,
  TbBrowser,
  TbCloudComputing,
  TbServer,
} from "react-icons/tb";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="">
      <hgroup>
        <h2>Services</h2>
        <h3 className="underline decoration-green-500">How can I help your?</h3>
      </hgroup>

      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 md:p-16">
        <ServiceCard
          index="01"
          title="Cloud Architecture"
          icon={<TbCloudComputing />}
          menuItems={[
            "System Design and Blueprinting",
            "Cloud Strategy and Planning",
            "Security and Compliance Design",
          ]}
        />

        <ServiceCard
          index="02"
          title="Cloud Infrastructure"
          icon={<TbActivity />}
          menuItems={[
            "Resource Deployment and Management",
            "Monitoring and Troubleshooting",
            "Automation and Configuration Management",
          ]}
        />

        <ServiceCard
          index="03"
          title="Web Development"
          icon={<TbBrowser />}
          menuItems={[
            "User Interface Development",
            "User Experience Optimization",
            "Frontend-Backend Integration",
          ]}
        />

        <ServiceCard
          index="04"
          title="Backend Development"
          icon={<TbServer />}
          menuItems={[
            "Server-Side Development",
            "Database Management",
            "Frontend-Backend Integration",
          ]}
        />
      </div>
    </div>
  );
};

export default Services;
