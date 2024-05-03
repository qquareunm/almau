import { Card } from "../../components/Card";

const data = [
  {
    title: "Индивидуализированный подход",
    text: "Мы верим в то, что каждый студент уникален. Поэтому наша программа адаптируется под ваши потребности, помогая вам достичь максимальных результатов.",
    color: "blue",
    index: 0,
  },
  {
    title: "Преподавательский состав",
    text: "Наши преподаватели — это профессионалы своего дела, которые готовы поделиться своими знаниями и опытом с вами. Мы создаем стимулирующую и поддерживающую атмосферу, в которой каждый студент может раскрыть свой потенциал.",
    color: "grey",
    index: 1,
  },
  {
    title: "Широкий спектр программ",
    text: "Независимо от ваших интересов и целей, у нас есть подходящая программа для вас. Мы предлагаем разнообразные курсы и мероприятия, позволяющие расширить ваши горизонты и углубить знания в выбранной области.",
    color: "blue_dark",
    index: 2,
  },
  {
    title: "Современные тенхнологии",
    text: "Мы оснастили наши классы и лаборатории последними достижениями техники и технологии, чтобы обеспечить вам максимально комфортные условия обучения и практического опыта.",
    color: "red",
    index: 3,
  },
  {
    title: "Поддержка на каждом этапе",
    text: " Наша команда готова помочь вам в любой ситуации. Мы ценим ваше стремление к успеху и готовы поддержать вас на пути к его достижению.",
    color: "grey",
    index: 4,
  },
];

export default function AboutAdmission() {
  return (
    <main className="flex flex-grow flex-col bg-white text-t26">
      <div className="mb-[50px] xl:mb-[240px] bg-accent py-14">
        <div className="px-6 block xl:container md:container text-white">
          <h1 className="mb-10 text-center text-t24 xl:text-t36">
            Добро пожаловать в Предуниверсарий: ваш первый шаг к будущему
            успеху!
          </h1>
          <p className="text-t16 xl:text-t26">
            Предуниверсарий — это уникальное образовательное пространство, где
            мечты становятся реальностью, а потенциал студентов раскрывается во
            всей его полноте. Мы приглашаем вас присоединиться к нашему
            сообществу и начать захватывающее путешествие к знаниям, навыкам и
            саморазвитию.
          </p>
        </div>
      </div>
      <section className="mb-[50px]  xl:mb-[320px]">
        <div className="flex xl:container">
          <ul className="flex flex-row flex-wrap justify-center gap-10">
            {data.map((card) => (
              <Card
                title={card.title}
                text={card.text}
                //@ts-ignore
                color={card.color}
                className="min-h-[240px] md:min-h-[540px] xl:min-h-[540px]"
                key={card.index}
              />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
