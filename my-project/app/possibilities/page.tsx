export default function Possibilities() {
  return (
    <main className="flex flex-grow flex-col text-t26">
      <div className="py-28">
        <div className="block md:container xl:container t">
          <ul className="static xl:relative h-full grid justify-center xl:h-[1600px] text-center text-white">
            <li className="static xl:absolute mb-10 ml-0 xl:ml-32 h-auto w-auto  md:h-[520px] md:w-[520px] xl:h-[520px] xl:w-[520px] rounded-2xl md:rounded-full xl:rounded-full bg-accent px-6 py-20  md:px-20 md:py-20 xl:px-20 xl:py-20">
              <h2 className="text-t26h mb-5">Сертификат завершения</h2>
              <p className="text-t24l">
                Каждый участник нашей программы получает официальный сертификат,
                подтверждающий успешное завершение обучения в Предуниверсарии.
                Этот сертификат будет вашим надежным партнером при поступлении в
                высшие учебные заведения.
              </p>
            </li>
            <li className="static xl:absolute mb-10 right-0 top-64  h-auto w-auto  md:h-[520px] md:w-[520px] xl:h-[520px] xl:w-[520px] rounded-2xl md:rounded-full xl:rounded-full bg-accent px-6 py-20  md:px-20 md:py-20 xl:px-20 xl:py-20">
              <h2 className="text-t26h mb-5">Новые знания и навыки</h2>
              <p className="text-t24l">
                В ходе обучения вы приобрели ценные знания и навыки, которые
                помогут вам успешно справиться с любыми вызовами в будущем. Вы
                стали более компетентными и уверенными в своих силах.
              </p>
            </li>
            <li className="static xl:absolute mb-10 left-0 top-[650px]  h-auto w-auto  md:h-[520px] md:w-[520px] xl:h-[520px] xl:w-[520px] rounded-2xl md:rounded-full xl:rounded-full bg-accent px-6 py-20  md:px-20 md:py-20 xl:px-20 xl:py-20">
              <h2 className="text-t26h mb-5">Связи и контакты</h2>
              <p className="text-t24l">
                Ваше участие в нашей программе позволило вам расширить свой круг
                общения и установить полезные связи с единомышленниками и
                профессионалами в различных областях.
              </p>
            </li>
            <li className="static xl:absolute bottom-0 right-[220px] h-auto w-auto  md:h-[520px] md:w-[520px] xl:h-[520px] xl:w-[520px]  rounded-2xl md:rounded-full xl:rounded-full bg-accent px-6 py-20  md:px-20 md:py-20 xl:px-20 xl:py-20">
              <h2 className="text-t26h mb-5">Поддержка и рекомендации</h2>
              <p className="text-t24l">
                Наша команда готова продолжать поддерживать вас и после
                окончания обучения. Мы готовы предоставить вам рекомендации,
                советы и помощь в вашем дальнейшем образовательном и
                профессиональном пути.
              </p>
            </li>
            <div className="hidden xl:block xl:absolute right-[180px] top-[450px] -z-10 h-[40px] w-[600px] rotate-[28deg] bg-accent"></div>
            <div className="hidden xl:block xl:absolute right-[280px] top-[650px] -z-10 h-[40px] w-[600px] rotate-[145deg] bg-accent"></div>
            <div className="hidden xl:block xl:absolute right-[380px] top-[1200px] -z-10 h-[40px] w-[600px] rotate-[40deg] bg-accent"></div>
          </ul>
        </div>
      </div>
    </main>
  );
}
