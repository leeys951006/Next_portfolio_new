import React from 'react';

export default function PHPPortfolio() {
    return (
        <div className="flex flex-col items-start mt-5 mb-5 w-full max-w-[750px] mx-auto">
            <h1 className="text-3xl font-bold">PHP Portfolio</h1>
            <p className="mt-2">24.11.15 - 24.11.20</p>
            <img src="/img/PHP/PHP.png" alt="PHP Portfolio" className="w-full h-50 object-cover mt-3 border-b-2" />

            <div className="flex mt-2">
                <a href="https://github.com/leeys951006/PHP-portfolio.git" className="text-blue-500 hover:text-blue-300">
                    GitHub
                </a>
                {/* <a href="http://" className="text-blue-500 hover:text-blue-300 ml-2">Notion</a> */}
            </div>

            <h1 className="text-2xl font-bold mt-4">SKILLS</h1>
            <div className="flex mt-4">
                <span className="bg-yellow-400 text-black font-bold rounded-full px-3 py-1 text-xs">PHP</span>
                <span className="bg-yellow-400 text-black font-bold rounded-full px-3 py-1 text-xs ml-2">Bootstrap</span>
                <span className="bg-sky-400 text-black font-bold rounded-full px-3 py-1 text-xs ml-2">Codeigniter</span>
            </div>

            <h1 className="text-2xl font-bold mt-7">담당했던 기능</h1>
            <ul className="list-disc pl-5">
                <li className="mt-3">상단 탭 메뉴를 통해 사용자들이 직관적으로 원하는 페이지로 쉽게 이동할 수 있도록 구성했습니다.</li>
                <li>이력서를 한눈에 보기 쉽도록 디자인하였습니다.</li>
            </ul>

            <h1 className="text-2xl font-bold mt-4">주요기능</h1>
            <ul className="list-disc pl-5">
                <li className="mt-3">버튼을 누르면 해당 페이지로 바로 이동이 되게 설정하였습니다.</li>
                <li>프로젝트별로 한눈에 보기 쉽게 설정하였습니다.</li>
                <li>포트폴리오 사이트 하나로 Notion, GitHub 등 전체적인 정보를 얻을 수 있게 설정하였습니다.</li>
            </ul>

            <h1 className="text-2xl font-bold mt-4">작업이미지 갤러리</h1>

            <div className="grid grid-cols-2 gap-4 mt-10">
                <div className="scroll-ml-6">
                    <img src="/img/PHP/PHP.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/PHP/PHP1.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/PHP/PHP2.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
            </div>
        </div>
    );
}
