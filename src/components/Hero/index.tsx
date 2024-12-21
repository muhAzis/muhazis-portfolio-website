'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ProfilePict from '../../assets/profile-pict.png';
import ProfilePictFull from '../../assets/profile-pict-full.png';
import LogoPict from '../../assets/logo.svg';
import Marquee from 'react-fast-marquee';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { toast } from 'sonner';
import dayjs from 'dayjs';
import CopyCard from './CopyCard';

const Hero = () => {
  const [isCoppied, setIsCoppied] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCoppied(false);
    }, 2000);
    
    if(isCoppied) {
      timer;
    }

    return () => clearTimeout(timer);
  }, [isCoppied]);

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
  }
  
  return (
    <div className='relative w-full min-h-[100vh] p-5 md:p-20 grid grid-cols-3 gap-20 bg-twilight-500 items-center justify-between'>
      <div className='absolute w-full top-1/2 left-0 -translate-y-1/2'>
        <Marquee speed={200} gradient={false}>
          <p className='mr-10 text-twilight-900 text-[400px] font-bold opacity-10 cursor-default'>Website Frontend Developer - Graphic Designer - </p>
        </Marquee>
      </div>
      
      <div className='flex col-span-1 drop-shadow-lg items-center justify-center'>
        <div className='flex flex-col max-w-[350px] gap-4'>
          <div className='flex gap-4 items-center'>
            <HoverCard>
              <HoverCardTrigger asChild>
                <span className="relative flex w-[60px] h-[60px]">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 "></span>
                  <span className="relative inline-flex rounded-full h-full w-full bg-green-400"></span>
                  <Image
                    src={ProfilePict}
                    alt="@muhazis"
                    width={50}
                    height={50}
                    className='absolute top-[50%] left-[50%] bg-white -translate-x-[50%] -translate-y-[50%] rounded-full cursor-pointer'
                  />
                </span>
              </HoverCardTrigger>
              <HoverCardContent className="flex flex-col w-fit max-w-[400px] gap-4 text-white bg-black border-black" side="bottom" align="start">
                <span className='pb-2 font-bold text-lg border-b border-white/10'>Hi, I'm <span className='px-3 mx-1 bg-green-500 rounded-full text-sm'>OPEN</span> to work!</span>
                <span className='text-sm'>I'm currently working at:</span>
                <div className='flex pb-4 gap-4 border-b border-white/10 items-center'>
                  <Image
                    src="https://setaraberdaya.com/Elearning/public/image/perusahaan/Logo%20Infomedia%20500.png-1703036267.png"
                    alt="@muhazis"
                    width={50}
                    height={50}
                    className='h-fit bg-white rounded-full'
                  />
                  <div>
                    <a href='https://www.infomedia.co.id/' target='_blank' className='font-bold hover:underline'>PT Infomedia Nusantara <i className="ri-external-link-line"/></a>
                    <div className='text-sm font-semibold'>Jr. Frontend Web Developer</div>
                    <div className='mt-2 text-sm'>< i className="ri-calendar-2-line"/> Joined {dayjs('2024-05-14').format('MMM YYYY')}</div>
                    <div className='text-sm'>< i className="ri-contract-line"/> Paid Internship</div>
                  </div>
                </div>
                
                <CopyCard
                  className='bg-white/5 border-0 text-white backdrop-blur-none'
                  title='Contact me!'
                  subtitle='muhabdulazis555@gmail.com'
                  copyContent='muhabdulazis555@gmail.com'
                  copyMessage='Email copied to clipboard'
                  permalink='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvmZlJNRsBnwGvJNzhfmjLckspRplvMNMjNlZBWdJjXnKMMhVWFQVzGhcCnQfjVBZcfnQB'
                />
              </HoverCardContent>
            </HoverCard>
            <p className='font-bold text-white text-xl leading-tight'>Muhamad<br/>Abdul Azis</p>
          </div>

          <p className='text-white text-lg'>
            a <span className='font-bold text-golden-300'>Frontend Web Developer</span> based Programmer and a <span className='font-bold text-golden-300'>Graphic Designer</span>. Specialized in <span className='font-bold text-golden-300'>Code Development</span>, <span className='font-bold text-golden-300'>Responsive Web Layouts</span> and <span className='font-bold text-golden-300'>UI/UX Design</span>.
          </p>

          <p className='text-white text-sm leading-relaxed'>
            Graduated from an almost-IT major in one of most favorite university in Indonesia. The main focus is in digital electronics which requires programming most of the time, so I decided to deepen my programming skill as a web developer because I love visuals.
          </p>

          <div className='flex gap-4 text-white text-3xl items-center'>
            <a href='https://github.com/muhAzis' target='_blank'>
              <i className='ri-github-fill'/>
            </a>
            <a href='https://www.instagram.com/mas_aj.is/' target='_blank'>
              <i className='ri-instagram-fill'/>
            </a>
            <a href='https://www.facebook.com/muh.ab.azis' target='_blank'>
              <i className='ri-facebook-circle-fill'/>
            </a>
            <a href='https://www.linkedin.com/in/muhabdulazis/' target='_blank'>
              <i className='ri-linkedin-box-fill'/>
            </a>
          </div>
        </div>
      </div>
      
      <div className='relative flex col-span-1 items-center justify-center'>
        <Image
          // ref={logoRef}
          src={LogoPict}
          alt="logo-pict"
          quality={100}
          className='w-[100%] max-w-[300px] drop-shadow-2xl animate-hover transition-all hover:scale-110'
        />

        <div className='absolute flex w-[100%] max-w-[300px] h-[100%] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] items-center justify-center'>
          <div
            // ref={pictRef}
            className='relative w-[100%] h-[100%] drop-shadow-2xl bg-white rounded-3xl overflow-hidden transition-all'
            style={{
              transform: 'rotateY(0deg)',
              transition: 'all 0.5s',
              opacity: 0
            }}
          >
            <Image
              src={ProfilePictFull}
              alt="profile-pict"
              quality={100}
              className='absolute w-[100%] bottom-0 left-0'
            />
          </div>
        </div>
      </div>

      <div className='flex h-full max-h-[600px] col-span-1 items-center justify-center'>
        <div className='flex flex-col w-full max-w-[350px] h-fit py-8 px-6 gap-4 text-white rounded-lg'>
          {/* <p className='w-full text-center text-2xl font-bold'>My Specialization</p>
          <p className='w-full text-center mb-2'>These are some skills that I oftenly practice and implement when I working on a poject</p>

          <div className='flex gap-4 items-center rounded-lg p-2 bg-white/10 backdrop-blur-md border-2 border-white/30'>
            <div className='ri-code-s-slash-line text-3xl'/>
            <div>
              <p className='font-semibold'>Clean Code</p>
              <p className='text-sm'>I make the code to be readable and easy to maintain</p>
            </div>
          </div>
          <div className='flex gap-4 items-center rounded-lg p-2 bg-white/10 backdrop-blur-md border-2 border-white/30'>
            <div className='ri-collage-line text-3xl'/>
            <div>
              <p className='font-semibold'>Responsive Layout</p>
              <p className='text-sm'>Compatibility to any device's screen size</p>
            </div>
          </div>
          <div className='flex gap-4 items-center rounded-lg p-2 bg-white/10 backdrop-blur-md border-2 border-white/30'>
            <div className='ri-markup-line text-3xl'/>
            <div>
              <p className='font-semibold'>Minimalist Design</p>
              <p className='text-sm'>Simple and easy to understand UI to comfort the user's experience</p>
            </div>
          </div>
          <div className='flex gap-4 items-center rounded-lg p-2 bg-white/10 backdrop-blur-md border-2 border-white/30'>
            <div className='ri-rocket-2-line text-3xl'/>
            <div>
              <p className='font-semibold'>Latest Technology</p>
              <p className='text-sm'>Following the tech trends based on the project's needs</p>
            </div>
          </div> */}

          <p className='w-full text-center text-2xl font-bold'>Get in touch with me!</p>
          <p className='w-full text-center mb-2'>Interested in my skills and wanted to discuss your next amazing project? You can find me here</p>

          <CopyCard
            title='Whatsapp'
            subtitle='+62 877 3490 0348'
            icon='ri-whatsapp-line'
            copyContent='087734900348'
            copyMessage='Whatsapp number copied to clipboard'
            permalink='https://wa.me/6287734900348'
          />
          <CopyCard
            title='E-mail'
            subtitle='muhabdulazis555@gmail.com'
            icon='ri-mail-line'
            copyContent='muhabdulazis555@gmail.com'
            copyMessage='Email copied to clipboard'
            permalink='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvmZlJNRsBnwGvJNzhfmjLckspRplvMNMjNlZBWdJjXnKMMhVWFQVzGhcCnQfjVBZcfnQB'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero