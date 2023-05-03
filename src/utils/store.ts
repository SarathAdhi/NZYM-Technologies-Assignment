import axios from "@lib/axios";
import { InitialPerson, Person as Person } from "types/person";
import { create } from "zustand";
import { z } from "zod";
import { calculateAge } from "./calculate-age";

export type SortFnPerson = Omit<Person, "contact" | "avatar" | "address">;

const PersonSchema = z.object({
  id: z.number(),
  avatar: z.string(),
  "first name": z.string(),
  "last name": z.string(),
  gender: z.string(),
  age: z.number(),
  contact: z.string(),
  address: z.object({
    street: z.string(),
    streetName: z.string(),
    buildingNumber: z.string(),
    city: z.string(),
    zipcode: z.string(),
    country: z.string(),
    county_code: z.string(),
    latitude: z.number(),
    longitude: z.number(),
  }),
});

type UseStoreProps = {
  persons: Person[];
  isLoading: boolean;
  dataActions: {
    [key in keyof SortFnPerson]: "ASC" | "DESC";
  };
  getPersons: () => void;
  sortData: (key: keyof SortFnPerson) => void;
};

export const useStore = create<UseStoreProps>((set) => ({
  persons: [],

  dataActions: {
    "first name": "DESC",
    "last name": "DESC",
    age: "DESC",
    gender: "DESC",
    id: "DESC",
  },

  isLoading: true,

  getPersons: async () => {
    const response = await axios.get("/api/v1/persons?_quantity=50");

    let persons = response.data;

    persons = persons.map((person: InitialPerson) => {
      // Remove unwanted objects. Because Table heading is generated for the object key dynamically
      const parsedVale = PersonSchema.safeParse({
        ...person,
        "first name": person.firstname,
        "last name": person.lastname,
        contact: person.phone,
        avatar: person.image,
        age: calculateAge(person.birthday),
      });

      return parsedVale.success ? parsedVale.data : null;
    });

    set({ persons, isLoading: false });
  },

  sortData: (key) => {
    set((state) => {
      const allPersons = state.persons;
      let persons;

      let dataActions = state.dataActions;

      const type = dataActions[key];

      persons = allPersons?.sort(function (a, b) {
        let x = type === "ASC" ? a[key]! : b[key]!;
        let y = type === "ASC" ? b[key]! : a[key]!;
        return x < y ? -1 : x > y ? 1 : 0;
      });

      // Change all the value to DESC, so the button arow changes
      Object.keys(dataActions).forEach((_key) => {
        const key = _key as keyof SortFnPerson;
        dataActions[key] = "DESC";
      });

      dataActions = {
        ...dataActions,
        [key]: type === "ASC" ? "DESC" : "ASC",
      };

      return { ...state, persons, dataActions };
    });
  },
}));
