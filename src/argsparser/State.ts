interface State {
	process(token: string): State;
	finalize(): Map<string, string>;
}

export default State;
