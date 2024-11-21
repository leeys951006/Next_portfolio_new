import React from 'react';

export default function Tonic() {
    return (
        <div className="flex flex-col items-start mt-5 mb-5 w-full max-w-[750px] mx-auto">
            <h1 className="text-3xl font-bold">영양제 조절 사이트</h1>
            <p className="mt-2">24.07.15 - 24.08.28</p>
            <img src="..\img\Tonic.png" alt="PHP Portfolio" className="w-full h-50 object-cover mt-3 border-b-2" />

            <div className="flex mt-2">
                <a href="https://github.com/leeys951006/Tonic.git" className="text-blue-500 hover:text-blue-300">
                    GitHub
                </a>
                <a href="https://nifty-mountain-1e6.notion.site/f11ef4686e184f92a7c75d82cd3b35e6?pvs=4" className="text-blue-500 hover:text-blue-300 ml-2">
                    Notion
                </a>
            </div>

            <h1 className="text-2xl font-bold mt-4">SKILLS</h1>
            <div className="flex mt-4">
                <span className="bg-yellow-400 text-black font-bold rounded-full px-3 py-1 text-xs">HTML</span>
                <span className="bg-yellow-400 text-black font-bold rounded-full px-3 py-1 text-xs ml-2">CSS</span>
                <span className="bg-yellow-400 text-black font-bold rounded-full px-3 py-1 text-xs ml-2">JavaScript</span>
                <span className="bg-sky-400 text-black font-bold rounded-full px-3 py-1 text-xs ml-2">SQLite</span>
                <span className="bg-sky-400 text-black font-bold rounded-full px-3 py-1 text-xs ml-2">Node.js</span>
            </div>

            <h1 className="text-2xl font-bold mt-7">담당했던 기능</h1>
            <ul className="list-disc pl-5">
                <li className="mt-3">반응형 디자인을 적극적으로 고려하여 다양한 화면 크기에서도 일관된 사용자 경험을 제공하도록 스타일 작업을 진행했습니다.</li>
                <li>하단 탭 메뉴를 통해 사용자들이 직관적으로 원하는 페이지로 쉽게 이동할 수 있도록 구성했습니다.</li>
            </ul>

            <h1 className="text-2xl font-bold mt-4">주요기능</h1>
            <ul className="list-disc pl-5">
                <li className="mt-3">설정한 성별,나이에 따라 영양제 기준 셋팅이 변경되게 하였습니다.</li>
                <li>현재 복용중인 영양제 용량을 입력하면 부족 또는 과섭취 부분을 한눈에 보기쉽도록 바 형식으로 나타내었습니다.</li>
                <li>영양분 정보 탭을 만들어서 영양분에 대한 정보를 알기 쉽도록 만들었습니다.</li>
                <li>언어 설정 기능을 추가하였습니다.</li>
            </ul>

            <h1 className="text-2xl font-bold mt-4">작업이미지 갤러리</h1>

            <div className="grid grid-cols-2 gap-4 mt-10">
                <div className="scroll-ml-6">
                    <img src="/img/Drug/Tonic.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/Drug/Tonic1.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/Drug/Tonic2.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/Drug/Tonic3.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/Drug/Tonic add.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/Drug/Tonic add 2.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/Drug/Tonic add 3.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/Drug/Tonic inf.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/Drug/Tonic Lan 1.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/Drug/Tonic Lan 2.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/Drug/Tonic Lan 3.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/Drug/Tonic Lan.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/Drug/Tonic profile.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
            </div>
        </div>
    );
}
