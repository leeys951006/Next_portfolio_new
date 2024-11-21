// src/app/page.tsx
import React from 'react';
import '../public/css/home.css';

export default function Home() {
    return (
        <div className="container flex flex-col justify-center items-center h-screen w-4/12 mx-auto">
            <h1 className="font-bold text-3xl">이연승</h1>
            <div className="flex flex-col justify-center items-center border border-gray-400 rounded-md p-10 mt-5">
                <p className="text-center">
                    <img src="../img/hand.png" alt="인사" className="inline-block w-6 h-auto mb-1" /> 안녕하세요! 신입 개발자 이연승입니다.
                </p>
                <p className="mt-2 text-center">PHP, JavaScript, TypeScript 등 여러 언어를 경험하고 연구하며</p>
                <p className="text-center">실력 향상을 위해 꾸준히 노력하고 있습니다.</p>
                <p className="font-bold mt-5">이 사이트는 Next.js로 제작되었습니다.</p>
                <p className="font-bold mt-1">Project 페이지에 PHP로 제작된 포트폴리오도 확인 가능합니다.</p>
            </div>
            <div className="mt-4">
                <a href="/Resume" className="btn border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white mx-2 px-4 py-2 rounded-md transition">
                    Resume
                </a>
                <a href="/Project" className="btn border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white mx-2 px-4 py-2 rounded-md transition">
                    Project
                </a>
            </div>
            <div className="mt-4 flex space-x-4">
                <a href="https://github.com/leeys951006" target="_blank" rel="noopener noreferrer" className="btn border border-gray-300 hover:bg-gray-300 rounded-full p-2 transition">
                    <img src="../img/github.png" alt="GitHub" className="w-8 h-auto" />
                </a>
                <a href="https://nifty-mountain-1e6.notion.site/6082bd6c7d394c01a33ca3c9395cd3b1?v=7bdd17d9378f42e2bffce1b200cfc53a&pvs=4" target="_blank" rel="noopener noreferrer" className="btn border border-gray-300 hover:bg-gray-300 rounded-full p-2 transition">
                    <img src="../img/notion.png" alt="Notion" className="w-8 h-auto" />
                </a>
            </div>
        </div>
    );
}
