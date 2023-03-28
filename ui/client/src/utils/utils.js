import React, { useEffect, useRef } from 'react'

export function makePostRequest(path, body, onload = () => {}) {
  console.log(`Making post request to ${path} with ${JSON.stringify(body)}`)
  var xhr = new XMLHttpRequest()
  xhr.open('POST', path, true)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(JSON.stringify(body))
  xhr.onload = () => onload(xhr)
}

export function makeAsyncPostRequest(path, body) {
  return new Promise((resolve) => {
    console.log(`Making post request to ${path} with ${JSON.stringify(body)}`)
    var xhr = new XMLHttpRequest()
    xhr.open('POST', path, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify(body))
    xhr.onload = () => resolve(xhr)
  })
}

// https://stackoverflow.com/questions/53253940/make-react-useeffect-hook-not-run-on-initial-render
export function useDidMountEffect(func, deps) {
  const didMount = useRef(false)

  useEffect(() => {
    if (didMount.current) func()
    else didMount.current = true
  }, deps)
}

export const LineBreak = () => {
  return <br></br>
}

export const networkConnect = async (ssid, password = undefined) => {
  await makeAsyncPostRequest('/network', {
    ssid,
    password,
  })
}

export const networkConnect = async (ssid, password=undefined) => {
    await makeAsyncPostRequest('/network', {
        ssid, password
    });
}
