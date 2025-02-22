import React from 'react';

interface IconProps {
    className?: string;
}

export const MoviesIcon: React.FC<IconProps> = ({ className }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M19.82 2H4.18C2.97602 2 2 2.97602 2 4.18V19.82C2 21.024 2.97602 22 4.18 22H19.82C21.024 22 22 21.024 22 19.82V4.18C22 2.97602 21.024 2 19.82 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 7H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 17H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 17H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 7H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const FavIcon: React.FC<IconProps> = ({ className }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0555 3.41708C18.388 3.14052 17.6726 2.99817 16.9501 2.99817C16.2276 2.99817 15.5122 3.14052 14.8448 3.41708C14.1773 3.69364 13.5709 4.099 13.0601 4.60999L12.0001 5.66999L10.9401 4.60999C9.90843 3.5783 8.50915 2.9987 7.05012 2.9987C5.59109 2.9987 4.19181 3.5783 3.16012 4.60999C2.12843 5.64169 1.54883 7.04096 1.54883 8.49999C1.54883 9.95903 2.12843 11.3583 3.16012 12.39L4.22012 13.45L12.0001 21.23L19.7801 13.45L20.8401 12.39C21.3511 11.8792 21.7565 11.2728 22.033 10.6053C22.3096 9.93789 22.4519 9.22248 22.4519 8.49999C22.4519 7.77751 22.3096 7.0621 22.033 6.39464C21.7565 5.72718 21.3511 5.12075 20.8401 4.60999V4.60999Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const TrendingIcon: React.FC<IconProps> = ({ className }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 6H23V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const LogOutIcon: React.FC<IconProps> = ({ className }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const SettingsIcon: React.FC<IconProps> = ({ className }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M4 21V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 10V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 21V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 8V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 21V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 12V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1 14H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 16H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const SearchIcon: React.FC<IconProps> = ({ className }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.9999 20.9999L16.6499 16.6499" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const CommunityIcon: React.FC<IconProps> = ({ className }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23 20.9999V18.9999C22.9993 18.1136 22.7044 17.2527 22.1614 16.5522C21.6184 15.8517 20.8581 15.3515 20 15.1299" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const ChatIcon: React.FC<IconProps> = ({ className }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};


export const ProfileIcon: React.FC<IconProps> = ({ className }) => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/
        xlink"
            className={className}>
            <circle cx="16" cy="16" r="16" fill="#D9D9D9" />
            <circle cx="16" cy="16" r="16" fill="url(#pattern0_408_101)" />
            <defs>
                <pattern id="pattern0_408_101" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xmlnsXlink="#image0_408_101" transform="translate(0 -0.125326) scale(0.00261097)" />
                </pattern>
                <image id="image0_408_101" width="383" height="479" xmlnsXlink="data:image/jpeg;base64,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" />
            </defs>
        </svg>
    )
}

export const NotificationIcon: React.FC<IconProps> = ({ className }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

interface HugIconProps extends IconProps {
    className: string;
    shouldFill?: boolean;
    handleClick: () => void;
}


export const HugIcon: React.FC<HugIconProps> = ({ className, shouldFill, handleClick }: HugIconProps) => {
    return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} onClick={handleClick}>
            <rect x="0.5" y="0.5" width="55" height="55" rx="14.5" fill="url(#paint0_linear_10_83)" />
            <rect x="0.5" y="0.5" width="55" height="55" rx="14.5" stroke="url(#paint1_linear_10_83)" />
            <path d="M36.8401 20.6101C36.3294 20.0991 35.7229 19.6938 35.0555 19.4172C34.388 19.1406 33.6726 18.9983 32.9501 18.9983C32.2276 18.9983 31.5122 19.1406 30.8448 19.4172C30.1773 19.6938 29.5709 20.0991 29.0601 20.6101L28.0001 21.6701L26.9401 20.6101C25.9084 19.5784 24.5092 18.9988 23.0501 18.9988C21.5911 18.9988 20.1918 19.5784 19.1601 20.6101C18.1284 21.6418 17.5488 23.0411 17.5488 24.5001C17.5488 25.9591 18.1284 27.3584 19.1601 28.3901L20.2201 29.4501L28.0001 37.2301L35.7801 29.4501L36.8401 28.3901C37.3511 27.8794 37.7565 27.2729 38.033 26.6055C38.3096 25.938 38.4519 25.2226 38.4519 24.5001C38.4519 23.7776 38.3096 23.0622 38.033 22.3948C37.7565 21.7273 37.3511 21.1209 36.8401 20.6101V20.6101Z" stroke="#6100C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={shouldFill ? '#6100C2' : ''} />
            <defs>
                <linearGradient id="paint0_linear_10_83" x1="4.5" y1="-8.00001" x2="147.569" y2="14.2874" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_10_83" x1="52" y1="65.5" x2="-4" y2="-18" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
};