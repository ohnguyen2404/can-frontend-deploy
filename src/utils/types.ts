export type TComponent<T = undefined> = T extends undefined ? { (): JSX.Element } : { (props: T): JSX.Element };

export const Assert = <T>(element: T) => element;

export enum Direction {
	"Left",
	"Center",
	"Right",
}

export enum State {
	NONE,
	LOADING,
	SUCCESS,
	FAILURE,
}
