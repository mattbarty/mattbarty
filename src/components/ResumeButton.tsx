"use client";

import clsx from "clsx";

const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = 'pdf/matthew_barty_010225.pdf';
  link.download = 'pdf/matthew_barty_010225.pdf';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

type ResumeButtonProps = {
  className?: string;
  props?: React.ComponentPropsWithoutRef<'button'>;
};

export default function ResumeButton({ className, ...props }: ResumeButtonProps) {
  return (
    <button className={clsx(
      className,
      'bg-teal-600 hover:bg-teal-500 p-3 rounded-lg text-zinc-100',
    )}
      onClick={handleDownloadResume}
      {...props}
    >
      Download resume
    </button>
  );
}