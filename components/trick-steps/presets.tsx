import {
  BmxSide,
  FlipArc,
  FootSide,
  FootTopDown,
  Ground,
  MotionArrow,
  PopBurst,
  SkateboardSide,
  SkateboardTopDown,
  SpinArc,
  TrickSvgFrame,
} from "@/components/trick-steps/figures";
import { TrickStepsGrid } from "@/components/trick-steps/trick-steps-grid";

export function OllieSteps() {
  return (
    <TrickStepsGrid
      title="Ollie — visuelt trin for trin"
      steps={[
        {
          title: "Stilling",
          caption: "Bagfod på tail, forfod bag midten. Bøj knæ og hold skuldre over boardet.",
          illustration: (
            <TrickSvgFrame>
              <Ground />
              <SkateboardSide cy={152} angle={0} />
              <FootSide x={98} y={132} angle={-4} />
              <FootSide x={188} y={136} angle={6} accent="#00e5ff" />
            </TrickSvgFrame>
          ),
        },
        {
          title: "Pop",
          caption: "Slå tail hårdt i jorden med bagfoden — skarp lyd = god pop.",
          illustration: (
            <TrickSvgFrame>
              <Ground />
              <SkateboardSide cx={158} cy={156} angle={-22} />
              <FootSide x={88} y={118} angle={-18} />
              <FootSide x={176} y={142} angle={4} accent="#00e5ff" />
              <PopBurst x={92} y={168} />
            </TrickSvgFrame>
          ),
        },
        {
          title: "Slide",
          caption: "Slide forfoden op mod nose så boardet bliver vandret i luften.",
          illustration: (
            <TrickSvgFrame>
              <Ground />
              <SkateboardSide cx={162} cy={118} angle={8} lift={18} />
              <FootSide x={108} y={96} angle={-6} />
              <MotionArrow from={{ x: 168, y: 108 }} to={{ x: 218, y: 92 }} />
              <FootSide x={198} y={88} angle={-14} accent="#00e5ff" />
            </TrickSvgFrame>
          ),
        },
        {
          title: "Land",
          caption: "Løft begge ben — land blødt med fødderne over bolts.",
          illustration: (
            <TrickSvgFrame>
              <Ground />
              <SkateboardSide cx={160} cy={108} angle={0} lift={42} />
              <FootSide x={128} y={82} angle={0} />
              <FootSide x={192} y={82} angle={0} accent="#00e5ff" />
              <MotionArrow from={{ x: 160, y: 148 }} to={{ x: 160, y: 118 }} curved />
            </TrickSvgFrame>
          ),
        },
      ]}
    />
  );
}

export function KickflipSteps() {
  return (
    <TrickStepsGrid
      title="Kickflip — visuelt trin for trin"
      steps={[
        {
          title: "Placering",
          caption: "Bagfod som ollie. Forfod skråt mod toe-side — klar til flick.",
          illustration: (
            <TrickSvgFrame>
              <Ground />
              <SkateboardSide cy={152} />
              <FootSide x={96} y={132} angle={-6} />
              <FootSide x={178} y={134} angle={-22} accent="#ff2d8b" />
            </TrickSvgFrame>
          ),
        },
        {
          title: "Pop",
          caption: "Pop en solid ollie først — uden høj pop bliver der ikke plads til flick.",
          illustration: (
            <TrickSvgFrame>
              <Ground />
              <SkateboardSide cx={158} cy={124} angle={-6} lift={24} />
              <FootSide x={102} y={104} angle={-10} />
              <FootSide x={182} y={108} angle={-8} accent="#00e5ff" />
              <PopBurst x={94} y={152} />
            </TrickSvgFrame>
          ),
        },
        {
          title: "Flick",
          caption: "Stryg forfoden diagonal ud mod nose — boardet flipper under dig.",
          illustration: (
            <TrickSvgFrame>
              <Ground />
              <SkateboardSide cx={162} cy={98} angle={24} lift={48} />
              <FlipArc x={162} y={118} />
              <MotionArrow from={{ x: 196, y: 92 }} to={{ x: 236, y: 72 }} curved />
              <FootSide x={214} y={78} angle={-38} accent="#ff2d8b" />
              <FootSide x={118} y={72} angle={4} />
            </TrickSvgFrame>
          ),
        },
        {
          title: "Catch",
          caption: "Se griptape igen — catch med bagfod og land over bolts.",
          illustration: (
            <TrickSvgFrame>
              <Ground />
              <SkateboardSide cx={160} cy={106} angle={-4} lift={38} />
              <FootSide x={124} y={84} angle={2} accent="#c8f542" />
              <FootSide x={196} y={80} angle={-4} />
            </TrickSvgFrame>
          ),
        },
      ]}
    />
  );
}

