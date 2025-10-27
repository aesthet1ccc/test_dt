import React from "react";

function Sort() {
  const [openPopup, setOpenPopup] = React.useState(false);

  const onCLickOpen = () => {
    setOpenPopup(!openPopup);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <span>Имя А-Я</span>
        <img
          onClick={() => setOpenPopup(true)}
          src="/img/sort.svg"
          width={20}
          height={20}
        />
      </div>
      {openPopup && (
        <div className="sort__popup">
          <ul>
            <li className="active" onClick={() => onCLickOpen()}>
              Имя А-Я
            </li>
            <li>Имя Я-А</li>
            <li>Сначала моложе</li>
            <li>Сначала старше</li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default Sort;
