"use client";

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
import exams from './exam-update-table.json'; // Importing the JSON file directly

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
      <div className="w-full">
        <div className="flex justify-left items-left pt-20 pb-10">
          <div className="text-3xl sm:text-4xl md:text-5xl font-normal">
            Exam Updates
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Exams</CardTitle>
            <CardDescription>Upcoming exams and their status.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Image</span>
                  </TableHead>
                  <TableHead>Exam</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {exams.map((exam, index) => (
                  <TableRow key={index}>
                    <TableCell className="hidden sm:table-cell">
                      <img
                        src={exam.image}
                        alt="Exam image"
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{exam.exam}</TableCell>
                    <TableCell>{exam.date}</TableCell>
                    <TableCell>
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
                    <TableCell>
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
