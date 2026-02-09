import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

const INSTAGRAM_URL = "https://www.instagram.com/muttaikadai?igsh=MWJ5MnJjaDVra2RzeQ%3D%3D&utm_source=qr";

const MemberCard = ({ member }) => {
  return (
    <article className="w-fit group">
      <div className="transition-all w-fit h-fit shadow-member-card duration-300  rounded-[10px]">
        <Image
          width={245}
          height={264}
          className="rounded-[10px]"
          src={member.image}
          alt={member.name}
        />
      </div>
      <div className="mt-6 text-center relative isolate">
        <div className="absolute z-10 -top-[44px]  w-full flex justify-center items-center gap-2">
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Follow us on Instagram"
            className="w-[35px] h-[35px] rounded-full bg-white shadow-md hover:text-white hover:bg-gold duration-500 will-change-transform text-base scale-0 group-hover:scale-100  text-black grid place-content-center"
          >
            <FaInstagram />
          </Link>
        </div>
        <div>
          <h6 className="text-xl font-gloria text-dark-gray">{member.name}</h6>
          <p className="text-sm text-gold">{member.title}</p>
        </div>
      </div>
    </article>
  );
};
export default MemberCard;
