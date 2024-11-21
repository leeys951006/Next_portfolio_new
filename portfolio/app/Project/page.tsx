import React from 'react';
import Link from 'next/link';

export default function Project() {
    return (
        <div className="container flex flex-col  mt-5 mb-5 mx-auto" style={{ width: '750px' }}>
            <div className="grid grid-cols-3 grid-rows-3 gap-4 justify-items-center items-center">
                <Link className="flex flex-col w-full h-full  justify-center items-start border rounded " href="/PHP_portfolio">
                    <img src="/img/PHP Portfolio.png" alt="" className="w-full h-32 object-cover border-b" />
                    <h1 className="ml-5 font-bold mt-3 text-2xl">PHP Portfolio</h1>
                    {/* <a className="ml-5 mt-1 text-blue-500 hover:text-blue-300" href="https://github.com/leeys951006/PHP-portfolio.git" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a> */}
                    <div className="flex ml-5 mt-5">
                        <p className="bg-yellow-400 font-bold rounded-full p-1 text-xs">PHP</p>
                        <p className="bg-yellow-400 font-bold rounded-full p-1 text-xs ml-1">Bootstrap</p>
                    </div>
                    <div className="flex mt-1 ml-5">
                        <p className="bg-sky-400 font-bold rounded-full p-1 text-xs mt-1">Codeigniter</p>
                    </div>
                    <div className="border w-full mt-20">
                        <p className="ml-5 mt-1 text-sm font-bold">개인프로젝트</p>
                        <p className="ml-5 text-sm mt-1 mb-1">24.11.15 - 24.11.20</p>
                    </div>
                </Link>
                <Link className="flex flex-col w-full h-full  justify-center items-start border rounded " href="/Next.js">
                    <img src="/img/Next.js Portfolio.png" alt="" className="w-full h-32 object-cover border-b" />
                    <h1 className="ml-5 font-bold mt-3 text-2xl">Next.js Portfolio</h1>
                    <div className="flex">
                        {/* <a className="ml-5 mt-1 text-blue-500 hover:text-blue-300" href="https://github.com/leeys951006/Portfolio" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a className="ml-2 mt-1 text-blue-500 hover:text-blue-300" href="https://nifty-mountain-1e6.notion.site/7607604066474dfc80b5f5078713cac3?pvs=4" target="_blank" rel="noopener noreferrer">
                            Notion
                        </a> */}
                    </div>
                    <div className="flex ml-5 mt-5">
                        <p className="bg-yellow-400 font-bold rounded-full p-1 text-xs">Tailwind CSS</p>
                        <p className="bg-yellow-400 font-bold rounded-full p-1 text-xs ml-1">TypeScript</p>
                    </div>
                    <div className="flex mt-1 ml-5">
                        <p className="bg-sky-400 font-bold rounded-full p-1 text-xs mt-1">React</p>
                        <p className="bg-sky-400 font-bold rounded-full p-1 text-xs mt-1 ml-1">Next.js</p>
                    </div>
                    <div className="border w-full mt-20">
                        <p className="ml-5 mt-1 text-sm font-bold">개인프로젝트</p>
                        <p className="ml-5 text-sm mt-1 mb-1">24.09.15 - 24.09.22</p>
                    </div>
                </Link>
                <Link className="flex flex-col w-full h-full  justify-center items-start border rounded " href="/PlanT">
                    <img src="/img/PlanT main.png" alt="" className="w-full h-32 object-cover border-b" />
                    <h1 className="ml-5 font-bold mt-3 text-2xl">여행 공유 사이트</h1>
                    <div className="flex">
                        {/* <a className="ml-5 mt-1 text-blue-500 hover:text-blue-300" href="https://github.com/leeys951006/Travel" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a className="ml-2 mt-1 text-blue-500 hover:text-blue-300" href="https://nifty-mountain-1e6.notion.site/Plan-T-decd39d6377342d0abfd94398062880e?pvs=4" target="_blank" rel="noopener noreferrer">
                            Notion
                        </a> */}
                    </div>
                    <div className="flex ml-5 mt-5">
                        <p className="bg-yellow-400 font-bold rounded-full p-1 text-xs">Tailwind CSS</p>
                        <p className="bg-yellow-400 font-bold rounded-full p-1 text-xs ml-1">TypeScript</p>
                        <p className="bg-yellow-400 font-bold rounded-full p-1 text-xs ml-1">Python</p>
                    </div>
                    <div className="flex mt-1 ml-5">
                        <p className="bg-sky-400 font-bold rounded-full p-1 text-xs mt-1">React</p>
                        <p className="bg-sky-400 font-bold rounded-full p-1 text-xs mt-1 ml-1">Next.js</p>
                        <p className="bg-sky-400 font-bold rounded-full p-1 text-xs mt-1 ml-1">Nest.js</p>
                        <p className="bg-sky-400 font-bold rounded-full p-1 text-xs mt-1 ml-1">MySQL</p>
                    </div>
                    <div className="border w-full mt-20">
                        <p className="ml-5 mt-1 text-sm font-bold">개인프로젝트</p>
                        <p className="ml-5 text-sm mt-1 mb-1">24.09.15 - 24.09.22</p>
                    </div>
                </Link>
                <Link className="flex flex-col w-full h-full  justify-center items-start border rounded " href="/Tonic">
                    <img src="/img/Tonic.png" alt="" className="w-full h-32 object-cover border-b" />
                    <h1 className="ml-5 font-bold mt-3 text-2xl">영양제 조절 사이트</h1>
                    <div className="flex">
                        {/* <a className="ml-5 mt-1 text-blue-500 hover:text-blue-300" href="https://github.com/leeys951006/Tonic.git" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a className="ml-2 mt-1 text-blue-500 hover:text-blue-300" href="https://nifty-mountain-1e6.notion.site/f11ef4686e184f92a7c75d82cd3b35e6?pvs=4" target="_blank" rel="noopener noreferrer">
                            Notion
                        </a> */}
                    </div>
                    <div className="flex ml-5 mt-5">
                        <p className="bg-yellow-400 font-bold rounded-full p-1 text-xs">HTML</p>
                        <p className="bg-yellow-400 font-bold rounded-full p-1 text-xs ml-1">CSS</p>
                        <p className="bg-yellow-400 font-bold rounded-full p-1 text-xs ml-1">JavaScript</p>
                    </div>
                    <div className="flex mt-1 ml-5">
                        <p className="bg-sky-400 font-bold rounded-full p-1 text-xs mt-1">SQLite</p>
                        <p className="bg-sky-400 font-bold rounded-full p-1 text-xs mt-1 ml-1">Node.js</p>
                    </div>
                    <div className="border w-full mt-20">
                        <p className="ml-5 mt-1 text-sm font-bold">개인프로젝트</p>
                        <p className="ml-5 text-sm mt-1 mb-1">24.07.15 - 24.08.28</p>
                    </div>
                </Link>
                <Link className="flex flex-col w-full h-full  justify-center items-start border rounded " href="/Stress">
                    <img src="/img/Stress.png" alt="" className="w-full h-32 object-cover border-b" />
                    <h1 className="ml-5 font-bold mt-3 text-2xl">스트레스 블로그</h1>
                    <div className="flex">
                        {/* <a className="ml-5 mt-1 text-blue-500 hover:text-blue-300" href="https://github.com/leeys951006/blognew.git" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a className="ml-2 mt-1 text-blue-500 hover:text-blue-300" href="https://nifty-mountain-1e6.notion.site/blog-24-05-24-24-07-07-192fa48e9c8c4b639f3b85e51022c73a?pvs=4" target="_blank" rel="noopener noreferrer">
                            Notion
                        </a> */}
                    </div>
                    <div className="flex ml-5 mt-5">
                        <p className="bg-yellow-400 font-bold rounded-full p-1 text-xs">HTML</p>
                        <p className="bg-yellow-400 font-bold rounded-full p-1 text-xs ml-1">CSS</p>
                        <p className="bg-yellow-400 font-bold rounded-full p-1 text-xs ml-1">JavaScript</p>
                    </div>
                    <div className="flex mt-1 ml-5">
                        <p className="bg-sky-400 font-bold rounded-full p-1 text-xs mt-1 ml-1">Node.js</p>
                    </div>
                    <div className="border w-full mt-20">
                        <p className="ml-5 mt-1 text-sm font-bold">개인프로젝트</p>
                        <p className="ml-5 text-sm mt-1 mb-1">24.05.24 - 24.07.07</p>
                    </div>
                </Link>
                <Link className="flex flex-col w-full h-full  justify-center items-start border rounded " href="/Poketmon">
                    <img src="/img/Poketmon.png" alt="" className="w-full h-32 object-cover border-b" />
                    <h1 className="ml-5 font-bold mt-3 text-2xl">랜덤 포켓몬</h1>
                    <div className="flex">
                        {/* <a className="ml-5 mt-1 text-blue-500 hover:text-blue-300" href="https://github.com/leeys951006/Pokemon.git" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a className="ml-2 mt-1 text-blue-500 hover:text-blue-300" href="https://nifty-mountain-1e6.notion.site/24-05-11-24-05-13-5ec60ad525b14e139fff5f5ba9da24da?pvs=4" target="_blank" rel="noopener noreferrer">
                            Notion
                        </a> */}
                    </div>
                    <div className="flex ml-5 mt-5">
                        <p className="bg-yellow-400 font-bold rounded-full p-1 text-xs">JavaScript</p>
                    </div>
                    <div className="flex mt-1 ml-5">
                        <p className="bg-sky-400 font-bold rounded-full p-1 text-xs mt-1 ml-1">Node.js</p>
                    </div>
                    <div className="border w-full mt-20">
                        <p className="ml-5 mt-1 text-sm font-bold">개인프로젝트</p>
                        <p className="ml-5 text-sm mt-1 mb-1">24.05.11 - 24.05.13</p>
                    </div>
                </Link>
                <Link className="flex flex-col w-full h-full  justify-center items-start border rounded " href="/ERP">
                    <img src="/img/ERP_main.png" alt="" className="w-full h-32 object-cover border-b" />
                    <h1 className="ml-5 font-bold mt-3 text-2xl">ERP System</h1>
                    <div className="flex">
                        {/* <a className="ml-5 mt-1 text-blue-500 hover:text-blue-300" href="https://github.com/leeys951006/KDT-IaaS-2-ProjectA-1team.git" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a className="ml-2 mt-1 text-blue-500 hover:text-blue-300" href="https://kongukjae.notion.site/031dbe5061414b209e756b27124b3abf?pvs=4" target="_blank" rel="noopener noreferrer">
                            Notion
                        </a> */}
                    </div>
                    <div className="flex ml-5 mt-5">
                        <p className="bg-yellow-400 font-bold rounded-full p-1 text-xs">Tailwind CSS</p>
                        <p className="bg-yellow-400 font-bold rounded-full p-1 text-xs ml-1">TypeScript</p>
                        <p className="bg-yellow-400 font-bold rounded-full p-1 text-xs ml-1">Python</p>
                    </div>
                    <div className="flex mt-1 ml-5">
                        <p className="bg-sky-400 font-bold rounded-full p-1 text-xs mt-1 ml-1">Next.js</p>
                        <p className="bg-sky-400 font-bold rounded-full p-1 text-xs mt-1 ml-1">FastAPI</p>
                        <p className="bg-sky-400 font-bold rounded-full p-1 text-xs mt-1 ml-1">SQLite</p>
                    </div>
                    <div className="border w-full mt-20">
                        <p className="ml-5 mt-1 text-sm font-bold">팀프로젝트</p>
                        <p className="ml-5 text-sm mt-1 mb-1">24.07.15 - 24.08.14</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
