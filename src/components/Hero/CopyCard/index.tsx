import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

type CopyCard = {
  className?: string;
  title: string;
  subtitle: string;
  copyContent: string;
  copyMessage?: string;
  permalink?: string;
  icon?: string;
};

const CopyCard: React.FC<CopyCard> = ({ className, title, subtitle, copyContent, copyMessage, permalink, icon }) => {
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
    <div className={clsx('flex gap-4 items-center rounded-lg p-2 bg-white/10 backdrop-blur-md border-2 border-white/30 overflow-hidden', className)}>
      {icon &&
        <div className={clsx(icon, 'flex text-3xl items-center')}/>
      }
      <div className='flex-1 overflow-hidden'>
        {permalink
        ? <a href={permalink} target='_blank' className='font-semibold break-words hover:underline'>{title} <i className="ri-external-link-line"/></a>
        : <p className='font-semibold break-words'>{title}</p>
        }
        <p className='text-xs !break-words'>{subtitle}</p>
      </div>
      {isCoppied
      ? <div className="ri-checkbox-circle-line flex w-8 justify-center"/>
      : <div
          className="ri-file-copy-line flex cursor-pointer w-8 justify-center"
          onClick={() => {
            copyToClipboard(copyContent);
            setIsCoppied(true);
            toast.success(copyMessage?? `${copyContent} copied to clipboard`);
          }}
        />}
    </div>
  )
}

export default CopyCard