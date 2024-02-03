import type { ActionFunctionArgs } from "@remix-run/node";
import { Form, Link, redirect } from "@remix-run/react";
import LoginImage from "~/components/LoginImage";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import loginImage from "~/images/undraw_login_re_4vu2.svg"

export default function Index() {
  return (
    <div className="h-screen grid place-items-center">
      <Card className="p-8 flex h-96 gap-4">
        <div className="space-y-4 basis-1/2">
          <p className="text-2xl">Login</p>
          <Form method="post" className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input name="name" id="name" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input name="password" id="password" />
              <Link to='/password-reset' className="text-xs text-primary mt-1">Forgot your password?</Link>
            </div>
            <div className="justify-center gap-4">
              <Button className="w-full">Log in</Button>
              <p className="text-xs mt-1">New here? <Link to='/sign-up' className="text-primary">Register!</Link></p>
            </div>
          </Form>
        </div>
        <div className="basis-1/2">
          <LoginImage />
        </div>
      </Card>
    </div>
  );
}

export async function action({ request }: ActionFunctionArgs) {

  return redirect('/chats')
}