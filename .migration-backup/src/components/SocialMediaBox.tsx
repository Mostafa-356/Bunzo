import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram_black from "../assets/icons/instagram_black.svg";

export default function SocialMediaBox({ 
  boxStyle, 
  variant = 'dark' 
}: { 
  boxStyle?: string, 
  variant?: 'light' | 'dark' 
}) {
    const iconClass = `size-4 md:size-5 transition-all hover:scale-110 ${variant === 'light' ? 'invert brightness-200' : ''}`;

    return (
        <div className={`flex gap-3 md:gap-6 lg:gap-8 ${boxStyle}`}>
            <a href="#" className="flex items-center justify-center">
                <img src={facebook} alt="facebook" className={iconClass} />
            </a>
            <a href="https://x.com/yorubamerlin_" target="_blank" className="flex items-center justify-center">
                <img src={twitter} alt="twitter" className={iconClass} />
            </a>
            <a href="https://www.instagram.com/yoruba_merlin" target="_blank" className="flex items-center justify-center">
                <img src={instagram_black} alt="instagram" className={iconClass} />
            </a>
        </div>
    );
}
