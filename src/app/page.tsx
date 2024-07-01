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

const FlipWordsDemo = () => {
  const words = ["better", "smarter", "faster"];

  return (
    <div className="flex justify-left items-left px-7 pb-6">
      <div className="text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-600 dark:text-neutral-400 pt-10">
        Lurn
        <FlipWords words={words} /> <br />
        with this Learning Platform
      </div>
    </div>
  );
};

const cards = [
  {
    title: "Practice PYQs",
    description: "Practice previous year questions.",
    href: "/previous-year-questions",
    imgSrc: "https://cdn.pixabay.com/photo/2023/03/13/04/25/buildings-7848348_1280.jpg",
  },
  {
    title: "Check Exam Updates",
    description: "Stay updated with the latest exam news.",
    href: "/exam-updates",
    imgSrc: "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
  },
  {
    title: "Practice Test Questions",
    description: "Practice chemistry test questions.",
    href: "/chemistry",
    imgSrc: "https://cdn.pixabay.com/photo/2014/01/21/19/51/crocus-249359_1280.jpg",
  },
];

export default function HomePage() {
  return (
    <ContentLayout title="Home">
      {/* Start of Announcement Banner */}
      <div className="flex justify-left px-6">
        <a
          className="inline-flex items-center gap-x-2 border text-sm p-1 ps-3 rounded-full transition"
          href="#"
        >
          Join the waitlist
          <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-muted-foreground/15 font-semibold text-sm">
            <svg
              className="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </a>
      </div>
      {/* End Announcement Banner */}

      <FlipWordsDemo />
      <div className="w-full pb-20 lg:pb-20">
        <div className="container mx-auto flex flex-col gap-14">
          <div className="w-full">
            <div className="flex gap-10 pt-12 flex-col w-full">
              <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
                <div className="flex flex-row gap-6 w-full items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Easy to use</p>
                    <p className="text-muted-foreground text-sm">
                      We've made it easy to use and understand.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Fast and reliable</p>
                    <p className="text-muted-foreground text-sm">
                      We've made it fast and reliable.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary" />
                  <div className="flex flex-col gap-1">
                    <p>Beautiful and modern</p>
                    <p className="text-muted-foreground text-sm">
                      We've made it beautiful and modern.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 w-full px-4 lg:px-7 pb-20">
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
                  <MinimalCardTitle className="text-lg font-semibold pb-3">{card.title}</MinimalCardTitle>
                  <MinimalCardDescription className="text-sm">{card.description}</MinimalCardDescription>
                </div>
              </MinimalCard>
            </div>
          </Link>
        ))}
      </div>
    </ContentLayout>
  );
}
