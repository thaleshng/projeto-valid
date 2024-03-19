import React, { useState } from "react";
import Select from "react-select";

export const LanguageOption = () => {
    const options = [
        { value: "pt", label: "PT", icon: "https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65df9125bfdac735a9776df3_pt.png" },
        { value: "en", label: "EN", icon: "https://assets-global.website-files.com/659d7a24b23209a8855dfca4/65df912a25089b962d1245e3_en.png" }
    ];

    const [language, setLanguage] = useState(options[0]);

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            display: "flex",
            alignItems: "center",
            padding: "5px",
            color: "#CFCFD0", // Definindo a cor do texto das opções como branco
            backgroundColor: state.isFocused ? "transparent" : "none", // Remover o background no hover
            cursor: "pointer",
            fontSize: "12px",
            transition: "0.3s ease-in-out",
            "&:hover": {
                color: "#6f6f72" // Cor no hover das opções
            },
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500
        }),
        singleValue: (provided, state) => ({
            ...provided,
            display: "flex",
            alignItems: "center",
            color: state.data.value === "pt" ? "#fff" : provided.color,
            fontSize: "14px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500
        }),
        control: (provided, state) => ({
            ...provided,
            border: "none",
            boxShadow: state.isFocused ? "none" : provided.boxShadow,
            cursor: "pointer",
            backgroundColor: "transparent",
            caretColor: "transparent"
        }),
        indicatorSeparator: (provided, state) => ({
            ...provided,
            display: "none"
        }),
        menu: (provided, state) => ({
            ...provided,
            backgroundColor: "#000", // Definindo o background da lista suspensa como preto
            padding: "0 7px"
        })
    };

    const handleLanguageChange = (selectedOption) => {
        setLanguage(selectedOption);
    };

    return (
        <Select
            options={options}
            value={language}
            onChange={handleLanguageChange}
            styles={customStyles}
            isClearable={false}
            getOptionLabel={(option) => (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={option.icon} alt={option.label} style={{ width: "20px", height: "20px", marginRight: "5px" }} />
                    {option.label}
                </div>
            )}
            components={{ DropdownIndicator: null, IndicatorSeparator: null }}
        />
    );
};