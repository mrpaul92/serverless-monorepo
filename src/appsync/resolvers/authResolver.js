export function request(ctx) {
  return {
    operation: "Invoke",
    payload: { field: ctx.info.fieldName, arguments: ctx.args },
  };
}
export function response(ctx) {
  const { error, result } = ctx;
  if (error) {
    util.appendError(error.message, error.type, result);
  }
  return ctx.result;
}
