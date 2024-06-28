import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { ContentLayout } from "@/components/panel/content-layout";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

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
          <BreadcrumbLink asChild>
              <Link href="/subjects">Subjects</Link>
            </BreadcrumbLink>
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


    </ContentLayout>
  );
}