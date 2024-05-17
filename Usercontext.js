import React from 'react'

const usercontext = React.createContext()

const Userprovider = usercontext.Provider

const Userconsumer =usercontext.Consumer

export {Userprovider,Userconsumer} 
export default usercontext