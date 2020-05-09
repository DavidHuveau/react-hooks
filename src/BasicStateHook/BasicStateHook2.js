import React, { useState } from "react";
import { VerticallyCenteredModal } from "./VerticallyCenteredModal";

export function BasicStateHook2() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <button onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </button>

      <VerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}