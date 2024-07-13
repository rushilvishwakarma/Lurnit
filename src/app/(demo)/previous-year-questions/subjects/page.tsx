import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ContentLayout } from "@/components/panel/content-layout";
import { Breadcrumb, BreadcrumbPage, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Define prop types for the QuestionCard component
interface QuestionCardProps {
  href: string;
  avatarFallback: string;
  title: string;
}

// Reusable component for a question card
const QuestionCard: React.FC<QuestionCardProps> = ({ href, avatarFallback, title }) => (
  <Link href={href}>
    <div className="cursor-pointer">
      <Card>
        <CardContent className="grid gap-8 pt-4 pb-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-9 w-9 sm:flex">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>{avatarFallback}</AvatarFallback>
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
  const questionData = [
    { href: "subjects/physics/mathematics-in-physics", avatarFallback: "MP", title: "Mathematics in Physics" },
    { href: "/previous-year-questions/physics/units-and-dimention", avatarFallback: "UD", title: "Units and Dimensions" },
    { href: "/previous-year-questions/physics", avatarFallback: "1D", title: "Motion in One Dimension" },
    { href: "/previous-year-questions/physics", avatarFallback: "2D", title: "Motion in Two Dimension" },
    { href: "/previous-year-questions/physics", avatarFallback: "LM", title: "Laws of Motion" },
    { href: "/previous-year-questions/physics", avatarFallback: "RO", title: "Ray Optics" },
  ];

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
        <Tabs defaultValue="physics" className="w-full">
          <TabsList className="grid w-full grid-cols-4 justify-center">
            <TabsTrigger value="physics">Physics</TabsTrigger>
            <TabsTrigger value="chemistry">Chemistry</TabsTrigger>
            <TabsTrigger value="mathematics">Maths</TabsTrigger>
            <TabsTrigger value="biology">Biology</TabsTrigger>
          </TabsList>

          <TabsContent value="physics">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full py-5">
              {questionData.map((question, index) => (
                <QuestionCard key={index} {...question} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="chemistry">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full py-5">
              <QuestionCard href="/previous-year-questions/chemistry" avatarFallback="MP" title="Mathematics in Physics" />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ContentLayout>
  );
}
