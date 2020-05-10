import React, { useState } from "react";
import { VerticallyCenteredModal } from "./VerticallyCenteredModal";

export function BasicStateHook2() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <button onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </button>
      <VerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </VerticallyCenteredModal>
    </>
  );
}