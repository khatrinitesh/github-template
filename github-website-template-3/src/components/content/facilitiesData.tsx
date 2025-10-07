import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import WifiPasswordIcon from "@mui/icons-material/WifiPassword";
import type { FacilityItem } from "../../interface";

export const facilitiesData: FacilityItem[] = [
  {
    id: 1,
    title: "gym",
    icon: <SportsGymnasticsIcon fontSize="large" color="secondary" />,
  },
  {
    id: 2,
    title: "parking",
    icon: <LocalParkingIcon fontSize="large" color="secondary" />,
  },
  {
    id: 3,
    title: "local dining",
    icon: <FastfoodOutlinedIcon fontSize="large" color="secondary" />,
  },
  {
    id: 4,
    title: "swimming pool",
    icon: <PoolOutlinedIcon fontSize="large" color="secondary" />,
  },
  {
    id: 5,
    title: "internet",
    icon: <WifiPasswordIcon fontSize="large" color="secondary" />,
  },
];
