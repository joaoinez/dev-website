"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Cursor } from "@/components/ui/cursor";
import { InView } from "@/components/ui/in-view";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image, { StaticImageData } from "next/image";

type Props = {
  className: string;
  href: string;
  src: StaticImageData;
  alt: string;
  title: string;
  desc: string;
};

export default function Project({
  className,
  href,
  src,
  alt,
  title,
  desc,
}: Props) {
  return (
    <div className={cn("mb-24", className)}>
      <div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:cursor-pointer peer"
        >
          <Cursor
            attachToParent
            variants={{
              initial: { scale: 0.3, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              exit: { scale: 0.3, opacity: 0 },
            }}
            springConfig={{
              bounce: 0.001,
            }}
            transition={{
              ease: "easeInOut",
              duration: 0.15,
            }}
          >
            <motion.div
              animate={{
                width: 80,
                height: 32,
              }}
              className="flex items-center justify-center rounded-[24px] bg-gray-500/40 backdrop-blur-md"
            >
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className="inline-flex w-full items-center justify-center"
                >
                  <div className="inline-flex items-center text-sm text-white">
                    Visit <ArrowUpRight className="ml-1 h-4 w-4" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </Cursor>
          <InView
            variants={{
              hidden: { opacity: 0, y: 50, filter: "blur(4px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Image src={src} alt={alt} className="mb-2" />
          </InView>
          <TextAnimate
            as="h3"
            animation="blurInUp"
            by="character"
            className="text-3xl"
          >
            {title}
          </TextAnimate>
        </a>
        <p className="opacity-0 peer-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          {desc}
        </p>
      </div>
    </div>
  );
}
