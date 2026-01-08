import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type DashboardCardProps = {
  icon?: React.ReactNode;
  percentChange?: string;
  count?: number;
  description?: string;
};

function DashboardCard({
  icon,
  percentChange,
  count,
  description,
}: DashboardCardProps) {
  return (
    <Card className="bg-[#E8F7EC] min-w-[360px]">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="bg-[#006022] w-16 h-16 flex items-center justify-center text-white rounded-md">
          {icon}
        </CardTitle>

        <CardAction className="text-[#006022] font-medium">
          {percentChange}
        </CardAction>
      </CardHeader>

      <CardContent>
        <p className="text-black text-2xl">{count}</p>
      </CardContent>

      <CardFooter>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardFooter>
    </Card>
  );
}

export default DashboardCard;
