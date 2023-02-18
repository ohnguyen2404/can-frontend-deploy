import React, { Dispatch, SetStateAction } from "react";

type IModalContext = {
	isOpenModal: boolean;
	handleOpenModal: Dispatch<SetStateAction<boolean>>;
	setModalComponent: Dispatch<SetStateAction<JSX.Element | null>>;
};

const ModalContext = React.createContext<IModalContext | null>(null);
export default ModalContext;
