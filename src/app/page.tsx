import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { ContentLayout } from "@/components/panel/content-layout";
import { FlipWords } from "@/components/ui/flip-words";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const FlipWordsDemo = () => {
  const words = ["better", "smarter", "faster"];

  return (
    <div className="flex justify-left items-left px-7">
      <div className="text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-600 dark:text-neutral-400 pt-20">
        Lurn
        <FlipWords words={words} /> <br />
        with this Learning Platform
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <ContentLayout title="Home">
      <FlipWordsDemo />
      <div className="w-full pb-20 lg:pb-20 pt-5">
        <div className="container mx-auto flex flex-col gap-14 px-7">
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
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7 px-7">
        <Link href={`/previous-year-questions`}>
          <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
            <img src="https://svgshare.com/i/17Vy.svg" alt="Image" className="bg-muted rounded-md aspect-square mb-4" />
            <h3 className="text-base tracking-tight">Practice PYQs</h3>
          </div>
        </Link>

        <Link href={`/exam-updates`}>
          <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
            <img src="https://svgshare.com/i/17Ve.svg" alt="Image" className="bg-muted rounded-md aspect-square mb-4" />
            <h3 className="text-base tracking-tight">Check Exam Updates</h3>
          </div>
        </Link>

        <Link href={`/chemistry`}>
          <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
            <img src="https://svgshare.com/i/17V6.svg" alt="Image" className="bg-muted rounded-md aspect-square mb-4" />
            <h3 className="text-base tracking-tight">Practice Test Questions</h3>
          </div>
        </Link>
      </div>
    </ContentLayout>
  );
}