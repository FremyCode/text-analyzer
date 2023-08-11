"use client";
import React, { useEffect, useState } from "react";

export const TextAnalyzer = () => {
  const [words, setWords] = useState([""]);
  const [text, setText] = useState("");
  const [sentences, setSentences] = useState([""]);
  const [paragraphs, setParagraphs] = useState([""]);
  const [pronouns, setPronouns] = useState<number>();
  const [readingTime, setReadingTime] = useState<number>(0);
  const [longestWord, setLongestWord] = useState("");

  function countWords(text: string) {
    const words = text.trim().split(/\s+/);
    setWords(words);
  }

  function countSentences(text: string) {
    const sentences = text
      .split(/[.!?]/)
      .filter((sentence) => sentence.trim() !== "");
    setSentences(sentences);
  }

  function countParagraphs(text: string) {
    const paragraphs = text
      .split(/\n{2,}/)
      .filter((paragraph) => paragraph.trim() !== "");
    setParagraphs(paragraphs);
  }

  function findLongestWord(text: string) {
    const words = text.trim().split(/\s+/);
    let longestWord = "";

    words.forEach((word) => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    });

    setLongestWord(longestWord);
  }

  function countPronouns(text: string) {
    // List of pronouns to count (you can expand this list)
    const pronouns = [
      "he",
      "him",
      "his",
      "she",
      "her",
      "hers",
      "they",
      "them",
      "their",
      "theirs",
    ];

    const words = text.trim().toLowerCase().split(/\s+/);
    const pronounCount = words.reduce((count, word) => {
      if (pronouns.includes(word)) {
        return count + 1;
      }
      return count;
    }, 0);

    setPronouns(pronounCount);
  }

  function countReadingTime(text: string) {
    if (text == "") {
      setReadingTime(0);
    } else {
      setReadingTime(Math.ceil(words.length / 3));
    }
  }

  useEffect(() => {
    countSentences(text);
    countParagraphs(text);
    countPronouns(text);
    findLongestWord(text);
    countReadingTime(text);

    if (text == "") {
      countWords("");
    } else {
      countWords(text);
    }
  }, [text]);

  return (
    <>
      <section className="bg-slate-700 grid grid-cols-5 gap-4 text-center p-2">
        <div>
          <h2>Words</h2>
          <p className="font-bold">{words[0] !== "" ? words.length : "0"}</p>
        </div>
        <div>
          <h2>Characters</h2>
          <p className="font-bold">{text.length}</p>
        </div>
        <div>
          <h2>Sentences</h2>
          <p className="font-bold">{sentences.length}</p>
        </div>
        <div>
          <h2>Paragraphs</h2>
          <p className="font-bold">{paragraphs.length}</p>
        </div>
        <div>
          <h2>Pronouns</h2>
          <p className="font-bold">{pronouns}</p>
        </div>
      </section>
      <section className="text-center py-5">
        <textarea
          className="w-full h-[50dvh] bg-slate-800 p-3"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </section>
      <section className="bg-slate-700 grid grid-cols-2 gap-5 text-center p-3">
        <div>
          <p>Average reading time</p>
          <p className="font-bold">
            {readingTime} {readingTime > 1 ? "seconds" : "second"}
          </p>
        </div>
        <div>
          <p>Longest word</p>
          <p className="font-bold">{longestWord}</p>
        </div>
      </section>
    </>
  );
};
