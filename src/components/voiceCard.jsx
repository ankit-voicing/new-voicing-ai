import React, { useRef, useState } from "react";

const VoiceCard = ({ name, id, tags, photo, audioSrc, rating }) => {
  const audioRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);
  const filledStars = Math.min(Math.floor(rating), 5);
  const emptyStars = 5 - filledStars;

  const handlePlayAudio = () => {
    if (audioRef.current) audioRef.current.play();
  };

  const handleCopy = (id) => {
    if (!navigator.clipboard) return console.error("Clipboard API is not available");
    setIsCopied(true);
    navigator.clipboard.writeText(id).catch((error) => console.error("Failed to copy text: ", error));
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="w-[321px] h-[179px] p-4 bg-white rounded-[12.42px] border border-solid border-[#d6d9e580] shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#3682FA] shadow-sm">
            <img src={photo} alt="User Photo" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-[16px] font-semibold text-gray-800">{name}</div>
            <div className="flex gap-2 items-center text-sm text-gray-500">
              <p>{id.length > 10 ? `${id.substring(0, 10)}...` : id}</p>
              <button onClick={() => handleCopy(id)} className="hover:text-blue-600 transition-colors duration-200">
                {!isCopied ? <CopyIcon /> : <CheckIcon />}
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          {Array.from({ length: filledStars }).map((_, idx) => <StarRate key={`filled-${idx}`} />)}
          {Array.from({ length: emptyStars }).map((_, idx) => <EmptyStar key={`empty-${idx}`} />)}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-[#f0f2f5] text-xs rounded-full text-gray-600 animate-fadeIn">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <button
          onClick={handlePlayAudio}
          className="w-full max-w-[296px] h-[38px] flex items-center justify-center border border-[#3682FA] rounded-full transition-transform duration-300 hover:bg-[#f0f8ff] hover:scale-105 shadow-sm"
        >
          <VolumeUp />
          <span className="font-semibold bg-gradient-to-r from-[#3682FA] to-[#3F3CFF] bg-clip-text text-transparent ml-2">
            Play
          </span>
        </button>
        <audio ref={audioRef} src={audioSrc} />
      </div>
    </div>
  );
};

export default VoiceCard;


export const EmptyStar = () => {
  return (
    <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Components/Rate-Star/Default">
        <path id="Union" d="M13.035 9.18834L9.14868 8.62354L7.41142 5.10156C7.36397 5.00513 7.28591 4.92707 7.18948 4.87962C6.94764 4.76023 6.65375 4.85972 6.53283 5.10156L4.79557 8.62354L0.909297 9.18834C0.802153 9.20365 0.704193 9.25416 0.629192 9.33069C0.53852 9.42389 0.488555 9.54927 0.490277 9.67928C0.491999 9.8093 0.545267 9.93331 0.638375 10.0241L3.45014 12.7654L2.78585 16.6364C2.77027 16.7264 2.78024 16.8191 2.81461 16.9037C2.84899 16.9884 2.90641 17.0617 2.98035 17.1154C3.05429 17.1691 3.14179 17.2011 3.23295 17.2076C3.3241 17.2141 3.41525 17.1949 3.49606 17.1522L6.97213 15.3246L10.4482 17.1522C10.5431 17.2027 10.6533 17.2196 10.7589 17.2012C11.0252 17.1553 11.2043 16.9027 11.1584 16.6364L10.4941 12.7654L13.3059 10.0241C13.3824 9.94907 13.4329 9.85111 13.4482 9.74396C13.4896 9.4761 13.3028 9.22814 13.035 9.18834V9.18834Z" fill="#EAEAEC" />
      </g>
    </svg>
  )
};

