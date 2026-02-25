import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href="/" className="flex items-center shrink-0">
            <Image
                src="/images/logo/gingerly-logo.svg"
                alt="Gingerly"
                width={180}
                height={48}
                quality={100}
                priority={true}
                className="h-[110px] sm:h-[140px] md:h-[180px] w-auto max-w-[55vw] sm:max-w-none object-contain"
            />
        </Link> 
    );
};

export default Logo;
