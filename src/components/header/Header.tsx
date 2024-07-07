import { CustomDialog } from "@/components/shared/CustomDialog";
import ThemeSwitcher from "./ThemeSwitcher";
import Register from "../auth/Register";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header>
      <ThemeSwitcher />
      <CustomDialog component={<Register />} title="Register a new account">
        <Button variant="outline">Register</Button>
      </CustomDialog>
    </header>
  );
}
