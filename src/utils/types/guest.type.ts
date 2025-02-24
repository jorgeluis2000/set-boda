export type TPerson = {
  firstName: string;
  secondName: string;
  firstSurname: string;
  secondSurname: string;
};

type TGuestFamily = {
  id: number;
  lastName: string;
  family: TGuest[];
};

type TGuest = {
  confirmCeremony: boolean;
  confirmParty: boolean;
  isVegan: boolean;
  person: TPerson;
};
