import DashboardMiniBox from "@/components/Box/DashboardMiniBox";
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
import { GiSmartphone } from "react-icons/gi";
import { CgAppleWatch } from "react-icons/cg";

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

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

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
import DashboardBox from "@/components/Box/DashboardBox";
import DemoPage from "@/components/Tables/orderstable/page";

const chartConfig = {
  desktop: {
    label: "Revenue",
    color: "#cb3cff",
  },
  mobile: {
    label: "Expenses",
    color: "#00c2ff",
  },
  tablet: {
    label: "Sell",
    color: "#0038FF",
  },
} satisfies ChartConfig;


function Dashboard(): JSX.Element {
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

  const chartRadialData = [
    { month: "january", desktop: 1260, mobile: 570, tablet: 320 },
  ];

  return (
    <div className="Dashboard">
      {/* Dashboard mini boxes section */}
      <section className="Dashboard-mini-boxes grid grid-cols-1 gap-y-8 gap-x-4 mt-8">
        <DashboardMiniBox
          count={`${50.8}K`}
          subtitle="Pageviews"
          Icon=<IoEyeSharp />
        >
          <Badge className="bg-success flex items-center justify-center text-textSuccess p-[.2rem] rounded-sm text-[11px]">
            28.4%
            <RxArrowTopRight className="ml-1" />
          </Badge>
        </DashboardMiniBox>
        <DashboardMiniBox
          count={`${23.6}K`}
          subtitle="Monthly users"
          Icon=<FaUser />
        >
          <Badge className="bg-error flex items-center justify-center text-textError p-[.2rem] rounded-sm text-[11px]">
            12.6%
            <RxArrowBottomRight className="ml-1" />
          </Badge>
        </DashboardMiniBox>
        <DashboardMiniBox
          count={756}
          subtitle="New sign ups"
          Icon=<IoMdAddCircle />
        >
          <Badge className="bg-success flex items-center justify-center text-textSuccess p-[.2rem] rounded-sm text-[11px]">
            3.1%
            <RxArrowTopRight className="ml-1" />
          </Badge>
        </DashboardMiniBox>
        <DashboardMiniBox
          count={`${2.3}k`}
          subtitle="Subscriptions"
          Icon=<FaStar />
        >
          <Badge className="bg-success flex items-center justify-center text-textSuccess p-[.2rem] rounded-sm text-[11px]">
            11.3%
            <RxArrowTopRight className="ml-1" />
          </Badge>
        </DashboardMiniBox>
      </section>
      {/* charts Section */}
      <div
        style={{
          backgroundColor: `${theme === "#081028" ? "#0B1739" : theme}`,
        }}
        className={`Dashboard-charts__wrapper flex justify-between mt-12 rounded-lg border ${
          theme === "#687478" || theme === "#ff6666"
            ? "border-[#99a7cc]"
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
      {/* Dashboard boxes */}
      <section className="Dashboard-boxes mt-12 grid grid-cols-3 gap-x-4">
        <DashboardBox title="Products">
          <div className="Dashboard-box__subtitle-wrapper flex items-center justify-between">
            <span className="text-subtitle text-[12px]">Products</span>
            <span className="text-subtitle text-[12px]">Price</span>
          </div>
          <ul className="Dashboard-box__list mt-6 flex flex-col gap-y-12">
            <li className="Dashboard-box__item flex justify-between items-center">
              <div className="pt-4 flex items-center gap-x-2">
                <div
                  style={{ backgroundColor: theme }}
                  className="icon-wrapper bg-primary text-[#7e89ac] flex items-center justify-center rounded-lg w-[40px] h-[40px]"
                >
                  <GiSmartphone className="text-[44px]" />
                </div>
                <div className="product-title text-[14px] text-title">
                  <h4>iPhone 14 Pro Max</h4>
                  <span className="product-count text-subtitle">
                    524 in stock
                  </span>
                </div>
              </div>
              <div>
                <span className="price text-title text-[13px]">$ 1,099.00</span>
              </div>
            </li>
            <li className="Dashboard-box__item flex justify-between items-center">
              <div className="pt-4 flex items-center gap-x-2">
                <div
                  style={{ backgroundColor: theme }}
                  className="icon-wrapper  text-[#7e89ac] flex items-center justify-center rounded-lg w-[40px] h-[40px]"
                >
                  <CgAppleWatch className="text-[44px]" />
                </div>
                <div className="product-title text-[14px] text-title">
                  <h4>Apple Watch S8</h4>
                  <span className="product-count text-subtitle">
                    320 in stock
                  </span>
                </div>
              </div>
              <div>
                <span className="price text-title text-[13px]">$ 799.00</span>
              </div>
            </li>
          </ul>
        </DashboardBox>
        <DashboardBox title="Team progress">
          <ul className="team-members__list flex flex-col gap-y-12">
            <li className="member-list__item flex items-center justify-between">
              <div className="member-profile__wrapper flex items-center gap-x-2">
                <img src="images/profiles/woman.png" alt="woman" />
                <div className="member-profile-infos text-[12px]">
                  <h4 className="member-profile__title text-title">
                    John Carter
                  </h4>
                  <p className="member-gmail text-subtitle">
                    contact@sophiemoore.com
                  </p>
                </div>
              </div>
              <div className="member-progress text-[#ffffff] font-text">
                60%
              </div>
            </li>
            <li className="member-list__item flex items-center justify-between">
              <div className="member-profile__wrapper flex items-center gap-x-2">
                <img src="images/profiles/woman.png" alt="woman" />
                <div className="member-profile-infos text-[12px]">
                  <h4 className="member-profile__title text-title">
                    Sophie Moore
                  </h4>
                  <p className="member-gmail text-subtitle">
                    contact@sophiemoore.com
                  </p>
                </div>
              </div>
              <div className="member-progress text-[#ffffff] font-text">
                33%
              </div>
            </li>
            <li className="member-list__item flex items-center justify-between">
              <div className="member-profile__wrapper flex items-center gap-x-2">
                <img src="images/profiles/man.png" alt="man" />
                <div className="member-profile-infos text-[12px]">
                  <h4 className="member-profile__title text-title">
                    Matt Cannon
                  </h4>
                  <p className="member-gmail text-subtitle">
                    info@mattcannon.com
                  </p>
                </div>
              </div>
              <div className="member-progress text-[#ffffff] font-text">
                75%
              </div>
            </li>
          </ul>
        </DashboardBox>
        <DashboardBox title="Website Visitors">
          <Card className="flex flex-col border-none">
            <CardContent
              style={{
                backgroundColor: `${theme === "#081028" ? "#0B1739" : theme}`,
              }}
              className={`flex flex-1 items-center pb-0`}
            >
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square w-full max-w-[250px]"
              >
                <RadialBarChart
                  data={chartRadialData}
                  endAngle={180}
                  innerRadius={80}
                  outerRadius={130}
                >
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <PolarRadiusAxis
                    tick={false}
                    tickLine={false}
                    axisLine={false}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) - 16}
                                style={{ color: "#ffffff" }}
                                className="fill-[#fff] text-2xl font-bold"
                              >
                                {(
                                  chartRadialData[0].desktop +
                                  chartRadialData[0].mobile
                                ).toLocaleString()}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 4}
                                className="fill-subtitle"
                              >
                                Visitors
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </PolarRadiusAxis>
                  <RadialBar
                    dataKey="desktop"
                    stackId="a"
                    cornerRadius={5}
                    fill="var(--color-desktop)"
                    className="stroke-transparent stroke-2"
                  />
                  <RadialBar
                    dataKey="mobile"
                    fill="var(--color-mobile)"
                    stackId="a"
                    cornerRadius={5}
                    className="stroke-transparent stroke-2"
                  />
                </RadialBarChart>
              </ChartContainer>
            </CardContent>
            <CardFooter
              style={{
                backgroundColor: `${theme === "#081028" ? "#0B1739" : theme}`,
              }}
              className="flex items-center gap-x-6 justify-center"
            >
              <div className="flex items-center gap-x-2 ">
                <span className="w-[7px] h-[7px] block rounded-full bg-selected"></span>
                <div className="text-icon text-[12px]">Revenue</div>
              </div>
              <div className="flex items-center gap-x-2">
                <span className="w-[7px] h-[7px] block rounded-full bg-[#00c2ff]"></span>
                <div className="text-icon text-[12px]">Expenses</div>
              </div>
            </CardFooter>
          </Card>
        </DashboardBox>
      </section>
      {/* Orders Status */}
      <section style={{backgroundColor: `${theme === '#081028' ? '#0b1739' : theme}`}} 
        className=
        {`orders-status-section mt-8 border rounded-lg ${
          theme === "#ff6666" || theme === "#687478"
            ? "border-[#99a7cc]"
            : "border-primary"
        }`}>
        <div
        className={`orders-status__header p-4
        flex items-center justify-between`}>
          <h4 className="orders-status__title text-title font-title text-[20px]">Orders Status</h4>
          <div className="orders-status__buttons flex items-center gap-x-4">
            {/* calender  */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  style={{ backgroundColor: theme, color: "#aeb9e1" }}
                  variant={"outline"}
                  className={cn(
                    "max-w-[280px] justify-start text-left font-normal text-subtitle",
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
            <button type="button" className="px-2 py-3 bg-selected rounded-lg text-title text-[12px]">Create order</button>
          </div>
        </div>
        {/* orders table */}
        <DemoPage/>
      </section>
    </div>
  );
}

export default Dashboard;
