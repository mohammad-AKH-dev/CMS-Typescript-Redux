import { useEffect, useState } from "react";
import { Payment, columns } from "./columns"; // فرض بر این است که ستون‌ها در فایل columns قرار دارند
import { DataTable } from "./data-table";

// تابع برای دریافت داده‌ها
async function getData(): Promise<Payment[]> {
  // اینجا داده‌ها از API یا هر منبعی که استفاده می‌کنید بارگذاری می‌شود
  return [
    {
      id: "728ed52f",

      client: 'John Carter',
      phone: '(414) 907 - 1274',
      country: 'United States',
      company: {
        name: 'Google',
        icon: '/images/companies/Google.png'
      },
      status: "offline",
      email: "m@example.com",
    },
    {
      id: "728ed52f",

      client: 'John Carter',
      phone: '(414) 907 - 1274',
      country: 'United States',
      company: {
        name: 'Google',
        icon: '/images/companies/Google.png'
      },
      status: "online",
      email: "m@example.com",
    },
    {
      id: "728ed52f",

      client: 'John Carter',
      phone: '(414) 907 - 1274',
      country: 'United States',
      company: {
        name: 'Google',
        icon: '/images/companies/Google.png'
      },
      status: "online",
      email: "m@example.com",
    },
    // سایر داده‌ها
  ];
}

export default function UsersTable() {
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