const endpoints = Object.freeze({
	Register: Symbol("register")
})

const methods = Object.freeze({
	POST: Symbol("post")
})

const makeEndpoint = (endpointValue) => {
    return process.env.REACT_APP_PROTOCOL + process.env.REACT_APP_API + endpointValue
}

export default makeEndpoint
export const { Endpoints, Methods } = [endpoints, methods]