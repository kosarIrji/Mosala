import MapAnalysis from "./MapAnalysis";

import FloorChartSelector from "../components/charts/FloorChartSelector";
import GhedmatChartSelector from "../components/charts/GhedmatChartSelector";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { useState } from "react";
import { FaCity, FaChartBar, FaLightbulb } from "react-icons/fa";

function PhysicalAnalysis() {
  const [selectedComponent, setSelectedComponent] = useState("ghemat");
  const [chartType, setChartType] = useState("bar");
  return (
    <section className="w-full  ">
      <motion.div
        className=" "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="col-span-1 lg:grid grid-cols-6 lg:gap-4 md:col-span-1 h-full ">
          <div className="border col-span-4 bg-white/50 backdrop-blur-md rounded-2xl shadow-lg pb-6 sm:px-4 md:px-4 p-5 mt-3 ">
            <h3 className="text-3xl  w-full flex flex-row-reverse items-center text-right justify-end gap-2 font-modam font-extrabold text-[var(--text)] mb-4 leading-snug">
              کالبد محله مصلی، بازتابی از گذشته و آینده شهری
              <span className="">
                {" "}
                <FaCity size={28} />
              </span>
            </h3>
            <div className=" md:leading-loose  whitespace-pre-line lg:leading-loose   text-justify text-base ">
              <p className="font-modam text-base md:leading-loose lg:leading-loos text-gray-800 ">
                بافت کالبدی محله مصلی، نمایانگر پیوندی ملموس میان گذشته و{" "}
                <strong className="text-green-800">
                  مسیر پیش ‌روی توسعه شهری
                </strong>{" "}
                است؛ جایی که خانه‌ های قدیمی، در کنار ساختمان ‌های دو تا پنج
                طبقه نوساز، ترکیبی متنوع و زنده از سبک ‌های ساخت ‌و ساز را شکل
                داده ‌اند. بخش عمده ‌ای از واحد های این محله، مالکیت خصوصی
                دارند. این تنوع کالبدی، حاصل نوسازی تدریجی در سال ‌های اخیر است
                که چهره‌ محله را به‌تدریج دگرگون کرده است.
              </p>
            </div>
            {/* باکس ۲: واقعیت آماری */}
            <div className="bg-white/40 border-r-4 border-[var(--sidebar)] shadow-md mb-2 mt-2 p-2">
              <p className="font-modam text-base md:leading-loose lg:leading-loose text-gray-800   ">
                <span className="font-bold flex gap-1 text-base text-[var(--sidebar)]">
                  <FaChartBar size={22} className="text-[var(--sidebar)]" />
                  شواهد میدانی و آماری:
                </span>
                بر اساس اطلاعات موجود، وجود ۴۵ ساختمان با قدمت ۳۰ تا ۵۰ سال، در
                کنار ۲ قطعه غیرقابل سکونت و ۸ زمین بایر، نشان ‌دهنده‌ آن است که
                بخش ‌هایی از محله به‌ تدریج در{" "}
                <strong className="text-amber-900">معرض فرسودگی</strong> قرار
                دارند. این وضعیت از یک‌ سو{" "}
                <strong className="text-red-800">نیاز به مداخله شهری</strong>{" "}
                هدفمند را پررنگ می‌کند. از سوی دیگر زمینه ‌ای مناسب برای{" "}
                <strong className="text-gray-900">
                  ورود سازندگان و سرمایه ‌گذاران
                </strong>{" "}
                فراهم می‌آورد.
              </p>
            </div>
            <p className="font-modam md:leading-loose lg:leading-loose text-base   ">
              در نقطه مقابل، تحرک چشمگیر ساخت‌ و ساز های جدید در سال ‌های اخیر،
              نوید بخش آینده ‌ای پررونق است. وجود بیش از ۲۰۰ قطعه با عمر ۵ تا ۱۵
              سال، به ‌همراه ۸۹ قطعه نوساز و ۱۴ پروژه‌ فعال ساختمانی ( بیشتر
              متمرکز در راسته   <strong >خیابان طالقانی</strong>ی) نشان ‌دهنده‌ افزایش اعتماد
               سرمایه‌گذاران به <strong className="text-blue-800">ارزش اقتصادی</strong> این منطقه است.
            </p>
            
          </div>

          <motion.div
            className="flex- flex-col gap-3 border col-span-2  bg-white/50 backdrop-blur-md rounded-2xl shadow-lg mt-3  sm:px-4 md:px-4 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* دکمه‌ها و سلکت نوع نمودار */}
            <div className="flex flex-row justify-between gap-2 lg:max-w-[660px] mx-auto  px-4 sm:px-6 md:px-10 mt-5">
              {/* دکمه‌ها - در یک طرف */}
              <div className="flex gap-1 w-full ">
                {[
                  { label: "قدمت", value: "ghemat" },
                  { label: "طبقات", value: "tabaghat" },
                ].map((btn) => (
                  <Button
                    key={btn.value}
                    onClick={() => setSelectedComponent(btn.value)}
                    variant={
                      selectedComponent === btn.value ? "default" : "outline"
                    }
                    className="w-30 text-sm sm:text-base"
                  >
                    {btn.label}
                  </Button>
                ))}
              </div>

              {/* سلکت - در سمت دیگر */}
              <div className="w-full grid  justify-end">
                <select
                  value={chartType}
                  onChange={(e) => setChartType(e.target.value)}
                  className=" h-10 px-1 py-1 rounded-xl   self-end text-sm sm:text-base font-medium text-white bg-[var(--text)] hover:bg-[var(--sidebar)] transition"
                >
                  <option value="bar">نمودار میله‌ای</option>
                  <option value="line">نمودار خطی</option>
                  <option value="pie">نمودار دایره‌ای</option>
                </select>
              </div>
            </div>

            {/* نمایش نمودار انتخاب‌شده */}
            <div className="w-full lg:max-w-[600px] mx-auto ">
              {selectedComponent === "tabaghat" && (
                <FloorChartSelector chartType={chartType} />
              )}

              {selectedComponent === "ghemat" && (
                <GhedmatChartSelector chartType={chartType} />
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="col-span-1 md:col-span-2 shadow-md mt-3"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <MapAnalysis />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default PhysicalAnalysis;
