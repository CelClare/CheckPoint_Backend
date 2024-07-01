import dataSource from "../lib/datasource";
import CountryEntity from "../entities/Country.entity";

const createFixtures = async () => {
  if (!dataSource.isInitialized) {
    await dataSource.initialize();
  }
  
  const countryRepository = dataSource.getRepository(CountryEntity);

  const countries = [
    { code: "FR", name: "France", emoji: "🇫🇷" },
    { code: "DE", name: "Germany", emoji: "🇩🇪" },
    { code: "IT", name: "Italy", emoji: "🇮🇹" },
  ];

  await countryRepository.save(countries);

  console.log("Fixtures have been created!");
  await dataSource.destroy();
};

createFixtures().catch((error) => {
  console.error("Error creating fixtures:", error);
});