export function BmxBunnyHopSteps() {
  return (
    <TrickStepsGrid
      title="Bunny hop — visuelt trin for trin"
      steps={[
        {
          title: "Klar",
          caption: "Stå stabilt på pedalerne med løs greb om styret.",
          illustration: (
            <TrickSvgFrame>
              <Ground />
              <BmxSide />
            </TrickSvgFrame>
          ),
        },
        {
          title: "Løft for",
          caption: "Træk i styret og læn dig let bagud — forhjulet løfter.",
          illustration: (
            <TrickSvgFrame>
              <Ground />
              <BmxSide frontLift={22} />
              <MotionArrow from={{ x: 210, y: 130 }} to={{ x: 210, y: 102 }} />
            </TrickSvgFrame>
          ),
        },
        {
          title: "Scoop",
          caption: "Skub baghjulet op med fødderne — som en ollie på skateboard.",
          illustration: (
            <TrickSvgFrame>
              <Ground y={172} />
              <BmxSide frontLift={38} rearLift={36} />
              <MotionArrow from={{ x: 160, y: 150 }} to={{ x: 160, y: 108 }} curved />
            </TrickSvgFrame>
          ),
        },
        {
          title: "Land",
          caption: "Land blødt med begge hjul samtidig — knæ bøjet.",
          illustration: (
            <TrickSvgFrame>
              <Ground />
              <BmxSide />
              <MotionArrow from={{ x: 160, y: 118 }} to={{ x: 160, y: 148 }} />
            </TrickSvgFrame>
          ),
        },
      ]}
    />
  );
}

export function ShoveItSteps() {
  return (
    <TrickStepsGrid
      title="Shove-it — visuelt trin for trin"
      steps={[
        {
          title: "Stilling",
          caption: "Fødderne over bolts — bagfod klar til at skubbe tail sidelæns.",
          illustration: (
            <TrickSvgFrame>
              <Ground y={175} />
              <SkateboardTopDown cy={128} />
              <FootTopDown x={128} y={118} />
              <FootTopDown x={192} y={138} accent="#00e5ff" />
            </TrickSvgFrame>
          ),
        },
        {
          title: "Scoop",
          caption: "Skub tail bagud og ud til siden — boardet begynder at rotere.",
          illustration: (
            <TrickSvgFrame>
              <Ground y={175} />
              <SkateboardTopDown cy={124} spin={28} lift={8} />
              <MotionArrow from={{ x: 108, y: 132 }} to={{ x: 78, y: 108 }} />
              <FootTopDown x={118} y={108} angle={-12} accent="#ff2d8b" />
              <FootTopDown x={188} y={128} accent="#00e5ff" />
            </TrickSvgFrame>
          ),
        },
        {
          title: "Rotér",
          caption: "Løft begge ben — lad boardet dreje 180° under dig.",
          illustration: (
            <TrickSvgFrame>
              <Ground y={175} />
              <SkateboardTopDown cy={108} spin={90} lift={28} />
              <SpinArc x={160} y={118} />
              <FootTopDown x={118} y={82} />
              <FootTopDown x={202} y={86} accent="#00e5ff" />
            </TrickSvgFrame>
          ),
        },
        {
          title: "Land",
          caption: "Catch med begge fødder over bolts — land blødt.",
          illustration: (
            <TrickSvgFrame>
              <Ground y={175} />
              <SkateboardTopDown cy={128} spin={180} />
              <FootTopDown x={132} y={118} />
              <FootTopDown x={188} y={138} accent="#c8f542" />
            </TrickSvgFrame>
          ),
        },
      ]}
    />
  );
}

export function HeelflipSteps() {
  return (
    <TrickStepsGrid
      title="Heelflip — visuelt trin for trin"
      steps={[
        {
          title: "Placering",
          caption: "Bagfod som ollie. Forfod mod heel-side — tæer hænger lidt off.",
          illustration: (
            <TrickSvgFrame>
              <Ground />
              <SkateboardSide cy={152} />
              <FootSide x={96} y={132} angle={-6} />
              <FootSide x={182} y={136} angle={18} accent="#ff2d8b" />
            </TrickSvgFrame>
          ),
        },
        {
          title: "Pop",
          caption: "Pop en høj ollie — heelflip kræver plads til rotation.",
          illustration: (
            <TrickSvgFrame>
              <Ground />
              <SkateboardSide cx={158} cy={120} lift={28} />
              <FootSide x={100} y={100} angle={-8} />
              <FootSide x={180} y={104} angle={12} accent="#00e5ff" />
              <PopBurst x={94} y={152} />
            </TrickSvgFrame>
          ),
        },
        {
          title: "Flick",
          caption: "Stryg forfoden ud over heel-side — boardet flipper modsat kickflip.",
          illustration: (
            <TrickSvgFrame>
              <Ground />
              <SkateboardSide cx={162} cy={96} angle={-20} lift={50} />
              <FlipArc x={162} y={116} />
              <MotionArrow from={{ x: 124, y: 94 }} to={{ x: 84, y: 74 }} curved />
              <FootSide x={108} y={78} angle={32} accent="#ff2d8b" />
              <FootSide x={196} y={74} angle={-4} />
            </TrickSvgFrame>
          ),
        },
        {
          title: "Catch",
          caption: "Se griptape — catch og land centreret over bolts.",
          illustration: (
            <TrickSvgFrame>
              <Ground />
              <SkateboardSide cx={160} cy={106} lift={38} />
              <FootSide x={126} y={84} />
              <FootSide x={194} y={82} accent="#c8f542" />
            </TrickSvgFrame>
          ),
        },
      ]}
    />
  );
}

