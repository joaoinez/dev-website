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
    <div className="p-12 relative">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
        )}
      />
      <div className="sticky top-12">
        <InView
          variants={{
            hidden: { opacity: 0, y: 50, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <AuroraText
            as="h2"
            className="text-4xl mb-24 font-bold bg-background"
          >
            {t("title")}
          </AuroraText>
        </InView>
      </div>
      <Project
        className="w-[55%] ml-auto"
        href="https://constroiwood.pt"
        src={constroiWood}
        alt="ConstroiWood website"
        title="ConstroiWood"
        desc={t("constroiwood")}
      />
      <Project
        className="w-[55%] mr-auto ml-40"
        href="https://analoguecode.com"
        src={analogueCode}
        alt="Analogue Code Company website"
        title="The Analogue Code Company"
        desc={t("analoguecode")}
      />
    </div>
  );
}
