"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(200),
});

function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="grid gap-4 mt-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter Email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-4 mt-4">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter Password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-[#006022] text-white hover:bg-[#005018] mt-6 w-full"
                  >
                    Login
                  </Button>
                </form>
              </Form>
            </CardContent>
          </div>
        </Card>
      </div>
    </>
  );
}

export default LoginForm;
