abstract class ParseError extends Error {
	name: string;
	constructor(message: string) {
		super(message);
		this.name = "ParseError";
	}
}

export default ParseError;
