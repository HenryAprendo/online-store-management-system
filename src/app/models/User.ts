interface Geolocation {
  lat: string;
  long: string;
}

interface Address {
  geolacation: Geolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

interface Fullname {
  firstname: string;
  lastname: string;
}

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: Fullname;
  address: Address;
  phone: string;
}

