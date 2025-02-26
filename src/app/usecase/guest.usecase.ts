import type GuestRepository from "@myapp-utils/repositories/guest.repository";
import type { TUpdateGuestProps } from "@myapp-utils/types/guest-props.type";

export default class GuestUseCase {
  constructor(private readonly guestRepository: GuestRepository) {}

  public async confirmCeremony(data: { id: number; value: boolean }) {
    return await this.guestRepository.updateCeremony(data);
  }

  public async confirmParty(data: { id: number; value: boolean }) {
    return await this.guestRepository.updateParty(data);
  }

  public async updateGuest(data: TUpdateGuestProps) {
    return await this.guestRepository.update(data);
  }

  public async remove(id: number) {
    return await this.guestRepository.delete(id);
  }

  public async count() {
    return await this.guestRepository.count();
  }

  public async countConfirmCeremony() {
    return await this.guestRepository.countConfirmCeremony();
  }

  public async countConfirmParty() {
    return await this.guestRepository.countConfirmParty();
  }
}
