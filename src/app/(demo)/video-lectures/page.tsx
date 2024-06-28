import Link from "next/link";
import { ContentLayout } from "@/components/panel/content-layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import constants from "./video-lectures.json";

const Lectures: React.FC = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge>{constants.badge}</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
              {constants.heading}
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left pb-4">
              {constants.description}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {constants.featureCards.map((card, index) => (
            <div key={index} className="flex flex-col gap-2 hover:scale-105 transition-transform duration-300">
              <Link href={card.href}>
                <div className="bg-muted rounded-lg aspect-video mb-1 overflow-hidden">
                  {card.image && (
                    <img
                      src={card.image}
                      alt={card.caption}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                    />
                  )}
                </div>
              </Link>
              <h3 className="text-l tracking-tight">{card.caption}</h3>
              <p className="text-muted-foreground text-m pb-4">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function DashboardPage() {
  return (
    <ContentLayout title="Dashboard">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Lectures />
    </ContentLayout>
  );
}