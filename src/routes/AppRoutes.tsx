import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";

// Views
import HomePage from "../views/HomePage";
import ThreeDemoView from "../views/ThreeDemoView";
import LayoutsView from "../views/LayoutsView";
import SpeechDemoView from "../views/SpeechDemoView";
import GeometryExplorer from "../views/GeometryExplorer";
import SettingsView from "../views/SettingsView";
import TablasMul from "../views/TablasMul";
import ConversorUnid from "../views/ConversorUnid";
import ValidContrasena from "../views/ValidContrasena";
import ContadorClics from "../views/ContadorClics";
import ListaTareas from "../views/ListaTareas";

// Views for Digital Clock, Countdown Timer, and ColorPicker
import DigitalClockView from "../views/DigitalClockView"; // Ruta para el Reloj Digital
import CountdownTimerView from "../views/CountdownTimerView"; // Ruta para el Contador Regresivo
import ColorPickerView from "../views/ColorPickerView"; // Nueva ruta para el Color Picker
import SearchList from "../views/SearchList"; // Importa la nueva vista del buscador

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="three" element={<ThreeDemoView />} />
        <Route path="layouts" element={<LayoutsView />} />
        <Route path="tts" element={<SpeechDemoView />} />
        <Route path="three_2" element={<GeometryExplorer />} />
        <Route path="settings" element={<SettingsView />} />
        <Route path="tablasmul" element={<TablasMul />} />
        <Route path="conversorunid" element={<ConversorUnid />} />
        <Route path="validcontrasena" element={<ValidContrasena />} />
        <Route path="contadorclics" element={<ContadorClics />} />
        <Route path="listareas" element={<ListaTareas />} />

        {/* Nuevas rutas para el Reloj Digital, el Contador Regresivo, el ColorPicker y el Buscador */}
        <Route path="digital-clock" element={<DigitalClockView />} />
        <Route path="countdown-timer" element={<CountdownTimerView />} />
        <Route path="colorpicker" element={<ColorPickerView />} />
        <Route path="searchlist" element={<SearchList />} /> {/* Nueva ruta del Buscador */}
      </Route>
    </Routes>
  );
}
