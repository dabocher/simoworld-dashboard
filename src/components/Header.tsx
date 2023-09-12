import { Sedgwick_Ave_Display } from "next/font/google";

const sedgwick = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const Header = () => {
  return (
    <header className="flex flex-col justify-start items-center gap-4 mb-8">
      <h1
        className={`${sedgwick.className} mt-10 text-[10vw] lg:text-8xl text-darkGrayPrimary text-center leading-10`}
      >
        SIMOWORLD
      </h1>
      <p className="text-[2vw] lg:text-2xl text-center">
        El portal del Simracer de habla hispana
      </p>
      <input
        className="rounded-full border-2 border-gray-200 w-[50vw] lg:w-1/3 px-8 py-3 shadow-2xl "
        placeholder="buscar"
      />
    </header>
  );
};

export default Header;
