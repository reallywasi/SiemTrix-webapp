import { FaLaptopCode, FaDollarSign, FaUserTie, FaCogs } from "react-icons/fa";
import { FaLeaf, FaIndustry, FaFlask, FaHeartbeat } from 'react-icons/fa';

const Servicetiles = () => {
    const solutions = [
        {
          icon: <FaLaptopCode className="text-yellow-600 text-5xl mb-4" />,
          title: "Technology focused",
          description:
            "Application development, web design & development, ERP & CRM packages, data management & analytics, networking, cybersecurity, cloud computing, software and hardware professionals.",
        },
        {
          icon: <FaDollarSign className="text-yellow-600 text-5xl mb-4" />,
          title: "Finance & accounting",
          description:
            "Financial analysts & controllers, accountants, CPA, investment counsellors, portfolio managers, treasury analysts, budget specialists, accounting clerks, AP/AR specialists, auditors, and tax compliance experts.",
        },
        {
          icon: <FaUserTie className="text-yellow-600 text-5xl mb-4" />,
          title: "Business professionals",
          description:
            "Sales, marketing, human resources, supply chain, procurement, social media professionals, communication specialists, contracts managers, program & project managers and customer service talent.",
        },
        {
          icon: <FaCogs className="text-yellow-600 text-5xl mb-4" />,
          title: "Engineering focused",
          description:
            "Mechanical, electrical & electronics, production engineers, printed circuit boards, embedded engineers, control engineers, civil engineers, ADAS talent, automotive engineers and power engineers.",
        },
        {
          icon: <FaLeaf className="text-yellow-600 text-5xl mb-4" />,
          title: "Energy & utilities",
          description:
            "Renewable energy engineers, energy efficiency, smart grid engineers, energy storage engineers, environmental scientists, nuclear engineers, oil & gas engineering talent, and utility management.",
        },
        {
          icon: <FaIndustry className="text-yellow-600 text-5xl mb-4" />,
          title: "Heavy & light industrial",
          description:
            "Skilled trades, manufacturing, quality control, equipment operators, maintenance & repair, operations supervisors, plant management, production managers, assembly line workers, inspectors, and warehouse & distribution workers.",
        },
        {
          icon: <FaFlask className="text-yellow-600 text-5xl mb-4" />,
          title: "Life sciences & pharma",
          description:
            "Professionals in biotechnology, medical devices, and pharmaceutical research & development, medical affairs people, pharmaceutical sales representatives, health & safety associates & managers.",
        },
        {
          icon: <FaHeartbeat className="text-yellow-600 text-5xl mb-4" />,
          title: "Clinical R&D",
          description:
            "New product development, R&D engineers, research & clinical scientists, clinical research coordinators (CRC), clinical data analysts, regulatory affair specialists, biostatisticians, medical writers, clinical QA managers.",
        },
      ];
      

  return (
<div className="bg-neutral-900 text-white py-16">
  <h2 className="text-center text-4xl font-bold mb-10">Staffing Solutions</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
    {solutions.map((solution, index) => (
      <div
        key={index}
        className="bg-neutral-800 p-8 rounded-xl text-center flex flex-col items-center h-full  hover:scale-205"
      >
        {solution.icon}
        <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
        <p className="text-neutral-400">{solution.description}</p>
      </div>
    ))}
  </div>
</div>

  );
};

export default Servicetiles;
