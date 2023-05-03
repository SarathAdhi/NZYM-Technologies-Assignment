export type InitialPerson = {
  id: number;
  firstname: string;
  lastname: string;
  gender: string;
  age: number;
  phone: string;
  birthday: string;
  image: string;
};

export type Person = {
  id: number;
  avatar: string;
  "first name": string;
  "last name": string;
  gender: string;
  age: number;
  contact: string;
  address: {
    street: string;
    streetName: string;
    buildingNumber: string;
    city: string;
    zipcode: string;
    country: string;
    county_code: string;
    latitude: number;
    longitude: number;
  };
};
