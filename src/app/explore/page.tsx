import { RiBatteryChargeLine, RiCreativeCommonsByLine, RiDrinks2Line, RiFootprintLine, RiMusic2Line, RiSunLine, RiTeamLine, RiTicketLine, RiTimeLine, RiTrainLine, RiTreasureMapLine, RiTShirtLine, RiWalkLine } from "@remixicon/react";
import Image from "next/image";
import AltHeader from "@/components/AltHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '¿Qué hacer en Puerto Iguazú?',
}

export default function ExplorePage() {

  const texts = {
    cataratasArg: {
      title1: "Cataratas del Iguazú",
      title2: "Lado Argentino",
      description1: "Las majestuosas Cataratas del Iguazú se encuentran en el interior del Parque Nacional Iguazú, un área de preservación de la naturaleza que abarca 67.720 hectáreas en el extremo norte de la Provincia de Misiones, en la República Argentina. Son un conjunto de 275 saltos que se localizan sobre el Río Iguazú, en el límite entre la Provincia de Misiones y el Estado Brasileño de Paraná a 17 kilómetros de la localidad de Puerto Iguazú.",
      tag1: "Transporte en tren",
      tag2: "Llevar protección solar",
      tag3: "Llevar nacks y agua"
    },
    cataratasBr: {
      title1: "Cataratas del Iguazú",
      title2: "Lado Brasilero",
      description1: "Aprovechá la vista panorámica que se obtiene desde el Lado Brasilero. Desde los miradores y pasarelas del Parque Nacional do Iguaçú se puede apreciar una vista de casi la totalidad de los saltos. Además de un impresionante acercamiento a la Garganta del Diablo.",
      tag1: "Caminata",
      tag2: "Llevar protección solar",
      tag3: "Llevar nacks y agua"
    },
    gomon: {
      title1: "Gomon Gran Aventura",
      title2: "Excursión en bote",
      description1: "Primero, un paseo en camión 4x4 por los caminos de la selva durante 30 minutos (5.5km). Luego suben al gomón 5km río abajo y van subiendo contra la corriente hasta llegar al cañadón de las cataratas!. Tendrán un breve momento para sacar fotos y luego se viene lo mejor! Ingresan con el gomón al salto tres mosqueteros para mojarse y tener un avistamiento de la 'Garganta del Diablo'. Por último pero no menos importante, entran al segundo salto más importante de las cataratas, el salto 'San Martin' donde van a vivir una experiencia diferente y única, van a mojarse muchísimo! Concluyen volviendo al primer punto de encuentro.",
      tag1: "Duración 2:15hs aprox.",
      tag2: "Edad mínima 12 años",
      tag3: "Llevar un cambio de ropa"
    },
    jungleFly: {
      title1: "Jungle Fly",
      title2: "Aventura en medio de la selva",
      description1: "Tirolesa a 70mts de altura, pasarelas colgantes, caminatas por la selva con guía y Rappel (descenso por cascada de 12mts de altura).",
      tag1: "Duración 4hs aprox.",
      tag2: "Intensa",
      tag3: "Calzado y prendas cómodas"
    },
    cabalgata: {
      title1: "Cabalgata ecológica del indio solitario",
      title2: "Paseo a caballo por la selva",
      description1: "Una experiencia bastante apreciable, no se pueden perder este paseo. Nos tocó un día de lluvia lo que hizo del paseo mucho más especial al estar en contacto con la naturaleza, el paso por la selva fue increíble. Fuimos con niños y no habíamos cabalgado nunca, el guía nos dio confianza y los caballos son mansos y lo más importante están bien cuidados, un beso a Lucerito, Colibrí, Presuntuoso, y Correntina, sin duda un recuerdo que quedará para siempre en los niños.",
      tag1: "Duración 2hrs aprox.",
      tag2: "Moderada",
      tag3: ""
    },
    casaPajaros: {
      title1: "Güirá Oga",
      title2: "La casa de los pájaros",
      description1: "Recorrerá senderos rodeado por la selva misionera y conocerá a sus habitantes en recintos que conservan la vegetación del lugar, ofreciendo a los animales que no pueden ser liberados la posibilidad de vivir en su hábitat. GüiráOga le hará reflexionar sobre la necesidad de proteger la fauna silvestre y su entorno. La actividad se realiza en compañía de un guía. Apta para toda la familia.",
      tag1: "Duración 1:30hrs aprox.",
      tag2: "Visita guiada",
      tag3: "Leve",
    },
    aripuca: {
      title1: "La Aripuca",
      title2: "Museo de la Selva",
      description1: "Construído a base de árboles rescatados, inspirado en una típica trampa de los pueblos guaraníes, 'La Aripuca' se impone con sus 17 metros de altura y más de 500.000 Kgs de peso distribuído en 30 especies nativas de la Selva Misionera.",
      tag1: "Visita guiada",
      tag2: "Leve",
      tag3: "A 3.5 km de distancia"
    },
    hito: {
      title1: "Hito Tres Fronteras",
      title2: "Puerto Iguazú",
      description1: "El Hito es el segundo atractivo más visitado de nuestro destino, donde miles de turistas se acercan para llevarse las mejores postales junto a recuerdo inolvidable de un espacio único que reúne a dos ríos y tres países. Viernes, sábado y domingo se habilita el show de aguas danzantes en el hito de las tres fronteras. Las luces se encienden de 19 a 20 hs, mientras que el show principal se proyecta a las 19:30 hs. Es de entrada libre y gratuita. ¡Los esperamos!",
      tag1: "Leve",
      tag2: "Acceso libre",
      tag3: "Se puede llegar caminando"
    },
    catamaran: {
      title1: "Paseo en Catamarán",
      title2: "Ríos Iguazú y Paraná",
      description1: "Qué mejor manera de conocer las 3 fronteras, que navegando por sus ríos. Un tranquilo paseo en catamarán Iguazú recorriendo los ríos Iguazú y Paraná, allí podrás disfrutar a bordo de una excelente embarcación, el encanto de la puesta del sol en contraste con una paisajística vegetación. Esta actividad náutica en Iguazú es una de las más elegidas por muchos turistas que visitan las Cataratas del Iguazú, ya que es un complemento ideal para los que disponen de tiempo y no quieren perderse de nada. Es un tranquilo, pero entretenido viaje, el cual es acompañado de guías a bordo que van explicando todos los puntos de interés. Serán recibidos con una copa de cortesía y durante el recorrido podrán disfrutar de música en vivo.",
      tag1: "Duración 1:30hrs aprox.",
      tag2: "Show de música en vivo",
      tag3: "Infantes sin cargo"
    },
    ruinas: {
      title1: "Ruinas de San Ignacio",
      title2: "",
      description1: "Sin dudas uno de los puntos turísticos más visitados de la Provincia de Misiones. Las Ruinas de San Ignacio son uno los vestigios mejores conservados de lo que fue el proceso, la evangelización de los nativos guaraníes por parte de los jesuitas y de las capacidades que adquirieron. Al visitar estas ruinas te vas a encontrar, con los restos de lo que fue una ciudad que llegó a albergar a aproximadamente a 4500 personas. Esta fue una ciudad en medio de la selva misionera construida a lo largo de 150 años por los mismos guaraníes a través de las misiones de evangelización jesuitas.",
      tag1: "La excursión dura todo el día",
      tag2: "A 250 km de distancia",
      tag3: ""
    },
    minas: {
      title1: "Minas de Wanda",
      title2: "Yacimiento de piedras semipreciosas",
      description1: "Las Minas de Wanda son un punto de parada casi obligatorio para todos los que visiten la provincia de Misiones, a tan solo 40 kilómetros de las cataratas del Iguazú están prácticamente de paso sobre la ruta nacional 12.",
      tag1: "La excursión dura todo el día",
      tag2: "A 40 km. de Puerto Iguazú",
      tag3: ""
    }
  };
  
  return (
    <>
    <AltHeader />
    <main>
      <section>
        <div className="pt-0 mt-0 pb-4 overflow-hidden">
          <Image className="w-full h-full" src="/images/concept-img-0.jpg" width={1080} height={1080} alt="Explore image" quality={100} />
        </div>
      </section>
      <section className="explore w-full pb-24">
        <div className="section-container section grid gap-4 justify-center place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="card shadow-md bg-neutral-50 w-80 min-h-[620px] aspect-[3/2] rounded-lg p-4 flex flex-col gap-4 items-start justify-start snap-y lg:w-72">
            <Image className="rounded-lg w-full" src={'/images/explore-img-8.jpg'} 
              alt="Explore image"
              width={380}
              height={380}
              sizes="(max-width: 768px) 66vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager" />
            <h3 className="text-foreground font-bold">
              {texts.cataratasArg.title1}<br />
              <span className="text-muted-foreground text-sm">{texts.cataratasArg.title2}</span>
            </h3>
            <p className="text-muted-foreground text-sm max-h-40 overflow-auto scrollbar-thin">
              {texts.cataratasArg.description1}
            </p>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiTrainLine className="w-5 h-5" />{texts.cataratasArg.tag1}
            </span>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiSunLine className="w-5 h-5" />{texts.cataratasArg.tag2}
            </span>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiDrinks2Line className="w-5 h-5" />{texts.cataratasArg.tag3}
            </span>
          </div>
          <div className="card shadow-md bg-neutral-50 w-80 min-h-[620px] aspect-[3/2] rounded-lg p-4 flex flex-col gap-4 items-start justify-start snap-y lg:w-72">
            <Image className="rounded-lg w-full" src={'/images/explore-img-9.jpg'} 
              alt="Explore image"
              width={380}
              height={380}
              sizes="(max-width: 768px) 66vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager" />
            <h3 className="text-foreground font-bold">
              {texts.cataratasBr.title1}<br />
              <span className="text-muted-foreground text-sm">{texts.cataratasBr.title2}</span>
            </h3>
            <p className="text-muted-foreground text-sm max-h-40 overflow-auto scrollbar-thin">
              {texts.cataratasBr.description1}
            </p>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiFootprintLine className="w-5 h-5" />{texts.cataratasBr.tag1}
            </span>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiSunLine className="w-5 h-5" />{texts.cataratasBr.tag2}
            </span>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiDrinks2Line className="w-5 h-5" />{texts.cataratasBr.tag3}
            </span>
          </div>
          <div className="card shadow-md bg-neutral-50 w-80 min-h-[620px] aspect-[3/2] rounded-lg p-4 flex flex-col gap-4 items-start justify-start snap-y lg:w-72">
            <Image className="rounded-lg w-full" src={'/images/explore-img-10.jpg'} 
              alt="Explore image"
              width={380}
              height={380}
              sizes="(max-width: 768px) 66vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager" />
            <h3 className="text-foreground font-bold">
              {texts.gomon.title1}<br />
              <span className="text-muted-foreground text-sm">{texts.gomon.title2}</span>
            </h3>
            <p className="text-muted-foreground text-sm max-h-40 overflow-auto scrollbar-thin">
              {texts.gomon.description1}
            </p>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiTimeLine className="w-5 h-5" />{texts.gomon.tag1}
            </span>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiTeamLine className="w-5 h-5" />{texts.gomon.tag2}
            </span>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiTShirtLine className="w-5 h-5" />{texts.gomon.tag3}
            </span>
          </div>
          <div className="card shadow-md bg-neutral-50 w-80 min-h-[620px] aspect-[3/2] rounded-lg p-4 flex flex-col gap-4 items-start justify-start snap-y lg:w-72">
            <Image className="rounded-lg w-full" src={'/images/explore-img-12.jpg'} 
              alt="Explore image"
              width={380}
              height={380}
              sizes="(max-width: 768px) 66vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager" />
            <h3 className="text-foreground font-bold">
              {texts.jungleFly.title1}<br />
              <span className="text-muted-foreground text-sm">{texts.jungleFly.title2}</span>
            </h3>
            <p className="text-muted-foreground text-sm max-h-40 overflow-auto scrollbar-thin">
              {texts.jungleFly.description1}
            </p>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiTimeLine className="w-5 h-5" />{texts.jungleFly.tag1}
            </span>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiBatteryChargeLine className="w-5 h-5" />{texts.jungleFly.tag2}
            </span>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiTShirtLine className="w-5 h-5" />{texts.jungleFly.tag3}
            </span>
          </div>
          <div className="card shadow-md bg-neutral-50 w-80 min-h-[620px] aspect-[3/2] rounded-lg p-4 flex flex-col gap-4 items-start justify-start snap-y lg:w-72">
            <Image className="rounded-lg w-full" src={'/images/explore-img-13.jpg'} 
              alt="Explore image"
              width={380}
              height={380}
              sizes="(max-width: 768px) 66vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager" />
            <h3 className="text-foreground font-bold">
              {texts.cabalgata.title1}<br />
              <span className="text-muted-foreground text-sm">{texts.cabalgata.title2}</span>
            </h3>
            <p className="text-muted-foreground text-sm max-h-40 overflow-auto scrollbar-thin">
              {texts.cabalgata.description1}
            </p>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiTimeLine className="w-5 h-5" />{texts.cabalgata.tag1}
            </span>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiBatteryChargeLine className="w-5 h-5" />{texts.cabalgata.tag2}
            </span>
          </div>
          <div className="card shadow-md bg-neutral-50 w-80 min-h-[620px] aspect-[3/2] rounded-lg p-4 flex flex-col gap-4 items-start justify-start snap-y lg:w-72">
            <Image className="rounded-lg w-full" src={'/images/explore-img-15.jpg'} 
              alt="Explore image"
              width={380}
              height={380}
              sizes="(max-width: 768px) 66vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager" />
            <h3 className="text-foreground font-bold">
              {texts.casaPajaros.title1}<br />
              <span className="text-muted-foreground text-sm">{texts.casaPajaros.title2}</span>
            </h3>
            <p className="text-muted-foreground text-sm max-h-40 overflow-auto scrollbar-thin">
              {texts.casaPajaros.description1}
            </p>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiWalkLine className="w-5 h-5" />{texts.casaPajaros.tag2}
            </span>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiBatteryChargeLine className="w-5 h-5" />{texts.casaPajaros.tag3}
            </span>
          </div>
          <div className="card shadow-md bg-neutral-50 w-80 min-h-[620px] aspect-[3/2] rounded-lg p-4 flex flex-col gap-4 items-start justify-start snap-y lg:w-72">
            <Image className="rounded-lg w-full" src={'/images/explore-img-19.jpg'} 
              alt="Explore image"
              width={380}
              height={380}
              sizes="(max-width: 768px) 66vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager" />
            <h3 className="text-foreground font-bold">
              {texts.aripuca.title1}<br />
              <span className="text-muted-foreground text-sm">{texts.aripuca.title2}</span>
            </h3>
            <p className="text-muted-foreground text-sm max-h-40 overflow-auto scrollbar-thin">
              {texts.aripuca.description1}
            </p>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiWalkLine className="w-5 h-5" />{texts.aripuca.tag1}
            </span>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiBatteryChargeLine className="w-5 h-5" />{texts.aripuca.tag2}
            </span>
          </div>
          <div className="card shadow-md bg-neutral-50 w-80 min-h-[620px] aspect-[3/2] rounded-lg p-4 flex flex-col gap-4 items-start justify-start snap-y lg:w-72">
            <Image className="rounded-lg w-full" src={'/images/explore-img-14.jpg'} 
              alt="Explore image"
              width={380}
              height={380}
              sizes="(max-width: 768px) 66vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager" />
            <h3 className="text-foreground font-bold">
              {texts.hito.title1}<br />
              <span className="text-muted-foreground text-sm">{texts.hito.title2}</span>
            </h3>
            <p className="text-muted-foreground text-sm max-h-40 overflow-auto scrollbar-thin">
              {texts.hito.description1}
            </p>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiCreativeCommonsByLine className="w-5 h-5" />{texts.hito.tag2}
            </span>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiTreasureMapLine className="w-5 h-5" />{texts.hito.tag3}
            </span>
          </div>
          <div className="card shadow-md bg-neutral-50 w-80 min-h-[620px] aspect-[3/2] rounded-lg p-4 flex flex-col gap-4 items-start justify-start snap-y lg:w-72">
            <Image className="rounded-lg w-full" src={'/images/explore-img-18.webp'} 
              alt="Explore image"
              width={380}
              height={380}
              sizes="(max-width: 768px) 66vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager" />
            <h3 className="text-foreground font-bold">
              {texts.catamaran.title1}<br />
              <span className="text-muted-foreground text-sm">{texts.catamaran.title2}</span>
            </h3>
            <p className="text-muted-foreground text-sm max-h-40 overflow-auto scrollbar-thin">
              {texts.catamaran.description1}
            </p>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiTimeLine className="w-5 h-5" />{texts.catamaran.tag1}
            </span>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiMusic2Line className="w-5 h-5" />{texts.catamaran.tag2}
            </span>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiTicketLine className="w-5 h-5" />{texts.catamaran.tag3}
            </span>
          </div>
          <div className="card shadow-md bg-neutral-50 w-80 min-h-[620px] aspect-[3/2] rounded-lg p-4 flex flex-col gap-4 items-start justify-start snap-y lg:w-72">
            <Image className="rounded-lg w-full" src={'/images/explore-img-16.jpg'} 
              alt="Explore image"
              width={380}
              height={380}
              sizes="(max-width: 768px) 66vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager" />
            <h3 className="text-foreground font-bold">
              {texts.ruinas.title1}<br />
              <span className="text-muted-foreground text-sm">{texts.ruinas.title2}</span>
            </h3>
            <p className="text-muted-foreground text-sm max-h-40 overflow-auto scrollbar-thin">
              {texts.ruinas.description1}
            </p>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiTimeLine className="w-5 h-5" />{texts.ruinas.tag1}
            </span>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiTreasureMapLine className="w-5 h-5" />{texts.ruinas.tag2}
            </span>
          </div>
          <div className="card shadow-md bg-neutral-50 w-80 min-h-[620px] aspect-[3/2] rounded-lg p-4 flex flex-col gap-4 items-start justify-start snap-y lg:w-72">
            <Image className="rounded-lg w-full" src={'/images/explore-img-17.jpg'} 
              alt="Explore image"
              width={380}
              height={380}
              sizes="(max-width: 768px) 66vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager" />
            <h3 className="text-foreground font-bold">
              {texts.minas.title1}<br />
              <span className="text-muted-foreground text-sm">{texts.minas.title2}</span>
            </h3>
            <p className="text-muted-foreground text-sm max-h-40 overflow-auto scrollbar-thin">
              {texts.minas.description1}
            </p>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiTimeLine className="w-5 h-5" />{texts.minas.tag1}
            </span>
            <span className="rounded-3xl py-2 px-4 text-xs font-semibold border border-info text-info bg-info-soft flex gap-2 justify-start items-center">
              <RiTreasureMapLine className="w-5 h-5" />{texts.minas.tag2}
            </span>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}