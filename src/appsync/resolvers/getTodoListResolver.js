export function request(ctx) {
  const { args } = ctx;
  return {
    operation: "GetItem",
    key: util.dynamodb.toMapValues({ id: args.id }),
  };
}

export function response(ctx) {
  const { error, result } = ctx;
  if (error) {
    util.appendError(error.message, error.type, result);
  }
  return result;
}
