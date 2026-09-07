import { useState } from "react";

import ServicesHero from "../components/services/ServicesHero";
import ServiceDetails from "../components/services/ServiceDetails";
import ScrollReveal from "../components/common/ScrollReveal";

import {
  defaultServiceId,
  servicesData,
} from "../data/servicesData";

const Services = () => {
  const [activeService, setActiveService] = useState(defaultServiceId);

  const selectedService =
    servicesData.find((service) => service.id === activeService) ||
    servicesData[0];

  const handleServiceChange = (serviceId) => {
    setActiveService(serviceId);

    requestAnimationFrame(() => {
      document
        .getElementById("service-details")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    });
  };

  return (
    <main className="overflow-x-hidden">
      <ServicesHero
        services={servicesData}
        activeService={activeService}
        onSelect={handleServiceChange}
      />

      <div id="service-details">
        <ScrollReveal duration={0.8} distance={40}>
          <ServiceDetails service={selectedService} />
        </ScrollReveal>
      </div>
    </main>
  );
};

export default Services;