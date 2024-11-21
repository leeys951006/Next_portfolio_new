// src/app/layout.tsx
import React from 'react';
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>My Portfolio</title>
            </head>
            <body>
                <div className="border-b pb-2">
                    <ul className="flex justify-center space-x-10 mt-2">
                        <li className="list-none">
                            <a className="text-gray-800 font-bold hover:text-gray-400 transition-colors duration-300 text-lg" href="/">
                                Home
                            </a>
                        </li>
                        <li className="list-none">
                            <a className="text-gray-800 font-bold hover:text-gray-400 transition-colors duration-300 text-lg" href="/Resume">
                                Resume
                            </a>
                        </li>
                        <li className="list-none">
                            <a className="text-gray-800 font-bold hover:text-gray-400 transition-colors duration-300 text-lg" href="/Project">
                                Project
                            </a>
                        </li>
                    </ul>
                </div>
                <main>{children}</main>
            </body>
        </html>
    );
}
