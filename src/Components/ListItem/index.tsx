import { Item } from "../../types/Item";
import { ContainerItems, ContainerList } from "./styles";
import { useState } from "react";

type Props = {
  item: Item;
  onClick: (id: number) => void;
};

export const ListItem = ({ item, onClick }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);
  return (
    <ContainerList>
      <ContainerItems>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label>{item.name}</label>
        <p onClick={() => onClick(item.id)}>x</p>
      </ContainerItems>
    </ContainerList>
  );
};
