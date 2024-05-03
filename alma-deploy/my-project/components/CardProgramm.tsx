import cn from "classnames";

export const CardProgramm = ({
  title,
  text,
  className,
  children,
}: {
  title: string;
  text: string;
  className: string;
  children?: React.ReactNode;
}) => {
  return (
    <li
      className={cn(
        "w-[400px] rounded-[30px] border-2 border-primary bg-bg_grey px-8 py-10",
        className
      )}
    >
      <h2 className="mb-32 max-w-[200px] text-t26h md:text-t32 xl:text-t32">{title}</h2>
      <p className="text-t16">{text}</p>
    </li>
  );
};
