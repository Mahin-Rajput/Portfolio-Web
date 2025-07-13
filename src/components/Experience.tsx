function Experience() {
  return (
    <>
      <div className="flex flex-col ml-[60px] md:flex-row min-h-screen mt-[40px]" id="Experience">
        <div className="sticky z-50 top-10 h-screen w-[250px] md:pt-[30px] md:pl-[35px]">
          <h1 className="font-bold text-[#2d2e32] text-3xl">
            Work Experience / Education
          </h1>
        </div>

        <div className="pl-[150px]  space-y-5 w-full md:w-[900px]">
          <article className="border-1 border-gray-200 rounded-[1vw] p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <header className=" flex flex-col md:flex-row md:item-start md:justify-between">
              <h1 className="font-bold text-lg">
                IT Manager at Body and Mind Healthcare Clinic
              </h1>
              <time
                className="text-gray-500 text-sm"
                dateTime="Jul 2024 – Present"
              >
                {" "}
                Jan 2024 – Present{" "}
              </time>
            </header>

            <p className="pt-2 text-sm text-gray-700">
              BMHCL (Full-time) London
            </p>

            <ul className="list-disc pl-4 pt-5 text-sm space-y-2">
              <li>
                Managing online systems, including Microsoft 365, ensuring
                smooth operation and system availability.
              </li>
              <li>
                Applying security features such as Data Loss Prevention (DLP)
                and encryption to protect sensitive data.
              </li>
              <li>
                Searched for and implemented new solutions to optimize IT
                operations and improve system security.
              </li>
              <li>
                Monitor and maintain system performance, ensuring adherence to
                compliance and security protocols.
              </li>
            </ul>

            <div className="mt-4 flex space-x-4">
              <span className=" rounded-full p-2 bg-gray-100 text-xs">
                Microsoft Intra
              </span>
              <span className=" rounded-full p-2 bg-gray-100 text-xs">VPN</span>
              <span className=" rounded-full p-2 bg-gray-100 text-xs">DB</span>
            </div>
          </article>

          <article className="border-1 border-gray-200 rounded-[1vw] p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <header className=" flex flex-col md:flex-row md:item-start md:justify-between">
              <h1 className="font-bold text-lg">
                Masters (MSc): Software Engineering With Cloud Computing{" "}
              </h1>
              <time
                className="text-gray-500 text-sm"
                dateTime="Jul 2024 – Present"
              >
                {" "}
                Sep 2022 – Oct-2023{" "}
              </time>
            </header>

            <p className="pt-2 text-sm text-gray-700">
              City, University of London, London, United Kingdom
            </p>

            <ul className="list-disc pl-4 pt-5 text-sm space-y-2">
              <li>
                Key Modules: Cloud Computing, Advanced Databases Supermodule,
                Software Systems Design, Semantic Web Technology, and advanced
                programming concurrency.
              </li>
              <li>
                Dissertation topic: Proposed and developed Knowledge Graph
                Alignment as a Service - A knowledge graph alignment service
                that functions as a black box to take two input ontologies and
                provide one aligned ontology with alignment algorithms approved
                by (Ontology Alignment Evaluation Initiative) OAEI.
              </li>
              <li>
                Project: Developed a Cloud-Based Flight Management System using
                AWS Components
              </li>
              <li>
                Certifications: Introduction to Cloud Computing, Getting Started
                with Git and GitHub.
              </li>
            </ul>

            {/* <div className="mt-4 flex space-x-4">
                    <span className=" rounded-full p-2 bg-gray-100 text-xs">
                        React
                    </span>
                     <span className=" rounded-full p-2 bg-gray-100 text-xs">
                        NodeJs
                    </span>
                     <span className=" rounded-full p-2 bg-gray-100 text-xs">
                        Tailwind
                    </span>
                   </div> */}
          </article>

          <article className="border-1 border-gray-200 rounded-[1vw] p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <header className=" flex flex-col md:flex-row md:item-start md:justify-between">
              <h1 className="font-bold text-lg">
                Back-End Developer at Scikey
              </h1>
              <time
                className="text-gray-500 text-sm"
                dateTime="Jul 2024 – Present"
              >
                {" "}
                Jan 2022 – May 2022{" "}
              </time>
            </header>

            <p className="pt-2 text-sm text-gray-700">Scikey (Intern)</p>

            <ul className="list-disc pl-4 pt-5 text-sm space-y-2">
              <li>
                Developed Human Capital Information System, including Employee
                Registration, Employee Survey, HR Message Broadcasting, and
                Leave Application Portal.
              </li>
              <li>
                Managed successful migration of the company database to a more
                robust and scalable platform, reducing downtime by 60%.
              </li>
              <li>
                Designed and optimized critical APIs using Express, enabling
                seamless operations and enhancing overall system performance,
                resulting in a 40% reduction in response time.
              </li>
              <li>
                Coordinated with a team of 40 employees and department managers
                to fulfill client requests effectively.
              </li>
            </ul>

            <div className="mt-4 flex space-x-4">
              <span className=" rounded-full p-2 bg-gray-100 text-xs">
                React
              </span>
              <span className=" rounded-full p-2 bg-gray-100 text-xs">
                NodeJs
              </span>
              <span className=" rounded-full p-2 bg-gray-100 text-xs">SQL</span>
            </div>
          </article>

          <article className="border-1 border-gray-200 rounded-[1vw] p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <header className=" flex flex-col md:flex-row md:item-start md:justify-between">
              <h1 className="font-bold text-lg">
                Bachelor of Science(BSc): Information Technology{" "}
              </h1>
              <time
                className="text-gray-500 text-sm"
                dateTime="Jul 2024 – Present"
              >
                {" "}
                Jan 2024 – Present{" "}
              </time>
            </header>

            <p className="pt-2 text-sm text-gray-700">
              Auro University: Surat, Gujarat, India
            </p>

            <ul className="list-disc pl-4 pt-5 text-sm space-y-2">
              <li>
                Key Modules: Programming with C, Data structures with C++,
                Python Programming, Android Studio, Web Development, Software
                Architecture, Software Lifecycle Management.
              </li>
              <li>
                Project: (HCIS)Human Capital Information System worked as a
                Back-End Developer.
              </li>
              <li>
                Project: Online Game Distribution Service worked as Full Stack
                Developer to develop a web application.
              </li>
            </ul>

            {/* <div className="mt-4 flex space-x-4">
                    <span className=" rounded-full p-2 bg-gray-100 text-xs">
                        React
                    </span>
                     <span className=" rounded-full p-2 bg-gray-100 text-xs">
                        NodeJs
                    </span>
                     <span className=" rounded-full p-2 bg-gray-100 text-xs">
                        Tailwind
                    </span>
                   </div> */}
          </article>

          <article className="border-1 border-gray-200 rounded-[1vw] p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <header className=" flex flex-col md:flex-row md:item-start md:justify-between">
              <h1 className="font-bold text-lg">
                IT Intern Training at Metanoia Infotech
              </h1>
              <time
                className="text-gray-500 text-sm"
                dateTime="Jul 2024 – Present"
              >
                {" "}
                April 2018 – May 2019
              </time>
            </header>

            <p className="pt-2 text-sm text-gray-700">(Intern)</p>

            <ul className="list-disc pl-4 pt-5 text-sm space-y-2">
              <li>
                Acquired a comprehensive understanding of development lifecycles
                and various development phases.
              </li>
              <li>
                Developed a fully functional website using HTML/CSS, showcasing
                the practical application of acquired skills.
              </li>
              <li>
                Demonstrated proficiency in industry-standard tools such as
                Visual Studio Code (VSC), Sublime, and Git.
              </li>
              <li>
                Applied knowledge of version control systems to collaborate
                effectively within a development team.
              </li>
            </ul>

            <div className="mt-4 flex space-x-4">
              <span className=" rounded-full p-2 bg-gray-100 text-xs">
                HTML
              </span>
              <span className=" rounded-full p-2 bg-gray-100 text-xs">CSS</span>
              <span className=" rounded-full p-2 bg-gray-100 text-xs">JS</span>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Experience;
