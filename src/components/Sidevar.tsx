import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Quicksand } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faAt,
  faQuestionCircle,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Sidevar = () => {
  return (
    <aside
      className={`${quicksand.className} fixed top-52 -left-10 group px-5 py-4 hover:left-0 transition-all duration-500 `}
    >
      <div className="h-full  flex flex-col flex-end gap-8 rounded-full bg-white py-12 shadow-xl">
        {/*       <button className="absolute top-12 left-10 px-4 text-slate-100 rounded-full shadow-sm bg-slate-600 transition-colors ">
          Acerca
        </button> */}
        <FontAwesomeIcon
          icon={faCircleInfo}
          className="opacity-0 hover:opacity-100 transition-opacity"
          style={{ fontSize: 32, color: "orange" }}
          title="Acerca de"
        />

        <FontAwesomeIcon
          icon={faAt}
          className="opacity-0 hover:opacity-100 transition-opacity"
          style={{ fontSize: 32, color: "orange" }}
          title="Contacto"
        />

        <FontAwesomeIcon
          icon={faQuestionCircle}
          className="opacity-0 hover:opacity-100 transition-opacity"
          style={{ fontSize: 32, color: "orange" }}
          title="Ayuda"
        />

        <FontAwesomeIcon
          icon={faComments}
          className="opacity-0 hover:opacity-100 transition-opacity"
          style={{ fontSize: 32, color: "orange" }}
          title="Sugerencias"
        />
        {/* <button className="absolute top-24 left-10 px-1.5  text-slate-700 text-xl font-bold rounded-full shadow-md transition-colors ">
          C
        </button>
        <button className="absolute top-36 left-10 px-1.5  text-slate-700 text-xl font-bold rounded-full shadow-md transition-colors ">
          H
        </button>

        <button className="absolute top-48  left-10 px-1  text-slate-700 text-xl font-bold rounded-full shadow-md transition-colors  ">
          S
        </button> */}
      </div>
    </aside>
  );
};

export default Sidevar;
