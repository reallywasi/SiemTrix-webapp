import { FaLaptopCode, FaServer, FaMobileAlt, FaCloud, FaShieldAlt, FaDatabase, FaProjectDiagram, FaTools } from "react-icons/fa";

const TechServicetiles = () => {
    const solutions = [
        {
            icon: <FaLaptopCode className="text-blue-600 text-5xl mb-4" />, 
            title: "Application Development", 
            description: "Front-end, back-end, and full-stack developers, business analysts, mobile developers, quality assurance engineers, DevOps engineers, Android/iOS developers, application maintenance, and modernization."
        },
        {
            icon: <FaServer className="text-blue-600 text-5xl mb-4" />, 
            title: "Web Design & Development", 
            description: "UX/UI designers, content writers, SEO specialists, graphic designers, web developers, custom web development, web maintenance, and modernization."
        },
        {
            icon: <FaDatabase className="text-blue-600 text-5xl mb-4" />, 
            title: "ERP & CRM", 
            description: "SAP/Oracle professionals, technical/functional consultants, SAP/Oracle architects, reporting & analytics specialists, implementation, customization, and support for ERP and CRM systems."
        },
        {
            icon: <FaCloud className="text-blue-600 text-5xl mb-4" />, 
            title: "Cloud Computing", 
            description: "Cloud engineers/admins/architects, cloud migration specialists, site reliability engineers, cloud security professionals, AWS architects/engineers, Azure professionals, GCP engineers."
        },
        {
            icon: <FaShieldAlt className="text-blue-600 text-5xl mb-4" />, 
            title: "Networking & Cybersecurity", 
            description: "Network admins/engineers/architects, cybersecurity analysts, penetration testers, ethical hackers, firewall engineers, security architects, incident response analysts, SOC analysts, IAM specialists, DevSecOps engineers."
        },
        {
            icon: <FaDatabase className="text-blue-600 text-5xl mb-4" />, 
            title: "Data Management & Analytics", 
            description: "Data engineers, data scientists, business intelligence developers, data governance specialists, ETL developers, big data engineers, data warehousing, business intelligence, and data analytics solutions."
        },
        {
            icon: <FaProjectDiagram className="text-blue-600 text-5xl mb-4" />, 
            title: "Program Management", 
            description: "Project, program, and portfolio management experts, scrum masters, agile coaches, risk managers, change managers, PMO directors, resource managers, portfolio managers."
        },
        {
            icon: <FaTools className="text-blue-600 text-5xl mb-4" />, 
            title: "Software & Hardware", 
            description: "Operating system, hardware, and infrastructure support professionals, software architects, hardware architects, hardware designers, product designers, test engineers, infrastructure architects."
        }
    ];

    return (
        <div className="bg-white text-black py-16">
            <h2 className="text-center text-4xl font-bold mb-10">Technology Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
                {solutions.map((solution, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-8 rounded-xl text-center flex flex-col items-center h-full hover:scale-105 transition-transform"
                    >
                        {solution.icon}
                        <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                        <p className="text-gray-600">{solution.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechServicetiles;
