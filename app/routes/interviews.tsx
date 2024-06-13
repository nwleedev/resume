import { Outlet, useLocation } from "@remix-run/react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { useMemo } from "react";

export default function MDXPage() {
  const updatedAt = useMemo(() => {
    return format("2024-06-11T00:00:00+00:00", "yyyy년 MM월 dd일", {
      locale: ko,
    });
  }, []);
  const location = useLocation();
  const title = useMemo(() => {
    switch (location.pathname) {
      case "/resume": {
        return "이노원";
      }
      case "/portfolio": {
        return "이노원 포트폴리오";
      }
    }
    return "이노원";
  }, [location.pathname]);
  return (
    <div className="w-full mx-auto py-10 flex flex-col gap-y-2 bg-white px-4 sm:px-6 max-w-[1120px] mt-0 rounded shadow shadow-white">
      <section className="sm:flex sm:justify-between">
        <h1 className="text-2xl sm:text-4xl font-bold">{title}</h1>
        <span className="text-xs sm:text-sm">{updatedAt}에 업데이트</span>
      </section>
      <div className="flex flex-col gap-y-1">
        <p className="text-gray-600 text-base">
          웹 애플리케이션으로 사용자 문제를 해결하는 것을 최우선으로 생각하는
          프론트엔드 개발자 이노원입니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-x-4 gap-y-0.5">
          <div className="flex text-sm font-light text-gray-500 !my-0 gap-x-2">
            <span className="text-black font-semibold">이메일</span>
            <span>nw.lee@outlook.com</span>
          </div>
          <div className="flex text-sm font-light text-gray-500 !my-0 gap-x-2">
            <span className="text-black font-semibold">전화번호</span>
            <span>010-2214-1322</span>
          </div>
        </div>
      </div>
      <article className="prose prose-sm prose-slate pb-10 max-w-full leading-7">
        <Outlet />
      </article>
    </div>
  );
}
