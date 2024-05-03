const data = [
  {
    id: 0,
    year: 1988,
    text: "Создана Алматинская Школа Менеджмента (АШМ). Ежегодно в АШМ проходили обучение около 200-500 управленцев высшего и среднего звена.",
  },
  {
    id: 1,
    year: 1989,
    text: "С 1989 года Алма-Атинская школа менеджмента начала проводить свои первые семинары.",
  },
  {
    id: 2,
    year: 1990,
    text: "Малое предприятие «Алма-Атиская школа менеджеров» с 14 декабря 1990 года является членом Ассоциации школ международного бизнеса СССР.",
  },
  {
    id: 3,
    year: 1991,
    text: "С 17 февраля 1991 года является членом Российской ассоциации школ бизнеса и предоставляет услуги в области интенсивных курсов и консультационных услуг по современному менеджменту.",
  },
  {
    id: 4,
    year: 1992,
    text: "Зарождение идеи создания программы MBA (Магистр делового администрирования)",
  },
  {
    id: 5,
    year: 1993,
    text: "Началась работа по созданию программы МВА и разработка проекта по реализации программ для управленческих кадров. АІМ первой в Казахстане выставила МВА на образовательный рынок страны.",
  },
  {
    id: 6,
    year: 1994,
    text: "15 преподавателей АШМ выехали по международной программе ТАСIS на 9-месячное обучение в Европу, что положило основу для создания в следующем году казахстанской программы МВА.",
  },
  {
    id: 7,
    year: 1995,
    text: "Алматинская Школа Менеджмента преобразована в Международную Академию Бизнеса. Первым президентом Международной Академии Бизнеса избран Кожахметов Асылбек Базарбаевич.",
  },
];

export default function AlmauHistory() {
  return (
    <main className="flex flex-grow flex-col text-black">
      <div className="mb-[50px] xl:mb-[360px] py-14">
        <div className="px-2 md:container xl:container">
          <h1 className="mb-12 text-center text-t32  xl:text-t36">История AlmaU</h1>
          <ul className="text-t32l flex history_items flex-col gap-12 md:gap-24 xl:gap-24">
            {data.map((item) => (
              <li className="block xl:flex flex-row justify-between" key={item.id}>
                <p className="text-t36 text-primary">{item.year} г.</p>
                <p className="history_item max-w-[990px] text-t16 md:text-t26">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}