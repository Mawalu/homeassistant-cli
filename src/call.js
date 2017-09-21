module.exports = async (home, log, args) => {
  let domain, service, options
  [domain, service, options] = args

  if (!domain || !service) {
    console.log('Domain and service option are required')
    process.exit(1)
  }

  await home.connect()

  let request = {
    domain,
    service
  }

  if (options.serviceData) request.service_data = JSON.parse(options.serviceData)

  await home.call(request)
  log('completed')
  
  process.exit(0)
}
