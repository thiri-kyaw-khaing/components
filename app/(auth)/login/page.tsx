"use client";
import React, { useActionState } from "react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
  FieldSet,
  FieldLegend,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import Logo from "@/components/login/logo";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Contact2Icon, Shield, Users2Icon } from "lucide-react";
import { LoginAction } from "@/lib/actions/AdminLogin/login";

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(200),
});

function LoginForm() {
  const initialState = {
    errors: {},
    message: "",
  };

  const [state, formAction, pending] = useActionState(
    LoginAction,
    initialState,
  );
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  // });

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   console.log(values);
  // }
  return (
    <>
      <div className="flex flex-col items-center gap-6 w-full max-w-sm">
        <div className="flex flex-col items-center gap-2">
          <Logo />
          <h1 className="text-[#4A5565]">
            Training and Record Management System
          </h1>
        </div>
        <Card className="w-full max-w-sm">
          <div className="flex flex-col space-y-4">
            <CardContent>
              {/* Logo + Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#006022] w-16 h-16 flex items-center justify-center text-white rounded-lg">
                  <Shield size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mt-2">
                    Admin(HR) Login
                  </h2>
                  <p className="text-gray-500">System administrator login</p>
                </div>
              </div>

              <form action={formAction} className="w-full">
                <FieldGroup>
                  <FieldSet>
                    {/* <FieldLegend>Login Information</FieldLegend>
                <FieldDescription>
                  Please enter your credentials to access the system.
                </FieldDescription> */}

                    <FieldGroup className="mt-4">
                      {/* Email */}
                      <Field>
                        <FieldLabel htmlFor="email">Email Address</FieldLabel>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter Email"
                          name="email"
                          required
                        />
                      </Field>

                      {/* Password */}
                      <Field>
                        <FieldLabel htmlFor="password">Password</FieldLabel>
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter Password"
                          name="password"
                          required
                        />
                      </Field>
                    </FieldGroup>
                  </FieldSet>

                  {/* Button */}
                  <Field orientation="horizontal" className="">
                    <Button
                      type="submit"
                      className="bg-[#006022] text-white hover:bg-[#005018] w-full"
                    >
                      Login
                    </Button>
                  </Field>
                </FieldGroup>
              </form>
            </CardContent>
          </div>
        </Card>
      </div>
    </>
  );
}

export default LoginForm;
