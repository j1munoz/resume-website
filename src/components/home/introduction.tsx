"use client";
import Image from "next/image";
import Jimmy from "@/public/jimmy.webp";
import { useState, useEffect, useMemo } from "react";

const Introduction = () => {
  const roles = useMemo(
    () => ["Frontend Developer", "Web Developer", "Software Engineer"],
    [],
  );
  const textColors = useMemo(
    () => [
      "text-resume-teal-100",
      "text-resume-red-100",
      "text-resume-purple-100",
    ],
    [],
  );

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];
    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => {
          setText(text.slice(0, -1));
          setCharIndex(charIndex - 1);
        }, 50);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setColorIndex((prev) => (prev + 1) % textColors.length);
      }
    } else {
      if (charIndex < fullText.length) {
        setTimeout(() => {
          setText(text + fullText[charIndex]);
          setCharIndex(charIndex + 1);
        }, 100);
      } else {
        setTimeout(() => {
          setIsDeleting(true);
        }, 2500);
      }
    }
  }, [text, isDeleting, charIndex, roleIndex, roles, textColors, colorIndex]);

  return (
    <div className="flex items-center justify-between gap-20">
      <div className="flex flex-col items-center text-5xl">
        <p className="text-white">Hey There, I&apos;m Jimmy Munoz, a</p>
        <p className={`${textColors[colorIndex]}`}>
          {text}
          <span className="animate-blink">|</span>
        </p>
      </div>
      <Image
        src={Jimmy}
        alt="Jimmy Munoz"
        height={300}
        className="rounded-full shadow-2xl"
      />
    </div>
  );
};

export default Introduction;
