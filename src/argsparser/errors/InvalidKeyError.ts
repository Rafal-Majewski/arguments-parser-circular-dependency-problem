import ParseError from "../ParseError";

class InvalidKeyError extends ParseError {
	name: string;
	constructor(key: string) {
		super(`Invalid key: ${key}`);
		this.name = "InvalidKeyError";
	}
}

export default InvalidKeyError;
