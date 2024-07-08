import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  component: React.ReactNode;
  title: string;
  className?: string;
}

export function CustomDialog({ children, component, title, className }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className={cn("max-w-[550px]", className)}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">{title}</DialogTitle>
        </DialogHeader>
        {component}
      </DialogContent>
    </Dialog>
  );
}
