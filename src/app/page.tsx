import Link from "next/link";
import { ContentLayout } from "@/components/panel/content-layout";
import { FlipWords } from "@/components/ui/flip-words";
import { Check } from "lucide-react";
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/ui/minimal-card";
import AnimatedShinyText from "@/components/ui/animated-shiny-text"; // Import the AnimatedShinyText component
import content from "./content.json"; // Adjust the path as necessary
import { ArrowRightIcon } from "@radix-ui/react-icons";

const FlipWordsDemo = () => {
  const { prefix, words, suffix } = content.flipWordsDemo;

  return (
    <div className="flex justify-left items-left px-7 pb-6">
      <div className="text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-600 dark:text-neutral-100 pt-10">
        {prefix}
        <FlipWords words={words} /> <br />
        {suffix}
      </div>
    </div>
  );
};

const AnnouncementBanner = () => {
  const { text, href } = content.announcementBanner;

  return (
    <div className="flex justify-left px-6">
      <Link href={href} passHref>
        <div className="z-10 flex pt-7 items-center justify-center">
          <div className="group rounded-full border border-black/5 bg-muted/40 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-muted dark:border-white/5 dark:bg-background dark:hover:bg-muted">
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>{text}</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>
      </Link>
    </div>
  );
};

const FeaturesList = () => {
  const { features } = content;

  return (
    <div className="w-full pb-20 lg:pb-20">
      <div className="container mx-auto flex flex-col gap-14">
        <div className="w-full">
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-row gap-6 w-full items-start">
                  <Check className="w-5 h-5 mt-1 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>{feature.title}</p>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardsList = () => {
  const { cards } = content;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-3 w-full px-4 lg:px-7 pb-20">
      {cards.map((card) => (
        <Link key={card.title} href={card.href}>
          <div className="flex flex-col h-full">
            <MinimalCard className="flex flex-col h-full">
              <MinimalCardImage
                src={card.imgSrc}
                alt={card.title}
                className="bg-muted rounded-md mb-4 object-cover w-full h-40"
              />
              <div className="flex flex-col flex-grow px-2 pb-2">
                <MinimalCardTitle className="text-lg font-semibold pb-2">{card.title}</MinimalCardTitle>
                <MinimalCardDescription className="text-sm">{card.description}</MinimalCardDescription>
              </div>
            </MinimalCard>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default function HomePage() {
  return (
    <ContentLayout title="Home">
      <AnnouncementBanner />
      <FlipWordsDemo />
      <FeaturesList />
      <CardsList />
    </ContentLayout>
  );
}
