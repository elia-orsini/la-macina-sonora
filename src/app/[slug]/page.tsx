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
