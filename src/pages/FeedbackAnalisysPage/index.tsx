import React, { useEffect, useState } from "react";
import {
  ContainerSupportStyled,
  FeedbackPageLayoutStyled,
  SeparatedLineDiv,
} from "./styled";
import { PageLayoutRootStyled } from "../../commons/PageLayoutRootCommon/styled";
import ButtonCommon from "../../commons/ButtonCommon";
import ModalSendFeedbackComponent from "./components/ModalSendFeedbackComponent";

const FeedbackAnalisysPage: React.FC = () => {
  const [openSendFeedbackModal, setOpenSendFeedbackModal] = useState<boolean>(false)
  
  return (
    <PageLayoutRootStyled>
      <FeedbackPageLayoutStyled>
        <ContainerSupportStyled>
          <ButtonCommon onClick={() => setOpenSendFeedbackModal(true)} >Avaliar a aplicação</ButtonCommon>
        </ContainerSupportStyled>
        <SeparatedLineDiv/>
        <ContainerSupportStyled>
          <ButtonCommon>Mostrar resultado</ButtonCommon>
        </ContainerSupportStyled>
      </FeedbackPageLayoutStyled>
      {openSendFeedbackModal && 
        <ModalSendFeedbackComponent
        onCancel={() => setOpenSendFeedbackModal(false)}
        onClickOut={() => setOpenSendFeedbackModal(false)}
        />
      }
    </PageLayoutRootStyled>
  );
};

export default FeedbackAnalisysPage;