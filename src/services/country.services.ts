import { Repository } from "typeorm";
import CountryEntity, { CreateCountryInput } from "../entities/Country.entity";
import datasource from "../lib/datasource";

class CountryServices {
    db: Repository<CountryEntity>;
    constructor() {
        this.db = datasource.getRepository(CountryEntity);
    }

    async list() {
        return await this.db.find();
    }

    async getByCode(code:string) {
        return await this.db.findOne({ where: { code } });
    }

    async create(input: CreateCountryInput) {
        const country = this.db.create(input);
        return this.db.save(country);
      }
}

export default CountryServices;