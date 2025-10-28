import React from "react";

function Sort() {
  const [openPopup, setOpenPopup] = React.useState(false);
  const [selected, setSelected] = React.useState(0);

  const itemsPopup = ["Имя А-Я", "Имя Я-А", "Сначала моложе", "Сначала старше"];

  const onClickOpen = () => {
    setOpenPopup(!openPopup);
  };

  const onCLickActivePopup = (i) => {
    setSelected(i);
    setOpenPopup(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <span
          onClick={() => {
            onClickOpen();
          }}
        >
          {itemsPopup[selected]}
        </span>
        <img
          onClick={() => {
            onClickOpen();
          }}
          src="/img/sort.svg"
          width={20}
          height={20}
        />
      </div>
      {openPopup && (
        <div className="sort__popup">
          <ul>
            {itemsPopup.map((sortType, i) => {
              const isSelected = selected === i;
              return (
                <li
                  key={i}
                  className={isSelected ? "active" : ""}
                  onClick={() => onCLickActivePopup(i)}
                >
                  {sortType}
                  {isSelected && (
                    <img src="./img/selected_sort.svg" height={18} width={18} />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Sort;
