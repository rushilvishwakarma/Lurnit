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
import content from '@/components/questions-example-list.json';
import QuizRadioGroup from '@/components/quiz/quiz-radio-group';
import QuizCarousel from '@/components/quiz/quiz-carousel';
import { Button } from "@/components/ui/button"; // Import your ButtonSecondary component

export default function PreviousYearQuestions() {
  const [selectedImageSrc, setSelectedImageSrc] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleImageClick = (src: string) => {
    setSelectedImageSrc(src);
  };

  const handleCardClick = () => {
    // Add the logic you want to execute when the card is clicked
    console.log("Card clicked!");
  };

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      // Scroll to the top of the question container
      scrollToTop();
    }
  };

  const handleNextClick = () => {
    if (currentIndex < content.questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      // Scroll to the top of the question container
      scrollToTop();
    }
  };

  const scrollToTop = () => {
    // Use window.scrollTo to scroll directly to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Use 'instant' for immediate scroll without animation
    });
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

      <div className="mt-7 mb-6 max-w-full">
        {content.questions.length > 0 && (
          <div>
            {/* Display Current Question */}
            <div
              key={currentIndex}
              className="mb-8"
              onClick={handleCardClick}
              style={{ cursor: 'pointer', border: 'none', background: 'transparent' }}
            >
              <div className="flex flex-col mb-2">
                {/* Container for Badge and Question Text */}
                <div className="flex flex-col md:flex-row items-start mb-2">
                  <Badge className="md:mr-4 md:mt-1">{currentIndex + 1}</Badge>
                  <div className="mt-2 md:mt-0">
                    <h2 className="text-xl font-semibold">
                      <MathJaxRenderer math={content.questions[currentIndex].questionText} isExpanded={true} />
                    </h2>
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                  <Badge variant="outline" className="py-1 px-2">
                    {content.questions[currentIndex].examDetails}
                  </Badge>
                </div>
                <div className="lg:pl-7 px-2">
                  <QuizCarousel
                    imageSrc1={content.questions[currentIndex].imageSrc1}
                    imageSrc2={content.questions[currentIndex].imageSrc2}
                    handleImageClick={handleImageClick}
                  />
                  <QuizRadioGroup
                    options={content.questions[currentIndex].options}
                    correctAnswer={content.questions[currentIndex].correctAnswer}
                    solutionPageLink={content.questions[currentIndex].solutionPageLink}
                    isMultiSelect={false} // or true, depending on your requirements
                  />

                </div>
                <Separator className="mt-20" />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePreviousClick}
                disabled={currentIndex === 0}
              >
                Previous Question
              </Button>
              <Button
                variant="outline"
                onClick={handleNextClick}
                disabled={currentIndex === content.questions.length - 1}
              >
                Next Question
              </Button>
            </div>
          </div>
        )}
      </div>
    </ContentLayout>
  );
}
