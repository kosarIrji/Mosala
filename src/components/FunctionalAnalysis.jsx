import FunctionalPieChart from "./charts/FunctionalPieChart";
import MapFunctionalAnalysis from "./MapFunctionalAnalysis";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import Details from "../components/config/details.json";

export default function FunctionalAnalysis() {
  return (
    <motion.div
      className="grid w-full lg-grid-cols-3 mt-3  lg:mb-5 gap-3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* ستون 1: متن و نمودار */}
      <div className="lg:col-span-2 col-span-3  border bg-white/40 backdrop-blur-md  rounded-2xl shadow-sm p-5   text-xl w-full">
        <h3 className="text-3xl sm:text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug ">
          تار عملکرد شهری محله مصلی
          <span>
            <Layers size={28} />
          </span>
        </h3>
        <p className="md:leading-loose  whitespace-pre-line lg:leading-loose font-modam  text-justify text-base  ">
          با توجه به توزیع فضایی کاربری ‌ها در محله مصلی، می‌توان گفت این محله
          واجد الگوی عملکردی چندگانه و متعادل است که هم{" "}
          <strong className="text-green-800">
            پاسخگوی نیاز های روزمره ساکنان
          </strong>{" "}
          است و هم دارای ظرفیت ‌های فرا محله‌ ای می‌باشد.{" "}
        </p>
        {/* باکس ۳: نکته کلیدی */}
        <div className="bg-white/40  border-r-4 border-blue-500 shadow-md p-1 mt-3">
          <h4 className="flex gap-2 text-blue-600">
            {/* <FaLightbulb size={22} className="text-blue-600" /> */}
            <span className="font-bold  text-base">
              <strong> پراکنش کاربری ها در محله مصلی </strong>:
            </span>
          </h4>
          <p className="font-modam text-[15px] lg:leading-loose text-gray-800  ">
            🟠 در <strong>امتداد بلوار دولت</strong>، استقرار کاربری‌ های مذهبی
            مانند مصلی امام خمینی و اداری، جایگاه نهادی و رسمی محله را تثبیت
            کرده و نقش آن را در
            <strong className="text-blue-700">ساختار اداری</strong> شهر تقویت
            کرده است
            <br />
            🟡 <strong> خیابان نادر</strong> نیز با تراکم بالا و حضور پیوسته فضا
            های تجاری و مختلط، به یکی از محور های پرتردد و پویای شهری تبدیل شده
            که نقش کلیدی در{" "}
            <strong className="text-yellow-800">تحرک اجتماعی و اقتصادی</strong>{" "}
            محله ایفا می‌کند. <br /> 🟢 <strong>در خیابان طالقانی</strong>،
            ترکیبی از واحد های تجاری، کاربری‌ های مختلط و بانک ها استقرار یافته
            ‌اند. این تنوع کاربری، موجب{" "}
            <strong className="text-green-800">افزایش تردد روزانه</strong> و
            <strong className="text-green-800"> پویایی عملکردی</strong> در این
            محور شده است. <br /> 🟣 همچنین <strong>خیابان هنر</strong> با تعدادی
            کاربری مختلط، آموزشی و اداری، بخشی از نیاز های خدماتی و آموزشی
            ساکنان محله را پوشش می‌دهد و در{" "}
            <strong className="text-purple-800">تقویت تنوع عملکردی</strong> محله
            نقش دارد .{" "}
          </p>
        </div>
      
      </div>
      <div className="col-span-3 lg:col-span-1 border bg-white/40 backdrop-blur-md  rounded-2xl shadow-sm pl-5 pr-5 pt-5   text-xl w-full">
        <FunctionalPieChart />
      </div>

      {/* ستون 2 و 3: نقشه */}
      <motion.div
        className="col-span-3 shadow-md rounded-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <MapFunctionalAnalysis />
      </motion.div>
    </motion.div>
  );
}
