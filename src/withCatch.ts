function fake() {
  return new Promise(function () {
    return {
      hello: 'string',
    };
  });
}

export async function hello() {
  const maybeUser = await fake();

  if (maybeUser instanceof Error) {
    // do something with error
  }

  return maybeUser;
}

export async function anotherWay() {
  const user = await fake().catch((error) => {
    // do something with error
    console.log(error);
  });

  if (!user) {
    // do something if there is no user
    // and return in this if block
    // or use if/else instead for returning the user in else
  }

  return user;
}
