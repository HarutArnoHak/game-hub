import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDoubleDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (selector: string) => void;
  sortOrderSelector: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrderSelector }: Props) => {
  const sortOrders = [
    { value: "", lable: "Relevance" },
    { value: "-added", lable: "Date Added" },
    { value: "name", lable: "Name" },
    { value: "-released", lable: "Released Date" },
    { value: "-metacritic", lable: "Popularity" },
    { value: "-rating", lable: "Average rating" },
  ];
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrderSelector
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDoubleDown />}>
        Order by: {currentSortOrder?.lable || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((selector) => (
          <MenuItem
            key={selector.value}
            value={selector.value}
            onClick={() => onSelectSortOrder(selector.value)}
          >
            {selector.lable}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
