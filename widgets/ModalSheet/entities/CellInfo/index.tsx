import { FC } from "react";

import { CellInfoHeading } from "./shared/ui/heading";
import { twMerge } from "tailwind-merge";
import { Icons } from "@/entities/Icons";
import { ButtonLink } from "@/shared/ui/ButtonLink";
import { Button } from "@/shared/ui/Button/Button";
import { IElement } from "@/shared/lib/redux-store/slices/modal-slice/type";
import { Icon } from "@/shared/ui/Icon";

interface ICellInfoProps {
  currentIndex: number;
  index: number;
}

export const items: IElement[] = [
  {
    id: 0,
    heading: "Мужская энергия",
    title: "Энергия",
    icon: <Icon variant={"man"} color={"deepBlue"} />,
    typeIcon: "man",
    description:
      "Чувствовать энергии и уметь ими пользоваться – основа внутренней силы. Мужская и женская энергии существуют внутри нас, независимо от пола. В идеале они образуют целостность и гармонично взаимодополняются. Для поддержания здоровых отношений с собой, окружением и миром важно управлять этими энергиями и находить между ними баланс, а также чувствовать моменты и ситуации, когда важно активизировать и использовать именно мужскую или женскую энергию.\n" +
      "Мужская энергия — это напористость, физическая сила, принятие решений, соперничество, лидерство, покровительство и защита, умение отдавать, логическое мышление и рассуждение, целеустремленность, исследование мира, сосредоточенность на результате.\n" +
      "Мужская энергия экстравертна, ассоциируется с Солнцем, активностью, огнем, дневным светом. Она дает вектор движения и мотивирует.\n" +
      "Вопросы для проработки мужской энергии:\n" +
      "Умеешь ли ты брать ответственность и принимать решения? Знаешь ли ты, куда направить свою энергию? Какими способами ты отстаиваешь свои интересы?\n" +
      "Умеешь ли ты справляться с агрессией и гневом, знаешь ли, как направить эти энергии на достижение цели? Каковы твои цели? в",
  },
  {
    id: 1,
    heading: "Стихия земли",
    title: "Стихия",
    icon: <Icon variant={"earth"} color={"turquoise"} />,
    typeIcon: "earth",
    description:
      "Энергии Земли отвечают за стабильность, практичность, стойкость, логичность, гостеприимство и хозяйственность, заботу, чувство безопасности.\n" +
      "Стихия Земли помогает нам воплощаться в наших телах, наслаждаться чувственностью и физическими, материальными удовольствиями. Это все грани ощущений, вкусов и запахов, это чувство красоты. Умеешь ли ты чувствовать свое тело и уважать его потребности? Не потакаешь ли чрезмерно своим желаниям?\n" +
      "Земная стихия отвечает за действия во внешнем мире, плодородие и здоровье, все материальные стороны жизни. Есть тонкая грань между приземленностью и заземленностью, устойчивостью и ригидностью. Умеешь ли ты быть благодарным за все, что есть? Умеешь ли ценить момент? Умеешь ли быть в меру практичным и трудолюбивым?\n" +
      "Земля уважает своевременность. Весной сеять урожай, летом пропалывать, осенью собирать и заготавливать. Обрати внимание, насколько ты в гармонии с природными ритмами, с циклами дня и ночи? Какие циклы в твоей жизни происходят сейчас? Какие семена ты сеешь и какие плоды планируешь вырастить и пожать?\n" +
      "Для «заземления», активации энергии Земли, подходят хождение босиком, пребывание на природе, массажи, садоводство, приобретение практичных навыков, гончарное мастерство, взаимодействие с камнями и кристаллами. ю",
  },
  {
    id: 2,
    heading: "Уровень 2",
    title: "Уровень",
    icon: <Icon variant={"level2"} color={"blue"} />,
    typeIcon: "level2",
    description:
      "Второй логический уровень — уровень поведения. На этом уровне твои повседневные действия, реакции и привычки. Что я чаще всего делаю по жизни, каковы мои планы? Согласуются ли мои действия с моими планами и целями? Какими способами я достигаю результата? На что я чаще всего трачу свои время, деньги, энергию? Есть ли среди моих регулярных действий такие, которые мешают моему развитию? На чем чаще всего сосредоточены мои мысли и внимание? Какое поведение приведет меня к желаемому результату?",
  },
  {
    id: 3,
    heading: "Радость",
    title: "Эмоция",
    icon: <Icon variant={"joy"} color={"yellow"} />,
    typeIcon: "joy",
    description:
      "Стихия воды — это про эмоции, творчество, интеллект, эмпатию, интуицию и глубину бессознательного. Это чувствительность и чувственность, текучесть, переменчивость и поток.\n" +
      "Вода очищает, ее используют для крещения и освящения. Это основа жизни и всех ее форм, это то, из чего мы физически состоим на 70%. Используй силу воды, чтобы очистить тело, душу и пространство.\n" +
      "Вода камень точит. Это огромная сила, и это мягкая сила. Какие способы ты используешь, чтобы добиваться своих целей? Умеешь ли быть гибким?\n" +
      "Обрати внимание на свое чувствование, связь с эмоциями: умеешь ли ты их распознавать, выражать и проживать? Насколько ты прислушиваешься к внутреннему голосу?\n" +
      "Для активации водной стихии можно есть сочные фрукты и овощи, смотреть на водоемы, плавать, принимать ванны, делать практики расслабления и медитации, упражнения на развитие чувствительности и эмоционального интеллекта.\n" +
      ".",
  },
];

export const CellInfo: FC<ICellInfoProps> = ({ currentIndex, index }) => {
  const currentGameId = 1; //TODO: Изменить на реальный ID текущей игры
  const link = `cell/${currentGameId}`;

  return (
    <div
      className={twMerge(
        "relative flex flex-col px-4 pb-5 pt-[17px] after:absolute after:bottom-0 after:left-4 after:h-[2px] after:w-[calc(100%-32px)] after:bg-mint-900 after:opacity-50 after:shadow-white",
        currentIndex === 1 && "after:opacity-0",
        currentIndex === 0 && index === 1 && "after:opacity-0",
      )}
    >
      <CellInfoHeading title={"#1. Рождение"} />

      <Icons className={"mb-4 mt-[9px] gap-1.5"} items={items} />

      <div className={"flex w-full gap-4"}>
        <ButtonLink
          href={link}
          variant={"orange"}
          size={"small"}
          className={"w-[calc(50%-8px)] text-[15px]"}
        >
          Описание
        </ButtonLink>
        <Button variant={"blue"} size={"small"} className={"w-[calc(50%-8px)]"}>
          Мои мысли
        </Button>
      </div>
    </div>
  );
};
