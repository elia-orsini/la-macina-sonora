// import { fetchOptions } from "@/constants/constants";
import Landing from "@/components/Landing";

// const LANDING_INFO = `*[_type == "landingInformation"]{statement, email, instagram}`;
// const LANDING_CAROUSEL = `*[_type == "landingCarousel"]{images[]}`;

export default async function IndexPage() {
  // const landingInfo = await client.fetch<ILandingInfo[]>(LANDING_INFO, {}, fetchOptions);

  return (
    <main className="flex h-dvh w-screen flex-col justify-between font-semibold sm:h-screen">
      <Landing />
    </main>
  );
}
