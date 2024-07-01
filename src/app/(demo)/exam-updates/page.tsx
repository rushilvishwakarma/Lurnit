import Link from "next/link";
import { ContentLayout } from "@/components/panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import exams from './exam-update-table.json';

export default function ExamUpdates() {
  return (
    <ContentLayout title="Exam Date Tracker">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Exam Date Tracker</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="w-full px-2 sm:px-4">
        <div className="flex justify-start items-left pt-10 sm:pt-20 pb-5 sm:pb-10">
          <div className="text-3xl sm:text-4xl md:text-5xl font-normal">
            Exam Updates
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Exams</CardTitle>
            <CardDescription>Upcoming exams and their status.</CardDescription>
          </CardHeader>
          <CardContent className="px-2 sm:px-4">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden sm:table-cell">
                    <span className="sr-only">Image</span>
                  </TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Exam
                  </TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Date
                  </TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Status
                  </TableHead>
                  <TableHead className="hidden sm:table-cell">
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {exams.map((exam, index) => (
                  <TableRow key={index}>
                    <TableCell className="w-auto sm:w-[64px] flex items-center justify-center sm:table-cell">
                      <img
                        src={exam.image}
                        alt={`${exam.exam} image`}
                        className="aspect-square rounded-md object-cover mx-1 my-5"
                        height="64"
                        width="64"
                        loading="lazy"
                      />
                    </TableCell>
                    <TableCell className="font-medium py-3">
                      <div>{exam.exam}</div>
                      <div className="block sm:hidden text-sm text-muted-foreground mt-2">
                        <div className="mb-2">{exam.date}</div>
                        <div>
                          <Badge
                            variant={
                              exam.status === "Pending"
                                ? "secondary"
                                : exam.status === "Finished"
                                ? "outline"
                                : "default"
                            }
                          >
                            {exam.status}
                          </Badge>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell py-3">
                      {exam.date}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell py-3">
                      <Badge
                        variant={
                          exam.status === "Pending"
                            ? "secondary"
                            : exam.status === "Finished"
                            ? "outline"
                            : "default"
                        }
                      >
                        {exam.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="flex justify-end items-center py-3">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <a
                              href={exam.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Visit Website
                            </a>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <div className="text-xs text-muted-foreground">
              Displaying <strong>{exams.length}</strong> exams
            </div>
          </CardFooter>
        </Card>
      </div>
    </ContentLayout>
  );
}
