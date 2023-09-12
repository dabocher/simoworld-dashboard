import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Quicksand } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faAt,
  faQuestionCircle,
  faComments,
  faRoad,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Sidevar = () => {
  return (
    <aside
      className={`${quicksand.className} fixed top-16 py-32   h-screen group px-1 `}
    >
      <div className=" w-[48px] flex flex-col flex-around gap-6 rounded-full bg-darkGrayPrimary px-1 py-12 shadow-xl">
        <FontAwesomeIcon
          icon={faCircleInfo}
          className=""
          style={{
            fontSize: 32,
            background: "#524b73",
            color: "ddd",
            borderRadius: "10px",
            padding: "6",
          }}
          title="Acerca de"
        />

        <FontAwesomeIcon
          icon={faAt}
          className=""
          style={{
            fontSize: 32,
            background: "#524b73",
            color: "ddd",
            borderRadius: "10px",
            padding: "6",
          }}
          title="Contacto"
        />

        <FontAwesomeIcon
          icon={faQuestionCircle}
          className=""
          style={{
            fontSize: 32,
            background: "#524b73",
            color: "ddd",
            borderRadius: "10px",
            padding: "6",
          }}
          title="Ayuda"
        />

        <FontAwesomeIcon
          icon={faComments}
          className=""
          style={{
            fontSize: 32,
            background: "#524b73",
            color: "ddd",
            borderRadius: "10px",
            padding: "6",
          }}
          title="Sugerencias"
        />

        <FontAwesomeIcon
          icon={faRoad}
          className=""
          style={{
            fontSize: 32,
            background: "#524b73",
            color: "ddd",
            borderRadius: "10px",
            padding: "6",
          }}
          title="Hoja de ruta"
        />

        <FontAwesomeIcon
          icon={faPlusCircle}
          className=""
          style={{
            fontSize: 32,
            background: "#524b73",
            color: "ddd",
            borderRadius: "10px",
            padding: "6",
          }}
          fontStyle={""}
          title="Crear Evento"
        />
      </div>
    </aside>
  );
};

export default Sidevar;
