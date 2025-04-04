"use client";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { Canvas } from "@react-three/fiber";
import SpinningLogo from "./SpinningLogo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

export default function Landing({ initialState }: { initialState?: string }) {
  const [show, setShow] = useState(initialState ? true : false);
  const [activeSection, setActiveSection] = useState<string | null>(initialState || null);

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
          <br />
          <br />
          <br />
          <br />
          <span className="mb-60 mt-20 text-[0.7rem] italic leading-tight">
            Copyright © 2025 La Macina Sonora. All rights reserved.
            <br />
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
          <br />
          <br /> Le produzioni dello studio si sono da sempre contraddistinte per un suono moderno,
          dettagliato e sempre in grado di soddisfare i gusti degli artisti. In particolare, grazie
          ai progetti musicali di Rino Bellandi, il suono della Macina si è specializzato sopratutto
          nelle produzioni elettroniche e Hip-Hop.
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
          registrazione tradizionale con le moderne tecniche di produzione audio.
          <br />
          <br />
          Lo studio è situato a Montichiari, in provincia di Brescia ed è stato inaugurato nel
          gennaio 2020. Nel corso degli anni i progetti della Macina Sonora sono diventati un
          riferimento sia per la qualità delle registrazioni che per la varietà creativa delle
          produzioni realizzate all&apos;interno dello studio da producer e musicisti.
          <br />
          <br />
          Oltre ad essere un luogo dove la musica trova il modo di esprimersi la Macina è da sempre
          un aggregatore di talenti e content creator, infatti il network che gravita intorno a
          questa realtà è arricchito da grafici, fotografi, videomaker e creativi i quali lavorano
          costantemente per gli artisti che scelgono lo studio come casa della propria arte.
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
          <br />
          L&apos;agenzia nasce dall&apos;idea di raccogliere diverse figure professionali del
          settore dell&apos;intrattenimento in grado di curare a 360° l&apos;organizzazione di un
          evento pubblico e/o privato.
          <br />
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
          <br />
          <br /> Abbiamo costituito il nostro impianto prevalentemente di speaker RCF per concerti
          Live di band e musicisti mentre abbiamo diversi impianti FBT e Proel per DJ Set ed eventi
          elettronici.
          <br />
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
      {/* HEADER */}
      <div className="absolute left-0 top-0 z-30 hidden flex-row p-4 md:flex">
        <Image src="/macina-logo.png" unoptimized height={20} width={20} alt="" />
        <h1 className="ml-2 text-sm uppercase">la macina sonora</h1>
      </div>

      {/* SOCIALS */}
      <div className="absolute bottom-0 left-0 z-30 flex flex-row gap-x-4 p-4">
        <a target="_blank" href="https://www.facebook.com/lamacinasonora">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
          </svg>
        </a>
        <a target="_blank" href="https://www.instagram.com/lamacinasonora">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-instagram"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
          </svg>
        </a>
        <a href="https://open.spotify.com/playlist/01VYfz1UmZU2NvCkFlhDKj?si=UD2WqwY1RFuRoII2MHdrDA">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-spotify"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
          </svg>
        </a>
      </div>

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
                <p className="mb-6 text-right text-2xl font-black xl:mb-10">
                  {sectionContent[activeSection].title}
                </p>

                <p className="text-sm sm:text-[15px] xl:text-base">
                  {sectionContent[activeSection].text}
                </p>

                <button
                  className="border-1 fixed bottom-16 rounded-xl border border-white bg-black px-2 py-1 text-base font-semibold text-white transition-colors duration-500 hover:border-black hover:bg-white hover:text-black md:text-xl"
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
