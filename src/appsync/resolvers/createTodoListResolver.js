export function request(ctx) {
  const { args } = ctx;
  const id = util.autoId();
  const item = {
    id: id,
    ...args,
    createdAt: util.time.nowISO8601(),
    updatedAt: util.time.nowISO8601(),
  };

  return {
    operation: "PutItem",
    key: util.dynamodb.toMapValues({ id: util.autoId() }),
    attributeValues: util.dynamodb.toMapValues(item),
  };
}

export function response(ctx) {
  const { error, result } = ctx;
  if (error) {
    util.appendError(error.message, error.type, result);
  }
  return result;
}
