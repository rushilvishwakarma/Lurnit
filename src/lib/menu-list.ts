import {
  School,
  Sparkles,
  LayoutGrid,
  SquarePen
} from "lucide-react";
import React from "react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: React.ComponentType<any>;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/",
          label: "Home",
          active: pathname === "/",
          icon: School,
          submenus: []
        },
        {
          href: "/exam-updates",
          label: "Exam Updates",
          active: pathname === "/exam-updates",
          icon: Sparkles,
          submenus: []
        },
        {
          href: "/previous-year-questions",
          label: "Previous Year Questions",
          active: pathname.includes("/previous-year-questions"),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "/video-lectures",
          label: "Video Lectures",
          active: pathname.includes("/video-lectures"),
          icon: LayoutGrid,
          submenus: []
        },
        {
          href: "",
          label: "Posts",
          active: pathname.includes("/posts"),
          icon: SquarePen,
          submenus: [
            {
              href: "/posts",
              label: "All Posts",
              active: pathname === "/posts"
            },
            {
              href: "/posts/new",
              label: "New Post",
              active: pathname === "/posts/new"
            }
          ]
        }
      ]
    }
  ];
}