export function buildRoutePath(path){
    const regexRoute = /:([a-zA-Z]+)/g
    const pathWithParams = path.replaceAll(regexRoute, "(?<$1>[a-z0-9\-_]+)")

    const pathRegex = new RegExp(`^${pathWithParams}`)

    return pathRegex
}