export const StarRate = () => {
  return (
    <svg
      width="14"
      height="22"
      viewBox="0 0 14 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Components/Rate-Star/Default">
        <path
          id="Union"
          d="M13.1404 9.18834L9.25415 8.62354L7.51689 5.10156C7.46944 5.00513 7.39137 4.92707 7.29494 4.87962C7.0531 4.76023 6.75922 4.85972 6.6383 5.10156L4.90104 8.62354L1.01477 9.18834C0.907622 9.20365 0.809661 9.25416 0.73466 9.33069C0.643989 9.42389 0.594024 9.54927 0.595746 9.67928C0.597468 9.8093 0.650736 9.93331 0.743844 10.0241L3.55561 12.7654L2.89132 16.6364C2.87574 16.7264 2.88571 16.8191 2.92008 16.9037C2.95446 16.9884 3.01187 17.0617 3.08581 17.1154C3.15975 17.1691 3.24726 17.2011 3.33842 17.2076C3.42957 17.2141 3.52072 17.1949 3.60153 17.1522L7.07759 15.3246L10.5537 17.1522C10.6486 17.2027 10.7588 17.2196 10.8644 17.2012C11.1307 17.1553 11.3098 16.9027 11.2639 16.6364L10.5996 12.7654L13.4113 10.0241C13.4879 9.94907 13.5384 9.85111 13.5537 9.74396C13.595 9.4761 13.4083 9.22814 13.1404 9.18834V9.18834Z"
          fill="url(#paint0_linear_1315_4343)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1315_4343"
          x1="0.595703"
          y1="11.0189"
          x2="13.5594"
          y2="11.0189"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3682FA" />
          <stop offset="1" stopColor="#3F3CFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};


export const VolumeUp = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M9.68088 14.8167C9.57036 14.8165 9.46256 14.7824 9.37194 14.719L3.95182 10.9188C3.88002 10.8689 3.82133 10.8024 3.78074 10.7248C3.74016 10.6473 3.71889 10.5611 3.71875 10.4736V5.04471C3.71889 4.95719 3.74016 4.871 3.78074 4.79348C3.82133 4.71597 3.88002 4.64943 3.95182 4.59955L9.37194 0.79932C9.45095 0.745768 9.54268 0.714053 9.63785 0.70738C9.73302 0.700707 9.82826 0.719313 9.91395 0.761318C10.0054 0.804916 10.0828 0.873287 10.1374 0.958683C10.192 1.04408 10.2216 1.14309 10.2229 1.24449V14.2738C10.2231 14.3735 10.1959 14.4713 10.1443 14.5566C10.0926 14.6418 10.0186 14.7111 9.93021 14.757C9.85306 14.7966 9.76757 14.8171 9.68088 14.8167ZM4.80277 10.1913L9.13887 13.2315V2.28684L4.80277 5.32702V10.1913Z" fill="url(#paint0_linear_46_20718)" />
      <path d="M4.25698 11.0156H2.08893C1.65768 11.0156 1.24409 10.8441 0.939146 10.5386C0.634205 10.2332 0.462891 9.81893 0.462891 9.38698V6.12964C0.462891 5.6977 0.634205 5.28344 0.939146 4.978C1.24409 4.67257 1.65768 4.50098 2.08893 4.50098H4.25698C4.40073 4.50098 4.53859 4.55817 4.64024 4.65999C4.74188 4.7618 4.79899 4.89988 4.79899 5.04387V10.4728C4.79899 10.6167 4.74188 10.7548 4.64024 10.8566C4.53859 10.9585 4.40073 11.0156 4.25698 11.0156ZM2.08893 5.58676C1.94518 5.58676 1.80731 5.64395 1.70567 5.74576C1.60402 5.84758 1.54692 5.98566 1.54692 6.12964V9.38698C1.54692 9.53096 1.60402 9.66905 1.70567 9.77086C1.80731 9.87267 1.94518 9.92987 2.08893 9.92987H3.71496V5.58676H2.08893Z" fill="url(#paint1_linear_46_20718)" />
      <path d="M9.67773 10.4722V9.38643C9.99913 9.38615 10.3132 9.29048 10.5804 9.1115C10.8475 8.93252 11.0557 8.67826 11.1786 8.38084C11.3016 8.08341 11.3338 7.75616 11.2712 7.44042C11.2086 7.12468 11.0539 6.83461 10.8268 6.60684L11.5965 5.83594C11.9764 6.21558 12.2353 6.69968 12.3403 7.22687C12.4453 7.75406 12.3916 8.3006 12.1861 8.7972C11.9806 9.2938 11.6325 9.71809 11.1859 10.0163C10.7393 10.3145 10.2144 10.4732 9.67773 10.4722Z" fill="url(#paint2_linear_46_20718)" />
      <path d="M12.7356 11.3685C12.5934 11.3679 12.4571 11.3114 12.3562 11.2111C12.2668 11.1073 12.2199 10.9735 12.225 10.8366C12.23 10.6997 12.2865 10.5697 12.3833 10.4728C12.7356 10.1199 13.0151 9.70093 13.2058 9.23984C13.3965 8.77875 13.4947 8.28455 13.4947 7.78547C13.4947 7.28638 13.3965 6.79218 13.2058 6.33109C13.0151 5.87 12.7356 5.45105 12.3833 5.09816C12.2945 4.99431 12.2481 4.86072 12.2533 4.72408C12.2586 4.58745 12.3152 4.45784 12.4117 4.36116C12.5082 4.26447 12.6376 4.20783 12.774 4.20255C12.9104 4.19728 13.0438 4.24375 13.1475 4.33269C14.061 5.24882 14.5741 6.49067 14.5741 7.78547C14.5741 9.08026 14.061 10.3221 13.1475 11.2382C13.0914 11.2871 13.0259 11.3239 12.9551 11.3463C12.8842 11.3687 12.8095 11.3763 12.7356 11.3685Z" fill="url(#paint3_linear_46_20718)" />
      <defs>
        <linearGradient id="paint0_linear_46_20718" x1="3.71875" y1="7.76139" x2="10.2229" y2="7.76139" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3682FA" />
          <stop offset="1" stopColor="#3F3CFF" />
        </linearGradient>
        <linearGradient id="paint1_linear_46_20718" x1="0.462891" y1="7.75831" x2="4.79899" y2="7.75831" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3682FA" />
          <stop offset="1" stopColor="#3F3CFF" />
        </linearGradient>
        <linearGradient id="paint2_linear_46_20718" x1="9.67773" y1="8.15408" x2="12.3926" y2="8.15408" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3682FA" />
          <stop offset="1" stopColor="#3F3CFF" />
        </linearGradient>
        <linearGradient id="paint3_linear_46_20718" x1="12.2246" y1="7.78681" x2="14.5741" y2="7.78681" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3682FA" />
          <stop offset="1" stopColor="#3F3CFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const UserPhoto = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.5377 6.51577C8.5377 3.97108 10.6006 1.9082 13.1453 1.9082C15.69 1.9082 17.7528 3.97108 17.7528 6.51577C17.7528 9.06046 15.69 11.1233 13.1453 11.1233C10.6006 11.1233 8.5377 9.06046 8.5377 6.51577Z" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4.69933 20.9583C4.77852 16.3612 8.52949 12.6592 13.1453 12.6592C17.7612 12.6592 21.5122 16.3614 21.5912 20.9586C21.5964 21.2635 21.4208 21.5426 21.1437 21.6698C18.7078 22.7874 15.9984 23.4102 13.1456 23.4102C10.2925 23.4102 7.58284 22.7873 5.14686 21.6694C4.86972 21.5423 4.69408 21.2632 4.69933 20.9583Z" fill="white" />
    </svg>
  );
}

export const CopyIcon = () => {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="copy-01-stroke-rounded 1" clip-path="url(#clip0_7976_72802)">
          <path id="Vector" d="M6.75 11.25C6.75 9.1287 6.75 8.06805 7.40901 7.40901C8.06805 6.75 9.1287 6.75 11.25 6.75H12C14.1213 6.75 15.1819 6.75 15.841 7.40901C16.5 8.06805 16.5 9.1287 16.5 11.25V12C16.5 14.1213 16.5 15.1819 15.841 15.841C15.1819 16.5 14.1213 16.5 12 16.5H11.25C9.1287 16.5 8.06805 16.5 7.40901 15.841C6.75 15.1819 6.75 14.1213 6.75 12V11.25Z" stroke="#375381" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
          <path id="Vector_2" d="M12.7499 6.75C12.7481 4.53218 12.7146 3.38341 12.069 2.59682C11.9443 2.44492 11.8051 2.30563 11.6532 2.18097C10.8234 1.5 9.59062 1.5 7.125 1.5C4.65939 1.5 3.42658 1.5 2.59682 2.18097C2.44492 2.30563 2.30563 2.44492 2.18097 2.59682C1.5 3.42658 1.5 4.65939 1.5 7.125C1.5 9.59062 1.5 10.8234 2.18097 11.6532C2.30563 11.8051 2.44492 11.9443 2.59682 12.069C3.38341 12.7146 4.53218 12.7481 6.75 12.7499" stroke="#375381" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_7976_72802">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  }
  
  export const CheckIcon = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
  
    )
  }