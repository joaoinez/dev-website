import { AuroraText } from "@/components/magicui/aurora-text";
import { DotPattern } from "@/components/magicui/dot-pattern";
import Project from "@/components/shared/project";
import { InView } from "@/components/ui/in-view";
import { cn } from "@/lib/utils";
import analogueCode from "@/public/analogue-code.png";
import constroiWood from "@/public/constroi-wood.png";
import { useTranslations } from "next-intl";

export default function ProjectsSection() {
  const t = useTranslations("Projects");

  return (
    <div className="relative p-4 md:p-8 lg:p-12">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
        )}
      />
      <div className="lg:sticky lg:top-8">
        <InView
          variants={{
            hidden: { opacity: 0, y: 50, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <AuroraText
            as="h2"
            className="mb-24 bg-background text-2xl font-bold md:mb-36 md:text-3xl xl:text-4xl"
          >
            {t("title")}
          </AuroraText>
        </InView>
      </div>
      <Project
        className="lg:ml-auto lg:w-3/5 xl:w-2/3 2xl:w-3/5"
        href="https://constroiwood.pt"
        src={constroiWood}
        alt="ConstroiWood website"
        title="ConstroiWood"
        desc={t("constroiwood")}
      />
      <Project
        className="lg:ml-[12rem] lg:w-3/5 xl:w-2/3 2xl:w-3/5"
        href="https://analoguecode.com"
        src={analogueCode}
        alt="Analogue Code Company website"
        title="The Analogue Code Company"
        desc={t("analoguecode")}
      />
    </div>
  );
}
