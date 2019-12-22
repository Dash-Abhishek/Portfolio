import React, { useEffect } from 'react'
import axios from 'axios'

const Datafeed = () => {

    useEffect(() => {

        axios.get("https://dev.carbon.gcp.lowes.com/xpauth/baymax/user/favourite",{headers:{"x-api-version":"v1","x-user-id":213}})

            .then((resp) => { console.log(resp.data) })
            .catch(err => {
                console.log("call failed", err);
            })

    })

    return (
        <p />   
    )


}

export default Datafeed;

// baymax/experiments
// http://dev.carbon.gcp.lowes.com/xpauth/greetings
// https://dev.carbon.gcp.lowes.com/xpruntime/baymax
// https://damp-peak-37208.herokuapp.com/healthcheck