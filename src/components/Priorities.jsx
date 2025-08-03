import React from "react";
import { TrendingUp } from "lucide-react";
import Details from "../components/config/details.json";

export default function Priorities() {
  return (
    // main component
    <div className="flex flex-col overflow-hidden w-full items-center justify-center pt-3 my-3 border bg-white/50 backdrop-blur-md shadow-md p-4 py-5 rounded-2xl">
      <h3 className="text-3xl sm:text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2 mt-2 font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug ">
        اولویت های سرمایه گذاری محله {Details.alley.name}
        <TrendingUp size={28} />
      </h3>
      {/* itmes container */}
      <div className="w-full   flex flex-col lg:flex-row gap-[10px] justify-evenly xl:justify-center items-center">
        {/* Box 1 */}
        <div className="rounded-xl shadow p-4 flex flex-col items-center justify-between w-full max-w-xs md:h-[200px] h-[150px]   bg-gradient-to-t  from-purple-100  to-purple-200 ">
          <h2 className="text-lg   font-bold mb-2 text-gray-800">
            خرید زمین خام
          </h2>

          <p className="text-gray-600 text-center md:mt-5  text-base">
            زمین‌ های بایر محدود (8 قطعه)، ارزش{" "}
            <strong>سرمایه‌گذاری بالایی</strong> در محله دارند.
          </p>
        </div>
        {/* Box 2 */}
        <div className="rounded-xl shadow p-4 flex flex-col   items-center justify-between w-full max-w-xs md:h-[200px] h-[150px]    bg-gradient-to-t from-purple-900 to-purple-950">
          <h2 className="text-lg  font-bold mb-2 text-white">
            {" "}
            مشارکت در نوسازی
          </h2>
          <p className="text-white text-center md:mt-5  text-base">
            وجود ساختمان هایی با قدمت بالای 30 سال، فرصت مناسبی برای پروژه ‌های{" "}
            <strong>بازآفرینی و مشارکت در ساخت</strong>، در آینده نزدیک فراهم
            کرده است.
          </p>
        </div>
        {/* Box 3 */}
        <div className="rounded-xl shadow p-4 flex flex-col items-center justify-between w-full max-w-xs md:h-[200px] h-[150px]   bg-gradient-to-t from-purple-50  to-purple-100">
          <h2 className="text-lg  font-bold mb-2 text-gray-900">
            بازآفرینی و مشارکت در ساخت{" "}
          </h2>
          <p className="text-gray-800 text-center md:mt-5  text-base">
            وجود پروژه ‌های متعدد در حال اجرا نشان از{" "}
            <strong>رونق ساختمانی و آینده ‌نگری توسعه ‌ای</strong> در منطقه است.
          </p>
        </div>
        {/* Box 4 */}
        <div className="rounded-xl shadow p-4 flex flex-col items-center justify-between w-full max-w-xs md:h-[200px] h-[150px]   bg-gradient-to-t from-purple-500 via-purple-600 to-purple-700">
          <h2 className="text-lg  font-bold mb-2 text-gray-900">
            ریسک سرمایه‌گذاری{" "}
          </h2>
          <p className="text-gray-800 text-center md:mt-5  text-base">
            ریسک سرمایه‌گذاری در این محله <strong>پایین تا متوسط</strong> است و
            در <strong>پروژه‌ های نوساز بازدهی بالایی</strong> دارد.
          </p>
        </div>
      </div>
    </div>
  );
}
