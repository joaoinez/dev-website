import { Particles } from "@/components/magicui/particles";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { Cover } from "@/components/ui/cover";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <>
      <VelocityScroll>{t("marquee")}</VelocityScroll>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <div className="absolute inset-0 bottom-0 left-0 right-0 top-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
        <h1 className="relative z-20 mx-auto mt-6 max-w-7xl bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 bg-clip-text py-6 text-center text-2xl font-semibold text-transparent md:text-3xl lg:text-5xl">
          {t("text1")}
          <a href="mailto:joaoinez.info@gmail.com">
            <Cover>{t("text2")}</Cover>
          </a>
          ?
        </h1>
        <div className="absolute bottom-4 left-4">
          <p>(joaoinez.info@gmail.com)</p>
          <p>(+351 913244408)</p>
        </div>
        <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={80}
          color="#000000"
          refresh
        />
      </div>
    </>
  );
}
