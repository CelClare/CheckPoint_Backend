import { Field, ID, InputType, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
class CountryEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column()
    code!: string;

    @Field()
    @Column()
    name!: string;

    @Field()
    @Column()
    emoji!: string;
}

@InputType()
export class CreateCountryInput {
    @Field()
    code!: string;
    @Field()
    name!: string;
    @Field()
    emoji!: string;
  }


export default CountryEntity;