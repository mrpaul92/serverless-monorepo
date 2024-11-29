export function request(ctx) {
  console.log("ctx in request", ctx);
  const { identity } = ctx;
  //   if (!identity || !identity.sub) {
  //     return runtime.earlyReturn({});
  //   }
  return {
    operation: "Invoke",
    payload: ctx,
  };
}
export function response(ctx) {
  console.log("ctx in response", ctx);
  const { error, result } = ctx;
  return ctx.result;
}
