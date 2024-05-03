import cn from "classnames";

export const Card = ({
  title,
  text,
  className,
  color,
}: {
  title: string;
  text: string;
  className: string;
  color: "blue" | "red" | "blue_dark" | "grey";
}) => {
  return (
    <li
      className={cn("w-screen md:w-[400px] xl:w-[400px] rounded-[5px] md:rounded-[30px] xl:rounded-[30px] px-8 py-10", className, {
        "bg-primary text-white": color === "blue",
        "bg-accent text-white": color === "red",
        "bg-primary_dark text-white": color === "blue_dark",
        "bg-bg_grey text-black": color === "grey",
      })}
    >
      <h3 className="mb-12 text-xl xl:text-t26 !font-bold">{title}</h3>
      <p className=" text-t16 xl:text-t24l">{text}</p>
    </li>
  );
};
