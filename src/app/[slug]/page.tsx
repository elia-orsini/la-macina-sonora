import Landing from "@/components/Landing";
import { notFound } from "next/navigation";

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;

  let initialState = "";

  switch (slug) {
    case "the-studio":
      initialState = "thestudio";
      break;
    case "recordings":
      initialState = "recordings";
      break;
    case "productions":
      initialState = "productions";
      break;
    case "soundsystem":
      initialState = "soundsystem";
      break;
    case "events":
      initialState = "events";
      break;
    case "contacts":
      initialState = "contacts";
      break;
    default:
      break;
  }

  if (!initialState) return notFound();

  return (
    <main className="flex h-dvh w-screen flex-col justify-between font-semibold sm:h-screen">
      <Landing initialState={initialState} />
    </main>
  );
}

export async function generateStaticParams() {
  const pages = ["the-studio", "recordings", "productions", "soundsystem", "events", "contacts"];

  return pages.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;

  let title = "";
  let description = "";

  switch (slug) {
    case "the-studio":
      title = "The Studio | La Macina Sonora";
      description =
        "La Macina Sonora nasce dall'idea di Rino Bellandi di realizzare uno studio di registrazione e produzione musicale in grado di unire l'arte della registrazione tradizionale con le moderne tecniche di produzione audio.";
      break;
    case "Recordings | La Macina Sonora":
      title = "recordings";
      description =
        "La Macina Sonora è divisa in due stanze, ideate e realizzate con due diversi approcci. Entrambe sono state progettate e trattate acusticamente da Riccardo Buccelleni, ingegnere specializzato nell'acustica degli ambienti che ha curato nei minimi dettagli il suono e l'estetica delle due stanze per poter realizzare al meglio ogni idea artistica.";
      break;
    case "productions":
      title = "Productions | La Macina Sonora";
      description =
        "Il team audio della La Macina Sonora è composto da diversi producer e musicisti.";
      break;
    case "soundsystem":
      title = "Soundsystem | La Macina Sonora";
      description =
        "La Macina Sonora Soundsystem nasce dall'idea di portare il suono del nostro studio anche nel mondo Live affiancando gli artisti e i professionisti che hanno scelto di affidarsi al nostro team per la propria musica.";
      break;
    case "events":
      title = "Events | La Macina Sonora";
      description =
        "La Macina Eventi è la divisione Live dello studio di registrazione e produzione La Macina Sonora. L'agenzia nasce dall'idea di raccogliere diverse figure professionali del settore dell'intrattenimento in grado di curare a 360° l'organizzazione di un evento pubblico e/o privato.";
      break;
    case "contacts":
      title = "Contacts | La Macina Sonora";
      description = "Contatta La Macina Sonora per Email, su Instagram o su Facebook.";
      break;
    default:
      break;
  }

  return {
    title: title,
    description: description,
  };
}
