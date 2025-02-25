import type { TPerson } from "./guest.type";

export type TUpdateGuestProps = {
  id: number;
  confirmCeremony?: boolean;
  confirmParty?: boolean;
} & TPerson;
