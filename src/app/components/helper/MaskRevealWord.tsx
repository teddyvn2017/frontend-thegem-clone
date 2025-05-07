import React, { useRef } from 'react';
import { motion, useInView} from 'framer-motion';

interface MaskRevealWordProps {
  text: string;
}

const MaskRevealWord: React.FC<MaskRevealWordProps> = ({ text }) => {
    const words = text.split(' ');
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: false, margin: "-50px" }); //chạy 1 lần thì once: true
    // "once: true" nghĩa là chỉ chạy 1 lần, "margin" cho phép trigger sớm/muộn hơn
  	return (
		<div 
			ref={containerRef}			
			className="inline-flex flex-wrap gap-x-2">
		{
			words.map((word, index) => (
				<span key={index} className="inline-flex overflow-hidden">
					<motion.span
						className="inline-block"
						initial={{ x: "-100%" }}
						// animate={{ x: "0%" }}
						animate={isInView ? { x: "0%" } : {}} // chỉ chạy khi vào view
						transition={{
						duration: 0.8,
						ease: "easeOut",
						delay: 0.22 + index * 0.02, // giống delay của họ (220ms, 240ms, 260ms, ...)
						}}
					>
						{word}
					</motion.span>
				</span>
			))}
		</div>
  	);
};

export default MaskRevealWord;

// Hiệu ứng animation số 2 
// import React from 'react';
// import { motion } from 'framer-motion';

// interface MaskRevealWordProps {
//     text: string;
// }


// const MaskRevealWord: React.FC<MaskRevealWordProps> = ({ text }) => {
//     const words = text.split(' ');

//     // Hàm tạo transition cho từng từ
//     const getTransition = (index: number) => ({
//         duration: 0.8, // Chạy chậm hơn
//         ease: 'easeOut',
//         delay: index * 0.25, // Delay giữa mỗi từ lớn hơn
//     });

//     return (
//         <span className="inline-block overflow-hidden">
//             {words.map((word, index) => (
//                 <motion.span
//                     key={index}
//                     className="inline-flex relative overflow-hidden mr-2" // inline-flex để đúng behavior
//                     initial={{ x: '-100%', opacity: 0 }}
//                     animate={{ x: '0%', opacity: 1 }}
//                     transition={getTransition(index)}
//                 >
//                     {word}
//                 </motion.span>
//             ))}
//         </span>
//     );
// };

// export default MaskRevealWord;
