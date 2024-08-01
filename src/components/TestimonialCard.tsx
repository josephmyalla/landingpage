import Image from 'next/image'

interface TestimonialCardProps {
    text?:string
    imageSrc:string
    name:string
    username?:string
}


export const TestimonialCard = ({text,imageSrc,name,username}:TestimonialCardProps) => {
    return (
        <div className="">
            <div className="card">
                <div>
                    <p>{text}</p>
                </div>
                <div className='flex gap-5 mt-[30px]'>
                   <div>
                       <Image src={imageSrc} alt={name} className="rounded-full" width={40} height={40} />
                   </div>
                   <div className="flex flex-col">
                       <p className="font-semibold tracking-tight leading-5">{name}</p>
                       <p className="tracking-tight leading-5 text-gray-500">{username}</p>
                   </div>
                </div>             
            </div>
        </div>
    );
  };
  