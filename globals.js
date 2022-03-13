const apiUrl = 'https://rest-table-booking.herokuapp.com'

export default function FETCH(method, url, body, token) {
  return fetch(`${apiUrl}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? {'Authorization': `Bearer ${token}`} : {})
    },
    ...(body ? {body: JSON.stringify(body)} : {})
  }).then(res => res.ok ? res.json() : null)
}

export function register(payload) {
  return FETCH('post', '/registration', payload)
}

export function login(payload) {
  return FETCH('post', '/login', payload)
}

export function getAvailableSlots(tableNumber, date, token) {
  return FETCH('get', `/booking/slots?tableNumber=${tableNumber}&date=${date}`, undefined, token)
}

export function bookSlot(payload, token) {
  return FETCH('post', `/booking/`, payload, token)
}
