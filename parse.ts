/**
 * ParseOptions are the options for the parse function.
 */
export interface ParseOptions {
  /**
   * separator is the separator for nested keys.
   * @default "."
   */
  separator?: string;
}

/**
 * Parsable is the type that can be parsed.
 */
export type Parsable = Record<string, unknown>;

/**
 * parse parses the input and returns the result.
 */
export function parse<T extends Record<string, unknown>>(
  input: URLSearchParams,
  options?: ParseOptions,
): T {
  const separator = options?.separator ?? ".";
  const result: Record<string, unknown> = {};
  input.forEach((value, key) => {
    const keyParts = key.split(separator);
    let current = result;
    for (let i = 0; i < keyParts.length - 1; i++) {
      if (!current[keyParts[i]]) {
        current[keyParts[i]] = {};
      }

      current = current[keyParts[i]] as Record<string, unknown>;
    }

    current[keyParts[keyParts.length - 1]] = value;
  });

  return result as unknown as T;
}
