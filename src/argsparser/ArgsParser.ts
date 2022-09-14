import State from "./State";
import StateAwaitingKey from "./states/StateAwaitingKey";

class ArgsParser {
	public parse(args: string[]): Map<string, string> {
		return args
			.reduce(
				(state: State, token: string) => state.process(token),
				new StateAwaitingKey(new Map<string, string>())
			)
			.finalize();
	}
}

export default ArgsParser;
