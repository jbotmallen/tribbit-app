import { cn } from "@/lib/utils";
import { LoaderIcon } from "lucide-react";

type LoadingProps = {
  className?: string;
  loaderClassName?: string;
};

const Loading: React.FC<LoadingProps> = ({ className, loaderClassName }) => {
  return (
    <div
      className={cn(
        className,
        "text-center text-lg text-lightYellow space-y-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      )}
    >
      <LoaderIcon className={cn(loaderClassName, "w-8 h-8 animate-spin mx-auto")} />
      <span className="text-center">Loading...</span>
    </div>
  );
};

export default Loading;
