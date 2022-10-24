/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';

export const Sidebar: NextPage = () => {
  return (
    <aside className="hidden lg:inline-flex justify-center p-10 w-[44%] md:w-[34%] h-[90vh] bg-white rounded-[20px]">
      <div className="w-full h-[82vh] scrollbar-hide">
        <div className="flex flex-col max-w-[80%] m-auto gap-4">
          <img src="/logo.svg" alt="" />
        </div>
        <h1 className="text-[#1992F9] font-semibold text-center pt-5">
          TODO aplication | Andrii Khmelovskyi
        </h1>
      </div>
    </aside>
  );
};
