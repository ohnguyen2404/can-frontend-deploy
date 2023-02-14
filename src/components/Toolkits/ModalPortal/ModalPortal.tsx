import { PropsWithChildren } from "react";

type TModalPortal = {
	handleOpenModal: (status: boolean) => void;
};

const ModalPortal = (props: PropsWithChildren<TModalPortal>) => {
	return (
		<div className="modal-portal-container z-20 absolute top-0 bottom-0 right-0 left-0">
			<div
				className="modal-wrap h-full w-full"
				onClick={() => props.handleOpenModal(false)}>
				<div
					className="modal-inner z-30 fixed left-1/2 top-1/2 transf"
					onClick={(event) => event.stopPropagation()}>
					<span
						className="close-button"
						onClick={() => props.handleOpenModal(false)}></span>
					<div className="modal-container">{props.children}</div>
				</div>
			</div>
		</div>
	);
};

export default ModalPortal;
