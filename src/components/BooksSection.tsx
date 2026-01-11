"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import Image from "next/image";

type Book = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  image?: string;
};

type ValuesProps = {
  data: {
    books: Book[];
  };
};

export const BooksSection = ({ data }: ValuesProps) => {
  const [currentBook, setCurrentBook] = useState(0);

  const nextBook = () => {
    setCurrentBook((prev) => (prev + 1) % data.books.length);
  };

  const prevBook = () => {
    setCurrentBook(
      (prev) => (prev - 1 + data.books.length) % data.books.length
    );
  };

  const book = data.books[currentBook];

  return (
    <section className="py-20 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
      {/* Arrière-plan animé */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-1 bg-blue-600"></div>
            <h2 className="text-4xl font-bold">MES OUVRAGES</h2>
          </div>

          <div className="relative bg-white/5 backdrop-blur-sm rounded-[3rem] border border-white/10 overflow-hidden">
            <div className="grid lg:grid-cols-2 min-h-125">
              <div className="bg-gray-800/50 flex items-center justify-center p-12 relative group gap-3">
                <button
                  onClick={prevBook}
                  className="p-3 rounded-full border border-white/20 hover:bg-white/10 hover:border-white transition-all text-white"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <Image
                  src={`${book.image}`}
                  alt={book.title}
                  width={300}
                  height={400}
                  className="w-48 md:w-60 lg:w-72 shadow-2xl rounded-lg transform group-hover:rotate-3 transition-transform duration-500"
                />
                <button
                  onClick={nextBook}
                  className="p-3 rounded-full border border-white/20 hover:bg-white/10 hover:border-white transition-all text-white"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Cercles déco derriere */}
                <div className="absolute w-full h-full opacity-30 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-100 border border-white/10 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 border border-dashed border-white/5 rounded-full animate-spin-slow"></div>
                </div>
              </div>

              <div className="p-10 lg:p-16 flex flex-col justify-center relative">
                <div className="flex gap-2 mb-6">
                  {data.books.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentBook(idx)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        idx === currentBook
                          ? "w-8 bg-blue-600"
                          : "w-2 bg-gray-600 hover:bg-gray-500"
                      }`}
                    />
                  ))}
                </div>

                <div
                  className="animate-in fade-in slide-in-from-right-4 duration-500"
                  key={currentBook}
                >
                  <span className="text-blue-400 font-bold tracking-wider text-sm mb-2 block">
                    PUBLICATION {book.year}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                    {book.title}
                  </h3>
                  <h4 className="text-xl text-gray-400 mb-8 font-light italic">
                    {book.subtitle}
                  </h4>

                  <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-md">
                    {book.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
