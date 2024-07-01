import { DataSource } from "typeorm";
import CountryEntity from "../entities/Country.entity";

export default new DataSource({
  type: "sqlite",
  database: "checkpointbackend.sqlite",
  entities: [CountryEntity],
  synchronize: true,
  logging: ["error", "query"]
});