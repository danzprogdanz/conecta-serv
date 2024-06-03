import React, { useEffect, useState } from "react";
import {
  HomePageLayoutStyled,
  FilterContainerStyled,
  FilterButtonsContainerStyled,
  MainContentContainerStyled,
  MapWrapperStyled,
  LeftContainerSupportStyled,
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
import ButtonCommon from "../../commons/ButtonCommon";
//import MapLeafLetDWComponent from "../../components/MapLeafLetDWComponent";
import ToastNotificationDWCommon from "../../commons/ToastNotificationDWCommon";
import LoadingSpinnerCommon from "../../commons/LoadingSpinnerCommon";
import MapLeafLetComponent from "../../components/MapLeafLetComponent";
import TableHomeComponent from "./components/TableHomeComponent";
import { GetUsersAccess, GetUsersAccessFilter } from "../../services/dataAccess/userAcess";
import UserCardComponent from "../../components/UserCardComponent";
import { filterUserByIdHelper } from "../../utils/filterUserByIdHelper";
import ModalConfirmScheduleComponent from "../../components/ModalConfirmScheduleComponent";
import { getHomeHelper } from "../../utils/getHomeHelper";
import SmallButtonCommon from "../../commons/SmallButtonCommon";

const HomePage: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(true);
  const [showToastNotification, setShowToastNotification] = useState(false);
  const [showDeleteDeviceToastNotification, setShowDeleteDeviceToastNotification] = useState(false);
  const [showEditDeviceToastNotification, setShowEditDeviceToastNotification] = useState(false);
  const [usersData, setUsersData] = useState<any[]>([])
  
  const [fullScreenMap, setFullScreenMap] = useState<boolean>(true);
  const [fullScreenMapTimeoutDone, setFullScreenMapTimeoutDone] =
    useState(false);
    
  const [districtValue, setDistrictValue] = useState<string | null>(null);
  const [tagValue, setTagValue] = useState<string | null>(null);
  const [statusValue, setStatusValue] = useState<boolean | null>(null);

  const [clearSelectors, setClearSelectors] = useState(false);

  const [userSelected, setUserSelected] = useState<string | null>(null)
  const [userDataSelected, setUserDataSelected] = useState<any>(null)

  const [triggerEffectFilter, setTriggerEffectFilter] = useState(false);

  const [filterData, setFilterData] = useState<{
    district: string | null;
    tags: string[] | null;
    status: boolean | null;
  }>({
    district: null,
    tags: null,
    status: null,
  });


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
    GetUsersAccess({district: null, status: null  }).then(result => setUsersData(result))
  }, [])

  const handleClickTable = (id: string) => {
    setUserSelected(id)
  }

  useEffect(() => {
    console.log(userSelected)
    if (userSelected) {
      setUserDataSelected(filterUserByIdHelper(usersData, userSelected))
    }
  }, [userSelected])
  

  useEffect(() => {
    GetUsersAccessFilter({district: "Aldeota", tags: ["TI"], status: false})
      .then(result => {
        console.log('filter', result)
      })
  }, [])

  useEffect(() => {
    setFilterData(prevFilterData => ({
      district: districtValue,
      tags: typeof tagValue === 'string' ? [tagValue] : tagValue,
      status: statusValue,
    }));
  }, [districtValue, tagValue, statusValue])

  const handleFilter = () => {
    

    setTriggerEffectFilter(true);

    //setLoading(true);

    /* setTimeout(() => {
      setLoading(false);
    }, 1200); */
  };

  useEffect(() => {
    if(triggerEffectFilter) {
      GetUsersAccessFilter(filterData)
      .then(result => {
        setUsersData(result)
      })
    }
    setTriggerEffectFilter(false)   
  }, [triggerEffectFilter])

  useEffect(() => {
    console.log(usersData)
  }, [usersData])

  const getDistricts = (users: any[]): string[] => {
    const districtSet = new Set(users.map(user => user.district));
    return Array.from(districtSet);
  };

  const getUniqueTags = (users: any[]): string[] => {
    const tagSet = new Set<string>();
    users.forEach(user => {
      user.tagsList.forEach((tag: string) => tagSet.add(tag));
    });
    return Array.from(tagSet);
  };

  useEffect(() => {

    console.log(filterData)
  }, [filterData])

  return (
    <PageLayoutRootStyled>
      <HomePageLayoutStyled>
        <FilterContainerStyled>
          <SelectorDWCommon
            name="district"
            label="Bairro"
            placeholder="ex: Aldeota"
            onSelectedValue={(value) => setDistrictValue(String(value))}
            onRemoveOption={() => {setDistrictValue(null)}}
            dropDownOptions={getDistricts(usersData)}
            clearSelectors={clearSelectors}
            //resetClearSelectors={resetClearSelectors}
          />
          <SelectorDWCommon
            name="tags"
            label="Tipo serviço | TAG's"
            placeholder="ex: Marcenária"
            onSelectedValue={(value) => { setTagValue(String(value)) }}
            onRemoveOption={() => { setTagValue(null) }}
            dropDownOptions={getUniqueTags(usersData)}
            //clearSelectors={clearSelectors}
            //resetClearSelectors={resetClearSelectors}
          />
          <SelectorDWCommon
            searchBar={false}
            name="status"
            label="Status do dispositivo"
            placeholder="ex: Ativo"
            dropDownHeight="90px"
            onSelectedValue={(value) => { setStatusValue(value === 'true' ? true : false ) }}
            onRemoveOption={() => {setStatusValue(null)}}
            statusOption={true}
            clearSelectors={clearSelectors}
            //={resetClearSelectors}
          />
          <FilterButtonsContainerStyled>
            <SmallButtonCommon
              onClick={handleFilter}
              //variant="filter"
              tooltipContent="Filtrar"
            />
            <SmallButtonCommon
              onClick={() => {}/* cleanFilter */}
              //variant="cleanFilter"
              tooltipContent="Limpar Filtro"
            />
          </FilterButtonsContainerStyled>
        </FilterContainerStyled>
        <MainContentContainerStyled>
          <MapWrapperStyled $fullScreenMap={fullScreenMap}>
            <MapLeafLetComponent
              handleFullScreen={handleFullScreen} 
              fullScreenButton={true}
              locationsData={getHomeHelper(usersData)} 
            />
          </MapWrapperStyled>
          <LeftContainerSupportStyled>
            <TableWrapperStyled>
              <TableHomeComponent
                tableData={usersData}
                onClickTableCell={handleClickTable}
                userSelected={userSelected}
              />
            </TableWrapperStyled>
          </LeftContainerSupportStyled>
        </MainContentContainerStyled>
        {userSelected && <UserCardComponent
          onCloseCard={() => setUserSelected(null)}
          userData={userDataSelected}
        />}  
      </HomePageLayoutStyled>
      { /* <ModalConfirmScheduleComponent/> */}
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