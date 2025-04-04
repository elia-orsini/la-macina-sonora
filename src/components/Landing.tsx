"use client";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Macina3D from "../../public/macina-3d.gif";
import { Canvas } from "@react-three/fiber";
import SpinningLogo from "./SpinningLogo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Landing() {
  const [show, setShow] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  useGSAP(() => {
    gsap.from(".section-content", {
      opacity: 0,
      duration: 2,
      ease: "power3.out",
    });
  }, [activeSection]);

  const menuItems = [
    { id: "thestudio", label: "the studio" },
    { id: "recordings", label: "recordings" },
    { id: "productions", label: "productions" },
    { id: "soundsystem", label: "soundsystem" },
    { id: "events", label: "events" },
    { id: "contacts", label: "contacts" },
  ];

  const sectionContent: any = {
    contacts: (
      <div className="absolute right-0 z-0 max-h-screen w-[33rem] text-2xl xl:right-10">
        <div className="fixed right-0 mt-0 w-screen p-4 text-left md:w-[30em] xl:mt-10 xl:w-[33rem] xl:p-0">
          <p className="mb-10 text-right text-2xl font-black">contacts</p>
          <p className="text-sm">
            Email:{" "}
            <a className="underline" href="mailto:lamacinasonora@gmail.com">
              lamacinasonora@gmail.com
            </a>
            <br />
            Instagram:{" "}
            <a
              className="underline"
              href="https://www.instagram.com/lamacinasonora"
              target="_blank"
            >
              @lamacinasonora
            </a>
            <br />
            Facebook:{" "}
            <a className="underline" href="https://www.facebook.com/lamacinasonora" target="_blank">
              @lamacinasonora
            </a>
            <br />
          </p>
          <p className="mb-60 mt-20 text-[0.7rem] italic leading-tight">
            Copyright © 2025 La Macina Sonora. All rights reserved.
            <br />
            Designed by Elia Orsini and Rino Bellandi.
          </p>
          <button
            className="border-1 fixed -bottom-10 mb-28 ml-2 mr-2 mt-5 rounded-xl border border-white bg-black px-2 py-1 text-lg font-semibold text-white transition-colors duration-500 hover:border-black hover:bg-white hover:text-black xl:-bottom-14"
            onClick={() => toggleSection("contacts")}
          >
            go back
          </button>
        </div>
      </div>
    ),
    productions: (
      <div className="absolute right-0 z-0 max-h-screen w-[50rem] text-2xl xl:right-10">
        <div className="scrollable absolute top-0 mr-10 h-screen w-[17rem] space-y-2 overflow-scroll pb-40 text-center text-justify text-lg font-semibold opacity-0 xl:opacity-100">
          <img className="mx-auto w-11/12" src="./imgs/14.jpeg" />
          <p className="font-base py-1 text-center text-xs">Andrea Butturini - Polaroid</p>
        </div>
        <div className="absolute right-0 mt-0 w-screen pl-10 text-justify text-lg font-semibold md:w-[30em] xl:mt-10 xl:w-[33rem] xl:pl-0">
          <p className="mb-7 mt-0 text-right text-3xl font-black xl:mt-10">productions</p>
          <p className="mb-40">
            Il team audio della "La Macina Sonora" è composto da diversi producer e musicisti.
            <br /> Le produzioni dello studio si sono da sempre contraddistinte per un suono
            moderno, dettagliato e sempre in grado di soddisfare i gusti degli artisti. In
            particolare, grazie ai progetti musicali di Rino Bellandi, il suono della Macina si è
            specializzato sopratutto nelle produzioni elettroniche e Hip-Hop. <br />
          </p>
          <button
            className="border-1 fixed -bottom-10 mb-28 ml-2 mr-2 mt-5 rounded-xl border border-white bg-black px-2 py-1 text-lg font-semibold text-white transition-colors duration-500 hover:border-black hover:bg-white hover:text-black xl:-bottom-14"
            onClick={() => toggleSection("productions")}
          >
            go back
          </button>
          <br />
        </div>
      </div>
    ),
    thestudio: (
      <div className="absolute right-0 z-0 max-h-screen w-[51rem] text-2xl xl:right-10">
        <div className="scrollable absolute top-0 mr-10 h-screen w-[18rem] space-y-2 overflow-scroll pb-40 text-justify text-lg font-semibold opacity-0 xl:opacity-100">
          <img className="mx-auto mt-2 w-11/12" src="./imgs/10-min.jpg" />
          <img className="mx-auto w-11/12" src="./imgs/16-min.jpg" />
          <img className="mx-auto w-11/12" src="./imgs/17-min.jpg" />
          <img className="mx-auto w-11/12" src="./imgs/18-min.jpg" />
          <img className="mx-auto w-11/12" src="./imgs/4-min.jpg" />
          <img className="mx-auto w-11/12" src="./imgs/15-min.jpg" />
          <img className="mx-auto w-11/12" src="./imgs/14-min.jpg" />
          <img className="mx-auto w-11/12" src="./imgs/5-min.jpg" />
          <img className="mx-auto w-11/12" src="./imgs/6-min.jpg" />
          <img className="mx-auto w-11/12" src="./imgs/7-min.jpg" />
          <img className="mx-auto w-11/12" src="./imgs/9-min.jpg" />
          <img className="mx-auto w-11/12" src="./imgs/1-min.jpg" />
          <img className="mx-auto w-11/12" src="./imgs/3-min.jpg" />
          <img className="mx-auto w-11/12" src="./imgs/11-min.jpg" />
          <img className="mx-auto w-11/12" src="./imgs/12-min.jpg" />
          <img className="mx-auto w-11/12" src="./imgs/13-min.jpg" />
          <img className="mx-auto w-11/12" src="./imgs/2-min.jpg" />
          <img className="mx-auto w-11/12" src="./imgs/new3.jpg" />
          <img className="mx-auto w-11/12" src="./imgs/new1.jpg" />
          <img className="mx-auto w-11/12" src="./imgs/new2.jpg" />
        </div>
        <div className="absolute right-0 mt-0 w-screen bg-white pl-10 text-justify text-lg font-semibold md:w-[30em] xl:mt-10 xl:w-[33rem] xl:pl-0">
          <p className="mb-7 text-right text-3xl font-black">the studio</p>
          <p className="mb-28">
            "La Macina Sonora" nasce dall'idea di Rino Bellandi di realizzare uno studio di
            registrazione e produzione musicale in grado di unire l'arte della registrazione
            tradizionale con le moderne tecniche di produzione audio. Lo studio è situato a
            Montichiari, in provincia di Brescia ed è stato inaugurato nel gennaio 2020. Nel corso
            degli anni i progetti della Macina Sonora sono diventati un riferimento sia per la
            qualità delle registrazioni che per la varietà creativa delle produzioni realizzate
            all'interno dello studio da producer e musicisti. Oltre ad essere un luogo dove la
            musica trova il modo di esprimersi la Macina è da sempre un aggregatore di talenti e
            content creator, infatti il network che gravita intorno a questa realtà è arricchito da
            grafici, fotografi, videomaker e creativi i quali lavorano costantemente per gli artisti
            che scelgono lo studio come casa della propria arte.
          </p>
          <button
            className="border-1 fixed -bottom-12 mb-28 ml-2 mr-2 mt-5 rounded-xl border border-white bg-black px-2 py-1 text-lg font-semibold text-white transition-colors duration-500 hover:border-black hover:bg-white hover:text-black xl:-bottom-14"
            onClick={() => toggleSection("thestudio")}
          >
            go back
          </button>
          <br />
        </div>
      </div>
    ),
    recordings: (
      <div className="absolute right-0 z-0 max-h-screen w-[50rem] text-2xl xl:right-10">
        <div className="scrollable absolute top-0 mr-10 h-screen w-[17rem] space-y-2 overflow-scroll pb-40 text-center text-justify text-lg font-semibold opacity-0 xl:opacity-100">
          <img className="mx-auto w-11/12" src="./imgs/2.jpeg" />
          <p className="font-base pb-0 text-center text-[0.65rem]">
            The Spotlights - thiswillmakeafunstoryoneday
          </p>
          <img className="mx-auto mt-2 w-11/12" src="./imgs/1.jpeg" />
          <p className="font-base py-1 text-center text-xs">
            Jolly Kid & Flameengo - Playboy Carti
          </p>
          <img className="mx-auto w-11/12" src="./imgs/3.jpeg" />
          <p className="font-base py-1 text-center text-xs">Wout Records Vol. III</p>
          <img className="mx-auto w-11/12" src="./imgs/4.jpeg" />
          <p className="font-base py-1 text-center text-xs">Osso - PCASDM</p>
          <img className="mx-auto w-11/12" src="./imgs/7.jpeg" />
          <p className="font-base py-1 text-center text-xs">Villy Flare - Cuore di Ghiaccio</p>
          <img className="mx-auto w-11/12" src="./imgs/10.jpeg" />
          <p className="font-base py-1 text-center text-xs">
            Kalpa - Four Kids (Rino Bellandi Remix)
          </p>
          <img className="mx-auto w-11/12" src="./imgs/9.jpeg" />
          <p className="font-base py-1 text-center text-xs">Jolly Kid - Morire x Me</p>
          <img className="mx-auto w-11/12" src="./imgs/6.jpeg" />
          <p className="font-base py-1 text-center text-xs">Rino Bellandi - Movimento</p>
          <img className="mx-auto w-11/12" src="./imgs/11.jpeg" />
          <p className="font-base py-1 text-center text-xs">
            Villy Flare - Villy sulla Luna Vol. 3
          </p>
          <img className="mx-auto w-11/12" src="./imgs/12.jpeg" />
          <p className="font-base py-1 text-center text-xs">Bueno & Michele_Battart - Fuoco</p>
          <img className="mx-auto w-11/12" src="./imgs/13.jpeg" />
          <p className="font-base py-1 text-center text-xs">Cenere - Sirene</p>
          <img className="mx-auto w-11/12" src="./imgs/15.jpeg" />
          <p className="font-base py-1 text-center text-xs">Bueno - Paradiso</p>
        </div>
        <div className="scrollable absolute right-0 h-screen w-screen overflow-scroll bg-white pb-40 pl-10 text-justify text-lg font-semibold md:w-[30em] xl:w-[33rem] xl:pl-0">
          <p className="mb-7 mr-4 mt-0 text-right text-3xl font-black xl:mt-10">recordings</p>
          <p className="mb-32 mr-4">
            "La Macina Sonora" è divisa in due stanze, ideate e realizzate con due diversi approcci.
            Entrambe sono state progettate e trattate acusticamente da Riccardo Buccelleni,
            ingegnere specializzato nell'acustica degli ambienti che ha curato nei minimi dettagli
            il suono e l'estetica delle due stanze per poter realizzare al meglio ogni idea
            artistica.
            <br />
            <br />
            <span className="font-black">Control Room</span>: è il luogo dello studio pensato per la
            produzione musicale, il mixing ed il mastering dei brani che vengono affidati ai nostri
            producer e audio engineer. Questa stanza è la più moderna dello studio ed è stata
            isolata e trattata acusticamente per poter ascoltare nel modo più preciso e analitico
            possibile.
            <br />
            <br />
            <span className="font-black">Live Room</span>: è il luogo dello studio pensato per la
            registrazione e l'esibizione dei musicisti. Il trattamento acustico di questa parte è
            stato pensato appositamente per ottenere sia registrazioni spot molto precise ed
            asciutte sia registrazioni panoramiche in grado di dare allo strumento ripreso il tipico
            suono di uno studio di qualità. La Live Room è attrezzata anche per provare le
            esibizioni degli artisti fornendo impianto audio con mixer, batteria, amplificatori per
            basso e chitarra elettrica, microfoni per ogni esigenza ed un reparto di sintesi sonora
            sempre in espansione con tastiere e sintetizzatori.
            <br />
          </p>
          <button
            className="border-1 fixed -bottom-10 mb-28 ml-2 mr-2 mt-5 rounded-xl border border-white bg-black px-2 py-1 text-lg font-semibold text-white transition-colors duration-500 hover:border-black hover:bg-white hover:text-black xl:-bottom-14"
            onClick={() => toggleSection("recordings")}
          >
            go back
          </button>
          <br />
        </div>
      </div>
    ),
    events: (
      <div className="absolute right-0 z-0 w-[50rem] text-2xl xl:right-10">
        <div className="scrollable absolute right-0 w-screen overflow-scroll bg-white pb-20 pl-10 text-justify text-lg font-semibold md:w-[30em] xl:w-[33rem] xl:pl-0">
          <p className="mb-7 mt-0 text-right text-3xl font-black xl:mt-10">events</p>
          <p className="mb-32">
            La Macina Eventi è la divisione Live dello studio di registrazione e produzione La
            Macina Sonora.
            <br />
            L'agenzia nasce dall'idea di raccogliere diverse figure professionali del settore
            dell'intrattenimento in grado di curare a 360° l'organizzazione di un evento pubblico
            e/o privato.
            <br />
            Grazie all'esperienza maturata negli anni in diversi contesti il nostro team ha
            sviluppato una visione chiara degli aspetti artistici, tecnici e organizzativi necessari
            alla creazione di un evento di successo. La nostra mission è offrire un servizio
            completo e personalizzato al quale il cliente possa far riferimento come garanzia di
            qualità.
          </p>
          <button
            className="border-1 fixed -bottom-10 mb-28 ml-2 mr-2 mt-5 rounded-xl border border-white bg-black px-2 py-1 text-lg font-semibold text-white transition-colors duration-500 hover:border-black hover:bg-white hover:text-black xl:-bottom-14"
            onClick={() => toggleSection("events")}
          >
            go back
          </button>
          <br />
        </div>
      </div>
    ),
    soundsystem: (
      <div className="absolute right-0 z-0 max-h-screen w-[51rem] text-2xl xl:right-10">
        <div className="scrollable absolute top-0 mr-10 h-screen w-[18rem] space-y-2 overflow-scroll pb-40 text-justify text-lg font-semibold opacity-0 xl:opacity-100">
          <img className="gearImages mx-auto w-11/12" src="./imgs/1S.jpeg" />
          <img className="gearImages mx-auto w-11/12" src="./imgs/6S.jpeg" />
          <img className="gearImages mx-auto w-11/12" src="./imgs/2S.jpeg" />
          <img className="gearImages mx-auto w-11/12" src="./imgs/3S.jpeg" />
          <img className="gearImages mx-auto w-11/12" src="./imgs/4S.jpeg" />
          <img className="gearImages mx-auto w-11/12" src="./imgs/5S.jpeg" />
          <img className="gearImages mx-auto w-11/12" src="./imgs/7S.jpg" />
          <img className="gearImages mx-auto w-11/12" src="./imgs/8S.jpeg" />
          <img className="gearImages mx-auto w-11/12" src="./imgs/9S.jpeg" />
          <img className="gearImages mx-auto w-11/12" src="./imgs/10S.jpeg" />
          <img className="gearImages mx-auto w-11/12" src="./imgs/13S.JPG" />
          <img className="gearImages mx-auto w-11/12" src="./imgs/11S.JPG" />
          <img className="gearImages mx-auto w-11/12" src="./imgs/12S.JPG" />
        </div>
        <div className="absolute right-0 mt-0 w-screen bg-white pl-10 text-justify text-lg font-semibold md:w-[30em] xl:mt-10 xl:w-[33rem] xl:pl-0">
          <p className="mb-7 text-right text-3xl font-black">soundsystem</p>
          <p className="mb-20">
            La Macina Sonora Soundsystem nasce dall'idea di portare il suono del nostro studio anche
            nel mondo Live affiancando gli artisti e i professionisti che hanno scelto di affidarsi
            al nostro team per la propria musica.
            <br /> Abbiamo costituito il nostro impianto prevalentemente di speaker RCF per concerti
            Live di band e musicisti mentre abbiamo diversi impianti FBT e Proel per DJ Set ed
            eventi elettronici.
            <br /> Il nostro parco microfoni per le esibizioni dal vivo è ampio e può soddisfare le
            esigenze sia di piccole formazioni che di concerti per migliaia di persone. <br />
            Per qualsiasi informazione sui nostri servizi o per chiedere un preventivo
            personalizzato non esitare a contattarci.
          </p>
          <br />
          <button
            className="border-1 fixed -bottom-12 mb-28 ml-2 mr-2 mt-5 rounded-xl border border-white bg-black px-2 py-1 text-lg font-semibold text-white transition-colors duration-500 hover:border-black hover:bg-white hover:text-black xl:-bottom-14"
            onClick={() => toggleSection("soundsystem")}
          >
            go back
          </button>
          <br />
        </div>
      </div>
    ),
  };

  return (
    <div className="h-screen overflow-clip">
      <Transition
        show={show}
        enter="transition-opacity duration-2000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="leading-2 absolute right-5 top-32 z-10 max-w-full text-right text-lg font-semibold xl:top-0 xl:text-3xl">
          <Transition
            show={!activeSection}
            enter="transition-opacity duration-00"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-00"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <p className="absolute right-20 top-10 mb-20 w-48 text-left text-4xl">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  className="mt-3.5 block text-left hover:underline"
                  onClick={() => toggleSection(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </p>
          </Transition>

          {!!activeSection && (
            <div className="section-content">{sectionContent[activeSection]}</div>
          )}
        </div>
      </Transition>

      <div
        className={`duration-2000 absolute left-1/2 top-0 z-0 mx-auto h-screen w-screen -translate-x-1/2 object-cover transition ease-in-out xl:min-h-screen ${
          show ? "opacity-0 md:-translate-x-3/4 md:opacity-100" : ""
        }`}
      >
        <Canvas className="">
          <SpinningLogo />
        </Canvas>
      </div>

      <button
        className={`fixed bottom-16 right-6 z-10 flex h-12 w-12 max-w-xl rotate-[270deg] rounded-full border p-0 px-2 font-semibold transition-colors duration-500 xl:bottom-12 xl:right-14 xl:h-16 xl:w-16 ${
          show
            ? "border-black bg-black text-white hover:border-black hover:bg-white hover:text-black"
            : "border-black bg-white text-black hover:border-white hover:bg-black hover:text-white"
        }`}
        onClick={() => setShow(!show)}
        aria-label={show ? "Close menu" : "Open menu"}
      >
        <svg
          className={`duration-2000 transition-transform ease-in-out ${show ? "-rotate-90" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          width="100%"
          height="100%"
        >
          <path
            fillRule="evenodd"
            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
          />
        </svg>
      </button>
    </div>
  );
}
