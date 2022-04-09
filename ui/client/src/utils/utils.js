import React, { useEffect, useRef } from 'react';

export function makePostRequest(path, body) {
    console.log(`Making post request to ${path} with ${JSON.stringify(body)}`);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', path, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.send(JSON.stringify(body));
}

// https://stackoverflow.com/questions/53253940/make-react-useeffect-hook-not-run-on-initial-render
export function useDidMountEffect(func, deps) {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) func();
        else didMount.current = true;
    }, deps);
}
