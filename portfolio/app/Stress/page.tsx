import React from 'react';

export default function Stress() {
    return (
        <div className="flex flex-col items-start mt-5 mb-5 w-full max-w-[750px] mx-auto">
            <h1 className="text-3xl font-bold">스트레스 블로그</h1>
            <p className="mt-2">24.05.24 - 24.07.07</p>
            <img src="..\img\Stress.png" alt="PHP Portfolio" className="w-full h-50 object-cover mt-3 border-b-2" />

            <div className="flex mt-2">
                <a href="https://github.com/leeys951006/blognew.git" className="text-blue-500 hover:text-blue-300">
                    GitHub
                </a>
                <a href="https://nifty-mountain-1e6.notion.site/blog-24-05-24-24-07-07-192fa48e9c8c4b639f3b85e51022c73a?pvs=4" className="text-blue-500 hover:text-blue-300 ml-2">
                    Notion
                </a>
            </div>

            <h1 className="text-2xl font-bold mt-4">SKILLS</h1>
            <div className="flex mt-4">
                <span className="bg-yellow-400 text-black font-bold rounded-full px-3 py-1 text-xs">HTML</span>
                <span className="bg-yellow-400 text-black font-bold rounded-full px-3 py-1 text-xs ml-2">CSS</span>
                <span className="bg-yellow-400 text-black font-bold rounded-full px-3 py-1 text-xs ml-2">JavaScript</span>
                <span className="bg-sky-400 text-black font-bold rounded-full px-3 py-1 text-xs ml-2">Node.js</span>
            </div>

            <h1 className="text-2xl font-bold mt-7">담당했던 기능</h1>
            <ul className="list-disc pl-5">
                <li className="mt-3">상단 탭 메뉴를 통해 사용자들이 직관적으로 원하는 페이지로 쉽게 이동할 수 있도록 구성했습니다.</li>
            </ul>

            <h1 className="text-2xl font-bold mt-4">주요기능</h1>
            <ul className="list-disc pl-5">
                <li className="mt-3">스트레스 종류에 따라 탭을 만들어 분류를 하였습니다.</li>
                <li>DB사용 방법을 알기 전의 프로젝트라 저장은 안되지만 글 생성이 가능하게 작업했습니다.</li>
            </ul>

            <h1 className="text-2xl font-bold mt-4">작업이미지 갤러리</h1>

            <div className="grid grid-cols-2 gap-4 mt-10">
                <div className="scroll-ml-6">
                    <img src="/img/Stress/Stress1.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/Stress/Stress2.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/Stress/Stress blog.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/Stress/Stress blog list.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/Stress/Stress blog coments.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
            </div>
        </div>
    );
}
