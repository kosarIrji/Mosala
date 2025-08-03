/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import AccsessesArzeMabar from "../components/charts/AccessesArzeMabar";
import AccsessesKyfiatMabar from "../components/charts/AccsessesKyfiatMabar";
import MapStreet from "./MapStreet";
import { Map } from "lucide-react";
import { Button } from "../components/ui/Button";
import Details from "../components/config/details.json";
import { useState } from "react";

export default function Accesses() {
  const [selectedComponent, setSelectedComponent] = useState("key");

  return (
    <section className="w-full mt-3">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
        {/* باکس توضیحات */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className=" rounded-2xl shadow-sm p-5 border lg:col-span-3 bg-white/50 backdrop-blur-md "
        >
          <h3 className="text-3xl    w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug">
            دسترسی و کیفیت معابر
            {Details.alley.name}{" "}
            <span>
              <Map size={28} />
            </span>
          </h3>
          <p className="md:leading-loose lg:leading-loose font-modam  text-justify text-base  ">
            محله مصلی از <strong className="text-green-700">دسترسی مطلوبی</strong> در سطح شهر برخوردار است. خیابان طالقانی
            در شمال و خیابان امام خمینی در جنوب، به ‌عنوان دو محور اصلی، ارتباط
            این محله را با شبکه معابر شهری تسهیل می‌کنند. از سوی دیگر، بلوار
            دولت در غرب محله، به‌ دلیل عرض مناسب و جریان ترافیکی روان، یکی از
            معابر مهم در شبکه معابر شهر می باشد. در داخل محله نیز <strong className="text-green-700">ساختار معابر از انسجام قابل قبولی</strong> برخوردار است. بیشتر خیابان‌ ها دارای <strong>عرض ۸ متری
    </strong>        هستند و کیفیت پیاده ‌رو ها، به‌ ویژه در بخش مرکزی، شرایط مناسبی را
            برای پیاده روی روزمره فراهم کرده است. بر اساس ارزیابی‌ ها، کیفیت
            معابر در بسیاری از قطعات، در بازه<strong> ۳۵ تا ۴۰</strong> (از ۵۰ امتیاز) قرار دارد
            که نشان از وضعیتی پایدار و کارآمد در دسترسی درون محله است.
          </p>
          <div className="bg-white/40  border-r-4 border-red-500 shadow-md p-1 mt-3">
          <h4 className="flex gap-2 text-red-600">
            {/* <FaLightbulb size={22} className="text-blue-600" /> */}
            <span className="font-bold text-base">
              <strong> چالش های شبکه دسترسی محله مصلی </strong>:
            </span>
          </h4>
          <p>
            یکی از چالش ‌های بارز در ساختار معابر داخلی، در<strong> بخش جنوبی</strong> محله، <strong className="text-red-900">عرض
            کم</strong> برخی معابر و <strong className="text-red-900">یک ‌طرفه بودن</strong> خیابان ‌ها، به‌ویژه خیابان هنر، در
            ساعات پرتردد باعث محدودیت حرکت خودرو ها می‌شود.
          </p>
        </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" rounded-2xl shadow-sm p-5 border lg:col-span-2 lg:leading-loose bg-white/50 backdrop-blur-md "
        >
          <div className="flex flex-wrap justify-center gap-3 mb-2">
            {[
              { label: "عرض معبر", value: "arze" },
              { label: "کیفیت معبر", value: "key" },
            ].map((btn) => (
              <Button
                key={btn.value}
                onClick={() => setSelectedComponent(btn.value)}
                variant={
                  selectedComponent === btn.value ? "default" : "outline"
                }
                className="w-28 text-sm"
              >
                {btn.label}
              </Button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {selectedComponent === "arze" && (
              <motion.div
                key="arze"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <AccsessesArzeMabar />
              </motion.div>
            )}

            {selectedComponent === "key" && (
              <motion.div
                key="key"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <AccsessesKyfiatMabar />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* نقشه - کل عرض پایین */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 rounded-xl shadow-sm min-h-[600px] lg:h-full"
        >
          <MapStreet />
        </motion.div>
      </div>
    </section>
  );
}
