import State from "../State";
import MissingValueError from "../errors/MissingValueError";
import StateAwaitingKey from "./StateAwaitingKey";

class StateAwaitingValue implements State {
	private readonly parseResult: Map<string, string>;
	private readonly key: string;

	constructor(parseResult: Map<string, string>, key: string) {
		this.parseResult = parseResult;
		this.key = key;
	}

	process(token: string): State {
		const newParseResult = new Map<string, string>([...this.parseResult, [this.key, token]]);
		return new StateAwaitingKey(newParseResult);
	}

	finalize(): Map<string, string> {
		throw new MissingValueError(this.key);
	}
}

export default StateAwaitingValue;
