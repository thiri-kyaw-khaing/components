import React from "react";
import { Card, CardContent } from "./ui/card";

function UserInfo() {
  return (
    <div>
      <Card className="bg-[#E8F7EC] border-none">
        <CardContent className="space-y-1 p-2">
          <p className="font-medium">Name - John Smith</p>
          <p className="text-sm text-muted-foreground">
            Position - Human Resources
          </p>
          <p className="text-sm text-muted-foreground">Employee ID - EMP001</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default UserInfo;
