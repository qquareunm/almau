import { CardProgramm } from "../../components/CardProgramm";
import cn from "classnames";

const data = [
  {
    title: "1",
    text: "Контент в разработке",
    color: "blue",
    className: "man",
    index: 0,
  },
  {
    title: "2",
    text: "Контент в разработке",
    color: "grey",
    className: "graph",
    index: 1,
  },
  {
    title: "3",
    text: "Контент в разработке",
    className: "cloud",
    index: 2,
  },
];

export default function programms() {
  return (
    <main className="flex flex-grow flex-col">
      <div className="mb-20 py-14">
        <div className="px-[4px] md:container xl:container">
          <h1 className="mb-20 text-t24 xl:text-t36 text-center">Программы предуниверсария</h1>
          <ul className="flex flex-row flex-wrap justify-center gap-10">
            {data.map((card) => (
              <CardProgramm
                title={card.title}
                text={card.text}
                className={cn("min-h-[460px]", card.className)}
                key={card.index}
              />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
