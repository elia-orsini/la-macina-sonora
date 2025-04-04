"use client";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { Canvas } from "@react-three/fiber";
import SpinningLogo from "./SpinningLogo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

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
    contacts: {
      title: "contacts",
      text: (
        <>
          Email:{" "}
          <a className="underline" href="mailto:lamacinasonora@gmail.com">
            lamacinasonora@gmail.com
          </a>
          <br />
          Instagram:{" "}
          <a className="underline" href="https://www.instagram.com/lamacinasonora" target="_blank">
            @lamacinasonora
          </a>
          <br />
          Facebook:{" "}
          <a className="underline" href="https://www.facebook.com/lamacinasonora" target="_blank">
            @lamacinasonora
          </a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <span className="mb-60 mt-20 text-[0.7rem] italic leading-tight">
            Copyright © 2025 La Macina Sonora. All rights reserved.
            <br />
            Designed by Elia Orsini and Rino Bellandi.
          </span>
        </>
      ),
    },
    productions: {
      title: "productions",
      text: (
        <>
          Il team audio della &quot;La Macina Sonora&quot; è composto da diversi producer e
          musicisti.
          <br /> Le produzioni dello studio si sono da sempre contraddistinte per un suono moderno,
          dettagliato e sempre in grado di soddisfare i gusti degli artisti. In particolare, grazie
          ai progetti musicali di Rino Bellandi, il suono della Macina si è specializzato sopratutto
          nelle produzioni elettroniche e Hip-Hop. <br />
        </>
      ),
      images: [{ src: "/imgs/14.jpeg", alt: "Andrea Butturini - Polaroid" }],
    },
    thestudio: {
      title: "the studio",
      text: (
        <>
          &quot;La Macina Sonora&quot; nasce dall&apos;idea di Rino Bellandi di realizzare uno
          studio di registrazione e produzione musicale in grado di unire l&apos;arte della
          registrazione tradizionale con le moderne tecniche di produzione audio. Lo studio è
          situato a Montichiari, in provincia di Brescia ed è stato inaugurato nel gennaio 2020. Nel
          corso degli anni i progetti della Macina Sonora sono diventati un riferimento sia per la
          qualità delle registrazioni che per la varietà creativa delle produzioni realizzate
          all&apos;interno dello studio da producer e musicisti. Oltre ad essere un luogo dove la
          musica trova il modo di esprimersi la Macina è da sempre un aggregatore di talenti e
          content creator, infatti il network che gravita intorno a questa realtà è arricchito da
          grafici, fotografi, videomaker e creativi i quali lavorano costantemente per gli artisti
          che scelgono lo studio come casa della propria arte.
        </>
      ),
      images: [
        {
          src: "/imgs/10-min.jpg",
        },
        {
          src: "/imgs/16-min.jpg",
        },
        {
          src: "/imgs/17-min.jpg",
        },
        {
          src: "/imgs/18-min.jpg",
        },
        {
          src: "/imgs/4-min.jpg",
        },
        {
          src: "/imgs/15-min.jpg",
        },
        {
          src: "/imgs/14-min.jpg",
        },
        {
          src: "/imgs/5-min.jpg",
        },
        {
          src: "/imgs/6-min.jpg",
        },
        {
          src: "/imgs/7-min.jpg",
        },
        {
          src: "/imgs/9-min.jpg",
        },
        {
          src: "/imgs/1-min.jpg",
        },
        {
          src: "/imgs/3-min.jpg",
        },
        {
          src: "/imgs/11-min.jpg",
        },
        {
          src: "/imgs/12-min.jpg",
        },
        {
          src: "/imgs/13-min.jpg",
        },
        {
          src: "/imgs/2-min.jpg",
        },
        {
          src: "/imgs/new3.jpg",
        },
        {
          src: "/imgs/new1.jpg",
        },
        {
          src: "/imgs/new2.jpg",
        },
      ],
    },
    recordings: {
      title: "recordings",
      text: (
        <>
          &quot;La Macina Sonora&quot; è divisa in due stanze, ideate e realizzate con due diversi
          approcci. Entrambe sono state progettate e trattate acusticamente da Riccardo Buccelleni,
          ingegnere specializzato nell&apos;acustica degli ambienti che ha curato nei minimi
          dettagli il suono e l&apos;estetica delle due stanze per poter realizzare al meglio ogni
          idea artistica.
          <br />
          <br />
          <span className="font-black">Control Room</span>: è il luogo dello studio pensato per la
          produzione musicale, il mixing ed il mastering dei brani che vengono affidati ai nostri
          producer e audio engineer. Questa stanza è la più moderna dello studio ed è stata isolata
          e trattata acusticamente per poter ascoltare nel modo più preciso e analitico possibile.
          <br />
          <br />
          <span className="font-black">Live Room</span>: è il luogo dello studio pensato per la
          registrazione e l&apos;esibizione dei musicisti. Il trattamento acustico di questa parte è
          stato pensato appositamente per ottenere sia registrazioni spot molto precise ed asciutte
          sia registrazioni panoramiche in grado di dare allo strumento ripreso il tipico suono di
          uno studio di qualità. La Live Room è attrezzata anche per provare le esibizioni degli
          artisti fornendo impianto audio con mixer, batteria, amplificatori per basso e chitarra
          elettrica, microfoni per ogni esigenza ed un reparto di sintesi sonora sempre in
          espansione con tastiere e sintetizzatori.
        </>
      ),
      images: [
        { src: "/imgs/2.jpeg", alt: "The Spotlights - thiswillmakeafunstoryoneday" },
        { src: "/imgs/1.jpeg", alt: "Jolly Kid & Flameengo - Playboy Carti" },
        { src: "/imgs/3.jpeg", alt: "Wout Records Vol. III" },
        { src: "/imgs/4.jpeg", alt: "Osso - PCASDM" },
        { src: "/imgs/7.jpeg", alt: "Villy Flare - Cuore di Ghiaccio" },
        { src: "/imgs/10.jpeg", alt: "Kalpa - Four Kids (Rino Bellandi Remix)" },
        { src: "/imgs/9.jpeg", alt: "Jolly Kid - Morire x Me" },
        { src: "/imgs/6.jpeg", alt: "Rino Bellandi - Movimento" },
        { src: "/imgs/11.jpeg", alt: "Villy Flare - Villy sulla Luna Vol. 3" },
        { src: "/imgs/12.jpeg", alt: "Bueno & Michele_Battart - Fuoco" },
        { src: "/imgs/13.jpeg", alt: "Cenere - Sirene" },
        { src: "/imgs/15.jpeg", alt: "Bueno - Paradiso" },
      ],
    },
    events: {
      title: "events",
      text: (
        <>
          La Macina Eventi è la divisione Live dello studio di registrazione e produzione La Macina
          Sonora.
          <br />
          L&apos;agenzia nasce dall&apos;idea di raccogliere diverse figure professionali del
          settore dell&apos;intrattenimento in grado di curare a 360° l&apos;organizzazione di un
          evento pubblico e/o privato.
          <br />
          Grazie all&apos;esperienza maturata negli anni in diversi contesti il nostro team ha
          sviluppato una visione chiara degli aspetti artistici, tecnici e organizzativi necessari
          alla creazione di un evento di successo. La nostra mission è offrire un servizio completo
          e personalizzato al quale il cliente possa far riferimento come garanzia di qualità.
        </>
      ),
    },
    soundsystem: {
      title: "soundsystem",
      text: (
        <>
          La Macina Sonora Soundsystem nasce dall&apos;idea di portare il suono del nostro studio
          anche nel mondo Live affiancando gli artisti e i professionisti che hanno scelto di
          affidarsi al nostro team per la propria musica.
          <br /> Abbiamo costituito il nostro impianto prevalentemente di speaker RCF per concerti
          Live di band e musicisti mentre abbiamo diversi impianti FBT e Proel per DJ Set ed eventi
          elettronici.
          <br /> Il nostro parco microfoni per le esibizioni dal vivo è ampio e può soddisfare le
          esigenze sia di piccole formazioni che di concerti per migliaia di persone. <br />
          Per qualsiasi informazione sui nostri servizi o per chiedere un preventivo personalizzato
          non esitare a contattarci.
        </>
      ),
      images: [
        { src: "/imgs/1S.jpeg" },
        { src: "/imgs/6S.jpeg" },
        { src: "/imgs/2S.jpeg" },
        { src: "/imgs/3S.jpeg" },
        { src: "/imgs/4S.jpeg" },
        { src: "/imgs/5S.jpeg" },
        { src: "/imgs/7S.jpeg" },
        { src: "/imgs/8S.jpeg" },
        { src: "/imgs/9S.jpeg" },
        { src: "/imgs/10S.jpeg" },
        { src: "/imgs/13S.jpeg" },
        { src: "/imgs/11S.jpeg" },
        { src: "/imgs/12S.jpeg" },
      ],
    },
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
        <div className="absolute z-10">
          <Transition
            show={!activeSection}
            enter="transition-opacity duration-00"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-00"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <p className="fixed right-0 mb-20 w-screen p-4 text-left text-4xl md:w-[35vw] md:p-10">
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
            <div className="section-content">
              <div className="fixed right-0 z-0 h-screen w-screen p-4 md:w-[40vw] md:p-10">
                <p className="mb-10 text-right text-2xl font-black">
                  {sectionContent[activeSection].title}
                </p>

                <p className="text-sm md:text-base">{sectionContent[activeSection].text}</p>

                <button
                  className="border-1 fixed bottom-16 rounded-xl border border-white bg-black px-2 py-1 text-lg font-semibold text-white transition-colors duration-500 hover:border-black hover:bg-white hover:text-black"
                  onClick={() => setActiveSection(null)}
                >
                  go back
                </button>
              </div>

              {sectionContent[activeSection].images && (
                <div className="scrollable no-scrollbar fixed right-[40vw] top-0 mr-3 flex h-screen w-[150px] flex-col space-y-2 overflow-y-scroll py-2 opacity-0 xl:opacity-100">
                  {sectionContent[activeSection].images.map((imgObj: any) => (
                    <div key={Math.random()} className="relative flex w-full flex-col">
                      <Image
                        height={0}
                        width={150}
                        className="h-auto"
                        objectFit="contain"
                        src={imgObj.src}
                        alt=""
                      />
                      {imgObj.alt && <p className="font-base text-center text-xs">{imgObj.alt}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
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
