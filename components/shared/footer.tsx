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
        <div className="absolute top-0 right-0 bottom-0 left-0 inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700">
          {t("text1")}
          <a href="mailto:joaoinez.info@gmail.com">
            <Cover>{t("text2")}</Cover>
          </a>
          ?
        </h1>
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
