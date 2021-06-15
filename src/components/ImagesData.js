import CuriosityDesktop from "../images/desktop/image-curiosity.jpg";
import DeepEarthDesktop from "../images/desktop/image-deep-earth.jpg";
import FishEyeDesktop from "../images/desktop/image-fisheye.jpg";
import FromAboveDesktop from "../images/desktop/image-from-above.jpg";
import NightArcadeDesktop from "../images/desktop/image-night-arcade.jpg";
import PocketBorealisDesktop from "../images/desktop/image-pocket-borealis.jpg";
import SoccerTeamDesktop from "../images/desktop/image-soccer-team.jpg";
import GridDesktop from "../images/desktop/image-grid.jpg";

import CuriosityMobile from "../images/mobile/image-curiosity.jpg";
import DeepEarthMobile from "../images/mobile/image-deep-earth.jpg";
import FishEyeMobile from "../images/mobile/image-fisheye.jpg";
import FromAboveMobile from "../images/mobile/image-from-above.jpg";
import NightArcadeMobile from "../images/mobile/image-night-arcade.jpg";
import PocketBorealisMobile from "../images/mobile/image-pocket-borealis.jpg";
import SoccerTeamMobile from "../images/mobile/image-soccer-team.jpg";
import GridMobile from "../images/mobile/image-grid.jpg";

const Images = [
  { desktop: DeepEarthDesktop, mobile: DeepEarthMobile, text: "DEEP EARTH" },
  {
    desktop: NightArcadeDesktop,
    mobile: NightArcadeMobile,
    text: "NIGHT ARCADE",
  },
  {
    desktop: SoccerTeamDesktop,
    mobile: SoccerTeamMobile,
    text: "SOCCER TEAM VR",
  },
  { desktop: GridDesktop, mobile: GridMobile, text: "THE GRID" },
  { desktop: FromAboveDesktop, mobile: FromAboveMobile, text: "FROM ABOVE VR" },
  {
    desktop: PocketBorealisDesktop,
    mobile: PocketBorealisMobile,
    text: "POCKET BOREALIS",
  },
  { desktop: CuriosityDesktop, mobile: CuriosityMobile, text: "THE CURIOSITY" },
  { desktop: FishEyeDesktop, mobile: FishEyeMobile, text: "MAKE IT FISHEYE" },
];

export default Images;
