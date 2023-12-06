export enum Endpoints {
	Register = "register",
	Login = "login"
  }

export enum Methods {
	POST = "post"
}

const makeEndpoint = (endpointValue:Endpoints) => {
	console.log(`${process.env.REACT_APP_PROTOCOL}${process.env.REACT_APP_API}${endpointValue}`)
    return `${process.env.REACT_APP_PROTOCOL}${process.env.REACT_APP_API}${endpointValue}`
}

export default makeEndpoint