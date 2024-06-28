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
  DropdownMenuLabel,
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

export default function Component() {
  const exams = [
    {
      exam: 'Example 202X',
      date: 'XX Abc - XX Abc',
      status: 'Ongoing',
      image: 'https://fastly.picsum.photos/id/870/536/354.jpg?blur=2&grayscale&hmac=A5T7lnprlMMlQ18KQcVMi3b7Bwa1Qq5YJFp8LSudZ84',
      link: 'https://example.com'
    },
    {
      exam: 'SRMJEE 2024',
      date: '21 Jun - 23 Jun',
      status: 'Pending',
      image: 'https://fastly.picsum.photos/id/870/536/354.jpg?blur=2&grayscale&hmac=A5T7lnprlMMlQ18KQcVMi3b7Bwa1Qq5YJFp8LSudZ84',
      link: 'https://srmjee.com'
    },
    {
      exam: 'BITSAT 2024',
      date: '22 Jun - 28 Jun',
      status: 'Pending',
      image: 'https://fastly.picsum.photos/id/870/536/354.jpg?blur=2&grayscale&hmac=A5T7lnprlMMlQ18KQcVMi3b7Bwa1Qq5YJFp8LSudZ84',
      link: 'https://bitsat.com'
    },
    {
      exam: 'NDA 2024',
      date: '1 Sep',
      status: 'Pending',
      image: 'https://fastly.picsum.photos/id/870/536/354.jpg?blur=2&grayscale&hmac=A5T7lnprlMMlQ18KQcVMi3b7Bwa1Qq5YJFp8LSudZ84',
      link: 'https://nda.gov.in'
    },
    {
      exam: 'GUJCET 2024',
      date: '31 Mar',
      status: 'Finished',
      image: 'https://fastly.picsum.photos/id/870/536/354.jpg?blur=2&grayscale&hmac=A5T7lnprlMMlQ18KQcVMi3b7Bwa1Qq5YJFp8LSudZ84',
      link: 'https://gujcet.in'
    },
    {
      exam: 'JEE Main 2024',
      date: '4 Apr - 12 Apr',
      status: 'Finished',
      image: 'https://fastly.picsum.photos/id/870/536/354.jpg?blur=2&grayscale&hmac=A5T7lnprlMMlQ18KQcVMi3b7Bwa1Qq5YJFp8LSudZ84',
      link: 'https://jeemain.nta.nic.in'
    },
    {
      exam: 'KCET 2024',
      date: '18 Apr - 19 Apr',
      status: 'Finished',
      image: 'https://fastly.picsum.photos/id/870/536/354.jpg?blur=2&grayscale&hmac=A5T7lnprlMMlQ18KQcVMi3b7Bwa1Qq5YJFp8LSudZ84',
      link: 'https://kea.kar.nic.in'
    },
    {
      exam: 'VITEEE 2024',
      date: '19 Apr - 30 Apr',
      status: 'Finished',
      image: 'https://fastly.picsum.photos/id/870/536/354.jpg?blur=2&grayscale&hmac=A5T7lnprlMMlQ18KQcVMi3b7Bwa1Qq5YJFp8LSudZ84',
      link: 'https://vit.ac.in/admissions/viteee'
    },
    {
      exam: 'WBJEE 2024',
      date: '28 Apr',
      status: 'Finished',
      image: 'https://fastly.picsum.photos/id/870/536/354.jpg?blur=2&grayscale&hmac=A5T7lnprlMMlQ18KQcVMi3b7Bwa1Qq5YJFp8LSudZ84',
      link: 'https://wbjeeb.nic.in'
    },
    {
      exam: 'MHT CET 2024',
      date: '2 May - 16 May',
      status: 'Finished',
      image: 'https://fastly.picsum.photos/id/870/536/354.jpg?blur=2&grayscale&hmac=A5T7lnprlMMlQ18KQcVMi3b7Bwa1Qq5YJFp8LSudZ84',
      link: 'https://mhtcet2023.mahacet.org'
    },
    {
      exam: 'IIIT Hyderabad UGEE 2024',
      date: '4 May',
      status: 'Finished',
      image: 'https://fastly.picsum.photos/id/870/536/354.jpg?blur=2&grayscale&hmac=A5T7lnprlMMlQ18KQcVMi3b7Bwa1Qq5YJFp8LSudZ84',
      link: 'https://www.iiit.ac.in/admissions/ugee'
    },
    {
      exam: 'NEET UG 2024',
      date: '5 May',
      status: 'Finished',
      image: 'https://fastly.picsum.photos/id/870/536/354.jpg?blur=2&grayscale&hmac=A5T7lnprlMMlQ18KQcVMi3b7Bwa1Qq5YJFp8LSudZ84',
      link: 'https://neet.nta.nic.in'
    },
    {
      exam: 'TS EAMCET 2024',
      date: '7 May - 11 May',
      status: 'Finished',
      image: 'https://fastly.picsum.photos/id/870/536/354.jpg?blur=2&grayscale&hmac=A5T7lnprlMMlQ18KQcVMi3b7Bwa1Qq5YJFp8LSudZ84',
      link: 'https://eamcet.tsche.ac.in'
    },
    {
      exam: 'COMEDK 2024',
      date: '12 May',
      status: 'Finished',
      image: 'https://fastly.picsum.photos/id/870/536/354.jpg?blur=2&grayscale&hmac=A5T7lnprlMMlQ18KQcVMi3b7Bwa1Qq5YJFp8LSudZ84',
      link: 'https://comedk.org'
    },
    {
      exam: 'CUET UG 2024',
      date: '15 May - 31 May',
      status: 'Finished',
      image: 'https://fastly.picsum.photos/id/870/536/354.jpg?blur=2&grayscale&hmac=A5T7lnprlMMlQ18KQcVMi3b7Bwa1Qq5YJFp8LSudZ84',
      link: 'https://cuet.samarth.ac.in'
    },
    {
      exam: 'AP EAMCET 2024',
      date: '16 May - 22 May',
      status: 'Finished',
      image: 'https://fastly.picsum.photos/id/870/536/354.jpg?blur=2&grayscale&hmac=A5T7lnprlMMlQ18KQcVMi3b7Bwa1Qq5YJFp8LSudZ84',
      link: 'https://apeamcet.nic.in'
    },
    {
      exam: 'Manipal MET 2024',
      date: '18 May - 19 May',
      status: 'Finished',
      image: 'https://fastly.picsum.photos/id/870/536/354.jpg?blur=2&grayscale&hmac=A5T7lnprlMMlQ18KQcVMi3b7Bwa1Qq5YJFp8LSudZ84',
      link: 'https://manipal.edu/met.html'
    },
    {
      exam: 'JEE Advanced 2024',
      date: '22 Jun - 28 Jun',
      status: 'Finished',
      image: 'https://fastly.picsum.photos/id/870/536/354.jpg?blur=2&grayscale&hmac=A5T7lnprlMMlQ18KQcVMi3b7Bwa1Qq5YJFp8LSudZ84',
      link: 'https://jeeadv.ac.in'
    },
  ];

  return (
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
                    <img src={exam.image} alt="Exam image" className="aspect-square rounded-md object-cover" height="64" width="64" />
                  </TableCell>
                  <TableCell className="font-medium">{exam.exam}</TableCell>
                  <TableCell>{exam.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        exam.status === 'Pending'
                          ? 'secondary'
                          : exam.status === 'Finished'
                          ? 'outline'
                          : 'default'
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
                          <a href={exam.link} target="_blank" rel="noopener noreferrer">
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
  );
}