/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import QualityOfLifeChart from "../components/charts/QualityOfLifeChart";
import { Heart } from "lucide-react";
import Details from "../components/config/details.json";
import Accordion from "../components/ui/Accordion";

export default function QualityOfLife() {
   const data = [
    [92, 99, 96, 88, 88, 88], //dehkhoda
    [88, 86, 100, 91, 78, 83], //bolvar
    [89, 80, 60, 84, 81, 85], //seyedi
    [96, 99, 75, 98, 68, 73], //17شهریور
    [86, 94, 70, 95, 88, 73], //میرزاکوچکخان
    [50, 94, 35, 40, 30, 40], //shahidbeheshti
    [87, 98, 30, 90, 63, 38], //jajarmi
    [83, 90, 81, 73, 75, 73], //hoseinymasoom
    [86, 88, 50, 88, 76, 48], //shariati ];
    [88, 90, 46, 89,82,30], //dochenar
    [80, 81, 42, 80, 69, 52], //chamran
    [94, 85, 84, 88, 93, 90], //artesh
    [96, 94, 96, 89, 84, 59], //bsij
    [96, 90, 75, 91, 88, 80], //jomhori
    [85, 82, 90, 82, 92, 90], //کوی معلم
    [82, 80, 50, 89, 77, 72], //mosala
  ];
  //   4  "سرزندگی اجتماعی",
  //    2 "دسترسی به خدمات شهری",
  //  6   "فضای سبز و آرامش",
  //   3  "امنیت",
  //    5 "کیفیت کالبدی محله",
  // 1 ترافیک

  const names = [
    "دهخدا",
    "بلوار",
    "سیدی",
    "17شهریور",
    "میرزاکوچک خان",
    "شهید بهشتی",
    "جاجرمی",
    "حسینی معصوم",
    "شریعتی",
    "دوچنار",
    "چمران",
    "ارتش",
    "بسیج",
    "جمهوری",
    "کوی معلم",
    "مصلی",
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
