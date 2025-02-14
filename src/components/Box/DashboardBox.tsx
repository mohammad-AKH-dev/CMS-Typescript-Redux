import { useAppSelector } from "@/Redux/hooks";

type DashboardBoxProps = {
  title: string;
  children: React.ReactNode;
};

function DashboardBox(props: DashboardBoxProps): JSX.Element {
  const theme = useAppSelector((store) => store.themes.default);

  return (
    <div
      className={`dashboard-box border rounded-lg p-4 ${
        theme === "#081028" ? "bg-box" : theme
      }
    ${
      theme === "#ff6666" || theme === "#687478"
        ? "border-[#99a7cc]"
        : "border-primary"
    }`}
    >
      <h3 className="dashboard-box__title font-title text-title text-[20px]">{props.title}</h3>
      <div className="dashboard-box__content mt-8">
        {props.children}
      </div>
    </div>
  );
}

export default DashboardBox;
