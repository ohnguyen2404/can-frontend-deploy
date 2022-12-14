export type TComponent<T = undefined> = T extends undefined ? { (): JSX.Element } : { (props: T): JSX.Element };
