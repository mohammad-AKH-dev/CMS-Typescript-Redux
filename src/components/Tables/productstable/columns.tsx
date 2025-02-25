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
import { IoBagHandle } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoBag } from "react-icons/io5";
import { ImCheckboxChecked } from "react-icons/im";
import { LuWifiZero } from "react-icons/lu";
import { Badge } from "@/components/ui/badge";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Product = {
  id: string;
  product: {
    name: string,
    img: string
  }
  category: string
  price: number
  status: "In Stock" | "Out of stock";
  company: {
    name: string;
    icon: string;
  };
};

export const columns: ColumnDef<Product>[] = [
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
    accessorKey: "product",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-x-2 justify-items-end text-title"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          <FaUser />
           Product Name
          <ArrowUpDown className="ml-2 h-4 w-4 cursor-pointer" />
        </div>
      );
    },
    cell: ({ row }) => {
      const product: {name : string , img : string} = row.getValue("product");
      
      return (
        <>
          <div className="flex items-center gap-x-4">
            <span className="block bg-selected rounded-full">
              <img src={product.img} alt={product.name} />
            </span>
            <span className="block text-title text-[12px] mt-1">
             {product.name}
            </span>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <div
        className="flex items-center gap-x-2 justify-items-end text-title"
        onClick={() => {
          column.toggleSorting(column.getIsSorted() === "asc");
        }}
      >
        <IoBagHandle/> Category
        <ArrowUpDown className="ml-2 h-4 w-4 cursor-pointer" />
      </div>
    ),
    cell: ({ row }) => {
      const category: string = row.getValue("category");

      return (
        <>
          <div>
            <span className="block text-subtitle text-[12px]">{category}</span>
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <div
        className="flex items-center gap-x-2 justify-items-end text-title"
        onClick={() => {
          column.toggleSorting(column.getIsSorted() === "asc");
        }}
      >
        <BsCurrencyDollar/> Price
        <ArrowUpDown className="ml-2 h-4 w-4 cursor-pointer" />
      </div>
    ),
    cell: ({ row }) => {
      const price: number = row.getValue("price");

      return <div className="ml-6">${price}</div>;
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
            {status === "In Stock" && (
              <Badge
                className="bg-success  min-w-[116px] flex font-text items-center justify-center 
                      text-textSuccess rounded-sm text-[14px]"
              >
                <LuWifiZero className="mb-2" strokeWidth={7} />{" "}
                <span className="pr-[.6rem] text-[12px]">In Stock</span>
              </Badge>
            )}
            {status === "Out of stock" && (
              <Badge
                className="bg-[rgba(174,185,225,0.2)] min-w-[100px]  flex font-text items-center justify-center 
                      text-icon rounded-sm text-[14px]"
              >
                <LuWifiZero className="mb-2" strokeWidth={7} />{" "}
                <span className="pr-[.6rem] text-[12px]">Out of stock</span>
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 ml-4">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>#{row.original.id}</DropdownMenuLabel>
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
