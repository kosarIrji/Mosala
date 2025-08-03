/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import QualityOfLifeChart from "../components/charts/QualityOfLifeChart";
import { Heart } from "lucide-react";
import Details from "../components/config/details.json";
import Accordion from "../components/ui/Accordion";

export default function QualityOfLife() {
  const data = [
    [100, 100, 80, 97, 84, 32], //dochenar
    [96, 93, 95, 91, 98, 76], //jomhori
    [93, 91, 96, 98, 90, 78], //میرزاکوچکخان
    [93, 93, 96, 96, 91, 49], //bsij
    [90, 89, 95, 93, 93, 88], //کوی معلم
    [88, 86, 100, 94, 88, 90], //bolvar

    [82, 81, 88.89, 79, 70], //mosalla
    [92, 99, 96, 90, 82, 88], //dehkhoda
    [96, 99, 75, 98, 84, 80], //17شهریور
    [87, 90, 40, 90, 50, 40], //jajarmi
    [86, 88, 75, 90, 70, 60], //shariati
  ];

  //     "سرزندگی اجتماعی",
  //     "دسترسی به خدمات شهری",
  //     "فضای سبز و آرامش",
  //     "امنیت",
  //     "کیفیت کالبدی محله",
  //trafic

  const names = [
    "دوچنار",
    "جمهوری",
    "میرزاکوچک خان",
    "بسیج",
    "کوی معلم",
    "بلوار",
    "مصلی",
    "دهخدا",
    "17شهرر",
    "جاجرمی",
    "شریعتی",
  ];

  return (
    <section className="">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3 mt-3">
        {/* Box for text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative border bg-white/50 backdrop-blur-md rounded-2xl shadow-md p-5  col-span-2 lg:col-span-1  h-[100%]"
        >
          <h3 className="text-3xl sm:text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)]  leading-snug ">
            کیفیت زندگی محله {Details.alley.name}
            <Heart size={28} />
          </h3>
          <p className="lg:leading-loose  font-modam  text-justify text-base mb-6  ">
            محله مصلی با توجه به بررسی های انجام شده درآیتم های کیفیت زندگی،
            دارای کیفیت زندگی قابل قبول و رو به بهبود است. اما چالش هایی در حوزه
            فضای سبز و فرسودگی کالبدی نیاز به مداخله شهری هدفمند و طرح های
            بازآفرینی شهری دارد.
          </p>
          <Accordion
            title=" 🔐  امنیت"
            content="امنیت بالا، وجود واحد های اداری و انتظامی، تردد در معابر محله ، روشنایی معابر."
            defaultOpen={false}
          />
          <Accordion
            title="	 🏪  دسترسی به خدمات  "
            content="دسترسی مناسب به حمل و نقل عمومی، نزدیکی به مراکز آموزشی و اداری. 
            
            "
            defaultOpen={false}
          />{" "}
          <Accordion
            title=" 🌱 فضای سبز و آرامش  "
            content="کمبود پارک و فضای سبز عمومی، سبزینگی  متوسط."
            defaultOpen={false}
          />{" "}
          <Accordion
            title=" 	🤝  سرزندگی اجتماعی "
            content="تعاملات اجتماعی ، تجمعات مذهبی در مصلی، انسجام اجتماعی، فضایی پویا و پرتحرک. "
            defaultOpen={false}
          />{" "}
          <Accordion
            title=" 🏡 کیفیت کالبدی محله "
            content=" دوگانگی در کیفیت کالبدی محله، نوسازی و بهسازی."
            defaultOpen={false}
          />{" "}
          <Accordion
            title="
              🚦 ترافیک  "
            content="شبکه معابر منظم، ترافیک روان، عرض مناسب معابر، دسترسی مناسب به حمل و نقل عمومی."
            defaultOpen={false}
          />
        </motion.div>

        {/* Box for chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-2 lg:col-span-1  h-full"
        >
          <QualityOfLifeChart dataValues={data} names={names} />
        </motion.div>
      </div>
    </section>
  );
}
