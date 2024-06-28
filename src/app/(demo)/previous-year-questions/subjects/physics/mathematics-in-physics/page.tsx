'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CircleCheck, CircleX } from 'lucide-react';
import { ContentLayout } from "@/components/panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import 'katex/dist/katex.min.css'; // Import KaTeX CSS
import { InlineMath } from 'react-katex';

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer"; // Import Drawer components
import { Label } from "@/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Import Carousel components
import Modal from 'react-modal';

const options = [
  { value: 'option1', label: 'Angular Velocity' },
  { value: 'option2', label: 'Velocity' },
  { value: 'option3', label: 'Angular Momentum' },
  { value: 'option4', label: 'Momentum Gradient' },
];

const correctAnswer = 'option2';

export default function HomePage() {
  const imageSrc1 = "/placeholder.png";
  const imageSrc2 = "/video-thumbnails/advanced-calculus-techniques.jpeg";
  const imageSrc3 = "/video-thumbnails/molecular-biology-insights.jpeg";
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [totalQuestions, setTotalQuestions] = useState(1); // Assuming at least one question
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState<string | null>(null);


  const MathComponent = () => {
    return (
      <div>
        <p>
          Given the force equation <InlineMath math="F = A \sin(Ct) + B \cos(Dx)" />, where <InlineMath math="Ct" /> and <InlineMath math="Dx" /> are dimensionless quantities representing angles:
        </p>
        <ul>
          <li><InlineMath math="[Ct] = T^{-1}" /> (since <InlineMath math="Ct" /> is dimensionless, <InlineMath math="[C] = T^{-1}" />)</li>
          <li><InlineMath math="[Dx] = L^{-1}" /> (since <InlineMath math="Dx" /> is dimensionless, <InlineMath math="[D] = L^{-1}" />)</li>
        </ul>
        <p>
          The ratio <InlineMath math="\frac{C}{D}" /> has dimensions:
        </p>
        <InlineMath math="\left[ \frac{C}{D} \right] = \left[ \frac{T^{-1}}{L^{-1}} \right] = [T] [L]" />
        <p>
          These dimensions correspond to velocity (<InlineMath math="[LT]^{-1}" />).
        </p>
        <p>
          Therefore, <InlineMath math="\frac{C}{D}" />, which represents the ratio of dimensionless constants <InlineMath math="C" /> and <InlineMath math="D" />, shares the same dimensions as velocity.
        </p>
      </div>
    );
  };
  

  useEffect(() => {
    // Fetch the total number of questions from the data source
    setTotalQuestions(1); // Replace with the actual number of questions
  }, []);

  const handleRadioChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleCheckAnswer = () => {
    setShowCorrectAnswer(true);
  };

  const handleImageClick = (imageSrc: string) => {
    setSelectedImageSrc(imageSrc);
    setIsImageModalVisible(true);
  };

  const openModal = (imageSrc: string) => {
    setSelectedImageSrc(imageSrc);
    setIsImageModalVisible(true);
  };

  const closeModal = () => {
    setSelectedImageSrc(null);
    setIsImageModalVisible(false);
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
            <Link href="/subjects">Subjects</Link>
          </BreadcrumbLink>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>PYQs</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="pt-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal">
          Mathematics in Physics
        </h1>
      </div>

      <Separator className="mt-7 mb-6" />

      <div className="flex justify-left items-start">
        <Badge className="mt-0.5 mr-1">{totalQuestions.toString().padStart(2, '0')}</Badge>
        <div className="text-lg mb-5 ml-2 w-full">
          <div className="flex justify-between items-center">
            <span>
              Let force <InlineMath math="F=A \sin (C t)+B \cos (D x)" />, where <InlineMath math="x" /> and <InlineMath math="t" /> are displacement and time, respectively. The dimensions of <InlineMath math="\frac{C}{D}" /> are same as dimensions of
            </span>
          </div>
          <div className="flex justify-end pt-2">
            <Badge variant="secondary" className="py-1 px-2">JEE Main 2024 (09 Apr Shift 2)</Badge>
          </div>
        </div>
      </div>

      {(imageSrc1 || imageSrc2) && (
        <Carousel className="relative">
          <CarouselContent>
            {imageSrc1 && (
              <CarouselItem>
                <div
                  className="flex flex-col hover:opacity-75 cursor-pointer"
                  onClick={() => handleImageClick(imageSrc1)}
                >
                  <div
                    className="bg-muted rounded-md aspect-square p-4"
                    style={{ height: '160px', maxWidth: '100%', position: 'relative' }}
                  >
                    <img
                      src={imageSrc1}
                      alt="Image"
                      className="absolute inset-0 w-full h-full object-contain px-2 py-2"
                    />
                  </div>
                </div>
              </CarouselItem>
            )}
            {imageSrc2 && (
              <CarouselItem>
                <div
                  className="flex flex-col hover:opacity-75 cursor-pointer"
                  onClick={() => handleImageClick(imageSrc2)}
                >
                  <div
                    className="bg-muted rounded-md aspect-square p-4"
                    style={{ height: '160px', maxWidth: '100%', position: 'relative' }}
                  >
                    <img
                      src={imageSrc2}
                      alt="Image"
                      className="absolute inset-0 w-full h-full object-contain px-2"
                    />
                  </div>
                </div>
              </CarouselItem>
            )}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
        </Carousel>
      )}

      <Modal
        isOpen={isImageModalVisible}
        onRequestClose={() => setIsImageModalVisible(false)}
      >
        {selectedImageSrc && (
          <img src={selectedImageSrc} alt="Modal Image" className="max-w-full max-h-full object-contain" />
        )}
      </Modal>

      <div className=" flex justify-between items-center mt-5 px-2 pb-5">
        <div className="w-full lg:w-1/2">
          <RadioGroup className="space-y-4" value={selectedOption} onValueChange={handleRadioChange}>
            {options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={option.value}
                  id={option.value}
                  disabled={showCorrectAnswer}
                  className={
                    showCorrectAnswer
                      ? option.value === correctAnswer
                        ? 'bg-green-600'
                        : selectedOption === option.value
                          ? 'bg-red-600'
                          : ''
                      : ''
                  }
                />
                <Label htmlFor={option.value}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="flex flex-col items-end space-y-3 relative">
          <Button disabled={!selectedOption} onClick={handleCheckAnswer} className="w-32">
            Check
          </Button>
          <Drawer>
            <DrawerTrigger asChild>
              <Button disabled={!showCorrectAnswer} variant="outline" className="w-32">
                View Solution
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="text-4xl font-bold tracking-tighter text-center">
                  {selectedOption === correctAnswer ? 'Correct!' : 'Uh oh!'}
                </DrawerTitle>
              </DrawerHeader>

              <Carousel className="relative">
                <CarouselContent>
                  {imageSrc3 && (
                    <CarouselItem>
                      <div className="flex flex-col hover:opacity-75 cursor-pointer">
                        <div
                          className="bg-muted rounded-md aspect-square p-4"
                          style={{ height: '220px', maxWidth: '100%', position: 'relative' }}
                        >
                  <img
                    src={imageSrc3}
                    alt="Image 3"
                    className="w-full h-full object-contain"

                  />
                        </div>
                      </div>
                    </CarouselItem>
                  )}
                </CarouselContent>
              </Carousel>

              <ScrollArea className="h-[350px] w-full rounded-md border p-4">
              <span>
             
              <MathComponent />

             
            </span>
              </ScrollArea>

              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline" size="lg" className="w-full">
                    Back to Question
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <div className={`absolute bottom-[-2.5rem] right-0 flex items-center space-x-2 ${showCorrectAnswer ? 'visible' : 'invisible'}`}>
            {showCorrectAnswer && (
    <div className={`flex items-center space-x-2 ${selectedOption === correctAnswer ? 'text-green-500' : 'text-red-500'}`}>
    {selectedOption === correctAnswer ? (
      <>
          <span>Correct</span>
        <CircleCheck size={24} />

      </>
    ) : (
      <>
          <span>Incorrect</span>
        <CircleX size={24} />
      </>
    )}
  </div>
            )}
          </div>
        </div>
      </div>

      <Separator className="mt-3 mb-6" />
    </ContentLayout>
  );
}