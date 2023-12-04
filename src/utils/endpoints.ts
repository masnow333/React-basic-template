enum endpoints {
	Register = "register"
  }

enum methods {
	POST = "post"
}

const makeEndpoint = (endpointValue:endpoints) => {
    return process.env.REACT_APP_PROTOCOL ?? "http://" + process.env.REACT_APP_API + endpointValue
}

export default makeEndpoint
// export const { Endpoints, Methods } = [endpoints, methods]