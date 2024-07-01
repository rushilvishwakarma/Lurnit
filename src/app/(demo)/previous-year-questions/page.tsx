import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { ContentLayout } from "@/components/panel/content-layout";
import { FlipWords } from "@/components/ui/flip-words";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import selectExamData from "./select-exam.json";

const links = selectExamData;

export default function HomePage() {
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
          <BreadcrumbItem>
            <BreadcrumbPage>PYQs</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex justify-left items-left pt-20 px-7">
        <div className="text-3xl sm:text-4xl md:text-5xl font-normal">
          Previous Year Questions
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-7 w-full px-7 lg:px-7 py-7">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <div className="flex flex-col gap-2 hover:opacity-75 cursor-pointer">
              <img
                src={link.image}
                className="bg-zinc-100 dark:bg-muted/20 rounded-md aspect-square mb-4 px-2 py-2"
              />
              <h3 className="text-base tracking-tight">{link.caption}</h3>
            </div>
          </Link>
        ))}
      </div>
    </ContentLayout>
  );
}
