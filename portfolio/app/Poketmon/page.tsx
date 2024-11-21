import React from 'react';

export default function Poketmon() {
    return (
        <div className="flex flex-col items-start mt-5 mb-5 w-full max-w-[750px] mx-auto">
            <h1 className="text-3xl font-bold">랜덤 포켓몬</h1>
            <p className="mt-2">24.05.11 - 24.05.13</p>
            <img src="..\img\Poketmon.png" alt="PHP Portfolio" className="w-full h-50 object-cover mt-3 border-b-2" />

            <div className="flex mt-2">
                <a href="https://github.com/leeys951006/Pokemon.git" className="text-blue-500 hover:text-blue-300">
                    GitHub
                </a>
                <a href="https://nifty-mountain-1e6.notion.site/24-05-11-24-05-13-5ec60ad525b14e139fff5f5ba9da24da?pvs=4" className="text-blue-500 hover:text-blue-300 ml-2">
                    Notion
                </a>
            </div>

            <h1 className="text-2xl font-bold mt-4">SKILLS</h1>
            <div className="flex mt-4">
                <span className="bg-yellow-400 text-black font-bold rounded-full px-3 py-1 text-xs ml-2">JavaScript</span>
                <span className="bg-sky-400 text-black font-bold rounded-full px-3 py-1 text-xs ml-2">Node.js</span>
            </div>

            <h1 className="text-2xl font-bold mt-7">담당했던 기능</h1>
            <ul className="list-disc pl-5">
                <li className="mt-3">포켓몬 이름을 json파일로 가져와서 작업하였습니다.</li>
                <li>포켓몬 이미지는 포켓몬 사이트에서 이미지 번호에 반복문을 사용하여 설정하였습니다.</li>
            </ul>

            <h1 className="text-2xl font-bold mt-4">주요기능</h1>
            <ul className="list-disc pl-5">
                <li className="mt-3">버튼을 누르면 랜덤으로 포켓몬이 나오게 설정하였습니다.</li>
            </ul>

            <h1 className="text-2xl font-bold mt-4">작업이미지 갤러리</h1>

            <div className="grid grid-cols-2 gap-4 mt-10">
                <div className="scroll-ml-6">
                    <img src="/img/Poketmon/poketmon1.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/Poketmon/poketmon2.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/Poketmon/poketmon3.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
                <div className="scroll-ml-6">
                    <img src="/img/Poketmon/poketmonimg.png" className="w-full h-full object-cover" alt="Project Image" />
                </div>
            </div>
        </div>
    );
}
