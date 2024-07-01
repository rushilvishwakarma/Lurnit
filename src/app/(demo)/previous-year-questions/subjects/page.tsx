import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ContentLayout } from "@/components/panel/content-layout";
import { Breadcrumb, BreadcrumbPage, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HomePage() {
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
            <BreadcrumbPage>Previous Year Questions</BreadcrumbPage>
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
              <Link href="subjects/physics/mathematics-in-physics">
                <div className="cursor-pointer">
                  <Card>
                    <CardContent className="grid gap-8 pt-4 pb-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-9 w-9 sm:flex">
                          <AvatarImage src="/avatars/01.png" alt="Avatar" />
                          <AvatarFallback>MP</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                          <Button variant="linkHover2">Mathematics in Physics</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Link>

              <Link href="/previous-year-questions/physics/units-and-dimention">
                <div className="cursor-pointer">
                  <Card>
                    <CardContent className="grid gap-8 pt-4 pb-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-9 w-9 sm:flex">
                          <AvatarImage src="/avatars/01.png" alt="Avatar" />
                          <AvatarFallback>UD</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                          <Button variant="linkHover2">Units and Dimentions</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Link>

              <Link href="/previous-year-questions/physics">
                <div className="cursor-pointer">
                  <Card>
                    <CardContent className="grid gap-8 pt-4 pb-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-9 w-9 sm:flex">
                          <AvatarImage src="/avatars/01.png" alt="Avatar" />
                          <AvatarFallback>1D</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                          <Button variant="linkHover2">Motion in One Dimention</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Link>

              <Link href="/previous-year-questions/physics">
                <div className="cursor-pointer">
                  <Card>
                    <CardContent className="grid gap-8 pt-4 pb-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-9 w-9 sm:flex">
                          <AvatarImage src="/avatars/01.png" alt="Avatar" />
                          <AvatarFallback>2D</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                          <Button variant="linkHover2">Motion in Two Dimention</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Link>

              <Link href="/previous-year-questions/physics">
                <div className="cursor-pointer">
                  <Card>
                    <CardContent className="grid gap-8 pt-4 pb-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-9 w-9 sm:flex">
                          <AvatarImage src="/avatars/01.png" alt="Avatar" />
                          <AvatarFallback>LM</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                          <Button variant="linkHover2">Laws of Motion</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Link>

              <Link href="/previous-year-questions/physics">
                <div className="cursor-pointer">
                  <Card>
                    <CardContent className="grid gap-8 pt-4 pb-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-9 w-9 sm:flex">
                          <AvatarImage src="/avatars/01.png" alt="Avatar" />
                          <AvatarFallback>RO</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                          <Button variant="linkHover2">Ray Optics</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Link>

            </div>
          </TabsContent>

          <TabsContent value="chemistry">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full py-5">
              <Link href="/previous-year-questions/chemistry">
                <div className="cursor-pointer">
                  <Card>
                    <CardContent className="grid gap-8 pt-4 pb-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-9 w-9 sm:flex">
                          <AvatarImage src="/avatars/01.png" alt="Avatar" />
                          <AvatarFallback>MP</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                          <Button variant="linkHover2">Mathematics in Physics</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ContentLayout>
  );
}