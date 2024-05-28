import React, { useEffect, useState } from "react";
import {
  HomePageLayoutStyled,
  FilterContainerStyled,
  FilterButtonsContainerStyled,
  MainContentContainerStyled,
  MapWrapperStyled,
  LeftContainerSupportStyled,
  TableContainerStyled,
  ColumnHeadRowStyled,
  ColumnNameElementStyled,
  TableWrapperStyled,
  TableRowStyled,
  TableCellPropsStyled,
  THeadStyled,
  CustomLink,
  TopContainerSupportStyled,
} from "./styled";
import { PageLayoutRootStyled } from "../../commons/PageLayoutRootCommon/styled";
import PageTitleLabelDWCommon from "../../commons/PageTitleLabelCommon";
import SelectorDWCommon from "../../commons/SelectorCommon";
//import SmallButtonDWCommon from "../../commons/SmallButtonDWCommon";
import ButtonCommon from "../../commons/ButtonCommon";
//import MapLeafLetDWComponent from "../../components/MapLeafLetDWComponent";
import ToastNotificationDWCommon from "../../commons/ToastNotificationDWCommon";
import LoadingSpinnerCommon from "../../commons/LoadingSpinnerCommon";
//import { getHomeHelper } from "../../utils/camerasDataUtils/getHomeHelper";
import TableHomeDWComponent from "./components/TableHomeComponent";
import MapLeafLetComponent from "../../components/MapLeafLetComponent";
import TableHomeComponent from "./components/TableHomeComponent";
import { camerasGetAccess } from "../../services/dataAccess/userAcess";
import UserCardComponent from "../../components/UserCardComponent";

const HomePage: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(true);
  const [showToastNotification, setShowToastNotification] = useState(false);
  const [showDeleteDeviceToastNotification, setShowDeleteDeviceToastNotification] = useState(false);
  const [showEditDeviceToastNotification, setShowEditDeviceToastNotification] = useState(false);
  const [usersData, setUsersData] = useState<any[]>([])

  const [openModalAddDevice, setOpenModalAddDevice] = useState<boolean>(false);
  
  const [fullScreenMap, setFullScreenMap] = useState<boolean>(true);
  const [fullScreenMapTimeoutDone, setFullScreenMapTimeoutDone] =
    useState(false);

  const [clearSelectors, setClearSelectors] = useState(false);

  useEffect(() => {
    if (!fullScreenMapTimeoutDone) {
      setTimeout(() => {
        setLoading(false);
        setFullScreenMap(false);
        setFullScreenMapTimeoutDone(true); // Mark timeout as done
      }, 2500);
    }
  }, [fullScreenMapTimeoutDone]);

  useEffect(() => {
    if (showToastNotification) {
      const timeoutId = setTimeout(() => {
        setShowToastNotification(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
    if (showDeleteDeviceToastNotification) {
      const timeoutId = setTimeout(() => {
        setShowDeleteDeviceToastNotification(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
    if (showEditDeviceToastNotification) {
      const timeoutId = setTimeout(() => {
        setShowEditDeviceToastNotification(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [showToastNotification, showDeleteDeviceToastNotification, showEditDeviceToastNotification]);

  const handleOpenModalAddDevice = () => {
    setOpenModalAddDevice(true);
  };


  /* const handleFilter = () => {
    setFilterData(prevFilterData => ({
      cam: camValue,
      state: stateValue,
      city: cityValue,
      district: districtValue,
      status: statusValue,
    }));

    setTriggerEffectFilter(true);

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }; */

  /* const resetClearSelectors = () => {
    setClearSelectors(false);
  }; */

  /* const cleanFilter = () => {
    
    setFilterData(initialFilterDataValues);

    setCamValue(null)
    setStateValue(null)
    setCityValue(null)
    setDistrictValue(null)
    setStatusValue(null)
   
    setClearSelectors(true); 
  }; */

  const handleFullScreen = () => {
    setFullScreenMap(!fullScreenMap);
  };

  useEffect(() => {
    camerasGetAccess({district: null, status: null  }).then(result => setUsersData(result))
  }, [])
  
  return (
    <PageLayoutRootStyled>
      <HomePageLayoutStyled>
        <FilterContainerStyled>
          <SelectorDWCommon
            name="district"
            label="Bairro"
            placeholder="ex: Aldeota"
            onSelectedValue={(value) => {}}
            onRemoveOption={() => {}}
            //dropDownOptions={DistrictDataModelExamples}
            clearSelectors={clearSelectors}
            //resetClearSelectors={resetClearSelectors}
          />
          <SelectorDWCommon
            name="tags"
            label="Tipo serviço | TAG's"
            placeholder="ex: Marcenária"
            //onSelectedValue={(value) => { setDistrictValue(String(value)) }}
            //onRemoveOption={() => { setDistrictValue(null) }}
            //dropDownOptions={DistrictDataModelExamples}
            //clearSelectors={clearSelectors}
            //resetClearSelectors={resetClearSelectors}
          />
          <SelectorDWCommon
            searchBar={false}
            name="status"
            label="Status do dispositivo"
            placeholder="ex: Ativo"
            dropDownHeight="90px"
            onSelectedValue={(value) => {}}
            onRemoveOption={() => {}}
            statusOption={true}
            clearSelectors={clearSelectors}
            //={resetClearSelectors}
          />
          <FilterButtonsContainerStyled>
            {/* <SmallButtonDWCommon
              onClick={handleFilter}
              variant="filter"
              tooltipContent="Filtrar"
            />
            <SmallButtonDWCommon
              onClick={cleanFilter}
              variant="cleanFilter"
              tooltipContent="Limpar Filtro"
            /> */}
          </FilterButtonsContainerStyled>
        </FilterContainerStyled>
        <MainContentContainerStyled>
          <MapWrapperStyled $fullScreenMap={fullScreenMap}>
            <MapLeafLetComponent
              handleFullScreen={handleFullScreen} 
              fullScreenButton={true}
              /* locationsData={getHomeHelper(cameraData)} */
            />
          </MapWrapperStyled>
          <LeftContainerSupportStyled>
            <TableWrapperStyled>
              <TableHomeComponent
                tableData={usersData}
              />
            </TableWrapperStyled>
          </LeftContainerSupportStyled>
        </MainContentContainerStyled>
        <UserCardComponent/>  
      </HomePageLayoutStyled>
      {showEditDeviceToastNotification && (
        <ToastNotificationDWCommon
          variant="success"
          description="O dispositivo foi editado com sucesso"
        />
      )}
      {loading && <LoadingSpinnerCommon />}
    </PageLayoutRootStyled>
  );
};

export default HomePage;