export function PopShoveItSteps() {
  return (
    <TrickStepsGrid
      title="Pop shove-it — visuelt trin for trin"
      steps={[
        {
          title: "Stilling",
          caption: "Som shove-it — bagfod på tail, forfod bag midten.",
          illustration: (
            <TrickSvgFrame>
              <Ground />
              <SkateboardSide cy={152} />
              <FootSide x={98} y={132} />
              <FootSide x={188} y={136} accent="#00e5ff" />
            </TrickSvgFrame>
          ),
        },
        {
          title: "Pop",
          caption: "Pop tail som en ollie — boardet løfter før det roterer.",
          illustration: (
            <TrickSvgFrame>
              <Ground />
              <SkateboardSide cx={158} cy={128} angle={-8} lift={22} />
              <FootSide x={92} y={110} angle={-14} />
              <PopBurst x={92} y={168} />
            </TrickSvgFrame>
          ),
        },
        {
          title: "Shove",
          caption: "Scoop tail sidelæns mens boardet er i luften — 180° rotation.",
          illustration: (
            <TrickSvgFrame>
              <Ground y={175} />
              <SkateboardTopDown cy={102} spin={70} lift={36} />
              <SpinArc x={160} y={112} />
              <MotionArrow from={{ x: 104, y: 118 }} to={{ x: 74, y: 98 }} />
            </TrickSvgFrame>
          ),
        },
        {
          title: "Land",
          caption: "Land med begge fødder — pop + shove i én flydende bevægelse.",
          illustration: (
            <TrickSvgFrame>
              <Ground />
              <SkateboardSide cx={160} cy={112} lift={32} />
              <FootSide x={128} y={88} accent="#c8f542" />
              <FootSide x={192} y={86} accent="#00e5ff" />
            </TrickSvgFrame>
          ),
        },
      ]}
    />
  );
}

export function ManualSteps() {
  return (
    <TrickStepsGrid
      title="Manual — visuelt trin for trin"
      steps={[
        {
          title: "Kør",
          caption: "Moderat fart på fladt underlag — skuldre afslappede.",
          illustration: (
            <TrickSvgFrame>
              <Ground />
              <SkateboardSide cy={152} />
              <FootSide x={128} y={132} />
              <FootSide x={192} y={134} accent="#00e5ff" />
              <MotionArrow from={{ x: 80, y: 160 }} to={{ x: 240, y: 160 }} />
            </TrickSvgFrame>
          ),
        },
        {
          title: "Læn bag",
          caption: "Flyt vægten bagover — forhjulet begynder at løfte.",
          illustration: (
            <TrickSvgFrame>
              <Ground />
              <SkateboardSide cx={162} cy={156} angle={-10} />
              <FootSide x={134} y={128} angle={4} />
              <FootSide x={198} y={124} angle={8} accent="#ff2d8b" />
            </TrickSvgFrame>
          ),
        },
        {
          title: "Balance",
          caption: "Kun baghjul rører jorden — brug arme og hofter til at holde linjen.",
          illustration: (
            <TrickSvgFrame>
              <Ground />
              <SkateboardSide cx={164} cy={162} angle={-26} />
              <FootSide x={138} y={122} angle={6} />
              <FootSide x={202} y={116} angle={10} accent="#c8f542" />
              <line x1="120" y1="88" x2="148" y2="108" stroke="#888" strokeWidth="2" />
              <line x1="200" y1="88" x2="172" y2="108" stroke="#888" strokeWidth="2" />
            </TrickSvgFrame>
          ),
        },
        {
          title: "Afslut",
          caption: "Sænk nose blødt — eller gå videre til nose manual / combo.",
          illustration: (
            <TrickSvgFrame>
              <Ground />
              <SkateboardSide cx={160} cy={152} angle={-8} />
              <FootSide x={130} y={130} />
              <FootSide x={194} y={128} accent="#00e5ff" />
              <MotionArrow from={{ x: 160, y: 118 }} to={{ x: 160, y: 148 }} curved />
            </TrickSvgFrame>
          ),
        },
      ]}
    />
  );
}
