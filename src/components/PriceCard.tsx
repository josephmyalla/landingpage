import CheckIcon from "@/assets/check.svg"
import {twMerge} from "tailwind-merge"

interface CardProps {
    title?:string
    monthlyPrice?: number
    buttonText?: string
    popular?: boolean
    inverse?: boolean
    features:string[]
}

export const PriceCard = ({title,monthlyPrice,buttonText,features,popular,inverse}:CardProps) => {
    return (
        <div>
            <div className={twMerge("card", inverse===true && "border-black bg-black text-white")}>

               <div className="flex justify-between">
                
                <h3 className={twMerge("text-lg font-bold text-black/50", inverse=== true && "text-white")}>{title}</h3>
                {
                    popular === true && (
                        <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                        <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">Popular</span>
                       </div>
                    )
                }
                </div>

                <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bolf tracking-tighter leading-none">${monthlyPrice}</span>
                <span>/month</span>
                </div>
                <button className={twMerge("btn btn-primary w-full mt-[30px]",inverse === true && "text-black bg-white hover:bg-white/50 hover:text-white")}>{buttonText}</button>
                <ul className="flex flex-col gap-5 mt-8">
                    {
                        features.map((feature,index)=>{  
                         return(<li className="text-sm flex items-center gap-4" key={index}>
                                  <CheckIcon className="h-6 w-6"/>
                                  <span>{feature}</span>  
                            </li>)   
                        }
                    )
                    }
                </ul>
            </div>
        </div>
    );
  };
  