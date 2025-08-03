import SummaryChart from "./charts/SummryChart";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Clipboard } from "lucide-react";

export default function Summary() {
  return (
    <section className="relative my-3 border pt-3 h-full bg-white/50 backdrop-blur-sm  rounded-2xl shadow-lg   sm:p-2 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="p-5 pb-0"
      >
        <h3 className="text-3xl sm:text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)]  leading-snug ">
           جمع بندی  
          <Clipboard size={28} />
        </h3>
        <p className="lg:leading-loose  font-modam  text-justify text-base mb-6  ">
          محله مصلی با{" "}
          <strong>
            موقعیتی استراتژیک در شهر، بافت کالبدی متنوع، و دسترسی مناسب به شبکه
            معابر شهری
          </strong>
          ، به یکی از نواحی در حال تحول و نوسازی تبدیل شده است. ترکیب کاربری‌
          های اداری، تجاری و مسکونی، همراه با تحرک بالای ساخت ‌و ساز، این محله
          را به نقطه ‌ای جذاب برای سکونت و سرمایه ‌گذاری بدل کرده است. پویایی
          عملکردی، امنیت بالا و فرصت ‌های بازآفرینی شهری، آینده ‌ای امیدوار
          کننده برای توسعه پایدار محله رقم میزند.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="col-span-2 md:col-span-1"
      >
        <SummaryChart />
      </motion.div>
    </section>
  );
}
