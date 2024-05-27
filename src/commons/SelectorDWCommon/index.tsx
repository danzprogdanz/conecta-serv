import React, { useEffect, useRef, useState } from "react";
import {
  DownDropDownIconStyled,
  DropDownButtonStyled,
  DropDownContainerStyled,
  OptionElementWrapperStyled,
  OptionsContainerStyled,
  OptionsSelectedContainerStyled,
  PlaceholderText,
  RemoveOptionButtonStyled,
  RemoveOptionIconStyled,
  SearchBarContainerStyled,
  SearchBarIconStyled,
  SearchBarInputSyled,
  SelectElementRootStyled,
  SelectElementWrapperStyled,
  SelectInputLabelStyled,
  SelectOptionsElementStyled,
  SelectedPlaceholderText,
  UpDropDownIconStyled,
} from "./styled";
import StatusIndicatorCommon from "../StatusIndicatorCommon";

interface IProps {
  name?: string;
  label?: string;
  placeholder?: string;
  dropDown?: "open" | "closed";
  width?: string;
  dropDownHeight?: string;
  variant?: "fit-width" | "fullWidth";
  selected?: boolean;
  searchBar?: boolean;
  onSelectedValue?: (value: string | number | boolean ) => void;
  onRemoveOption?: () => void;
  dropDownOptions?: any[] | undefined;
  statusOption?: boolean;
  resetClearSelectors?: () => void;
  clearSelectors?: boolean;
}

const SelectorCommon: React.FC<IProps> = ({
  name,
  label,
  placeholder,
  width,
  dropDownHeight,   
  variant,
  searchBar = true,
  onSelectedValue,
  onRemoveOption,
  dropDownOptions = undefined,
  statusOption = false,
  resetClearSelectors,
  clearSelectors,
}) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [isVisibleDropDown, setIsVisibleDropDown] = useState<boolean>(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [optionValue, setOptionValue] = useState<string>("");
  const dropDownContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (clearSelectors) {
      setIsOptionSelected(false);
      // Use the callback to reset the flag in the parent component
      resetClearSelectors?.();
      
    }
  }, [clearSelectors, resetClearSelectors]); 

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); 

  const handleDropDownVisibility = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    event.stopPropagation(); // This will prevent the event from bubbling up to parent elements
    setIsVisibleDropDown(!isVisibleDropDown);
  };

  const handleClickOutside = (event: MouseEvent) => {
  const upperArrow = document.getElementById("upperArrow"); // replace with the actual ID or class of your upper arrow element

  if (
    dropDownContainerRef.current &&
    !dropDownContainerRef.current.contains(event.target as Node) &&
    event.target !== upperArrow
  ) {
    setIsVisibleDropDown(false);
  }
};

  const handleSelectOption = (optionValue: string) => {
    setIsOptionSelected(true);
    setIsVisibleDropDown(false);
    setOptionValue(optionValue);

    // Call the prop callback with the selected value
    if (onSelectedValue) {
      onSelectedValue(optionValue);
    }
  };

  const handleUnselectOption = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation(); // This will prevent the event from bubbling up to parent elements
    setIsOptionSelected(false);
    setOptionValue("");

    if (onRemoveOption) {
      onRemoveOption();
    }
  };

  return (
    <SelectElementRootStyled $width={width} $variant={variant}>
      <SelectInputLabelStyled>{label}</SelectInputLabelStyled>
      <DropDownButtonStyled
        $width={width}
        $variant={variant}
        onClick={(event) => handleDropDownVisibility(event)}
      >
        <SelectElementWrapperStyled $selected={isOptionSelected} $isVisibleDropDown={isVisibleDropDown}>
          <OptionsSelectedContainerStyled>
            {isOptionSelected ? (
              <SelectedPlaceholderText>
                {(() => {
                  switch (optionValue) {
                    case "true":
                      return <StatusIndicatorCommon isActive={true} />;
                    case "false":
                      return <StatusIndicatorCommon isActive={false} />;
                    default:
                      return <span>{optionValue}</span>;
                  }
                })()}
              </SelectedPlaceholderText>
            ) : (
              <PlaceholderText>{placeholder}</PlaceholderText>
            )}
          </OptionsSelectedContainerStyled>
          {isOptionSelected && (
            <RemoveOptionButtonStyled
              onClick={(event) => handleUnselectOption(event)}
            >
              <RemoveOptionIconStyled />
            </RemoveOptionButtonStyled>
          )}
          {isVisibleDropDown ? (
            <UpDropDownIconStyled id="upperArrow"/>
          ) : (
            <DownDropDownIconStyled />
          )}
        </SelectElementWrapperStyled>
      </DropDownButtonStyled>
      <DropDownContainerStyled
        ref={dropDownContainerRef}
        $dropDown={isVisibleDropDown ? "open" : "closed"}
        $variant={variant}
        $width={width}
        $dropDownHeight={dropDownHeight}
      >
        {searchBar && (
          <SearchBarContainerStyled>
            <SearchBarInputSyled
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <SearchBarIconStyled />
          </SearchBarContainerStyled>
        )}
        <OptionsContainerStyled>
          {statusOption ? (
            <>
              <OptionElementWrapperStyled
                $statusTypeOption={true}
                onClick={() => handleSelectOption('true')}
                key={1}
              >
                 <StatusIndicatorCommon isActive={true} />
              </OptionElementWrapperStyled>
              <OptionElementWrapperStyled
                $statusTypeOption={false}
                onClick={() => handleSelectOption('false')}
                key={0}
              >
                <StatusIndicatorCommon isActive={false} />
              </OptionElementWrapperStyled>
            </>
          ) : dropDownOptions ? ( // Add a check here to handle undefined
            dropDownOptions.map((el) => (
              <OptionElementWrapperStyled
                onClick={() => handleSelectOption(el)}
                key={Math.random()}
              >
                <SelectOptionsElementStyled key={el.value} value={el.value}>
                  {el}
                </SelectOptionsElementStyled>
              </OptionElementWrapperStyled>
            ))
          ) : (
            // Handle the case where dropDownOptions is undefined
            <p>No options available</p>
          )}
        </OptionsContainerStyled>
      </DropDownContainerStyled>
    </SelectElementRootStyled>
  );
};

export default SelectorCommon;