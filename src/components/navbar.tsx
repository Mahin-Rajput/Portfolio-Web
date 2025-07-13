
import { Typewriter } from "react-simple-typewriter";

function Navbar() {
  const greetings = [
    "Hello, World! 👋", // English
    "Hola, Mundo! 👋", // Spanish
    "Bonjour, le Monde! 👋", // French
    "Hallo, Welt! 👋", // German
    "Ciao, Mondo! 👋", // Italian
    "こんにちは、世界！👋", // Japanese (Konnichiwa, Sekai!)
    "안녕하세요, 세계! 👋", // Korean (Annyeonghaseyo, Segye!)
    "你好，世界！👋", // Chinese (Nǐ hǎo, shìjiè!)
    "Olá, Mundo! 👋", // Portuguese
    "Привет, мир! 👋", // Russian (Privet, mir!)
    "Hej, världen! 👋", // Swedish
    "Salve, Mundi! 👋", // Latin
    "Merhaba, Dünya! 👋", // Turkish
    "Hallo, Wereld! 👋", // Dutch
    "Hej, Verden! 👋", // Danish
    "Hallo, Verden! 👋", // Norwegian
    "שלום, עולם! 👋", // Hebrew (Shalom, Olam!)
    "سلام دنیا! 👋", // Persian (Salam Donya!)
    "नमस्ते, दुनिया! 👋", // Hindi (Namaste, Duniya!)
  ];

  return (
    <>
      <header className="bg-[rgb(255,255,255)] fixed w-full z-full">
        <nav>
          <ul className="flex flex-wrap justify-between item-center p-5 space-x-6 roboto-n1 w-full text-2xl">
            {/* <li>Built by Mahin <FontAwesomeIcon icon={faSpider} /></li> */}
            <li>
              <Typewriter
                words={greetings}
                loop={0} // 0 = infinite loop
                cursor
                cursorStyle=":)"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </li>
            <li className="ml-auto"><a href="#">Home</a></li>
            <li>
              <a href="#Experience">Experience</a>
            </li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Contact">Contact</a></li>
            <li className="-mt-1">
              <a href="/mahin_resume.pdf"
                className="
                                px-4 py-2
                                border-2 border-[rgb(58,124,243)]
                                rounded-lg
                                text-[rgb(58,124,243)] bg-white
                                font-semibold text-[17px]
                                transition-all
                                hover:bg-[rgb(58,124,243)] hover:text-white
                                text-center
                            "
              >
                Open CV
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
