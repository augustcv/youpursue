export interface FlyerRequest {
  id: string
  email: string
  createdAt: string
}

export interface Application {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  gender: string
  program: string
  exchangeLength: string
  message: string
  guardianFirstName: string
  guardianLastName: string
  createdAt: string
  desiredDestinations?: string
}

