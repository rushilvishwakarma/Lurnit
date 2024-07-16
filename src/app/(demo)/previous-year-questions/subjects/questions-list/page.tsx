'use client';

import { CircleDot, Info } from "lucide-react";
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from 'next/navigation'
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
import content from '@/components/questions-example-list.json';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function PreviousYearQuestions() {
  const router = useRouter(); // Initialize useRouter

  const handleCardClick = (index: number) => {
    // Construct the URL based on the question index or ID
    const questionId = index + 1; // Replace with a unique identifier if available
    const url = `/previous-year-questions/subjects/physics/mathematics-in-physics/`;
    //const url = `/previous-year-questions/subjects/physics/mathematics-in-physics/${questionId}`;
    router.push(url); // Navigate to the constructed URL
  };

  return (
    <ContentLayout title="Previous Year Questions">
      <div className="flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>PYQs</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <HoverCard>
          <HoverCardTrigger>
            <Info className="h-5 w-5" />
          </HoverCardTrigger>
          <HoverCardContent className="mt-3 p-5 flex flex-nowrap space-x-5 justify-items-between">
            <div className="mt-2 flex flex-col items-start space-y-1">
              <CircleDot className="h-5 w-5 opacity-70 pb-1" />
              <p className="text-sm">Factual</p>
              <span className="text-xs text-muted-foreground">123</span>
            </div>
            <div className="mt-2 flex flex-col items-start space-y-1">
              <CircleDot className="h-5 w-5 opacity-70 pb-1" />
              <p className="text-sm">Easy</p>
              <span className="text-xs text-muted-foreground">123</span>
            </div>
            <div className="mt-2 flex flex-col items-start space-y-1">
              <CircleDot className="h-5 w-5 opacity-70 pb-1" />
              <p className="text-sm">Moderate</p>
              <span className="text-xs text-muted-foreground">123</span>
            </div>
            <div className="mt-2 flex flex-col items-start space-y-1">
              <CircleDot className="h-5 w-5 opacity-70 pb-1" />
              <p className="text-sm">Difficult</p>
              <span className="text-xs text-muted-foreground">123</span>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className="pt-10 pb-2">
        <h1 className="text-1xl sm:text-2xl md:text-2xl font-normal">
          Mathematics in Physics
        </h1>
        <div className="relative">
          <HoverCard>
            <HoverCardTrigger>
              {/* Add content or remove if not needed */}
            </HoverCardTrigger>
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
            <div className="flex flex-col gap-2 p-4 rounded-md hover:bg-muted/35 cursor-pointer">
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
