export function request(ctx) {
  const { limit = 20, nextToken } = ctx.args;

  return {
    operation: "Scan",
    limit,
    nextToken,
  };
}

export function response(ctx) {
  const { error, result } = ctx;
  if (error) {
    util.appendError(error.message, error.type, result);
  }
  return result.items;
}
