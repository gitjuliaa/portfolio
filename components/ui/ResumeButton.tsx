'use client';
import DynamicIcon from '../dynamic-icon';

interface ResumeButtonProps {
  lightIcon: string;
  darkIcon: string;
  label: string;
}

export default function ResumeButton({ lightIcon, darkIcon, label }: ResumeButtonProps) {
  return (
    <a
      href="/resume.pdf" // Ensure your PDF is in the /public folder with this name
      download="resume.pdf"
      className='bg-almost-black hover:bg-dark-gray-4 border-dark-gray-4 group relative flex w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] border p-[14px_18px] transition-all duration-300'
    >
      <div className='flex items-center justify-center gap-2'>
        {/* Icon */}
        <div className='relative aspect-square h-5 w-5 overflow-hidden opacity-70 transition-all duration-500 group-hover:opacity-100'>
          <figure className='absolute inset-0 h-full w-full rounded-[inherit]'>
            <DynamicIcon
              darkImage={darkIcon}
              lightImage={lightIcon}
              altText='Resume Icon'
              className='block h-full w-full object-cover object-center'
              width={20}
              height={20}
            />
          </figure>
        </div>

        {/* Text */}
        <div className='h-auto w-auto flex-none shrink-0 flex-col justify-start whitespace-pre opacity-70 group-hover:opacity-100'>
          <p className='text-very-light-gray font-IBM_Plex_Mono text-[15px] leading-[100%] font-medium uppercase'>
            {label}
          </p>
        </div>
      </div>
    </a>
  );
}