import type { TPerson } from "./guest.type";

export type TAddGuestProps = { family: number } & TPerson;
export type TAddFamilyProps = { lastName: string };
export type TUpdateFamilyProps = { id: number; lastName: string };
