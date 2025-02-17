import { AuroraText } from "@/components/magicui/aurora-text";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { ScrollIndicator } from "@/components/shared/scroll-indicator";
import { Magnetic } from "@/components/ui/magnetic";
import { ArrowDownRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative flex h-screen items-start bg-[url(/gradient.png)] bg-cover bg-[center_right_-70vh] bg-no-repeat p-4 pt-8 md:bg-[center_right_-50vh] md:p-8 md:pt-12 lg:p-12 xl:items-center xl:bg-contain xl:bg-[center_right_-30vh] xl:p-24">
      <div className="md:w-3/4 lg:w-2/3 xl:w-[55%]">
        <h1 className="mb-4 text-xl md:text-3xl lg:text-4xl xl:text-5xl">
          {t("text1")}
          <AuroraText className="font-bold">{t("text2")}</AuroraText>
          {t("text3")}
        </h1>
        <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl">
          {t("subtext1")}
          <SparklesText text={t("subtext2")} />?
        </h1>
        <ScrollIndicator />
      </div>
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 lg:bottom-12 lg:left-auto lg:right-12 xl:bottom-24 xl:right-24">
        <ArrowDownRight size={24} className="absolute bottom-full" />
        <Magnetic>
          <InteractiveHoverButton href="mailto:joaoinez.info@gmail.com">
            {t("connect")}
          </InteractiveHoverButton>
        </Magnetic>
      </div>
    </section>
  );
}
