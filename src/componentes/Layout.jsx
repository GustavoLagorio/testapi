import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function Layout() {
    return (
        <div>
            

            <Outlet /> {/* Punto de salida para renderizar rutas secundarias */}

        </div>
    );
}
