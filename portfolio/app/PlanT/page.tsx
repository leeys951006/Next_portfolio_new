import React from 'react';

export default function PlanT() {
    return (
        <div className="flex flex-col items-start mt-5 mb-5 w-full max-w-[750px] mx-auto">
            <h1 className="text-3xl font-bold">Next.js Portfolio</h1>
            <p className="mt-2">24.09.15 - 24.09.22</p>
            <img src="..\img\PlanT main.png" alt="PHP Portfolio" className="w-full h-50 object-cover mt-3 border-b-2" />

            <div className="flex mt-2">
                <a href="https://github.com/leeys951006/Travel" className="text-blue-500 hover:text-blue-300">
                    GitHub
                </a>
                <a href="https://nifty-mountain-1e6.notion.site/Plan-T-decd39d6377342d0abfd94398062880e?pvs=4" className="text-blue-500 hover:text-blue-300 ml-2">
                    Notion
                </a>
            </div>

            <h1 className="text-2xl font-bold mt-4">SKILLS</h1>
            <div className="flex mt-4">
                <span className="bg-yellow-400 text-black font-bold rounded-full px-3 py-1 text-xs">Tailwind CSS</span>
                <span className="bg-yellow-400 text-black font-bold rounded-full px-3 py-1 text-xs ml-2">TypeScript</span>
                <span className="bg-yellow-400 text-black font-bold rounded-full px-3 py-1 text-xs ml-2">Python</span>
                <span className="bg-sky-400 text-black font-bold rounded-full px-3 py-1 text-xs ml-2">React</span>
                <span className="bg-sky-400 text-black font-bold rounded-full px-3 py-1 text-xs ml-2">Next.js</span>
                <span className="bg-sky-400 text-black font-bold rounded-full px-3 py-1 text-xs ml-2">Nest.js</span>
                <span className="bg-sky-400 text-black font-bold rounded-full px-3 py-1 text-xs ml-2">MySQL</span>
            </div>

            <h1 className="text-2xl font-bold mt-7">담당했던 기능</h1>
            <ul className="list-disc pl-5">
                <li className="mt-3">반응형 디자인을 적극적으로 고려하여 다양한 화면 크기에서도 일관된 사용자 경험을 제공하도록 스타일 작업을 진행했습니다.</li>
                <li>상단 탭 메뉴를 통해 사용자들이 직관적으로 원하는 페이지로 쉽게 이동할 수 있도록 구성했습니다.</li>
            </ul>

            <h1 className="text-2xl font-bold mt-4">주요기능</h1>
            <ul className="list-disc pl-5">
                <li className="mt-3">계획별로 양식을 지정하여 편리하게 계획을 설계할 수 있도록 구현하였습니다.</li>
                <li>소셜 로그인 기능을 구현하여 사용에 편리함을 추가하였습니다.</li>
                <li>개인과 공유 계획을 나눠 사용의 편리함을 추가하였습니다.</li>
            </ul>

            <h1 className="text-2xl font-bold mt-4">작업이미지 갤러리</h1>

            <div className="grid grid-cols-2 gap-4 mt-10">
                <div className="scroll-ml-6">
                    <img src="/img/PlanT/PlanT think.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/PlanT/PlanT design1.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/PlanT/PlanT design2.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/PlanT/PlanT design3.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/PlanT/PlanT mobile1.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/PlanT/PlanT mobile2.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/PlanT/PlanT prob.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/PlanT/PlanT project1.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/PlanT/PlanT project2.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/PlanT/PlanT project3.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/PlanT/PlanT login.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/PlanT/PlanT login2.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/PlanT/PlanT login3.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/PlanT/PlanT login4.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/PlanT/PlanT main.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/PlanT/PlanT main2.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/PlanT/PlanT main3.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/PlanT/PlanT main4.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/PlanT/PlanT MySQL1.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/PlanT/PlanT MySQL2.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
            </div>
        </div>
    );
}
