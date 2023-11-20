import React, { useState } from "react";
import Modal from "./Modal";
import ButtonModal from "./ButtonModal";

//Props
//Podemos passar o estado e a função de modificação como propriedades para outros elementos.

const Exemplo3 = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
};

export default Exemplo3;