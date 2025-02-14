import { useEffect, useState } from "react";
import { Payment, columns } from "./columns"; // فرض بر این است که ستون‌ها در فایل columns قرار دارند
import { DataTable } from "./data-table";

// تابع برای دریافت داده‌ها
async function getData(): Promise<Payment[]> {
  // اینجا داده‌ها از API یا هر منبعی که استفاده می‌کنید بارگذاری می‌شود
  return [
    {
      id: "728ed52f",
      order: 1533,
      client: 'John Carter',
      date: 'Jan 30, 2024',
      country: 'United States',
      total: 1099.24,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      order: 1533,
      client: 'John Carter',
      date: 'Jan 30, 2024',
      country: 'United States',
      total: 1099.24,
      status: "success",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      order: 1533,
      client: 'John Carter',
      date: 'Jan 30, 2024',
      country: 'United States',
      total: 1099.24,
      status: "failed",
      email: "m@example.com",
    },
    // سایر داده‌ها
  ];
}

export default function DemoPage() {
  const [data, setData] = useState<Payment[]>([]); // حالت داده‌ها
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