
export type Sport = 'Basketball' | 'Badmington' | 'Football' | 'Tennis' | 'Other';

export const ALL_SPORTS: Sport[] = ['Basketball', 'Badmington', 'Football', 'Tennis', 'Other'];

export class UserModel {
  public id: number;

  public username: string;

  public password: string;

  public email: string;

  public phone: string;

  public city: string;

  public sports: Sport[] = [];
}
