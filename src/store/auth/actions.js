export const AUTHENTICATE_DATALOFT_USER_REQUEST = 'AUTHENTICATE_DATALOFT_USER_REQUEST'
export const AUTHENTICATE_DATALOFT_USER_SUCCESS = 'AUTHENTICATE_DATALOFT_USER_SUCCESS'
export const AUTHENTICATE_DATALOFT_USER_FAILURE = 'AUTHENTICATE_DATALOFT_USER_FAILURE'

export const authenticateUserRequest = (username, password, jwt_token) => ({
  type: AUTHENTICATE_DATALOFT_USER_REQUEST,
  payload: {
    username,
    password,
    jwt_token
  },
  meta: {
    thunk: true
  }
})

export const authenticateUserSuccess = (response, meta) => ({
  type: AUTHENTICATE_DATALOFT_USER_SUCCESS,
  payload: response,
  meta
})

export const authenticateUserFailure = (error, meta) => ({
  type: AUTHENTICATE_DATALOFT_USER_FAILURE,
  payload: error,
  meta
})

export const GET_METAMASK_ADDRESS_REQUEST = 'GET_METAMASK_ADDRESS_REQUEST'
export const GET_METAMASK_ADDRESS_SUCCESS = 'GET_METAMASK_ADDRESS_SUCCESS'
export const GET_METAMASK_ADDRESS_FAILURE = 'GET_METAMASK_ADDRESS_FAILURE'

export const getMetamaskAddressRequest = (address) => ({
  type: GET_METAMASK_ADDRESS_REQUEST,
  payload: {
    address
  },
  meta: {
    thunk: true
  }
})

export const getMetamaskAddressSuccess = (response, meta) => ({
  type: GET_METAMASK_ADDRESS_SUCCESS,
  payload: response,
  meta
})

export const getMetamaskAddressFailure = (error, meta) => ({
  type: GET_METAMASK_ADDRESS_FAILURE,
  payload: error,
  meta
})

export const FC_CHAIN_HEAD_REQUEST = 'FC_CHAIN_HEAD_REQUEST'
export const FC_CHAIN_HEAD_SUCCESS = 'FC_CHAIN_HEAD_SUCCESS'
export const FC_CHAIN_HEAD_FAILURE = 'FC_CHAIN_HEAD_FAILURE'

export const createDataloftAccountRequest = (username, password) => ({
  type: FC_CHAIN_HEAD_REQUEST,
  payload: {
    username,
    password
  },
  meta: {
    thunk: true,
  }
})

export const createDataloftAccountSuccess = (response, meta) => ({
  type: FC_CHAIN_HEAD_SUCCESS,
  payload: response,
  meta,
})

export const createDataloftAccountFailure = (error, meta) => ({
  type: FC_CHAIN_HEAD_FAILURE,
  payload: error,
  meta,
})



export const CREATE_DATALOFT_ACCOUNT_REQUEST = 'CREATE_DATALOFT_ACCOUNT_REQUEST'
export const CREATE_DATALOFT_ACCOUNT_SUCCESS = 'CREATE_DATALOFT_ACCOUNT_SUCCESS'
export const CREATE_DATALOFT_ACCOUNT_FAILURE = 'CREATE_DATALOFT_ACCOUNT_FAILURE'

export const fcChainHeadRequest = (username, password) => ({
  type: CREATE_DATALOFT_ACCOUNT_REQUEST,
  payload: {
    username,
    password
  },
  meta: {
    thunk: true,
  }
})

export const fcChainHeadSuccess = (response, meta) => ({
  type: CREATE_DATALOFT_ACCOUNT_SUCCESS,
  payload: response,
  meta,
})

export const fcChainHeadFailure = (error, meta) => ({
  type: CREATE_DATALOFT_ACCOUNT_FAILURE,
  payload: error,
  meta,
})

export const CREATE_METAMASK_ACCOUNT_REQUEST = 'CREATE_METAMASK_ACCOUNT_REQUEST'
export const CREATE_METAMASK_ACCOUNT_SUCCESS = 'CREATE_METAMASK_ACCOUNT_SUCCESS'
export const CREATE_METAMASK_ACCOUNT_FAILURE = 'CREATE_METAMASK_ACCOUNT_FAILURE'

export const createMetamaskAccountRequest = (username, password, address) => ({
  type: CREATE_METAMASK_ACCOUNT_REQUEST,
  payload: {
    username,
    password,
    address
  },
  meta: {
    thunk: true
  }
})

export const createMetamaskAccountSuccess = (response, meta) => ({
  type: CREATE_METAMASK_ACCOUNT_SUCCESS,
  payload: response,
  meta
})

export const createMetamaskAccountFailure = (error, meta) => ({
  type: CREATE_METAMASK_ACCOUNT_FAILURE,
  payload: error,
  meta
})
