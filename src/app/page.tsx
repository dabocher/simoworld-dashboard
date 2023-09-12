import {
  Qwitcher_Grypen,
  Quicksand,
  Sedgwick_Ave_Display,
} from "next/font/google";
import Link from "next/link";

const sedgwick = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const qwitcher = Qwitcher_Grypen({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className="min-h-full pb-12 flex flex-col items-center text-darkGrayPrimary  ">
      <div className="grid grid-col-1 w-[50vw] lg:px-20 gap-4 text-center  lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="/box"
          className="bg-white group rounded-lg shadow-xl px-5 py-4 transition-colors hover:border-darkGrayPrimary hover:border-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`${qwitcher.className}  text-5xl font-semibold  text-darkGrayPrimary`}
          >
            Box
          </h2>

          <p className=" text-darkGrayPrimary rounded-sm w-full">
            perfil <br />
            mis eventos
            <br /> mensajes
          </p>
          <div className="flex justify-center lg:justify-end mt-2 ">
            <button className=" text-slate-100 rounded-full bg-darkGrayPrimary px-4 py-1">
              inicia sesión
            </button>
          </div>
        </Link>

        <Link
          href="/events"
          className="bg-white group rounded-lg shadow-xl px-5 py-4 transition-colors hover:border-darkGrayPrimary hover:border-2 lg:row-span-2 lg:col-span-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`${qwitcher.className}  text-5xl font-semibold  text-darkGrayPrimary`}
          >
            Eventos{" "}
          </h2>
          <p className={`m-0  text-sm  text-darkGrayPrimary`}>
            Campeonatos. Carreras. Entrenamientos. Pruebas. Retos.
          </p>
        </Link>
        <Link
          href="/communities"
          className="bg-white group rounded-lg shadow-xl px-5 py-4 transition-colors hover:border-darkGrayPrimary hover:border-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`${qwitcher.className}  text-5xl font-semibold  text-slate-800`}
          >
            Comunidades{" "}
          </h2>
          <p className={`m-0 lg:max-w-[30ch] text-sm text-darkGrayPrimary`}>
            Comunidades de Simracers de habla hispana.
          </p>
        </Link>

        <Link
          href="/recomendator"
          className="bg-white group rounded-lg shadow-xl px-5 py-4 transition-colors hover:border-darkGrayPrimary hover:border-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`${qwitcher.className}  text-5xl font-semibold  text-darkGrayPrimary`}
          >
            Recomendator{" "}
          </h2>
          <p className={`m-0 lg:max-w-[30ch] text-sm text-darkGrayPrimary`}>
            Artículos de opinión. Hardware. Clases. Setups.
          </p>
        </Link>

        <Link
          href="/recomendator"
          className="bg-white group rounded-lg shadow-xl px-5 py-4 transition-colors hover:border-darkGrayPrimary hover:border-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`${qwitcher.className}  text-5xl font-semibold  text-darkGrayPrimary`}
          >
            Social
          </h2>
          <p className={`m-0 lg:max-w-[30ch] text-sm text-darkGrayPrimary`}>
            ¿Buscas equipo, piloto, patrocinador, un amigo, un rival? Anúnciate
            aquí.
          </p>
        </Link>
      </div>
    </main>
  );
}
