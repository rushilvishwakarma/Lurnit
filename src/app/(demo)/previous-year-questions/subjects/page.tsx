import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ContentLayout } from "@/components/panel/content-layout";
import { Breadcrumb, BreadcrumbPage, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import subjectChapterData from "./subject-chapter.json"; // Import the JSON data

// Define prop types for the QuestionCard component
interface QuestionCardProps {
  href: string;
  avatarFallback: string;
  title: string;
  avatarImage?: string; // Optional property for avatar image
}

// Reusable component for a question card
const QuestionCard: React.FC<QuestionCardProps> = ({ href, avatarFallback, title, avatarImage }) => (
  <Link href={href}>
    <div className="cursor-pointer">
      <Card>
        <CardContent className="grid gap-8 pt-4 pb-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-9 w-9 sm:flex">
              {avatarImage ? (
                <AvatarImage src={avatarImage} alt="Avatar" />
              ) : (
                <AvatarFallback>{avatarFallback}</AvatarFallback>
              )}
            </Avatar>
            <div className="grid gap-1">
              <Button variant="linkHover2">{title}</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </Link>
);

export default function HomePage() {
  // Extract the default value from the JSON data
  const defaultSubject = subjectChapterData.subjects[0]?.name.toLowerCase() || "physics";

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

      <div className="flex justify-left items-left pt-20">
        <div className="text-3xl sm:text-4xl md:text-5xl font-normal">
          Previous Year Questions
        </div>
      </div>
      
      <div className="flex justify-center items-center mt-8">
        <Tabs defaultValue={defaultSubject} className="w-full">
          <TabsList className="flex flex-wrap w-full h-full gap-1">
            {subjectChapterData.subjects.map((subject, index) => (
              <TabsTrigger key={index} value={subject.name.toLowerCase()} className="sm:flex-grow lg:flex-grow text-center">{subject.name}</TabsTrigger>
            ))}
          </TabsList>

          {subjectChapterData.subjects.map((subject, index) => (
            <TabsContent key={index} value={subject.name.toLowerCase()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full py-5">
                {subject.chapters.map((chapter, chapterIndex) => (
                  <QuestionCard key={chapterIndex} {...chapter} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </ContentLayout>
  );
}
