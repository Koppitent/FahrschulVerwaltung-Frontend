export class Praxisstunde {
  id?: number;
  datum?: Date;
  typ?: string;
  fahrlehrerId?: number;
  fahrschuelerId?: number;
  paid?: boolean;
  comments?: string;

  constructor(
    id?: number,
    datum?: Date,
    typ?: string,
    fahrlehrerId?: number,
    fahrschuelerId?: number,
    paid?: boolean,
    comments?: string
  ) {
    this.id = id;
    this.datum = datum;
    this.typ = typ;
    this.fahrlehrerId = fahrlehrerId;
    this.fahrschuelerId = fahrschuelerId;
    this.paid = paid;
    this.comments = comments;
  }

  setDatumAndUhrzeit(datum: string, uhrzeit: string): void {
    const date = datum ? new Date(datum) : new Date();
    if (uhrzeit) {
      const [hours, minutes] = uhrzeit.split(':').map(Number);
      date.setHours(hours, minutes);
    }
    this.datum = date;
  }
}
