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
    <main className="min-h-full flex flex-col items-center text-slate-800  ">
      <h1
        className={`${sedgwick.className} relative drop-shadow-[0_0_0.3rem_#ffffff70] mb-8 text-6xl text-slate-700 font-bold text-center`}
      >
        SIMOWORLD
      </h1>

      <div className="grid gap-4 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href="/mi-box"
          className="bg-slate-100 group rounded-lg shadow-xl px-5 py-4 transition-colors hover:border-slate-500 hover:border-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`${qwitcher.className}  text-4xl font-semibold  text-slate-800`}
          >
            MiBox
          </h2>

          <p className=" text-slate-700  rounded-sm  w-full">
            perfil <br />
            mis eventos
            <br /> mensajes
          </p>
          <div className="flex justify-end  ">
            <button className=" text-slate-100 mt-14 rounded-full bg-slate-600 px-4 py-1">
              inicia sesión
            </button>
          </div>
        </Link>

        <Link
          href="/events"
          className="bg-slate-100 group rounded-lg shadow-xl px-5 py-4 transition-colors hover:border-slate-500 hover:border-2 row-span-2 col-span-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`${qwitcher.className}  text-4xl font-semibold  text-slate-800`}
          >
            Eventos{" "}
          </h2>
          <p className={`m-0  text-sm  text-slate-700`}>
            Campeonatos. Carreras. Entrenamientos. Pruebas.
          </p>
        </Link>
        <Link
          href="/communities"
          className="bg-slate-100 group rounded-lg shadow-xl px-5 py-4 transition-colors hover:border-slate-500 hover:border-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`${qwitcher.className}  text-4xl font-semibold  text-slate-800`}
          >
            Comunidades{" "}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm text-slate-700`}>
            Comunidades de Simracers de habla hispana.
          </p>
        </Link>

        <Link
          href="/recomendator"
          className="bg-slate-100 group rounded-lg shadow-xl px-5 py-4 transition-colors hover:border-slate-500 hover:border-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`${qwitcher.className}  text-4xl font-semibold  text-slate-800`}
          >
            Recomendator{" "}
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm text-slate-700`}>
            Artículos de opinión. Hardware. Cacharrería. Novedades.
          </p>
        </Link>

        <Link
          href="/recomendator"
          className="bg-slate-100 group rounded-lg shadow-xl px-5 py-4 transition-colors hover:border-slate-500 hover:border-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`${qwitcher.className}  text-4xl font-semibold  text-slate-800`}
          >
            Social
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm text-slate-700`}>
            ¿Buscas equipo, piloto, patrocinador, un amigo, un rival? Anúnciate
            aquí.
          </p>
        </Link>
      </div>
    </main>
  );
}
