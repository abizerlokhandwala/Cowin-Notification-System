import { GET_API } from '../../common/middlewares/getAPI'
import { POST_API } from '../../common/middlewares/postAPI'

export const ON_CHANGE_REGISTRATION_FIELD = 'ON_CHANGE_REGISTRATION_FIELD'
export const onChangeRegistrationField = (changedField) => {
  return (
    {
      type: ON_CHANGE_REGISTRATION_FIELD,
      changedField,
    }
  )
}

export const ON_CHANGE_SUBSCRIPTION_FIELD = 'ON_CHANGE_SUBSCRIPTION_FIELD'
export const onChangeSubscriptionField = (changedField, index) => {
  return (
    {
      type: ON_CHANGE_SUBSCRIPTION_FIELD,
      changedField,
      index
    }
  )
}

export const ON_ADD_SUBSCRIPTION = 'ON_ADD_SUBSCRIPTION'
export const onAddSubscription = () => {
  return (
    {
      type: ON_ADD_SUBSCRIPTION,
    }
  )
}


export const ON_REMOVE_SUBSCRIPTION = 'ON_REMOVE_SUBSCRIPTION'
export const onRemoveSubscription = (index) => {
  return (
    {
      type: ON_REMOVE_SUBSCRIPTION,
      index
    }
  )
}

export const GET_ALL_STATES_REQUEST = 'GET_ALL_STATES_REQUEST'
export const GET_ALL_STATES_SUCCESS = 'GET_ALL_STATES_SUCCESS'
export const GET_ALL_STATES_FAILURE = 'GET_ALL_STATES_FAILURE'
export const getAllStates = () => ({
  [GET_API]: {
    types: [GET_ALL_STATES_REQUEST, GET_ALL_STATES_SUCCESS, GET_ALL_STATES_FAILURE],
    endpoint: 'https://a7nn6pz85i.execute-api.ap-south-1.amazonaws.com/dev/states',
  }
})

export const FETCH_DISTRICTS_REQUEST = 'FETCH_DISTRICTS_REQUEST'
export const FETCH_DISTRICTS_SUCCESS = 'FETCH_DISTRICTS_SUCCESS'
export const FETCH_DISTRICTS_FAILURE = 'FETCH_DISTRICTS_FAILURE'
export const fetchDistricts = (stateId) => ({
  [GET_API]: {
    types: [FETCH_DISTRICTS_REQUEST, FETCH_DISTRICTS_SUCCESS, FETCH_DISTRICTS_FAILURE],
    endpoint: `https://a7nn6pz85i.execute-api.ap-south-1.amazonaws.com/dev/districts?state_id=${stateId}`
  }
})


export const REGISTER_SUBSCRIBE_REQUEST = 'REGISTER_SUBSCRIBE_REQUEST'
export const REGISTER_SUBSCRIBE_SUCCESS = 'REGISTER_SUBSCRIBE_SUCCESS'
export const REGISTER_SUBSCRIBE_FAILURE = 'REGISTER_SUBSCRIBE_FAILURE'
export const registerSubscription = (stateId) => ({
  [POST_API]: {
    types: [REGISTER_SUBSCRIBE_REQUEST, REGISTER_SUBSCRIBE_SUCCESS, REGISTER_SUBSCRIBE_FAILURE],
    endpoint: `https://a7nn6pz85i.execute-api.ap-south-1.amazonaws.com/dev/subscribe`,
    payload: {
        "email":"abizerl123@gmail.com", 
        "phone_number": "123", 
        "subscriptions": [{"vaccine":"abc","age_group": "abc","district_id":"1232"}]
    },
    skipCsrfToken: true,
    isPayloadJson: true,
  }
})