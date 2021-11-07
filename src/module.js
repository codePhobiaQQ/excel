console.log('test molulejs')

async function start() {
  return await Promise.resolve('console working');
}

start().then(console.log);