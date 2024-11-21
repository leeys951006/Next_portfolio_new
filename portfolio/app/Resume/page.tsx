import React from 'react';

export default function Resume() {
    return (
        <div className="container flex flex-col items-start mt-5 mb-5 mx-auto" style={{ width: '750px' }}>
            {/* Contact Section */}
            <div className="flex mt-10 pb-4 w-full justify-center items-center">
                <img src="/img/photo.jpg" alt="photo" className="w-48 h-auto rounded-full" />
                <div className="ms-12" style={{ width: '20vw' }}>
                    <p className="font-bold text-yellow-500">Contact</p>
                    <div className="flex mt-3">
                        <p className="font-bold">Name</p>
                        <p className="ms-2">이연승</p>
                    </div>
                    <div className="flex mt-1">
                        <p className="font-bold">Email</p>
                        <p className="ms-2">leeys951006@gmail.com</p>
                    </div>
                    <div className="flex mt-1">
                        <p className="font-bold">Phone</p>
                        <p className="ms-2">010-5546-0640</p>
                    </div>
                    <p className="font-bold text-yellow-500 mt-4">Channel</p>
                    <div className="flex mt-3">
                        <p className="font-bold">GitHub</p>
                        <a href="https://github.com/leeys951006" target="_blank" rel="noopener noreferrer" className="ms-2 text-dark text-decoration-none">
                            https://github.com/leeys951006
                        </a>
                    </div>
                    <div className="flex mt-1">
                        <p className="font-bold">Notion</p>
                        <a href="https://nifty-mountain-1e6.notion.site/6082bd6c7d394c01a33ca3c9395cd3b1?v=7bdd17d9378f42e2bffce1b200cfc53a&pvs=4" target="_blank" rel="noopener noreferrer" className="ms-2 text-dark text-decoration-none truncate">
                            https://nifty-mountain-1e6.notion.site/6082bd6c7d394c01a33ca3c9395cd3b1?v=7bdd17d9378f42e2bffce1b200cfc53a&pvs=4
                        </a>
                    </div>
                </div>
            </div>

            {/* Introduce Section */}
            <div className="w-full mt-10">
                <h1 className="mt-5 text-yellow-500 text-3xl">Introduce</h1>
                <div className="border-b border-gray-200 pb-8 mt-3 border-t-4 border-black">
                    <p className="mt-8 text-sm">새로운 도전에 두려워하지 않는 개발자 이연승입니다.</p>
                    <p className="mt-2 text-sm">저는 비개발 분야에서 경력을 시작했지만, 개인 사업을 하며 개발에 대한 흥미를 갖게 되었습니다.</p>
                    <p className="mt-2 text-sm">7개월 동안 KDT 학원에서 학습하였고, 팀 프로젝트와 개인 프로젝트를 통해 다양한 언어를 경험 및 학습하였습니다.</p>
                    <p className="mt-2 text-sm">1차 팀 프로젝트에서는 git과 github의 사용법을 중점으로 작업하였고 2차 팀 프로젝트는 아키텍처 설계와 작업 우선순위를 체계화 하여 작업에 임했습니다.</p>
                    <p className="mt-2 text-sm">저는 git과 github를 사용하여 협업 또는 작업의 효율을 증가시켰고 Notion을 통해 지식과 문제 해결 방법을 정리하여 작업을 진행하였습니다.</p>
                    <p className="mt-2 text-sm">회사와 개발 트렌드를 위해 새로운 언어에 대한 두려움을 없애고자 여러 언어를 경험하고 습득하는 중이며, 앞으로도 끊임없이 학습하며 도전하는 개발자로 성장해 나가려고 합니다.</p>
                </div>
            </div>

            {/* Education Section */}
            <div className="w-full">
                <h1 className="mt-5 text-yellow-500 text-3xl">Education</h1>
                <div className="border-b border-gray-200 pb-4 mt-3 border-t-4 border-black">
                    {[
                        {
                            period: '2011.03 - 2014.02 | 졸업',
                            institution: '대전 대신 고등학교',
                            department: '',
                        },
                        {
                            period: '2014.03 - 2016.02 | 졸업',
                            institution: '대덕대학교',
                            department: '세무회계과',
                        },
                        {
                            period: '2020.03 - 2020.07 | 편입',
                            institution: '국립 공주대학교',
                            department: '응용수학과',
                        },
                        {
                            period: '2024.01 - 진행중 | 졸업예정',
                            institution: '학점은행제',
                            department: '컴퓨터공학과',
                        },
                        {
                            period: '2024.03 - 2024.10 | 수료',
                            institution: '그린컴퓨터아트학원',
                            department: 'KDT 지역인재 양성을 위한 laaS기반 웹 서비스 개발자 과정 2기',
                        },
                    ].map(({ period, institution, department }, index) => (
                        <div key={institution} className={`flex justify-between pb-2 ${index === 4 ? '' : 'border-b border-gray-200'}`}>
                            <div className="flex flex-col">
                                <p className="text-secondary mt-3 text-sm">{period}</p>
                                <h3 className="font-bold text-sm">{institution}</h3>
                            </div>
                            <p className="mt-8 text-sm">{department}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Career Section */}
            <div className="w-full">
                <h1 className="mt-5 text-yellow-500 text-3xl">Career</h1>
                <div className="border-b border-gray-200 pb-4 mt-3 border-t-4 border-black">
                    {[
                        { company: '(주)고려인텍', period: '2022.09 - 2024.02' },
                        { company: 'HLB 헬스케어', period: '2022.01 - 2022.04' },
                        { company: '지오매틱스', period: '2021.07 - 2021.12' },
                        { company: '킵스바이오', period: '2020.03 - 2021.04' },
                        { company: '대전오월드', period: '2019.09 - 2020.02' },
                        { company: '삼성물산대전사무소', period: '2018.10 - 2019.02' },
                        { company: '한국정보통신진흥협회', period: '2018.03 - 2018.08' },
                    ].map(({ company, period }, index) => (
                        <div key={company} className={`flex justify-between pb-2 ${index === 6 ? '' : 'border-b border-gray-200'}`}>
                            <h3 className="font-bold mt-3 text-sm">{company}</h3>
                            <p className="mt-3 text-sm">{period}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tools Section */}
            <div className="w-full">
                <h1 className="mt-5 text-yellow-500 text-3xl">Tools</h1>
                <div className="border-b border-gray-200 pb-4 mt-3 border-t-4 border-black">
                    {[
                        { category: 'Language', tools: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'PHP'] },
                        { category: 'Frontend', tools: ['React', 'Next.js', 'Codeigniter'] },
                        { category: 'Backend', tools: ['FastAPI', 'Codeigniter'] },
                        { category: 'DB', tools: ['MySQL', 'SQLite'] },
                        { category: 'Communication', tools: ['Github', 'Notion', 'Slack'] },
                        { category: 'Design', tools: ['Figma'] },
                    ].map(({ category, tools }, index) => (
                        <div key={category} className={`flex justify-between pb-2 mt-3 ${index === 5 ? '' : 'border-b border-gray-200'}`}>
                            <h3 className="font-bold ml-5 text-sm">{category}</h3>
                            <div className="flex flex-col align-items-start w-1/4">
                                {tools.map((tool) => (
                                    <p className="ml-12 text-sm" key={tool}>
                                        {tool}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
