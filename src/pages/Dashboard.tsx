import DashboardBox from "@/components/Box/DashboardBox";
import { IoEyeSharp } from "react-icons/io5";
import { Badge } from "@/components/ui/badge";
import { RxArrowTopRight } from "react-icons/rx";
import { RxArrowBottomRight } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { LuWifiZero } from "react-icons/lu";
import { FaChartLine } from "react-icons/fa";
import { LuTimer } from "react-icons/lu";

import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  Bar,
  BarChart,
  Line,
  LineChart,
} from "recharts";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useAppSelector } from "@/Redux/hooks";
import { useState } from "react";

const chartConfig = {
  desktop: {
    label: "Revenue",
    color: "#cb3cff",
  },
  mobile: {
    label: "Expenses",
    color: "#00c2ff",
  },
} satisfies ChartConfig;

function Dashboard() {
  const theme = useAppSelector((store) => store.themes.default);
  const [date, setDate] = useState<Date>();

  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
    { month: "july", desktop: 190, mobile: 180 },
    { month: "August", desktop: 220, mobile: 150 },
    { month: "September", desktop: 240, mobile: 180 },
    { month: "October", desktop: 169, mobile: 145 },
    { month: "November", desktop: 178, mobile: 122 },
    { month: "December", desktop: 183, mobile: 156 },
  ];

  const chartBarData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  return (
    <div className="Dashboard">
      {/* Dashboard boxes section */}
      <div className="Dashboard-boxes grid grid-cols-4 gap-x-4 mt-8">
        <DashboardBox
          count={`${50.8}K`}
          subtitle="Pageviews"
          Icon=<IoEyeSharp />
        >
          <Badge className="bg-success flex items-center justify-center text-textSuccess p-[.2rem] rounded-sm text-[11px]">
            28.4%
            <RxArrowTopRight className="ml-1" />
          </Badge>
        </DashboardBox>
        <DashboardBox
          count={`${23.6}K`}
          subtitle="Monthly users"
          Icon=<FaUser />
        >
          <Badge className="bg-error flex items-center justify-center text-textError p-[.2rem] rounded-sm text-[11px]">
            12.6%
            <RxArrowBottomRight className="ml-1" />
          </Badge>
        </DashboardBox>
        <DashboardBox
          count={756}
          subtitle="New sign ups"
          Icon=<IoMdAddCircle />
        >
          <Badge className="bg-success flex items-center justify-center text-textSuccess p-[.2rem] rounded-sm text-[11px]">
            3.1%
            <RxArrowTopRight className="ml-1" />
          </Badge>
        </DashboardBox>
        <DashboardBox
          count={`${2.3}k`}
          subtitle="Subscriptions"
          Icon=<FaStar />
        >
          <Badge className="bg-success flex items-center justify-center text-textSuccess p-[.2rem] rounded-sm text-[11px]">
            11.3%
            <RxArrowTopRight className="ml-1" />
          </Badge>
        </DashboardBox>
      </div>
      {/* charts Section */}
      <div
        style={{
          backgroundColor: `${theme === "#081028" ? "#0B1739" : theme}`,
        }}
        className={`Dashboard-charts__wrapper flex justify-between mt-12 rounded-lg border ${
          theme === "#687478" || theme === "#ff6666"
            ? "#99a7cc"
            : "border-primary"
        }`}
      >
        <Card className="max-w-[64%] bg-inherit border-none">
          <CardHeader className="flex">
            <CardTitle className="text-subtitle text-[14px]">
              Total revenue
            </CardTitle>
            <CardDescription className="flex justify-between">
              <div className="chart-title text-title font-title text-[24px] flex items-center gap-x-2">
                $240.8K
                <Badge className="bg-success flex font-text items-center justify-center text-textSuccess p-[.2rem] rounded-sm text-[11px]">
                  24.6%
                  <RxArrowTopRight className="ml-1" />
                </Badge>
              </div>
              <div className="chart-inforamtion flex items-center gap-x-5">
                <div className="flex items-center gap-x-2">
                  <span className="w-[7px] h-[7px] block rounded-full bg-selected"></span>
                  <div className="text-icon text-[12px]">Revenue</div>
                </div>
                <div className="flex items-center gap-x-2">
                  <span className="w-[7px] h-[7px] block rounded-full bg-[#00c2ff]"></span>
                  <div className="text-icon text-[12px]">Expenses</div>
                </div>
                {/* calender  */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      style={{ backgroundColor: theme, color: "#fff" }}
                      variant={"outline"}
                      className={cn(
                        "max-w-[280px] justify-start text-left font-normal text-title",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 border border-primary">
                    <Calendar
                      className="bg-box text-subtitle"
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="min-h-[500px] w-full"
            >
              <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={true}
                  axisLine={true}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />

                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <defs>
                  <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-desktop)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-desktop)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                  <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-mobile)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-mobile)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="mobile"
                  type="natural"
                  fill="url(#fillMobile)"
                  fillOpacity={0.4}
                  stroke="var(--color-mobile)"
                  stackId="a"
                />
                <Area
                  dataKey="desktop"
                  type="natural"
                  fill="url(#fillDesktop)"
                  fillOpacity={0.4}
                  stroke="var(--color-desktop)"
                  stackId="a"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
        {/* Bar chart */}
        <div className="Bar-chart-line-chart__wrapper flex flex-col gap-y-6">
          <Card className="bg-inherit border-none">
            <CardHeader>
              <CardTitle className="text-subtitle font-text text-[12px] flex items-center gap-x-1">
                <FaChartLine />
                Total profit
              </CardTitle>
              <CardDescription className="pt-[.4rem]">
                <div className="chart-title text-title font-title text-[24px] flex items-center gap-x-2">
                  $144.6K
                  <Badge className="bg-success flex font-text items-center justify-center text-textSuccess p-[.2rem] rounded-sm text-[11px]">
                    28.5%
                    <RxArrowTopRight className="ml-1" />
                  </Badge>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={chartBarData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dashed" />}
                  />
                  <Bar
                    dataKey="desktop"
                    fill="var(--color-desktop)"
                    radius={4}
                  />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex items-center justify-between text-[12px] gap-2 text-sm">
              <div className="flex text-icon  text-[12px]  gap-2 font-text leading-none">
                Last 12 months
              </div>
              <div className="leading-none text-selected  text-[12px] font-text">
                View report
              </div>
            </CardFooter>
          </Card>
          <Card className="bg-inherit border-none">
            <CardHeader>
              <CardTitle className="text-subtitle font-text text-[12px] flex items-center gap-x-1">
                <LuTimer className="text-[14px]" />
                <span>Total sessions</span>
              </CardTitle>
              <CardDescription className="flex items-center gap-x-2">
                <span className="text-[24px] text-title font-title">400</span>
                <Badge className="bg-success flex font-text items-center justify-center text-textSuccess py-[.2rem] rounded-sm text-[12px]">
                  16.8%
                  <RxArrowTopRight className="ml-1" />
                </Badge>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <LineChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Line
                    dataKey="desktop"
                    type="linear"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
            <CardFooter className="flex items-center justify-between text-[12px] gap-2 text-sm">
              <div className="flex text-icon items-center text-[12px]  gap-2 font-text leading-none">
                <Badge
                  className="bg-success flex font-text items-center justify-center 
                      text-textSuccess p-[.2rem] rounded-sm text-[14px]"
                >
                  <LuWifiZero className="mb-2" strokeWidth={7} />{" "}
                  <span className="pr-[.6rem]">Live</span>
                </Badge>
                <span className="text-[14px]">10k visitors</span>
              </div>
              <div className="leading-none text-selected  text-[12px] font-text">
                View report
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
