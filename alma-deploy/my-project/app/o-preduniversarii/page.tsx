import Image from "next/image";
import Uni1 from "../../public/uni1.png";
import Uni2 from "../../public/uni2.png";

export default function OPreduniversarii() {
  return (
    <main className="flex flex-grow flex-col text-black">
      <div className="py-14">
        <div className="px-2 md:container xl:container">
          <h1 className="mb-20 text-center xl:text-t36 text-t26h">О предуниверсарии</h1>
          <cite className="text-center text-t26 xl:text-t36l mb-20 block xl:text-right">
            “Что такое предуниверсарий
            <br /> предуниверсарий” <br />
            <span className="text-t26h xl:text-t32">Ректор AlmaU</span>
          </cite>
          <p className="text-t24l xl:text-t34 mb-14 max-w-[1000px]">
            <b>Предуниверсарий AlmaU</b> – это первая организация
            предуниверситетского образования при университете в Казахстане.
            Компания предоставляет различные программы, предназначенных для
            подготовки студентов к успешному поступлению в университет.
          </p>
          <Image src={Uni1} alt="University Image" className="mb-14 rounded-3xl" />
          <p className="text-t24l xl:text-t34 mb-14 max-w-[1000px]">
            Целью предуниверситетского образования является помощь студентам
            закрепить базовые знания, необходимые для успешного прохождения
            вступительных экзаменов, а также развить навыки, которые пригодятся
            во время учебы в университете.
          </p>
          <p className="text-t24l xl:text-t34 mb-14 max-w-[1000px]">
            Предуниверсарий может быть особенно полезным для тех, кто чувствует
            неуверенность в своих знаниях или желает повысить свою
            конкурентоспособность при поступлении в университет.
          </p>
          <Image src={Uni2} alt="University Image" className="mb-0 xl:mb-[156px] rounded-3xl" />
        </div>
      </div>
    </main>
  );
}
