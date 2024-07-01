import { Resolver, Query, Arg, Mutation } from "type-graphql";
import CountryEntity, { CreateCountryInput } from "../entities/Country.entity";
import CountryServices from "../services/country.services";

@Resolver()
export class CountryResolver {
  @Query(() => [CountryEntity])
  async listCountries() {
    const countries: CountryEntity[] = await new CountryServices().list();
    return countries;
  }

  @Query(() => CountryEntity, { nullable: true })
  async getCountryByCode(@Arg("code") code: string) {
    const countryServices = await new CountryServices().getByCode(code);
    return countryServices;
  }

  @Mutation(() => CountryEntity)
  async createCountry(@Arg("input") input: CreateCountryInput) {
    const countryServices = new CountryServices().create(input);
    return countryServices;
  }
}
