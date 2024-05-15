"use client";

import React, { useState } from "react";
import { AutoComplete, Input } from "antd";

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

const SearchBox: React.FC = () => {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const [anotherOptions, setAnotherOptions] = useState<{ value: string }[]>([]);

  const getPanelValue = (searchText: string) =>
    !searchText
      ? []
      : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

  const onSelect = (data: string) => {
    console.log("onSelect", data);
  };

  const onChange = (data: string) => {
    setValue(data);
  };
  return (
    <div className="w-1/2 flex items-center">
      <AutoComplete
        options={options}
        style={{ width: "100%" }}
        onSelect={onSelect}
        onSearch={(text) => setOptions(getPanelValue(text))}
      >
        <Input.Search
          size="large"
          placeholder="Search Movies, Webseries"
          allowClear
        />
      </AutoComplete>
    </div>
  );
};

export default SearchBox;
