import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <>
      <div className="bg-white-100 w-full ">
        <div className="flex flex-col gap-6 bg-white px-[4vw] md:px-[18vw] py-[12vw] w-full">
          <h1
            className="font-bold text-[17px] text-primary"
            style={{ color: "rgb(20 126 251)" }}
          >
            CONTACT
          </h1>
          <h1 className="font-bold text-[25px] text-dark">Get in touch</h1>

          {/* Contact Info Section */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-x-20 mt-10">
            {/* Location */}
            <div className="flex items-center md:items-start md:flex-row flex-col gap-4">
              <div
                className="flex justify-center items-center bg-white rounded-full w-[50px] h-[50px]"
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-2xl text-blue-400"
                />
              </div>
              <div className="flex flex-col text-center md:text-left">
                <div className="font-bold text-[17px] text-dark">Location</div>
                <a
                  href="https://www.google.com/maps/place/London,+UK/@51.5287398,-0.2664043,11z/data=!3m1!4b1!4m6!3m5!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862!16zL20vMDRqcGw?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  className="font-normal text-[17px] text-gray-500 hover:text-primary transition-all"
                >
                  London, UK
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center md:items-start md:flex-row flex-col gap-4">
              <div
                className="flex justify-center items-center bg-white rounded-full w-[50px] h-[50px]"
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                <FontAwesomeIcon
                  icon={faAt}
                  className="text-xl text-indigo-400"
                />
              </div>
              <div className="flex flex-col text-center md:text-left">
                <div className="font-bold text-[17px] text-dark">Email</div>
                <a
                  href="mailto:mahinvikasrajput@gmail.com"
                  className="font-normal text-[17px] text-gray-500 hover:text-primary transition-all"
                >
                  mahinvikasrajput@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
