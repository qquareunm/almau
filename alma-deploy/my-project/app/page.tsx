import Image from "next/image";
import Hero from "../public/hero.png";
import Girl from "../public/girl.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-t26 py-12 ">
      <section className="h-[1500px] md:h-[1700px] xl:h-auto">
        <div className="md:container xl:container px-6">
          <div className="relative mx-auto mb-12 h-[200px] w-[320px] md:h-[400px] md:w-auto xl:h-[700px] xl:w-full overflow-hidden rounded-3xl">
            <Image
              src={Hero}
              alt="Alba university students"
              fill
              className="object-cover"
              quality={100}
              sizes="80vw"
            />
          </div>
          <div className="mb-24 xl:flex h-[410px] w-full flex-row gap-10 text-t26 font-bold text-white">
            <div className="static xl:relative flex w-full flex-col justify-between rounded-[30px] bg-primary duration-300 hover:scale-105 mb-2">
              <Link href={""} className=" block px-8 py-10">
                Бакалавриат
              </Link>
              <span className="mt-auto block px-8 py-10 text-t15">
                Образовательные программы
              </span>
            </div>
            <div className="hover:bg_grey/80 relative flex w-full flex-col justify-between rounded-[30px] bg-bg_grey text-black duration-300 hover:scale-105 mb-2">
              <Link href="/about-admission" className=" block px-8 py-10">
                О поступлении
              </Link>
              <span className="mt-auto block px-8 py-10 text-t15">
                Правила поступления
              </span>
            </div>


            <div className="block xl:flex w-full flex-col gap-10 rounded-[30px]">
              <div className="h-[250px]  xl:relative flex xl:h-full items-center rounded-[30px] bg-primary duration-300 hover:scale-105 mb-2 ">
                <Link href="/ent-preparation" className="block px-10">
                  Подготовка к ЕНТ
                </Link>
              </div>
              <div className="static xl:relative flex h-[250px] xl:h-full items-center rounded-[30px] bg-accent duration-300 hover:scale-105">
                <Link href="/possibilities" className="block px-10">
                  Возможности
                </Link>
              </div>
            </div>
          </div>
          <article className="relative rounded-[35px] mt-[550px] xl:mt-0 bg-accent text-white">
            <div className="relative overflow-hidden p-14">
              <h2 className="mb-8 text-26 font-bold md:text-t32 xl:text-t32">Предуниверсарий AlmaU</h2>
              <p className="hidden xl:block  xl:w-[700px] text-t26">
                <span className="font-medium">Предуниверсарий AlmaU</span> – это
                первая организация предуниверситетского образования при
                университете в Казахстане. Компания предоставляет различные
                программы, предназначенных для подготовки студентов к успешному
                поступлению в университет. Целью предуниверситетского
                образования является помощь студентам закрепить базовые знания,
                необходимые для успешного прохождения вступительных экзаменов, а
                также развить навыки, которые пригодятся во время учебы в
                университете.
              </p>
              <div className="hidden xl:block absolute -bottom-40 -right-32 h-[500px] w-[500px] rounded-full bg-white"></div>
            </div>
            <div className="hidden xl:block absolute -bottom-10 -right-[70px] h-[550px] w-[320px]">
              <Image src={Girl} alt="Girl" fill className="object-contain" />
            </div>
          </article>
          {/* <article className="absolute xl:relative mt-[430px] xl:mt-0 rounded-[35px] bg-accent text-white">
            <div className="static xl:relative  overflow-hidden p-14">
              <h2 className="mb-8 text-t32">Предуниверсарий AlmaU</h2>
              <p className="w-full xl:w-[700px] text-sm xl:text-t26">
                <span className="font-medium">Предуниверсарий AlmaU</span> – это
                первая организация предуниверситетского образования при
                университете в Казахстане. Компания предоставляет различные
                программы, предназначенных для подготовки студентов к успешному
                поступлению в университет. Целью предуниверситетского
                образования является помощь студентам закрепить базовые знания,
                необходимые для успешного прохождения вступительных экзаменов, а
                также развить навыки, которые пригодятся во время учебы в
                университете.
              </p>
              <div className="hidden xl:absolute -bottom-40 -right-32 h-[300px] w-screen  xl:h-[500px] hl:w-[500px] rounded-full bg-white"></div>
            </div>
            <div className="hidden xl:block absolute -bottom-10 -right-[70px] h-[550px] w-[320px]">
              <Image src={Girl} alt="Girl" fill className="object-contain" />
            </div>
          </article> */}
        </div>
      </section>
    </main>
  );
}
