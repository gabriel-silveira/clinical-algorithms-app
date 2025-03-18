import {Metadata} from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Inicio',
};

export default function HomePage() {
  return (
    <div className="pt-8 pl-9 text-white">
      <Image
        className="absolute top-5 right-[30px]"
        src="/logo_paho_home.png"
        width={400}
        height={100}
        alt="Logo PAHO"
      />

      <div className="w-full lg:w-[50%] pt-[100px] lg:pt-0">
        <h1>Sistema de algoritmos clínicos</h1>

        <p>
          Los algoritmos clínicos son secuencias de pasos o reglas definidas que los profesionales de la
          salud siguen para diagnosticar, tratar o gestionar una condición médica específica.
          Estos algoritmos se basan en evidencia científica, mejores prácticas clínicas y experiencia acumulada.
          Ayudan a los médicos a tomar decisiones informadas y consistentes al tratar problemas de salud complejos.
        </p>

        <p>
          Los algoritmos clínicos pueden abarcar una variedad de áreas, desde el diagnóstico de una enfermedad
          hasta la elección del tratamiento más apropiado. Por lo general, se presentan en forma de diagrama
          de flujo o lista de pasos a seguir, con diferentes ramificaciones dependiendo de las características
          del paciente o de los resultados de pruebas.
        </p>

        <p>
          Estos algoritmos son una herramienta valiosa en la práctica médica, especialmente en especialidades
          donde el diagnóstico y el tratamiento involucran una serie de consideraciones y opciones.
          Pueden ayudar a estandarizar la atención al paciente, mejorar la eficiencia y reducir errores médicos.
        </p>
      </div>
    </div>
  )
}
