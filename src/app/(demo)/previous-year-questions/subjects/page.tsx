"use client";
import { CalendarDays, ScrollText, FileQuestion } from "lucide-react"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ContentLayout } from "@/components/panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbPage,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge"
import selectExamData from "../select-exam.json";

// Define the types for the JSON data
interface Chapter {
  href?: string;
  avatarFallback: string;
  title: string;
  progress: number;
  avatarImage?: string; // Optional property
}

interface Subject {
  name: string;
  chapters: Chapter[];
}

interface SubjectChapterData {
  subjects: Subject[];
}

// Import JSON data and cast it to the defined type
import subjectChapterDataJson from "./subject-chapter.json";
const subjectChapterData: SubjectChapterData = subjectChapterDataJson as SubjectChapterData;

// Define prop types for the QuestionCard component
interface QuestionCardProps {
  href: string;
  avatarFallback: string;
  title: string;
  progress: number; // Progress percentage for the radial chart
  avatarImage?: string; // Optional property
}

const links = selectExamData;

// Reusable component for a question card
const QuestionCard: React.FC<QuestionCardProps> = ({ href, avatarFallback, title, progress, avatarImage }) => {
  const ProgressColor = 'hsl(var(--circular-progress))';

  return (
    <Link href={href || "#"}> {/* Fallback to "#" if href is undefined */}
      <div className="cursor-pointer">
        <Card>
          <CardContent className="p-2 grid pt-2 pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative w-16 h-16">
                  <RadialBarChart
                    width={64}
                    height={64}
                    innerRadius={20}
                    outerRadius={25}
                    barSize={8}
                    data={[{ name: 'Progress', value: progress }]}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <PolarAngleAxis
                      type="number"
                      domain={[0, 100]}
                      angleAxisId={0}
                      tick={false}
                    />
                    <RadialBar
                      background
                      dataKey="value"
                      cornerRadius={10}
                      fill={ProgressColor}
                    />
                  </RadialBarChart>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Avatar className="h-9 w-9">
                      {avatarImage ? (
                        <AvatarImage src={avatarImage} alt="Avatar" />
                      ) : (
                        <AvatarFallback>{avatarFallback}</AvatarFallback>
                      )}
                    </Avatar>
                  </div>
                </div>
                <div className="m-2">
                  <Button variant="linkHover2" className="h-5 px-0 py-0">{title}</Button>
                  <CardDescription>110 Qs, 30%</CardDescription>
                  {/*<Badge variant="destructive" className="sm:hidden">Reduced</Badge>*/}
                </div>
              </div>
              <div className="mr-3 flex items-center">
                <Badge variant="destructive" className=" md:hidden lg:hidden">Reduced</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
};

export default function HomePage() {
  const defaultSubject = subjectChapterData.subjects[0]?.name.toLowerCase() || "physics";

  if (subjectChapterData.subjects.length === 0) {
    return (
      <ContentLayout title="Home">
        <div className="flex justify-center items-center pt-20">
          <div className="text-xl font-normal">No subjects available</div>
        </div>
      </ContentLayout>
    );
  }

  return (
    <ContentLayout title="Home">
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

      <div className="py-3 pt-3 flex justify-center md:justify-start">
        {links.length > 0 && (
          <div className="flex flex-col gap-2">
            <img
              src={links[0].image}
              className="w-28 h-28 mb-3" // Adjust size with w-28 and h-28
              alt="Logo" // Added alt text for accessibility
            />
          </div>
        )}
      </div>

      <div className="flex justify-center md:justify-start items-left">
        <HoverCard>
          <HoverCardTrigger>
            <button
              type="button"
              className="text-1xl sm:text-2xl md:text-2xl font-normal bg-transparent border-none cursor-pointer pb-1"
            >
              MHCET Previous Year Questions
            </button>
          </HoverCardTrigger>
          <HoverCardContent className="mt-3 p-5 flex flex-nowrap space-x-5 justify-items-between">
            <div className="mt-2 flex flex-col items-start space-y-1">
              <CalendarDays className="h-5 w-5 opacity-70 pb-1" />
              <p className="text-sm">
                Collection Year
              </p>
              <span className="text-xs text-muted-foreground">
                2024-20XX
              </span>
            </div>

            <div className="mt-2 flex flex-col items-start space-y-1">
              <ScrollText className="h-5 w-5 opacity-70 pb-1" />
              <p className="text-sm">
                Papers Count
              </p>
              <span className="text-xs text-muted-foreground">
                999
              </span>
            </div>

            <div className="mt-2 flex flex-col items-start space-y-1">
              <FileQuestion className="h-5 w-5 opacity-70 pb-1" />
              <p className="text-sm">
                Total Questions
              </p>
              <span className="text-xs text-muted-foreground">
                99999
              </span>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className="flex justify-center items-center mt-5">
        <Tabs defaultValue={defaultSubject} className="w-full">
          <TabsList className="flex flex-wrap w-full h-full gap-1">
            {subjectChapterData.subjects.map((subject, index) => (
              <TabsTrigger
                key={index}
                value={subject.name.toLowerCase()}
                className="sm:flex-grow lg:flex-grow text-center"
              >
                {subject.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {subjectChapterData.subjects.map((subject, index) => (
            <TabsContent key={index} value={subject.name.toLowerCase()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full py-5">
                {subject.chapters.map((chapter, chapterIndex) => (
                  <QuestionCard
                    key={chapterIndex}
                    href={chapter.href || "#"}
                    avatarFallback={chapter.avatarFallback}
                    title={chapter.title}
                    progress={chapter.progress}
                    avatarImage={chapter.avatarImage}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </ContentLayout>
  );
}