import Filter from '../assets/icons/FilterSmall.svg';
import CleanFilter from '../assets/icons/CleanFilterSmall.svg';
/* import Filter from '../assets/icons/FilterSmall.svg';
import CleanFilter from '../assets/icons/CleanFilterSmall.svg';
import DetailViewWhite from '../assets/icons/DetailIconWhite.svg';
import GridViewWhite from '../assets/icons/GridIconWhite.svg';
import LeftArrow from '../assets/icons/LeftArrow.svg';
import RightArrow from '../assets/icons/RightArrow.svg';
import TrashIcon from '../assets/icons/TrashIcon.svg';
import Export from '../assets/icons/ExportIconWhite.svg';
import EditIconWhite from '../assets/icons/EditIcon.svg';
import AnalyticsIcon from '../assets/icons/AnalyticsIcon.svg';
import CamSettingsIcon from '../assets/icons/CamSettingsIcon.svg';
import VizualizeIcon from '../assets/icons/ViewPasswordIcon.svg';
import LeftArrowIcon from '../assets/icons/LeftArrow.svg';
import LockIcon from '../assets/icons/LockIcon.svg';
import ZoomInIcon from '../assets/icons/zoomInIcon.svg';
import ZoomOutIcon from '../assets/icons/zoomOutIcon.svg';
import ScreenAjustIcon from '../assets/icons/screenAjustIcon.svg';
import CalendarIcon from '../assets/icons/calendarIcon.svg';
import MediaControlsRewind from '../assets/icons/MediaControlsRewindIcon.svg';
import MediaConstrolsBack from '../assets/icons/MediaControlsBack.svg';
import MediaControlsRepeat from '../assets/icons/MediaControlsRepeat.svg';
import MediaControlsPlay from '../assets/icons/MediaControlsPlayIcon.svg';
import MediaControlsPause from '../assets/icons/MediaControlsPauseIcon.svg';
import MediaControlsSkip from '../assets/icons/MediaControlsSkipIcon.svg';
import MediaControlsFastFoward from '../assets/icons/MediaControlsFastFowardIcon.svg';
import HistoryIcon from '../assets/icons/HistoryIcon.svg';
import AddIcon from '../assets/icons/AddIcon.svg';
import FocusModeIcon from '../assets/icons/FocusModeIcon.svg';
import FullScreenIcon from '../assets/icons/fullScreenIcon.svg';
import BusIcon from '../assets/icons/BusIconSvgWhite.svg';
import MotorcycleIcon from '../assets/icons/MotorcycleIconSvgWhite.svg';
import TruckIcon from '../assets/icons/TruckIconSvgWhite.svg';
import BikeIcon from '../assets/icons/BikeIconSvgWhite.svg';
import PedestrianIcon from '../assets/icons/PedestrianSvgIconWhite.svg';
import CarIcon from '../assets/icons/CarIcon.svg';
import EraseIcon from '../assets/icons/EraseSvgIcon.svg';
import LineIcon from '../assets/icons/LineSvgIcon.svg';
import PolygonIcon from '../assets/icons/PolygonSvgIcon.svg';
import SquadIcon from '../assets/icons/SquadSvgIcon.svg';
import SweepIcon from '../assets/icons/SweepSvgIcon.svg';
import TextIcon from '../assets/icons/TextSvgIcon.svg'; */

import { css } from 'styled-components';
import { colors } from '../assets/styles/colors';

interface IProps {
  variant?: keyof typeof buttonsVariants;
  isActive: boolean | undefined;
  $width?: string;
  height?: string; 
}

export const buttonsVariants = {
  filter: 'filter',
  cleanFilter: 'cleanFilter',
  detailView: 'detailView',
  gridView: 'gridView',
  pagination: 'pagination',
  prevPagination: 'prevPagination',
  nextPagination: 'nextPagination',
  activePage: 'activePage',
  paginationArrowDisable: 'paginationArrowDisable',
  ellipsis: 'ellipsis',
  deleteElement: 'deleteElement',
  export: 'export',
  edit: 'edit',
  analytics: 'analytics',
  camsettings: 'camsettings',
  visualize: 'visualize',
  returnArrow: 'returnArrow',
  lock: 'lock',
  zoomIn: 'zoomIn',
  zoomOut: 'zoomOut',
  screenAjust: 'screenAjust',
  calendar: 'calendar',
  rewind: 'rewind',
  back: 'back',
  repeat: 'repeat',
  play: 'play',
  pause: 'pause',
  skip: 'skip',
  fastfoward: 'fastfoward',
  history: 'history',
  add: 'add',
  focusMode: 'focusMode',
  fullScreen: 'fullScreen',
  bus: 'bus',
  motorcycle: 'motorcycle',
  truck: 'truck',
  bike: 'bike',
  pedestrian: 'pedestrian',
  car: 'car',
  erase: 'erase',
  line: 'line',
  polygon: 'polygon',
  squad: 'squad',
  sweep: 'sweep',
  text: 'text',
  editSmall: 'editSmall',
  deleteElementSmall: 'deleteElementSmall'
};

