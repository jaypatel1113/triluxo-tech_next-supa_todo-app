// import { useState } from 'react';
// import { AiOutlinePlus } from 'react-icons/ai';

// import SectionWrapper from './SectionWrapper';
// import { faqsData } from '../constants';

// const Faqs = () => {
//     const [selected, setSelected] = useState(-1);

//     const clickHandler = (index) => {
//         if(selected === index) {
//             setSelected(-1);
//         } else {
//             setSelected(index);
//         }
//     }

//     return (
//         <SectionWrapper title={"FAQS"} id="faqs">
//             <div className="mt-[30px] md:mt-[56px] flex flex-col gap-2 md:gap-5 relative z-[1] ">
//                 {faqsData.map((data, i) => (
//                     <div 
//                         className="bg-[#14141475] border border-[#FFFFFF1F] rounded-2xl overflow-hidden"
//                         key={data.id}
//                     >
//                         <div 
//                             className={`flex items-center gap-4 w-full justify-between px-6 ${selected===data.id ? "py-5 border-b" : "py-5 md:py-[37px] border-b-0"} transition-all duration-150 font-sfmono border-b border-[#FFFFFF14] cursor-pointer`}
//                             onClick={() => clickHandler(data.id)}
//                         >
//                             <div className='text-[#FFFFFFAD] text-sm md:text-xl tracking-tight '>
//                                 Q{i+1}. {data.que}
//                             </div>
//                             <AiOutlinePlus className={`text-[26px] ${selected === data.id ? "rotate-[135deg]" : "rotate-0"} transition-all duration-150 stroke-[1.2] min-w-min`} />
//                         </div>
//                         <div className={`px-6 font-sfmono ${selected === data.id ? "max-h-[1000px] py-5 " : "max-h-0 py-0 "} transition-all duration-150 text-sm md:text-base `}>
//                             {data.ans}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </SectionWrapper>
//     );
// };

// export default Faqs;

// const Faqs: React.FC = (): React.ReactNode => {
//     return <div>
//         hey
//     </div>;
// };

// export default Faqs;
