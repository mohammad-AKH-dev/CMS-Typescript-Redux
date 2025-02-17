import { useEffect, useState } from "react";
import { Product, columns } from "./columns"; // فرض بر این است که ستون‌ها در فایل columns قرار دارند
import { DataTable } from "./data-table";

// تابع برای دریافت داده‌ها
async function getData(): Promise<Product[]> {
  // اینجا داده‌ها از API یا هر منبعی که استفاده می‌کنید بارگذاری می‌شود
  return [
    {
      id: "728ed52f",
      product: {
        name: 'Watch',
        img: '/images/products/Watch.png'
      },
      company: {
        name: 'Google',
        icon: '/images/companies/Google.png'
      },
      status: "In Stock",
      price: 20,
      category: 'Accessories'
    },
    {
      id: "728ed52f",
      product: {
        name: 'Laptop',
        img: '/images/products/Laptop.png'
      },
      company: {
        name: 'Google',
        icon: '/images/companies/Google.png'
      },
      status: "Out of stock",
      price: 30,
      category: 'Note Book'
    },
    {
      id: "728ed52f",
      product: {
        name: 'Laptop',
        img: '/images/products/Laptop.png'
      },
      company: {
        name: 'Google',
        icon: '/images/companies/Google.png'
      },
      status: "Out of stock",
      price: 30,
      category: 'Note Book'
    },
    {
      id: "728ed52f",
      product: {
        name: 'Watch',
        img: '/images/products/Watch.png'
      },
      company: {
        name: 'Google',
        icon: '/images/companies/Google.png'
      },
      status: "In Stock",
      price: 20,
      category: 'Accessories'
    },
    {
      id: "728ed52f",
      product: {
        name: 'Watch',
        img: '/images/products/Watch.png'
      },
      company: {
        name: 'Google',
        icon: '/images/companies/Google.png'
      },
      status: "In Stock",
      price: 20,
      category: 'Accessories'
    },
    
    // سایر داده‌ها
  ];
}

export default function ProductsTable() {
  const [data, setData] = useState<Product[]>([]); // حالت داده‌ها
  const [loading, setLoading] = useState<boolean>(true); // وضعیت بارگذاری

  // بارگذاری داده‌ها به صورت غیرهمزمان
  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
      setLoading(false); // بعد از بارگذاری داده‌ها، وضعیت loading را تغییر می‌دهیم
    };
    fetchData();
  }, []); // این کار تنها در ابتدا انجام می‌شود

  if (loading) {
    return <div>Loading...</div>; // نمایش پیام بارگذاری در صورت نیاز
  }

  return (
    <div className=" mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}