"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={toggle?"bg-[#0f172a] h-full flex justify-center py-10":" bg-[#7592d4] h-full flex justify-center py-10"}>
      <div className={toggle?"bg-[#1e293b] pt-[2rem] px-[2rem] mt-5 w-[59rem]  rounded-[8px] shadow-[0px_0px_1px_white] border-[1px_solid_#334155] text-white":"bg-[#ecf1f8] pt-[2rem] px-[2rem] mt-5 w-[59rem]  rounded-[8px] shadow-[0px_0px_1px_white] border-[1px_solid_#334155] text-black"}>
        <h2 className="text-[24px] text-[#a5b4fc] font-[700] mt-[32px]">API Pricing</h2>
        <p>Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:</p>
        <table className="w-[100%] mt-[1rem] rounded-[8px] overflow-hidden">
          <tbody className="bg-[#6366f1] border-[1px] border-[#334155] ">
            <tr className="h-[53px] font-[600] text-[13px]">
              <td className="pl-[1rem]">API</td>
              <td className="pl-[1rem]">MODEL</td>
              <td className="pl-[1rem]">PRICE PER 1K TOKENS</td>
            </tr>
          </tbody>
          <tbody className="">
            <tr className="h-[53px] border-[1px] border-[#334155] ">
              <td className="pl-[1rem]">OpenAI</td>
              <td className="pl-[1rem]">GPT-3.5</td>
              <td className="pl-[1rem]">$0.002</td>
            </tr>
            <tr className="h-[53px] border-[1px] border-[#334155] ">
              <td className="pl-[1rem]">OpenAI</td>
              <td className="pl-[1rem]">GPT-4</td>
              <td className="pl-[1rem]">$0.03</td>
            </tr>
            <tr className="h-[53px] border-[1px] border-[#334155] ">
              <td className="pl-[1rem]">Together AI</td>
              <td className="pl-[1rem]">Llama-2-70b</td>
              <td className="pl-[1rem]">$0.0008</td>
            </tr>
            <tr className="h-[53px] border-[1px] border-[#334155] ">
              <td className="pl-[1rem]">Together AI</td>
              <td className="pl-[1rem]">Llama-2-13b</td>
              <td className="pl-[1rem]">$0.0006</td>
            </tr>
          </tbody>
        </table>
        <h3 className="text-[19px] text-[#a5b4fc] font-[700] mt-[32px]">Token Estimation</h3>
        <p>On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>
        <h3 className="text-[19px] text-[#a5b4fc] font-[700] mt-[32px]">Billing</h3>
        <p className="pb-5">You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>
      </div>
      <div className="fixed bottom-10 right-10 hover:cursor-pointer" onClick={()=>toggle? setToggle(false):setToggle(true)}>
        {toggle ? <div className="bg-white p-3 rounded-[20px] border-2 border-black">LIGHT MODE</div> : <div className="bg-black text-white p-3 rounded-[20px] border-2 border-white">DARK MODE</div>}
      </div>
    </div>
  );
}
