// import { TbBrandAws, TbBrandPython, TbBrandReact } from "react-icons/tb";
import { TbActivity, TbBrowser, TbCloudComputing } from "react-icons/tb";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="">
      <hgroup className="pb-8">
        <h2>Services</h2>
        <h3 className="underline decoration-green-500">How can I help your?</h3>
      </hgroup>

      <div className="grid grid-cols-3 gap-8">
        <ServiceCard
          title="Cloud Solutions"
          subtitle="Maximize cloud potential with our tailored solutions"
          icon={<TbCloudComputing className="text-4xl text-green-400" />}
          menuItems={[
            "Design scalable and efficient cloud architectures",
            "Develop strategic roadmaps for seamless cloud adoption",
            "Ensure robust security and compliance frameworks",
          ]}
        />

        <ServiceCard
          title="DevOps Consulting"
          subtitle="Accelerate your development lifecycle with our expert DevOps services"
          icon={<TbActivity className="text-4xl text-sky-500" />}
          menuItems={[
            "Streamline deployment and resource management processes",
            "Resolve issues rapidly with proactive monitoring and troubleshooting",
            "Enhance operational efficiency through automation and configuration management",
          ]}
        />

        <ServiceCard
          title="Web Development"
          subtitle="Create robust and scalable systems to power your applications"
          icon={<TbBrowser className="text-4xl text-orange-500" />}
          menuItems={[
            "Design intuitive and engaging user interfaces",
            "Develop reliable and scalable backend solutions",
            "Ensure seamless communication between frontend and backend",
            "Provide efficient database design and management",
          ]}
        />
      </div>
    </div>
  );
};

export default Services;
