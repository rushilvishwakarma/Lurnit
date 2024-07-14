'use client';
import { CircleDot } from "lucide-react"
import Link from 'next/link';
import { useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { ContentLayout } from "@/components/panel/content-layout";
import { Badge } from "@/components/ui/badge";
import MathJaxRenderer from '@/components/MathJaxRenderer';
import content from './content.json';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function PreviousYearQuestions() {
  const [selectedImageSrc, setSelectedImageSrc] = useState<string | null>(null);

  const handleCardClick = (index: number) => {
    // Handle click event, e.g., navigate to details page or show more info
    console.log(`Question ${index + 1} clicked`);
    // You can also update state or perform other actions as needed
  };

  return (
    <ContentLayout title="Previous Year Questions">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbLink asChild>
            <Link href="/previous-year-questions/subjects/">Subjects</Link>
          </BreadcrumbLink>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>PYQs</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="pt-10 pb-2">
        <div className="relative">
          <HoverCard>
            <HoverCardTrigger>
              <button
                type="button"
                className="text-3xl sm:text-4xl md:text-5xl font-normal bg-transparent border-none cursor-pointer"
              >
                Mathematics in Physics
              </button>
            </HoverCardTrigger>

 <HoverCardContent className="mt-3 p-5 flex flex-nowrap space-x-12 justify-items-between">
  <div className="mt-2 flex flex-col items-start space-y-1">

  <CircleDot className="h-5 w-5 opacity-70 pb-1" />
    <p className="text-sm">
      Factual
    </p>
    <span className="text-xs text-muted-foreground">
      123
    </span>
  </div>

  <div className="mt-2 flex flex-col items-start space-y-1">
  <CircleDot className="h-5 w-5 opacity-70 pb-1" />
    <p className="text-sm">
      Easy
    </p>
    <span className="text-xs text-muted-foreground">
      123
    </span>
  </div>

  <div className="mt-2 flex flex-col items-start space-y-1">
  <CircleDot className="h-5 w-5 opacity-70 pb-1" />
    <p className="text-sm">
      Moderate
    </p>
    <span className="text-xs text-muted-foreground">
      123
    </span>
  </div>

  <div className="mt-2 flex flex-col items-start space-y-1">
  <CircleDot className="h-5 w-5 opacity-70 pb-1" />
    <p className="text-sm">
      Difficult
    </p>
    <span className="text-xs text-muted-foreground">
      123
    </span>
  </div>

</HoverCardContent>

          </HoverCard>
        </div>
      </div>

      <Separator className="mt-7 mb-1" />

      <div className="max-w-full">
        {content.questions.map((question, index) => (
          <div
            key={index}
            className="flex flex-col gap-1"
            onClick={() => handleCardClick(index)}
          >
            <div className="flex flex-col gap-2 p-4 rounded-md hover:bg-muted/20 cursor-pointer">
              <div className="flex items-start mb-2">
                <Badge className="mr-4 mt-1">{index + 1}</Badge>
                <div>
                  <h2 className="text-xl font-semibold">
                    <MathJaxRenderer math={question.questionText} isExpanded={false} />
                  </h2>
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <Badge variant="outline" className="py-1 px-2">
                  {question.examDetails}
                </Badge>
              </div>
              </div>
            <Separator className="mb-1"/>
          </div>
        ))}
      </div>
    </ContentLayout>
  );
}
