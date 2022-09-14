import State from "../State";
import StateAwaitingValue from "./StateAwaitingValue";
import InvalidKeyError from "../errors/InvalidKeyError";

class StateAwaitingKey implements State {
	private readonly parseResult: Map<string, string>;

	constructor(parseResult: Map<string, string>) {
		this.parseResult = parseResult;
	}

	process(token: string): State {
		if (!token.startsWith("--")) {
			throw new InvalidKeyError(token);
		}
		const key = token.substring(2);
		return new StateAwaitingValue(this.parseResult, key);
	}

	finalize(): Map<string, string> {
		return this.parseResult;
	}
}

export default StateAwaitingKey;
