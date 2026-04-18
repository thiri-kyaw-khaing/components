import React from "react";
import { Card, CardContent } from "./ui/card";

type UserInfoProps = {
  name: string;
  position: string;
  employeeID: string;
};

function UserInfo({ name, position, employeeID }: UserInfoProps) {
  return (
    <div>
      <Card className="bg-[#E8F7EC] border-none">
        <CardContent className="space-y-1 p-2">
          <p className="font-medium">Name - {name}</p>
          <p className="text-sm text-muted-foreground">Position - {position}</p>
          <p className="text-sm text-muted-foreground">
            Employee ID - {employeeID}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default UserInfo;
