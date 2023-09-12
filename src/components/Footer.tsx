import Image from "next/image";
import { Qwitcher_Grypen } from "next/font/google";
const qwitcher = Qwitcher_Grypen({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Footer = () => {
  return (
    <footer className="bottom-5 left-0 right-0 bg-[##E1Dadb]">
      <div className="flex flex-col items-center flex-end">
        <ul className="flex gap-4 justify-center items-center">
          <li>
            <Image
              src={"/icons/discord.png"}
              width={44}
              height={44}
              alt={"discord"}
            />
          </li>
          <li>
            {" "}
            <Image
              src={"/icons/instagram.png"}
              width={32}
              height={32}
              alt={"instagram"}
            />
          </li>
          <li>
            {" "}
            <Image
              src={"/icons/youtube.png"}
              width={32}
              height={32}
              alt={"youtube"}
            />
          </li>
          <li>
            {" "}
            <Image
              src={"/icons/twitter_x.png"}
              width={32}
              height={32}
              alt={"twitter_x"}
            />
          </li>
        </ul>
        <div className={`${qwitcher.className} font-bold text-3xl`}>
          ©simoworld 2023. 1.0.0
        </div>
      </div>
    </footer>
  );
};

export default Footer;
