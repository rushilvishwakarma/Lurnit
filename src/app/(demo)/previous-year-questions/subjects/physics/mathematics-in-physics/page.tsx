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
import { Button } from '@/components/ui/button';
import MathJaxRenderer from '@/components/MathJaxRenderer';
import content from './content.json';
import QuizRadioGroup from '@/components/quiz/quiz-radio-group';
import QuizCarousel from '@/components/quiz/quiz-carousel';

export default function PreviousYearQuestions() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState<string | null>(null);

  const toggleExpansion = () => {
    setIsExpanded(prevState => !prevState);
  };

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
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal">
          Mathematics in Physics
        </h1>
      </div>

      <Button
        onClick={toggleExpansion}
        className="px-6 py-2"
        aria-expanded={isExpanded}
      >
        {isExpanded ? 'Show Less' : 'Show More'}
      </Button>

      <Separator className="mt-7 mb-6" />

      <div className="max-w-full">
        {content.questions.map((question, index) => (
          <div key={index} className="mb-8">
            <div className="flex flex-col mb-2">
              <div className="flex items-start mb-2">
                <Badge className="mr-4 mt-1">{index + 1}</Badge>
                <div>
                  <h2 className="text-xl font-semibold">
                    <MathJaxRenderer math={question.questionText} isExpanded={isExpanded} />
                  </h2>
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <Badge variant="outline" className="py-1 px-2">
                  {question.examDetails}
                </Badge>
              </div>

              {isExpanded && (
                <div className="lg:pl-7 px-2">
                  <QuizCarousel
                    imageSrc1={question.imageSrc1}
                    imageSrc2={question.imageSrc2}
                    handleImageClick={handleImageClick}
                  />

                  <QuizRadioGroup
                    options={question.options}
                    correctAnswer={question.correctAnswer}
                    solutionPageLink={question.solutionPageLink}
                  />
                </div>
              )}

              <Separator className="mt-7" />
            </div>
          </div>
        ))}
      </div>
    </ContentLayout>
  );
}
