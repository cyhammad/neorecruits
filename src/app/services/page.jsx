import { ServicesHero } from "./_components/ServicesHero/ServicesHero";
import { ServicesList } from "./_components/ServicesList/ServicesList";
import { ServicesProcess } from "./_components/ServicesProcess/ServicesProcess";
import { ServicesRequestForm } from "./_components/ServicesRequestForm/ServicesRequestForm";

export const metadata = {
  title: "Services | NeoRecruits",
  description:
    "Discover our comprehensive recruitment services including executive search, permanent staffing, contract recruitment, RPO, remote staffing, technical training, and manpower supply.",
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col w-full">
      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <ServicesRequestForm />
    </main>
  );
}
