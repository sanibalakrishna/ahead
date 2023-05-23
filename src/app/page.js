import { IoLocationSharp, IoLogoApple, IoFlowerSharp } from "react-icons/io5";
import { BsFillStarFill } from "react-icons/bs";
import { SiGhostery } from "react-icons/si";

import SmallCards from "./components/SmallCards";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Smallcard from "./components/Smallcard";
import VacanciesCard from "./components/VacanciesCard";
import GhoseCircleAnimation from "./components/GhoseCircleAnimation";

import OpenFromLeft from "./components/OpenFromLeft";
import Card3 from "./components/Card3";
import VerticalTimelin from "./components/VerticalTimelin";

export default function Home() {
  return (
    <main className="max-w-screen px-12">
      <div className="flex flex-row justify-between w-full bg-violet-100 rounded-2xl  py-28 px-10">
        <div className="flex flex-col gap-5">
          <OpenFromLeft>
            <p className="text-normal">Ahead app</p>
            <h1 className="text-5xl w-96 font-semibold">
              Master your life by matering emotions
            </h1>
          </OpenFromLeft>
          <div className="flex gap-10">
            <div className="flex bg-black text-white rounded-xl py-2 px-4 w-48">
              <IoLogoApple size={40} />
              <div className="flex flex-col justify-center">
                <p className="text-xs">Download on the</p>
                <p className="text-xl font-bold">App Store</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex gap-3">
                <BsFillStarFill className="text-lg text-yellow-500" />
                <BsFillStarFill className="text-lg text-yellow-500" />
                <BsFillStarFill className="text-lg text-yellow-500" />
                <BsFillStarFill className="text-lg text-yellow-500" />
                <BsFillStarFill className="text-lg text-yellow-500" />
              </div>
              <p className="text-sm">100+ AppStore reviews</p>
            </div>
          </div>
        </div>
        <GhoseCircleAnimation />
      </div>

      <div className="flex w-full justify-evenly mt-10">
        <div className="w-1/4 font-semibold text-4xl">EQ beats IQ</div>
        <div className="w-1/4 text-xl text-slate-900">
          People with high emotional intelligence (EQ) live more fullfilled
          lives.They tend to be happier and have healthier relationships.
        </div>
        <div className="w-1/4 text-xl text-slate-900">
          They are more successful in their pursuits and make for inspiring
          leaders.According to science, they earn $29k a year.
        </div>
      </div>

      <div>
        <OpenFromLeft>
          <h1 className="text-4xl font-bold ml-10 mt-10">
            Does this sound familiar...
          </h1>
        </OpenFromLeft>
        <SmallCards />
      </div>

      <div className="w-full flex bg-red-50 rounded-2xl py-28 px-10 mt-10">
        <div className="flex flex-col gap-5  w-1/2  items-center">
          <OpenFromLeft>
            <p className="text-normal">Build out of frastration</p>
            <h1 className="text-5xl  font-semibold">Meet the ahead app </h1>
          </OpenFromLeft>

          <div className="relative bg-violet-200 w-44 h-44 rounded-full flex items-center justify-center">
            <IoFlowerSharp
              size={30}
              className="absolute -top-1 left-[40%] text-yellow-600"
            />
            <div className="bg-white w-40  h-40 flex justify-center items-center rounded-full">
              <SiGhostery size={100} className="text-violet-500" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-1/2">
          <h1 className="text-xl">
            A personalized pocket coach that provides bite-size,science-driven
            tools to boost emotional intelligence.
          </h1>
          <h1 className="text-xl">
            Think of it as a pocket cheeleader towards a better,more fulfilling
          </h1>
        </div>
      </div>

      <div className="mt-10 pl-10 ">
        <OpenFromLeft>
          <h1>Wrong with self-improvement & how we are fixing it.</h1>
          <h1 className="font-bold text-5xl">Slef-improvement. Ugh.</h1>
        </OpenFromLeft>
        <div className="flex justify-center h-96 w-full">
          <VerticalTimelin />
        </div>
      </div>
      <div className="flex w-full justify-evenly mt-10">
        <div className="w-1/4 font-semibold text-4xl">
          Be the best you with EQ
        </div>
        <div className="w-1/4 text-xl text-slate-900">
          Not having your own emotions under control might be holding you back.
        </div>
        <div className="w-1/4 text-xl text-slate-900">
          Additionally,not understanding those of others stops you from being
          parent,friend you can be.
        </div>
      </div>
      <Card3 />
      <div className=" flex justify-center mt-10">
        <div className="flex flex-col items-center w-[40%] gap-4">
          <h1>We take privacy seriously</h1>
          <h1 className="font-bold text-4xl">Before you get started </h1>
          <h1 className="text-center font-xl text-slate-600">{`"We won't share your answers with anyone (and won't ever tell you which friends said what about you)"`}</h1>
          <h1>with love,</h1>
          <button className="bg-black text-white py-3 px-5 rounded-full text-xs font-semibold">
            Start a test
          </button>
          <h1 className="text-slate-600 text-xs font-medium">
            Take only 5 minutes
          </h1>
        </div>
      </div>
      <div className="w-full flex justify-between bg-violet-100 rounded-2xl py-28 px-10 mt-10">
        <div className="flex flex-col gap-5 w-1/2 ">
          <OpenFromLeft>
            <h1 className="text-5xl font-semibold">Work with us</h1>
          </OpenFromLeft>
          <div className="bg-white rounded-xl">
            <Image
              src={logo}
              alt="logo"
              height={40}
              width={40}
              className="ml-3 mt-3"
            />
            <div className="p-8">
              <h1 className="font-semibold text-2xl">About</h1>
              <p className="text-xl font-light">
                {` At a head out good is to make self-improvement fun and lasting.
                We know there's way how to make it work.And that's what aHead is
                all about!`}
              </p>
            </div>
            <div className="bg-red-100 rounded-b-xl p-8">
              <h1 className="font-semibold text-2xl">Product</h1>
              <p className="text-lg font-light">
                Sure,you could spend ages reading books or sitting in seminars
                on how to become a better spouse, parent, or manager - like we
                did...
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <OpenFromLeft right={true}>
            <h1 className="font-bold text-violet-400 text-5xl text-right">
              ahead
            </h1>
          </OpenFromLeft>
          <div className="flex flex-col gap-3 overflow-y-scroll scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-gray-200 h-96 pr-6">
            <Smallcard />
            <Smallcard />
            <Smallcard />
            <Smallcard />
            <Smallcard />
            <Smallcard />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <OpenFromLeft>
          <h1 className="font-bold text-4xl ">Open Vacancies</h1>
        </OpenFromLeft>
        <div className="flex w-full justify-between mt-10">
          <VacanciesCard
            position={"Senior Full-Stack Engineer"}
            salary={"$65-100k,0.5%-1.50% equity share options"}
          />
          <VacanciesCard
            position={"Senior Designer"}
            salary={"$40-60k,0.25%-0.50% equity share options"}
          />
          <VacanciesCard
            position={"Superstar Intern"}
            salary={"$20-24k,0.5%-1.50% equity share options"}
          />
        </div>
      </div>
    </main>
  );
}
