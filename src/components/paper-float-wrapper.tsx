import * as React from 'react';

const PaperFloatWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex pt-2 pb-2 print:p-0">
      {/* Left Filler */}
      <div className="flex-1" />

      {/* Centered Content */}
      <div className="p-6 max-w-[1100px] flex flex-col basis-full shadow shadow-current print:shadow-none">
        {children}
      </div>

      {/* Right Filler */}
      <div className="flex-1" />
    </div>
  );
};

export default PaperFloatWrapper;
