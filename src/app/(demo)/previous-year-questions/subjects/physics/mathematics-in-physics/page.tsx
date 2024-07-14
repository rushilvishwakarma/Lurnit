'use client';

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

import { CalendarDays } from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function PreviousYearQuestions() {
  const [selectedImageSrc, setSelectedImageSrc] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImageSrc(src);
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
            <HoverCardContent className="mt-2">
              The React Framework created and maintained by @vercel.
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>

      <Separator className="mt-7 mb-6" />

      <div className="max-w-full">
        {content.questions.map((question, index) => (
          <div key={index} className="mb-8">
            <div className="flex flex-col mb-2">
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
              <Separator className="mt-7" />
            </div>
          </div>
        ))}
      </div>
    </ContentLayout>
  );
}
