"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
import { ImCheckboxChecked } from "react-icons/im";
import { LuWifiZero } from "react-icons/lu";
import { Badge } from "@/components/ui/badge";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  client: string;
  phone: string;
  status: "offline" | "online";
  email: string;
  country: string;
  company: {
    name: string;
    icon: string;
  };
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="flex items-center gap-x-3 ml-2 text-title">
        <Checkbox
          className="data-[state=checked]:bg-slate-200 data-[state=checked]:text-black"
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-x-3 ml-2">
        <Checkbox
          className="data-[state=checked]:bg-slate-200 data-[state=checked]:text-black"
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "client",
    // header: () => (

    //   <div className="flex items-center gap-x-2 justify-items-end text-title">
    //     <FaUser /> Name
    //   </div>
    // ),
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-x-2 justify-items-end text-title"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          <FaUser /> Name
          <ArrowUpDown className="ml-2 h-4 w-4 cursor-pointer" />
        </div>
      );
    },
    cell: ({ row }) => {
      const client: string = row.getValue("client");
      return (
        <>
          <div>
            <span className="block text-title text-[12px]">{client}</span>
            <span className="block text-subtitle text-[10px] mt-1">
              {row.original.email}
            </span>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "phone",
    header: ({ column }) => (
      <div
        className="flex items-center gap-x-2 justify-items-end text-title"
        onClick={() => {
          column.toggleSorting(column.getIsSorted() === "asc");
        }}
      >
        <FaPhoneAlt /> Phone
        <ArrowUpDown className="ml-2 h-4 w-4 cursor-pointer" />
      </div>
    ),
    cell: ({ row }) => {
      const phone: string = row.getValue("phone");

      return (
        <>
          <div>
            <span className="block text-subtitle text-[12px]">{phone}</span>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "country",
    header: ({ column }) => (
      <div
        className="flex items-center gap-x-2 justify-items-end text-title"
        onClick={() => {
          column.toggleSorting(column.getIsSorted() === "asc");
        }}
      >
        <FaLocationDot /> Location
        <ArrowUpDown className="ml-2 h-4 w-4 cursor-pointer" />
      </div>
    ),
    cell: ({ row }) => {
      const country: string = row.getValue("country");

      return <div>{country}</div>;
    },
  },
  {
    accessorKey: "company",
    header: ({ column }) => (
      <div
        className="flex items-center gap-x-2 justify-items-end text-title"
        onClick={() => {
          column.toggleSorting(column.getIsSorted() === "asc");
        }}
      >
        <IoBag /> Company
        <ArrowUpDown className="ml-2 h-4 w-4 cursor-pointer" />
      </div>
    ),
    cell: ({ row }) => {
      const company: { name: string; icon: string } = row.getValue("company");
      return (
        <>
          <div className="flex items-center">
            <img src={company.icon} />
            <span className="block text-subtitle text-[12px] pb-1">
              {company.name}
            </span>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <div
        className="flex items-center gap-x-2 justify-items-end text-title"
        onClick={() => {
          column.toggleSorting(column.getIsSorted() === "asc");
        }}
      >
        <ImCheckboxChecked />
        Status
        <ArrowUpDown className="ml-2 h-4 w-4 cursor-pointer" />
      </div>
    ),
    cell: ({ row }) => {
      const status: string = row.getValue("status");

      return (
        <>
          <div className="flex text-icon items-center text-[12px]  gap-2 font-text leading-none">
            {status === "online" && (
              <Badge
                className="bg-success  min-w-[100px] flex font-text items-center justify-center 
                      text-textSuccess rounded-sm text-[14px]"
              >
                <LuWifiZero className="mb-2" strokeWidth={7} />{" "}
                <span className="pr-[.6rem] text-[12px]">online</span>
              </Badge>
            )}
            {status === "offline" && (
              <Badge
                className="bg-[rgba(174,185,225,0.2)] min-w-[100px]  flex font-text items-center justify-center 
                      text-icon rounded-sm text-[14px]"
              >
                <LuWifiZero className="mb-2" strokeWidth={7} />{" "}
                <span className="pr-[.6rem] text-[12px]">offlane</span>
              </Badge>
            )}
          </div>
        </>
      );
    },
  },
  {
    header: () => (
      <div className="flex items-center gap-x-2 justify-items-end text-title">
        Actions
      </div>
    ),
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <div className="actions">
           
        </div>
      );
    },
  },
];
