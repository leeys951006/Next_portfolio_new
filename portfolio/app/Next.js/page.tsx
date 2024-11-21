import React from 'react';

export default function NextPortfolio() {
    return (
        <div className="flex flex-col items-start mt-5 mb-5 w-full max-w-[750px] mx-auto">
            <h1 className="text-3xl font-bold">Next.js Portfolio</h1>
            <p className="mt-2">24.09.15 - 24.09.22</p>
            <img src="..\img\Next.js Portfolio.png" alt="PHP Portfolio" className="w-full h-50 object-cover mt-3 border-b-2" />

            <div className="flex mt-2">
                <a href="https://github.com/leeys951006/Portfolio" className="text-blue-500 hover:text-blue-300">
                    GitHub
                </a>
                <a href="https://nifty-mountain-1e6.notion.site/7607604066474dfc80b5f5078713cac3?pvs=4" className="text-blue-500 hover:text-blue-300 ml-2">
                    Notion
                </a>
            </div>

            <h1 className="text-2xl font-bold mt-4">SKILLS</h1>
            <div className="flex mt-4">
                <span className="bg-yellow-400 text-black font-bold rounded-full px-3 py-1 text-xs">Tailwind CSS</span>
                <span className="bg-yellow-400 text-black font-bold rounded-full px-3 py-1 text-xs ml-2">TypeScript</span>
                <span className="bg-sky-400 text-black font-bold rounded-full px-3 py-1 text-xs ml-2">React</span>
                <span className="bg-sky-400 text-black font-bold rounded-full px-3 py-1 text-xs ml-2">Next.js</span>
            </div>

            <h1 className="text-2xl font-bold mt-7">담당했던 기능</h1>
            <ul className="list-disc pl-5">
                <li className="mt-3">상단 탭 메뉴를 통해 사용자들이 직관적으로 원하는 페이지로 쉽게 이동할 수 있도록 구성했습니다.</li>
                <li>마우스 포인터 옆에 설명을 넣어 사용자가 쉽게 알 수 있도록 설정하였습니다.</li>
                <li>오른쪽 하단 버튼을 클릭하면 페이지 상단으로 이동하는 버튼을 생성하였습니다.</li>
            </ul>

            <h1 className="text-2xl font-bold mt-4">주요기능</h1>
            <ul className="list-disc pl-5">
                <li className="mt-3">이메일을 클릭하면 복사가 되도록 설정하였습니다.</li>
                <li>사용자가 이미지를 쉽게 볼 수 있도록 설정하였습니다.</li>
                <li>포트폴리오 사이트 하나로 Notion,Github,PDF 등 전체적인 정보를 얻을 수 있게 설정하였습니다.</li>
            </ul>

            <h1 className="text-2xl font-bold mt-4">작업이미지 갤러리</h1>

            <div className="grid grid-cols-2 gap-4 mt-10">
                <div className="scroll-ml-6">
                    <img src="/img/Next/port1.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/Next/port2.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/Next/port3.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/Next/port4.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/Next/port5.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/Next/port6.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
            </div>
        </div>
    );
}