export const getButtonStyles = ({
  variant,
  isActive,
}: IProps) => {

  const isActiveStyle = css`
    /* border: solid 3px ${colors.Principal200};
    background-color: ${colors.Principal300}; */

      background-color: ${colors.Atencao400};
      border: solid 3px ${colors.Atencao400};
  
      ${(props) => props.theme?.colors && (`border: solid 3px ${props.theme?.colors.Wine};`)}; 
      ${(props) => props.theme?.colors && (`background-color: ${props.theme?.colors.Yellow};`)}; 
      ${(props) => props.theme?.colors && (`color: ${props.theme?.colors.Wine};`)}; 
  `;

  switch (variant) {
    case "detailView":
      return css`
        ${isActive && isActiveStyle}
      `;
    case "gridView":
      return css`
        ${isActive && isActiveStyle}
      `;
    case "lock":
      return css`
        ${isActive && isActiveStyle}
      `;
    case "prevPagination":
      return css`
        height: 40px;
        width: 40px;
        background-color: ${colors.Principal400};
        color: white;
        border: 3px solid ${colors.Principal400};
        
        ${(props) => props.theme?.colors && (`background-color: ${props.theme?.colors.Yellow};`)}; 
        ${(props) => props.theme?.colors && (`border: 3px solid ${props.theme?.colors.Yellow};`)}; 

        &:hover{
          background-color: ${colors.Principal300};
          ${(props) => props.theme?.colors && (`background-color: ${props.theme?.colors.GraphicColorLow};`)}; 

        }
      `;
    case "nextPagination":
      return css`
        height: 40px;
        width: 40px;
        background-color: ${colors.Principal400};
        color: white;
        border: 3px solid ${colors.Principal400};
        
        ${(props) => props.theme?.colors && (`background-color: ${props.theme?.colors.Yellow};`)}; 
        ${(props) => props.theme?.colors && (`border: 3px solid ${props.theme?.colors.Yellow};`)}; 


        &:hover{
          background-color: ${colors.Principal300};
          ${(props) => props.theme?.colors && (`background-color: ${props.theme?.colors.GraphicColorLow};`)}; 

        }
      `;
    case "activePage":
      return css`
        background-color: ${colors.DarkTheme200};
        color: ${colors.DarkTheme900};

        ${(props) => props.theme?.colors && (`background-color: ${props.theme?.colors.carrotOrange};`)}; 


        &:hover {
          ${(props) => props.theme?.colors && (`background-color: ${props.theme?.colors.carrotOrange};`)}; 
        }
      `;
    case "paginationArrowDisable":
      return css`
        display: none;
      `;
    case "pagination":
      return css`
        background-color: ${colors.DarkTheme700};
        color: ${colors.Cinza100};
        ${(props) => props.theme?.colors && (`background-color: ${props.theme?.colors.Cinza800};`)}; 
        ${(props) => props.theme?.colors && (`color: ${props.theme?.colors.Black};`)}; 

        
        &:hover{
          ${(props) => props.theme?.colors && (`background-color: ${props.theme?.colors.Cinza1000};`)}; 
        }
        &:active{
            background-color: ${colors.Principal400};
            border: solid 3px ${colors.Principal200};

            ${(props) => props.theme?.colors && (`border: solid 3px ${props.theme?.colors.Wine};`)}; 
            ${(props) => props.theme?.colors && (`border: solid 3px ${props.theme?.colors.Wine};`)}; 

        } 
        &:focus{
            background-color: ${colors.Principal400};
            border: solid 3px ${colors.Principal200};

            ${(props) => props.theme?.colors && (`border: solid 3px ${props.theme?.colors.Wine};`)}; 
            ${(props) => props.theme?.colors && (`background-color: ${props.theme?.colors.Cinza300};`)}; 

        }
    `;
    case "ellipsis":
      return css`
        background-color: ${colors.DarkTheme700};
        color: ${colors.Cinza100};
        pointer-events: none; /* Disable click events */

        /* ${(props) => props.theme?.colors && (`background-color: ${props.theme?.colors.Cinza300};`)}; 
        ${(props) => props.theme?.colors && (`color: ${props.theme?.colors.Black};`)};  */

    `;
    case "deleteElement":
      return css`
        
          color: ${colors.Cinza100};
          background-color: ${colors.Perigo400};
            border: solid 3px ${colors.Perigo400};

          &:hover {
            background-color: ${colors.Perigo500};
          border: solid 3px ${colors.Perigo500};  

          }

          &:active {
            background-color: ${colors.Perigo400};
            border: solid 3px ${colors.Perigo500};
          }
      `;
    case "returnArrow":
      return css`
        height: 16px;
        width: 16px;
        background-color: ${colors.Principal400};
        color: ${colors.Cinza100};
        cursor: pointer;
        //pointer-events: none; /* Disable click events */
    `;
    case "bus":
      return css`
        background-color: ${colors.Principal400};
        border: solid 3px ${colors.Principal400};

        ${isActive ? (`
          background-color: ${colors.Atencao400};
          border: solid 3px ${colors.Atencao400};
        `) : null}

        &:hover {
          background-color: ${colors.Principal300};
          border: solid 3px ${colors.Principal300};
        }

        &:active {
          background-color: ${colors.Atencao400};
          border: solid 3px ${colors.Atencao400};
        }
      `;
    case "motorcycle":
      return css`
        background-color: ${colors.Principal400};
        border: solid 3px ${colors.Principal400};

        ${isActive ? (`
          background-color: ${colors.Atencao400};
          border: solid 3px ${colors.Atencao400};
        `) : null}

        &:hover {
          background-color: ${colors.Principal300};
          border: solid 3px ${colors.Principal300};
        }

        &:active {
          background-color: ${colors.Atencao400};
          border: solid 3px ${colors.Atencao400};
        }
      `;
    case "truck":
      return css`
        background-color: ${colors.Principal400};
        border: solid 3px ${colors.Principal400};

        ${isActive ? (`
          background-color: ${colors.Atencao400};
          border: solid 3px ${colors.Atencao400};
        `) : null}

        &:hover {
          background-color: ${colors.Principal300};
          border: solid 3px ${colors.Principal300};
        }

        &:active {
          background-color: ${colors.Atencao400};
          border: solid 3px ${colors.Atencao400};
        }
      `;
    case "bike":
        return css`
          background-color: ${colors.Principal400};
          border: solid 3px ${colors.Principal400};

          ${isActive ? (`
            background-color: ${colors.Atencao400};
            border: solid 3px ${colors.Atencao400};
          `) : null}

          &:hover {
            background-color: ${colors.Principal300};
            border: solid 3px ${colors.Principal300};
          }

          &:active {
            background-color: ${colors.Atencao400};
            border: solid 3px ${colors.Atencao400};
          }
        `;
    case "pedestrian":
          return css`
            background-color: ${colors.Principal400};
            border: solid 3px ${colors.Principal400};

            ${isActive ? (`
              background-color: ${colors.Atencao400};
              border: solid 3px ${colors.Atencao400};
            `) : null}

            &:hover {
              background-color: ${colors.Principal300};
              border: solid 3px ${colors.Principal300};
            }

            &:active {
              background-color: ${colors.Atencao400};
              border: solid 3px ${colors.Atencao400};
            }
          `;
        case "car":
          return css`
            background-color: ${colors.Principal400};
            border: solid 3px ${colors.Principal400};

            ${isActive ? (`
              background-color: ${colors.Atencao400};
              border: solid 3px ${colors.Atencao400};
            `) : null}

            &:hover {
              background-color: ${colors.Principal300};
              border: solid 3px ${colors.Principal300};
            }

            &:active {
              background-color: ${colors.Atencao400};
              border: solid 3px ${colors.Atencao400};
            }
          `;
    case "erase":
      return css`
        ${isActive && isActiveStyle}
      `;
    case "line":
      return css`
        ${isActive && isActiveStyle}
      `;
    case "polygon":
      return css`
        ${isActive && isActiveStyle}
      `;
    case "squad":
      return css`
        ${isActive && isActiveStyle}
      `;
    case "sweep":
      return css`
        /* ${isActive && isActiveStyle} */
        background-color: ${colors.Perigo400};
          border: solid 3px ${colors.Perigo400};

          &:hover {
            background-color: ${colors.Perigo200};
            border: solid 3px ${colors.Perigo200}
          }
          &:active {
            background-color: ${colors.Perigo200};
            border: solid 3px ${colors.Perigo400}
          }
      `;
    case "text":
      return css`
        ${isActive && isActiveStyle}
      `;
    default:
      return null; // Default style if the variant doesn't match any cases
  }
};

export const getIconStyles = ({
  variant,
  isActive,
}: IProps) => {

   switch (variant) {
    case "filter":
      return css`
        content: url(${Filter});
        height: 30px;
        width: 30px;
      `;
    case "cleanFilter":
      return css`
        content: url(${CleanFilter});
        height: 30px;
        width: 30px;
      `;
    
    default:
      return css``; // Default style if the variant doesn't match any cases
  } 
};