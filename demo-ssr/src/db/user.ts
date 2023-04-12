import {
  Field,
  PrimaryKey,
  TigrisCollection,
  TigrisDataTypes,
} from "@tigrisdata/core";

@TigrisCollection("users")
export class User {
  @PrimaryKey(TigrisDataTypes.STRING, { order: 1 })
  id!: string;
  @Field()
  username!: string;
  @Field()
  nickname?: string;
  @Field()
  joinedTimestamp!: number;
  @Field()
  avatar?: string;
  @Field(TigrisDataTypes.ARRAY, { elements: TigrisDataTypes.STRING })
  roles?: string[];
}
