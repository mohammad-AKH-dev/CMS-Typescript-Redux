"use client";

import { ColumnDef } from "@tanstack/react-table";
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
import { BsCalendarDateFill } from "react-icons/bs";
import { ImCheckboxChecked } from "react-icons/im";
import { LuWifiZero } from "react-icons/lu";
import { Badge } from "@/components/ui/badge";
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  order: number;
  client: string;
  date: string;
  status: "pending" | "success" | "failed";
  email: string;
  country: string;
  total: number;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "order",
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
        Order
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
        #{row.original.order}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "client",
    header: () => (
      <div className="flex items-center gap-x-2 justify-items-end text-title">
        <FaUser /> Client
      </div>
    ),
    cell: ({ row }) => {
      const client: React.ReactNode = row.getValue("client");
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
    accessorKey: "date",
    header: () => (
      <div className="flex items-center gap-x-2 justify-items-end text-title">
        <BsCalendarDateFill /> Date
      </div>
    ),
    cell: ({ row }) => {
      const date: React.ReactNode = row.getValue("date");

      return (
        <>
          <div>
            <span className="block text-subtitle text-[12px]">{date}</span>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => (
      <div className="flex items-center gap-x-2 justify-items-end text-title">
        <ImCheckboxChecked /> Status
      </div>
    ),
    cell: ({ row }) => {
      const status: React.ReactNode = row.getValue("status");

      return (
        <>
          <div className="flex text-icon items-center text-[12px]  gap-2 font-text leading-none">
            {status === "success" && (
              <Badge
                className="bg-success flex font-text items-center justify-center 
                      text-textSuccess rounded-sm text-[14px]"
              >
                <LuWifiZero className="mb-2" strokeWidth={7} />{" "}
                <span className="pr-[.6rem] text-[12px]">Delivered</span>
              </Badge>
            )}
            {status === "pending" && (
              <Badge
                className="bg-pending min-w-[100px] flex font-text items-center justify-center 
                  text-textPending  rounded-sm text-[14px]"
              >
                <LuWifiZero className="mb-2" strokeWidth={7} />{" "}
                <span className="pr-[.6rem] text-[12px]">Pending</span>
              </Badge>
            )}
            {status === "failed" && (
              <Badge
                className="bg-error flex font-text items-center justify-center 
                  text-textError  rounded-sm text-[14px]"
              >
                <LuWifiZero className="mb-2" strokeWidth={7} />{" "}
                <span className="pr-[.6rem] text-[12px]">Canceled</span>
              </Badge>
            )}
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "country",
    header: () => (
      <div className="flex items-center gap-x-2 justify-items-end text-title">
        <FaLocationDot /> Country
      </div>
    ),
    cell: ({ row }) => {
      const country: React.ReactNode = row.getValue("country");

      return (
        <>
          <div>
            <span className="block text-subtitle text-[12px]">{country}</span>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "total",
    header: () => (
      <div className="flex items-center gap-x-2 justify-items-end text-title">
        <FaMoneyCheckDollar /> Total
      </div>
    ),
    cell: ({ row }) => {
      const total: React.ReactNode = row.getValue("total");

      return (
        <>
          <div>
            <span className="block text-subtitle text-[12px]">${total}</span>
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 ml-4">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>#{row.original.order}</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
