import ParseError from "../ParseError";

class MissingValueError extends ParseError {
	name: string;
	constructor(key: string) {
		super(`Missing value for key: ${key}`);
		this.name = "MissingValueError";
	}
}

export default MissingValueError;
