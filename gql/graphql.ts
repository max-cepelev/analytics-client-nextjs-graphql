/* eslint-disable */
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Building = {
  __typename?: 'Building';
  _count: BuildingCount;
  address: Scalars['String'];
  city: City;
  cityId: Scalars['Int'];
  completed: Scalars['Boolean'];
  completionDate: Scalars['DateTime'];
  complex: Complex;
  complexId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  decorType?: Maybe<DecorType>;
  developer: Developer;
  developerId: Scalars['Int'];
  district: District;
  districtId: Scalars['Int'];
  domClickId?: Maybe<Scalars['Int']>;
  domRfId?: Maybe<Scalars['Int']>;
  group: Group;
  groupId: Scalars['Int'];
  id: Scalars['Int'];
  img?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  properties?: Maybe<Array<Property>>;
  propertyClass?: Maybe<PropertyClass>;
  sales?: Maybe<Array<Sale>>;
  updatedAt: Scalars['DateTime'];
  wallMaterial?: Maybe<WallMaterial>;
};

export type BuildingAvgAggregate = {
  __typename?: 'BuildingAvgAggregate';
  cityId?: Maybe<Scalars['Float']>;
  complexId?: Maybe<Scalars['Float']>;
  developerId?: Maybe<Scalars['Float']>;
  districtId?: Maybe<Scalars['Float']>;
  domClickId?: Maybe<Scalars['Float']>;
  domRfId?: Maybe<Scalars['Float']>;
  groupId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type BuildingCount = {
  __typename?: 'BuildingCount';
  properties: Scalars['Int'];
  sales: Scalars['Int'];
};

export type BuildingCountAggregate = {
  __typename?: 'BuildingCountAggregate';
  _all: Scalars['Int'];
  address: Scalars['Int'];
  cityId: Scalars['Int'];
  completed: Scalars['Int'];
  completionDate: Scalars['Int'];
  complexId: Scalars['Int'];
  createdAt: Scalars['Int'];
  decorType: Scalars['Int'];
  developerId: Scalars['Int'];
  districtId: Scalars['Int'];
  domClickId: Scalars['Int'];
  domRfId: Scalars['Int'];
  groupId: Scalars['Int'];
  id: Scalars['Int'];
  img: Scalars['Int'];
  latitude: Scalars['Int'];
  longitude: Scalars['Int'];
  name: Scalars['Int'];
  propertyClass: Scalars['Int'];
  updatedAt: Scalars['Int'];
  wallMaterial: Scalars['Int'];
};

export type BuildingCreateManyCityInput = {
  address: Scalars['String'];
  completed?: InputMaybe<Scalars['Boolean']>;
  completionDate: Scalars['DateTime'];
  complexId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  decorType?: InputMaybe<DecorType>;
  developerId: Scalars['Int'];
  districtId: Scalars['Int'];
  domClickId?: InputMaybe<Scalars['Int']>;
  domRfId?: InputMaybe<Scalars['Int']>;
  groupId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  img?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  propertyClass?: InputMaybe<PropertyClass>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  wallMaterial?: InputMaybe<WallMaterial>;
};

export type BuildingCreateManyCityInputEnvelope = {
  data: Array<BuildingCreateManyCityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BuildingCreateManyComplexInput = {
  address: Scalars['String'];
  cityId: Scalars['Int'];
  completed?: InputMaybe<Scalars['Boolean']>;
  completionDate: Scalars['DateTime'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  decorType?: InputMaybe<DecorType>;
  developerId: Scalars['Int'];
  districtId: Scalars['Int'];
  domClickId?: InputMaybe<Scalars['Int']>;
  domRfId?: InputMaybe<Scalars['Int']>;
  groupId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  img?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  propertyClass?: InputMaybe<PropertyClass>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  wallMaterial?: InputMaybe<WallMaterial>;
};

export type BuildingCreateManyComplexInputEnvelope = {
  data: Array<BuildingCreateManyComplexInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BuildingCreateManyDeveloperInput = {
  address: Scalars['String'];
  cityId: Scalars['Int'];
  completed?: InputMaybe<Scalars['Boolean']>;
  completionDate: Scalars['DateTime'];
  complexId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  decorType?: InputMaybe<DecorType>;
  districtId: Scalars['Int'];
  domClickId?: InputMaybe<Scalars['Int']>;
  domRfId?: InputMaybe<Scalars['Int']>;
  groupId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  img?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  propertyClass?: InputMaybe<PropertyClass>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  wallMaterial?: InputMaybe<WallMaterial>;
};

export type BuildingCreateManyDeveloperInputEnvelope = {
  data: Array<BuildingCreateManyDeveloperInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BuildingCreateManyDistrictInput = {
  address: Scalars['String'];
  cityId: Scalars['Int'];
  completed?: InputMaybe<Scalars['Boolean']>;
  completionDate: Scalars['DateTime'];
  complexId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  decorType?: InputMaybe<DecorType>;
  developerId: Scalars['Int'];
  domClickId?: InputMaybe<Scalars['Int']>;
  domRfId?: InputMaybe<Scalars['Int']>;
  groupId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  img?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  propertyClass?: InputMaybe<PropertyClass>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  wallMaterial?: InputMaybe<WallMaterial>;
};

export type BuildingCreateManyDistrictInputEnvelope = {
  data: Array<BuildingCreateManyDistrictInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BuildingCreateManyGroupInput = {
  address: Scalars['String'];
  cityId: Scalars['Int'];
  completed?: InputMaybe<Scalars['Boolean']>;
  completionDate: Scalars['DateTime'];
  complexId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  decorType?: InputMaybe<DecorType>;
  developerId: Scalars['Int'];
  districtId: Scalars['Int'];
  domClickId?: InputMaybe<Scalars['Int']>;
  domRfId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  img?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  propertyClass?: InputMaybe<PropertyClass>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  wallMaterial?: InputMaybe<WallMaterial>;
};

export type BuildingCreateManyGroupInputEnvelope = {
  data: Array<BuildingCreateManyGroupInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type BuildingCreateNestedManyWithoutCityInput = {
  connect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BuildingCreateOrConnectWithoutCityInput>>;
  create?: InputMaybe<Array<BuildingCreateWithoutCityInput>>;
  createMany?: InputMaybe<BuildingCreateManyCityInputEnvelope>;
};

export type BuildingCreateNestedManyWithoutComplexInput = {
  connect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BuildingCreateOrConnectWithoutComplexInput>>;
  create?: InputMaybe<Array<BuildingCreateWithoutComplexInput>>;
  createMany?: InputMaybe<BuildingCreateManyComplexInputEnvelope>;
};

export type BuildingCreateNestedManyWithoutDeveloperInput = {
  connect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BuildingCreateOrConnectWithoutDeveloperInput>>;
  create?: InputMaybe<Array<BuildingCreateWithoutDeveloperInput>>;
  createMany?: InputMaybe<BuildingCreateManyDeveloperInputEnvelope>;
};

export type BuildingCreateNestedManyWithoutDistrictInput = {
  connect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BuildingCreateOrConnectWithoutDistrictInput>>;
  create?: InputMaybe<Array<BuildingCreateWithoutDistrictInput>>;
  createMany?: InputMaybe<BuildingCreateManyDistrictInputEnvelope>;
};

export type BuildingCreateNestedManyWithoutGroupInput = {
  connect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BuildingCreateOrConnectWithoutGroupInput>>;
  create?: InputMaybe<Array<BuildingCreateWithoutGroupInput>>;
  createMany?: InputMaybe<BuildingCreateManyGroupInputEnvelope>;
};

export type BuildingCreateOrConnectWithoutCityInput = {
  create: BuildingCreateWithoutCityInput;
  where: BuildingWhereUniqueInput;
};

export type BuildingCreateOrConnectWithoutComplexInput = {
  create: BuildingCreateWithoutComplexInput;
  where: BuildingWhereUniqueInput;
};

export type BuildingCreateOrConnectWithoutDeveloperInput = {
  create: BuildingCreateWithoutDeveloperInput;
  where: BuildingWhereUniqueInput;
};

export type BuildingCreateOrConnectWithoutDistrictInput = {
  create: BuildingCreateWithoutDistrictInput;
  where: BuildingWhereUniqueInput;
};

export type BuildingCreateOrConnectWithoutGroupInput = {
  create: BuildingCreateWithoutGroupInput;
  where: BuildingWhereUniqueInput;
};

export type BuildingCreateOrConnectWithoutPropertiesInput = {
  create: BuildingCreateWithoutPropertiesInput;
  where: BuildingWhereUniqueInput;
};

export type BuildingCreateWithoutCityInput = {
  address: Scalars['String'];
  completed?: InputMaybe<Scalars['Boolean']>;
  completionDate: Scalars['DateTime'];
  complex: ComplexCreateNestedOneWithoutBuildingsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  decorType?: InputMaybe<DecorType>;
  developer: DeveloperCreateNestedOneWithoutBuildingsInput;
  district: DistrictCreateNestedOneWithoutBuildingsInput;
  domClickId?: InputMaybe<Scalars['Int']>;
  domRfId?: InputMaybe<Scalars['Int']>;
  group: GroupCreateNestedOneWithoutBuildingsInput;
  img?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  properties?: InputMaybe<PropertyCreateNestedManyWithoutBuildingInput>;
  propertyClass?: InputMaybe<PropertyClass>;
  sales?: InputMaybe<SaleCreateNestedManyWithoutBuildingInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  wallMaterial?: InputMaybe<WallMaterial>;
};

export type BuildingCreateWithoutComplexInput = {
  address: Scalars['String'];
  city: CityCreateNestedOneWithoutBuildingsInput;
  completed?: InputMaybe<Scalars['Boolean']>;
  completionDate: Scalars['DateTime'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  decorType?: InputMaybe<DecorType>;
  developer: DeveloperCreateNestedOneWithoutBuildingsInput;
  district: DistrictCreateNestedOneWithoutBuildingsInput;
  domClickId?: InputMaybe<Scalars['Int']>;
  domRfId?: InputMaybe<Scalars['Int']>;
  group: GroupCreateNestedOneWithoutBuildingsInput;
  img?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  properties?: InputMaybe<PropertyCreateNestedManyWithoutBuildingInput>;
  propertyClass?: InputMaybe<PropertyClass>;
  sales?: InputMaybe<SaleCreateNestedManyWithoutBuildingInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  wallMaterial?: InputMaybe<WallMaterial>;
};

export type BuildingCreateWithoutDeveloperInput = {
  address: Scalars['String'];
  city: CityCreateNestedOneWithoutBuildingsInput;
  completed?: InputMaybe<Scalars['Boolean']>;
  completionDate: Scalars['DateTime'];
  complex: ComplexCreateNestedOneWithoutBuildingsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  decorType?: InputMaybe<DecorType>;
  district: DistrictCreateNestedOneWithoutBuildingsInput;
  domClickId?: InputMaybe<Scalars['Int']>;
  domRfId?: InputMaybe<Scalars['Int']>;
  group: GroupCreateNestedOneWithoutBuildingsInput;
  img?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  properties?: InputMaybe<PropertyCreateNestedManyWithoutBuildingInput>;
  propertyClass?: InputMaybe<PropertyClass>;
  sales?: InputMaybe<SaleCreateNestedManyWithoutBuildingInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  wallMaterial?: InputMaybe<WallMaterial>;
};

export type BuildingCreateWithoutDistrictInput = {
  address: Scalars['String'];
  city: CityCreateNestedOneWithoutBuildingsInput;
  completed?: InputMaybe<Scalars['Boolean']>;
  completionDate: Scalars['DateTime'];
  complex: ComplexCreateNestedOneWithoutBuildingsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  decorType?: InputMaybe<DecorType>;
  developer: DeveloperCreateNestedOneWithoutBuildingsInput;
  domClickId?: InputMaybe<Scalars['Int']>;
  domRfId?: InputMaybe<Scalars['Int']>;
  group: GroupCreateNestedOneWithoutBuildingsInput;
  img?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  properties?: InputMaybe<PropertyCreateNestedManyWithoutBuildingInput>;
  propertyClass?: InputMaybe<PropertyClass>;
  sales?: InputMaybe<SaleCreateNestedManyWithoutBuildingInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  wallMaterial?: InputMaybe<WallMaterial>;
};

export type BuildingCreateWithoutGroupInput = {
  address: Scalars['String'];
  city: CityCreateNestedOneWithoutBuildingsInput;
  completed?: InputMaybe<Scalars['Boolean']>;
  completionDate: Scalars['DateTime'];
  complex: ComplexCreateNestedOneWithoutBuildingsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  decorType?: InputMaybe<DecorType>;
  developer: DeveloperCreateNestedOneWithoutBuildingsInput;
  district: DistrictCreateNestedOneWithoutBuildingsInput;
  domClickId?: InputMaybe<Scalars['Int']>;
  domRfId?: InputMaybe<Scalars['Int']>;
  img?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  properties?: InputMaybe<PropertyCreateNestedManyWithoutBuildingInput>;
  propertyClass?: InputMaybe<PropertyClass>;
  sales?: InputMaybe<SaleCreateNestedManyWithoutBuildingInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  wallMaterial?: InputMaybe<WallMaterial>;
};

export type BuildingCreateWithoutPropertiesInput = {
  address: Scalars['String'];
  city: CityCreateNestedOneWithoutBuildingsInput;
  completed?: InputMaybe<Scalars['Boolean']>;
  completionDate: Scalars['DateTime'];
  complex: ComplexCreateNestedOneWithoutBuildingsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  decorType?: InputMaybe<DecorType>;
  developer: DeveloperCreateNestedOneWithoutBuildingsInput;
  district: DistrictCreateNestedOneWithoutBuildingsInput;
  domClickId?: InputMaybe<Scalars['Int']>;
  domRfId?: InputMaybe<Scalars['Int']>;
  group: GroupCreateNestedOneWithoutBuildingsInput;
  img?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  propertyClass?: InputMaybe<PropertyClass>;
  sales?: InputMaybe<SaleCreateNestedManyWithoutBuildingInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  wallMaterial?: InputMaybe<WallMaterial>;
};

export type BuildingMaxAggregate = {
  __typename?: 'BuildingMaxAggregate';
  address?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['Int']>;
  completed?: Maybe<Scalars['Boolean']>;
  completionDate?: Maybe<Scalars['DateTime']>;
  complexId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  decorType?: Maybe<DecorType>;
  developerId?: Maybe<Scalars['Int']>;
  districtId?: Maybe<Scalars['Int']>;
  domClickId?: Maybe<Scalars['Int']>;
  domRfId?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  img?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  propertyClass?: Maybe<PropertyClass>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  wallMaterial?: Maybe<WallMaterial>;
};

export type BuildingMinAggregate = {
  __typename?: 'BuildingMinAggregate';
  address?: Maybe<Scalars['String']>;
  cityId?: Maybe<Scalars['Int']>;
  completed?: Maybe<Scalars['Boolean']>;
  completionDate?: Maybe<Scalars['DateTime']>;
  complexId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  decorType?: Maybe<DecorType>;
  developerId?: Maybe<Scalars['Int']>;
  districtId?: Maybe<Scalars['Int']>;
  domClickId?: Maybe<Scalars['Int']>;
  domRfId?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  img?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  propertyClass?: Maybe<PropertyClass>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  wallMaterial?: Maybe<WallMaterial>;
};

export type BuildingScalarWhereInput = {
  AND?: InputMaybe<Array<BuildingScalarWhereInput>>;
  NOT?: InputMaybe<Array<BuildingScalarWhereInput>>;
  OR?: InputMaybe<Array<BuildingScalarWhereInput>>;
  address?: InputMaybe<StringFilter>;
  cityId?: InputMaybe<IntFilter>;
  completed?: InputMaybe<BoolFilter>;
  completionDate?: InputMaybe<DateTimeFilter>;
  complexId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  decorType?: InputMaybe<EnumDecorTypeNullableFilter>;
  developerId?: InputMaybe<IntFilter>;
  districtId?: InputMaybe<IntFilter>;
  domClickId?: InputMaybe<IntNullableFilter>;
  domRfId?: InputMaybe<IntNullableFilter>;
  groupId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  img?: InputMaybe<StringNullableFilter>;
  latitude?: InputMaybe<FloatNullableFilter>;
  longitude?: InputMaybe<FloatNullableFilter>;
  name?: InputMaybe<StringFilter>;
  propertyClass?: InputMaybe<EnumPropertyClassNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  wallMaterial?: InputMaybe<EnumWallMaterialNullableFilter>;
};

export type BuildingSumAggregate = {
  __typename?: 'BuildingSumAggregate';
  cityId?: Maybe<Scalars['Int']>;
  complexId?: Maybe<Scalars['Int']>;
  developerId?: Maybe<Scalars['Int']>;
  districtId?: Maybe<Scalars['Int']>;
  domClickId?: Maybe<Scalars['Int']>;
  domRfId?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type BuildingUncheckedCreateInput = {
  address: Scalars['String'];
  cityId: Scalars['Int'];
  completed?: InputMaybe<Scalars['Boolean']>;
  completionDate: Scalars['DateTime'];
  complexId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  decorType?: InputMaybe<DecorType>;
  developerId: Scalars['Int'];
  districtId: Scalars['Int'];
  domClickId?: InputMaybe<Scalars['Int']>;
  domRfId?: InputMaybe<Scalars['Int']>;
  groupId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  img?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  properties?: InputMaybe<PropertyUncheckedCreateNestedManyWithoutBuildingInput>;
  propertyClass?: InputMaybe<PropertyClass>;
  sales?: InputMaybe<SaleUncheckedCreateNestedManyWithoutBuildingInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  wallMaterial?: InputMaybe<WallMaterial>;
};

export type BuildingUncheckedCreateNestedManyWithoutCityInput = {
  connect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BuildingCreateOrConnectWithoutCityInput>>;
  create?: InputMaybe<Array<BuildingCreateWithoutCityInput>>;
  createMany?: InputMaybe<BuildingCreateManyCityInputEnvelope>;
};

export type BuildingUncheckedCreateNestedManyWithoutComplexInput = {
  connect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BuildingCreateOrConnectWithoutComplexInput>>;
  create?: InputMaybe<Array<BuildingCreateWithoutComplexInput>>;
  createMany?: InputMaybe<BuildingCreateManyComplexInputEnvelope>;
};

export type BuildingUncheckedCreateNestedManyWithoutDeveloperInput = {
  connect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BuildingCreateOrConnectWithoutDeveloperInput>>;
  create?: InputMaybe<Array<BuildingCreateWithoutDeveloperInput>>;
  createMany?: InputMaybe<BuildingCreateManyDeveloperInputEnvelope>;
};

export type BuildingUncheckedCreateNestedManyWithoutDistrictInput = {
  connect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BuildingCreateOrConnectWithoutDistrictInput>>;
  create?: InputMaybe<Array<BuildingCreateWithoutDistrictInput>>;
  createMany?: InputMaybe<BuildingCreateManyDistrictInputEnvelope>;
};

export type BuildingUncheckedCreateNestedManyWithoutGroupInput = {
  connect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BuildingCreateOrConnectWithoutGroupInput>>;
  create?: InputMaybe<Array<BuildingCreateWithoutGroupInput>>;
  createMany?: InputMaybe<BuildingCreateManyGroupInputEnvelope>;
};

export type BuildingUncheckedUpdateInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  cityId?: InputMaybe<IntFieldUpdateOperationsInput>;
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completionDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  complexId?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  decorType?: InputMaybe<NullableEnumDecorTypeFieldUpdateOperationsInput>;
  developerId?: InputMaybe<IntFieldUpdateOperationsInput>;
  districtId?: InputMaybe<IntFieldUpdateOperationsInput>;
  domClickId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  domRfId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  groupId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  img?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertyUncheckedUpdateManyWithoutBuildingNestedInput>;
  propertyClass?: InputMaybe<NullableEnumPropertyClassFieldUpdateOperationsInput>;
  sales?: InputMaybe<SaleUncheckedUpdateManyWithoutBuildingNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wallMaterial?: InputMaybe<NullableEnumWallMaterialFieldUpdateOperationsInput>;
};

export type BuildingUncheckedUpdateManyWithoutCityNestedInput = {
  connect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BuildingCreateOrConnectWithoutCityInput>>;
  create?: InputMaybe<Array<BuildingCreateWithoutCityInput>>;
  createMany?: InputMaybe<BuildingCreateManyCityInputEnvelope>;
  delete?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BuildingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  set?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  update?: InputMaybe<Array<BuildingUpdateWithWhereUniqueWithoutCityInput>>;
  updateMany?: InputMaybe<Array<BuildingUpdateManyWithWhereWithoutCityInput>>;
  upsert?: InputMaybe<Array<BuildingUpsertWithWhereUniqueWithoutCityInput>>;
};

export type BuildingUncheckedUpdateManyWithoutComplexNestedInput = {
  connect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BuildingCreateOrConnectWithoutComplexInput>>;
  create?: InputMaybe<Array<BuildingCreateWithoutComplexInput>>;
  createMany?: InputMaybe<BuildingCreateManyComplexInputEnvelope>;
  delete?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BuildingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  set?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  update?: InputMaybe<Array<BuildingUpdateWithWhereUniqueWithoutComplexInput>>;
  updateMany?: InputMaybe<Array<BuildingUpdateManyWithWhereWithoutComplexInput>>;
  upsert?: InputMaybe<Array<BuildingUpsertWithWhereUniqueWithoutComplexInput>>;
};

export type BuildingUncheckedUpdateManyWithoutDeveloperNestedInput = {
  connect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BuildingCreateOrConnectWithoutDeveloperInput>>;
  create?: InputMaybe<Array<BuildingCreateWithoutDeveloperInput>>;
  createMany?: InputMaybe<BuildingCreateManyDeveloperInputEnvelope>;
  delete?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BuildingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  set?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  update?: InputMaybe<Array<BuildingUpdateWithWhereUniqueWithoutDeveloperInput>>;
  updateMany?: InputMaybe<Array<BuildingUpdateManyWithWhereWithoutDeveloperInput>>;
  upsert?: InputMaybe<Array<BuildingUpsertWithWhereUniqueWithoutDeveloperInput>>;
};

export type BuildingUncheckedUpdateManyWithoutDistrictNestedInput = {
  connect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BuildingCreateOrConnectWithoutDistrictInput>>;
  create?: InputMaybe<Array<BuildingCreateWithoutDistrictInput>>;
  createMany?: InputMaybe<BuildingCreateManyDistrictInputEnvelope>;
  delete?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BuildingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  set?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  update?: InputMaybe<Array<BuildingUpdateWithWhereUniqueWithoutDistrictInput>>;
  updateMany?: InputMaybe<Array<BuildingUpdateManyWithWhereWithoutDistrictInput>>;
  upsert?: InputMaybe<Array<BuildingUpsertWithWhereUniqueWithoutDistrictInput>>;
};

export type BuildingUncheckedUpdateManyWithoutGroupNestedInput = {
  connect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BuildingCreateOrConnectWithoutGroupInput>>;
  create?: InputMaybe<Array<BuildingCreateWithoutGroupInput>>;
  createMany?: InputMaybe<BuildingCreateManyGroupInputEnvelope>;
  delete?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BuildingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  set?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  update?: InputMaybe<Array<BuildingUpdateWithWhereUniqueWithoutGroupInput>>;
  updateMany?: InputMaybe<Array<BuildingUpdateManyWithWhereWithoutGroupInput>>;
  upsert?: InputMaybe<Array<BuildingUpsertWithWhereUniqueWithoutGroupInput>>;
};

export type BuildingUpdateManyMutationInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completionDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  decorType?: InputMaybe<NullableEnumDecorTypeFieldUpdateOperationsInput>;
  domClickId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  domRfId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  img?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  propertyClass?: InputMaybe<NullableEnumPropertyClassFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wallMaterial?: InputMaybe<NullableEnumWallMaterialFieldUpdateOperationsInput>;
};

export type BuildingUpdateManyWithWhereWithoutCityInput = {
  data: BuildingUpdateManyMutationInput;
  where: BuildingScalarWhereInput;
};

export type BuildingUpdateManyWithWhereWithoutComplexInput = {
  data: BuildingUpdateManyMutationInput;
  where: BuildingScalarWhereInput;
};

export type BuildingUpdateManyWithWhereWithoutDeveloperInput = {
  data: BuildingUpdateManyMutationInput;
  where: BuildingScalarWhereInput;
};

export type BuildingUpdateManyWithWhereWithoutDistrictInput = {
  data: BuildingUpdateManyMutationInput;
  where: BuildingScalarWhereInput;
};

export type BuildingUpdateManyWithWhereWithoutGroupInput = {
  data: BuildingUpdateManyMutationInput;
  where: BuildingScalarWhereInput;
};

export type BuildingUpdateManyWithoutCityNestedInput = {
  connect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BuildingCreateOrConnectWithoutCityInput>>;
  create?: InputMaybe<Array<BuildingCreateWithoutCityInput>>;
  createMany?: InputMaybe<BuildingCreateManyCityInputEnvelope>;
  delete?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BuildingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  set?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  update?: InputMaybe<Array<BuildingUpdateWithWhereUniqueWithoutCityInput>>;
  updateMany?: InputMaybe<Array<BuildingUpdateManyWithWhereWithoutCityInput>>;
  upsert?: InputMaybe<Array<BuildingUpsertWithWhereUniqueWithoutCityInput>>;
};

export type BuildingUpdateManyWithoutComplexNestedInput = {
  connect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BuildingCreateOrConnectWithoutComplexInput>>;
  create?: InputMaybe<Array<BuildingCreateWithoutComplexInput>>;
  createMany?: InputMaybe<BuildingCreateManyComplexInputEnvelope>;
  delete?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BuildingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  set?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  update?: InputMaybe<Array<BuildingUpdateWithWhereUniqueWithoutComplexInput>>;
  updateMany?: InputMaybe<Array<BuildingUpdateManyWithWhereWithoutComplexInput>>;
  upsert?: InputMaybe<Array<BuildingUpsertWithWhereUniqueWithoutComplexInput>>;
};

export type BuildingUpdateManyWithoutDeveloperNestedInput = {
  connect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BuildingCreateOrConnectWithoutDeveloperInput>>;
  create?: InputMaybe<Array<BuildingCreateWithoutDeveloperInput>>;
  createMany?: InputMaybe<BuildingCreateManyDeveloperInputEnvelope>;
  delete?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BuildingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  set?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  update?: InputMaybe<Array<BuildingUpdateWithWhereUniqueWithoutDeveloperInput>>;
  updateMany?: InputMaybe<Array<BuildingUpdateManyWithWhereWithoutDeveloperInput>>;
  upsert?: InputMaybe<Array<BuildingUpsertWithWhereUniqueWithoutDeveloperInput>>;
};

export type BuildingUpdateManyWithoutDistrictNestedInput = {
  connect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BuildingCreateOrConnectWithoutDistrictInput>>;
  create?: InputMaybe<Array<BuildingCreateWithoutDistrictInput>>;
  createMany?: InputMaybe<BuildingCreateManyDistrictInputEnvelope>;
  delete?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BuildingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  set?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  update?: InputMaybe<Array<BuildingUpdateWithWhereUniqueWithoutDistrictInput>>;
  updateMany?: InputMaybe<Array<BuildingUpdateManyWithWhereWithoutDistrictInput>>;
  upsert?: InputMaybe<Array<BuildingUpsertWithWhereUniqueWithoutDistrictInput>>;
};

export type BuildingUpdateManyWithoutGroupNestedInput = {
  connect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BuildingCreateOrConnectWithoutGroupInput>>;
  create?: InputMaybe<Array<BuildingCreateWithoutGroupInput>>;
  createMany?: InputMaybe<BuildingCreateManyGroupInputEnvelope>;
  delete?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BuildingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  set?: InputMaybe<Array<BuildingWhereUniqueInput>>;
  update?: InputMaybe<Array<BuildingUpdateWithWhereUniqueWithoutGroupInput>>;
  updateMany?: InputMaybe<Array<BuildingUpdateManyWithWhereWithoutGroupInput>>;
  upsert?: InputMaybe<Array<BuildingUpsertWithWhereUniqueWithoutGroupInput>>;
};

export type BuildingUpdateOneRequiredWithoutPropertiesNestedInput = {
  connect?: InputMaybe<BuildingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<BuildingCreateOrConnectWithoutPropertiesInput>;
  create?: InputMaybe<BuildingCreateWithoutPropertiesInput>;
  update?: InputMaybe<BuildingUpdateWithoutPropertiesInput>;
  upsert?: InputMaybe<BuildingUpsertWithoutPropertiesInput>;
};

export type BuildingUpdateWithWhereUniqueWithoutCityInput = {
  data: BuildingUpdateWithoutCityInput;
  where: BuildingWhereUniqueInput;
};

export type BuildingUpdateWithWhereUniqueWithoutComplexInput = {
  data: BuildingUpdateWithoutComplexInput;
  where: BuildingWhereUniqueInput;
};

export type BuildingUpdateWithWhereUniqueWithoutDeveloperInput = {
  data: BuildingUpdateWithoutDeveloperInput;
  where: BuildingWhereUniqueInput;
};

export type BuildingUpdateWithWhereUniqueWithoutDistrictInput = {
  data: BuildingUpdateWithoutDistrictInput;
  where: BuildingWhereUniqueInput;
};

export type BuildingUpdateWithWhereUniqueWithoutGroupInput = {
  data: BuildingUpdateWithoutGroupInput;
  where: BuildingWhereUniqueInput;
};

export type BuildingUpdateWithoutCityInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completionDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  complex?: InputMaybe<ComplexUpdateOneRequiredWithoutBuildingsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  decorType?: InputMaybe<NullableEnumDecorTypeFieldUpdateOperationsInput>;
  developer?: InputMaybe<DeveloperUpdateOneRequiredWithoutBuildingsNestedInput>;
  district?: InputMaybe<DistrictUpdateOneRequiredWithoutBuildingsNestedInput>;
  domClickId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  domRfId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  group?: InputMaybe<GroupUpdateOneRequiredWithoutBuildingsNestedInput>;
  img?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertyUpdateManyWithoutBuildingNestedInput>;
  propertyClass?: InputMaybe<NullableEnumPropertyClassFieldUpdateOperationsInput>;
  sales?: InputMaybe<SaleUpdateManyWithoutBuildingNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wallMaterial?: InputMaybe<NullableEnumWallMaterialFieldUpdateOperationsInput>;
};

export type BuildingUpdateWithoutComplexInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  city?: InputMaybe<CityUpdateOneRequiredWithoutBuildingsNestedInput>;
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completionDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  decorType?: InputMaybe<NullableEnumDecorTypeFieldUpdateOperationsInput>;
  developer?: InputMaybe<DeveloperUpdateOneRequiredWithoutBuildingsNestedInput>;
  district?: InputMaybe<DistrictUpdateOneRequiredWithoutBuildingsNestedInput>;
  domClickId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  domRfId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  group?: InputMaybe<GroupUpdateOneRequiredWithoutBuildingsNestedInput>;
  img?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertyUpdateManyWithoutBuildingNestedInput>;
  propertyClass?: InputMaybe<NullableEnumPropertyClassFieldUpdateOperationsInput>;
  sales?: InputMaybe<SaleUpdateManyWithoutBuildingNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wallMaterial?: InputMaybe<NullableEnumWallMaterialFieldUpdateOperationsInput>;
};

export type BuildingUpdateWithoutDeveloperInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  city?: InputMaybe<CityUpdateOneRequiredWithoutBuildingsNestedInput>;
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completionDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  complex?: InputMaybe<ComplexUpdateOneRequiredWithoutBuildingsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  decorType?: InputMaybe<NullableEnumDecorTypeFieldUpdateOperationsInput>;
  district?: InputMaybe<DistrictUpdateOneRequiredWithoutBuildingsNestedInput>;
  domClickId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  domRfId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  group?: InputMaybe<GroupUpdateOneRequiredWithoutBuildingsNestedInput>;
  img?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertyUpdateManyWithoutBuildingNestedInput>;
  propertyClass?: InputMaybe<NullableEnumPropertyClassFieldUpdateOperationsInput>;
  sales?: InputMaybe<SaleUpdateManyWithoutBuildingNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wallMaterial?: InputMaybe<NullableEnumWallMaterialFieldUpdateOperationsInput>;
};

export type BuildingUpdateWithoutDistrictInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  city?: InputMaybe<CityUpdateOneRequiredWithoutBuildingsNestedInput>;
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completionDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  complex?: InputMaybe<ComplexUpdateOneRequiredWithoutBuildingsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  decorType?: InputMaybe<NullableEnumDecorTypeFieldUpdateOperationsInput>;
  developer?: InputMaybe<DeveloperUpdateOneRequiredWithoutBuildingsNestedInput>;
  domClickId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  domRfId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  group?: InputMaybe<GroupUpdateOneRequiredWithoutBuildingsNestedInput>;
  img?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertyUpdateManyWithoutBuildingNestedInput>;
  propertyClass?: InputMaybe<NullableEnumPropertyClassFieldUpdateOperationsInput>;
  sales?: InputMaybe<SaleUpdateManyWithoutBuildingNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wallMaterial?: InputMaybe<NullableEnumWallMaterialFieldUpdateOperationsInput>;
};

export type BuildingUpdateWithoutGroupInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  city?: InputMaybe<CityUpdateOneRequiredWithoutBuildingsNestedInput>;
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completionDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  complex?: InputMaybe<ComplexUpdateOneRequiredWithoutBuildingsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  decorType?: InputMaybe<NullableEnumDecorTypeFieldUpdateOperationsInput>;
  developer?: InputMaybe<DeveloperUpdateOneRequiredWithoutBuildingsNestedInput>;
  district?: InputMaybe<DistrictUpdateOneRequiredWithoutBuildingsNestedInput>;
  domClickId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  domRfId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  img?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  properties?: InputMaybe<PropertyUpdateManyWithoutBuildingNestedInput>;
  propertyClass?: InputMaybe<NullableEnumPropertyClassFieldUpdateOperationsInput>;
  sales?: InputMaybe<SaleUpdateManyWithoutBuildingNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wallMaterial?: InputMaybe<NullableEnumWallMaterialFieldUpdateOperationsInput>;
};

export type BuildingUpdateWithoutPropertiesInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  city?: InputMaybe<CityUpdateOneRequiredWithoutBuildingsNestedInput>;
  completed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  completionDate?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  complex?: InputMaybe<ComplexUpdateOneRequiredWithoutBuildingsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  decorType?: InputMaybe<NullableEnumDecorTypeFieldUpdateOperationsInput>;
  developer?: InputMaybe<DeveloperUpdateOneRequiredWithoutBuildingsNestedInput>;
  district?: InputMaybe<DistrictUpdateOneRequiredWithoutBuildingsNestedInput>;
  domClickId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  domRfId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  group?: InputMaybe<GroupUpdateOneRequiredWithoutBuildingsNestedInput>;
  img?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  propertyClass?: InputMaybe<NullableEnumPropertyClassFieldUpdateOperationsInput>;
  sales?: InputMaybe<SaleUpdateManyWithoutBuildingNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  wallMaterial?: InputMaybe<NullableEnumWallMaterialFieldUpdateOperationsInput>;
};

export type BuildingUpsertWithWhereUniqueWithoutCityInput = {
  create: BuildingCreateWithoutCityInput;
  update: BuildingUpdateWithoutCityInput;
  where: BuildingWhereUniqueInput;
};

export type BuildingUpsertWithWhereUniqueWithoutComplexInput = {
  create: BuildingCreateWithoutComplexInput;
  update: BuildingUpdateWithoutComplexInput;
  where: BuildingWhereUniqueInput;
};

export type BuildingUpsertWithWhereUniqueWithoutDeveloperInput = {
  create: BuildingCreateWithoutDeveloperInput;
  update: BuildingUpdateWithoutDeveloperInput;
  where: BuildingWhereUniqueInput;
};

export type BuildingUpsertWithWhereUniqueWithoutDistrictInput = {
  create: BuildingCreateWithoutDistrictInput;
  update: BuildingUpdateWithoutDistrictInput;
  where: BuildingWhereUniqueInput;
};

export type BuildingUpsertWithWhereUniqueWithoutGroupInput = {
  create: BuildingCreateWithoutGroupInput;
  update: BuildingUpdateWithoutGroupInput;
  where: BuildingWhereUniqueInput;
};

export type BuildingUpsertWithoutPropertiesInput = {
  create: BuildingCreateWithoutPropertiesInput;
  update: BuildingUpdateWithoutPropertiesInput;
};

export type BuildingWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type BuildingsResponse = {
  __typename?: 'BuildingsResponse';
  buildings: Array<Building>;
  count: Scalars['Int'];
};

export type City = {
  __typename?: 'City';
  _count: CityCount;
  buildings?: Maybe<Array<Building>>;
  complexes?: Maybe<Array<Complex>>;
  createdAt: Scalars['DateTime'];
  districts?: Maybe<Array<District>>;
  id: Scalars['Int'];
  name: Scalars['String'];
  region: Region;
  regionId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type CityAvgAggregate = {
  __typename?: 'CityAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  regionId?: Maybe<Scalars['Float']>;
};

export type CityCount = {
  __typename?: 'CityCount';
  buildings: Scalars['Int'];
  complexes: Scalars['Int'];
  districts: Scalars['Int'];
};

export type CityCountAggregate = {
  __typename?: 'CityCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  regionId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type CityCreateManyRegionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CityCreateManyRegionInputEnvelope = {
  data: Array<CityCreateManyRegionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type CityCreateNestedManyWithoutRegionInput = {
  connect?: InputMaybe<Array<CityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CityCreateOrConnectWithoutRegionInput>>;
  create?: InputMaybe<Array<CityCreateWithoutRegionInput>>;
  createMany?: InputMaybe<CityCreateManyRegionInputEnvelope>;
};

export type CityCreateNestedOneWithoutBuildingsInput = {
  connect?: InputMaybe<CityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CityCreateOrConnectWithoutBuildingsInput>;
  create?: InputMaybe<CityCreateWithoutBuildingsInput>;
};

export type CityCreateNestedOneWithoutComplexesInput = {
  connect?: InputMaybe<CityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CityCreateOrConnectWithoutComplexesInput>;
  create?: InputMaybe<CityCreateWithoutComplexesInput>;
};

export type CityCreateNestedOneWithoutDistrictsInput = {
  connect?: InputMaybe<CityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CityCreateOrConnectWithoutDistrictsInput>;
  create?: InputMaybe<CityCreateWithoutDistrictsInput>;
};

export type CityCreateOrConnectWithoutBuildingsInput = {
  create: CityCreateWithoutBuildingsInput;
  where: CityWhereUniqueInput;
};

export type CityCreateOrConnectWithoutComplexesInput = {
  create: CityCreateWithoutComplexesInput;
  where: CityWhereUniqueInput;
};

export type CityCreateOrConnectWithoutDistrictsInput = {
  create: CityCreateWithoutDistrictsInput;
  where: CityWhereUniqueInput;
};

export type CityCreateOrConnectWithoutRegionInput = {
  create: CityCreateWithoutRegionInput;
  where: CityWhereUniqueInput;
};

export type CityCreateWithoutBuildingsInput = {
  complexes?: InputMaybe<ComplexCreateNestedManyWithoutCityInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  districts?: InputMaybe<DistrictCreateNestedManyWithoutCityInput>;
  name: Scalars['String'];
  region: RegionCreateNestedOneWithoutCitiesInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CityCreateWithoutComplexesInput = {
  buildings?: InputMaybe<BuildingCreateNestedManyWithoutCityInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  districts?: InputMaybe<DistrictCreateNestedManyWithoutCityInput>;
  name: Scalars['String'];
  region: RegionCreateNestedOneWithoutCitiesInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CityCreateWithoutDistrictsInput = {
  buildings?: InputMaybe<BuildingCreateNestedManyWithoutCityInput>;
  complexes?: InputMaybe<ComplexCreateNestedManyWithoutCityInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  region: RegionCreateNestedOneWithoutCitiesInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CityCreateWithoutRegionInput = {
  buildings?: InputMaybe<BuildingCreateNestedManyWithoutCityInput>;
  complexes?: InputMaybe<ComplexCreateNestedManyWithoutCityInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  districts?: InputMaybe<DistrictCreateNestedManyWithoutCityInput>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CityMaxAggregate = {
  __typename?: 'CityMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  regionId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CityMinAggregate = {
  __typename?: 'CityMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  regionId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CityScalarWhereInput = {
  AND?: InputMaybe<Array<CityScalarWhereInput>>;
  NOT?: InputMaybe<Array<CityScalarWhereInput>>;
  OR?: InputMaybe<Array<CityScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  regionId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CitySumAggregate = {
  __typename?: 'CitySumAggregate';
  id?: Maybe<Scalars['Int']>;
  regionId?: Maybe<Scalars['Int']>;
};

export type CityUncheckedCreateInput = {
  buildings?: InputMaybe<BuildingUncheckedCreateNestedManyWithoutCityInput>;
  complexes?: InputMaybe<ComplexUncheckedCreateNestedManyWithoutCityInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  districts?: InputMaybe<DistrictUncheckedCreateNestedManyWithoutCityInput>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  regionId: Scalars['Int'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CityUncheckedCreateNestedManyWithoutRegionInput = {
  connect?: InputMaybe<Array<CityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CityCreateOrConnectWithoutRegionInput>>;
  create?: InputMaybe<Array<CityCreateWithoutRegionInput>>;
  createMany?: InputMaybe<CityCreateManyRegionInputEnvelope>;
};

export type CityUncheckedUpdateInput = {
  buildings?: InputMaybe<BuildingUncheckedUpdateManyWithoutCityNestedInput>;
  complexes?: InputMaybe<ComplexUncheckedUpdateManyWithoutCityNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  districts?: InputMaybe<DistrictUncheckedUpdateManyWithoutCityNestedInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  regionId?: InputMaybe<IntFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CityUncheckedUpdateManyWithoutRegionNestedInput = {
  connect?: InputMaybe<Array<CityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CityCreateOrConnectWithoutRegionInput>>;
  create?: InputMaybe<Array<CityCreateWithoutRegionInput>>;
  createMany?: InputMaybe<CityCreateManyRegionInputEnvelope>;
  delete?: InputMaybe<Array<CityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CityWhereUniqueInput>>;
  set?: InputMaybe<Array<CityWhereUniqueInput>>;
  update?: InputMaybe<Array<CityUpdateWithWhereUniqueWithoutRegionInput>>;
  updateMany?: InputMaybe<Array<CityUpdateManyWithWhereWithoutRegionInput>>;
  upsert?: InputMaybe<Array<CityUpsertWithWhereUniqueWithoutRegionInput>>;
};

export type CityUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CityUpdateManyWithWhereWithoutRegionInput = {
  data: CityUpdateManyMutationInput;
  where: CityScalarWhereInput;
};

export type CityUpdateManyWithoutRegionNestedInput = {
  connect?: InputMaybe<Array<CityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CityCreateOrConnectWithoutRegionInput>>;
  create?: InputMaybe<Array<CityCreateWithoutRegionInput>>;
  createMany?: InputMaybe<CityCreateManyRegionInputEnvelope>;
  delete?: InputMaybe<Array<CityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CityWhereUniqueInput>>;
  set?: InputMaybe<Array<CityWhereUniqueInput>>;
  update?: InputMaybe<Array<CityUpdateWithWhereUniqueWithoutRegionInput>>;
  updateMany?: InputMaybe<Array<CityUpdateManyWithWhereWithoutRegionInput>>;
  upsert?: InputMaybe<Array<CityUpsertWithWhereUniqueWithoutRegionInput>>;
};

export type CityUpdateOneRequiredWithoutBuildingsNestedInput = {
  connect?: InputMaybe<CityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CityCreateOrConnectWithoutBuildingsInput>;
  create?: InputMaybe<CityCreateWithoutBuildingsInput>;
  update?: InputMaybe<CityUpdateWithoutBuildingsInput>;
  upsert?: InputMaybe<CityUpsertWithoutBuildingsInput>;
};

export type CityUpdateOneRequiredWithoutComplexesNestedInput = {
  connect?: InputMaybe<CityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CityCreateOrConnectWithoutComplexesInput>;
  create?: InputMaybe<CityCreateWithoutComplexesInput>;
  update?: InputMaybe<CityUpdateWithoutComplexesInput>;
  upsert?: InputMaybe<CityUpsertWithoutComplexesInput>;
};

export type CityUpdateOneRequiredWithoutDistrictsNestedInput = {
  connect?: InputMaybe<CityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CityCreateOrConnectWithoutDistrictsInput>;
  create?: InputMaybe<CityCreateWithoutDistrictsInput>;
  update?: InputMaybe<CityUpdateWithoutDistrictsInput>;
  upsert?: InputMaybe<CityUpsertWithoutDistrictsInput>;
};

export type CityUpdateWithWhereUniqueWithoutRegionInput = {
  data: CityUpdateWithoutRegionInput;
  where: CityWhereUniqueInput;
};

export type CityUpdateWithoutBuildingsInput = {
  complexes?: InputMaybe<ComplexUpdateManyWithoutCityNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  districts?: InputMaybe<DistrictUpdateManyWithoutCityNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  region?: InputMaybe<RegionUpdateOneRequiredWithoutCitiesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CityUpdateWithoutComplexesInput = {
  buildings?: InputMaybe<BuildingUpdateManyWithoutCityNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  districts?: InputMaybe<DistrictUpdateManyWithoutCityNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  region?: InputMaybe<RegionUpdateOneRequiredWithoutCitiesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CityUpdateWithoutDistrictsInput = {
  buildings?: InputMaybe<BuildingUpdateManyWithoutCityNestedInput>;
  complexes?: InputMaybe<ComplexUpdateManyWithoutCityNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  region?: InputMaybe<RegionUpdateOneRequiredWithoutCitiesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CityUpdateWithoutRegionInput = {
  buildings?: InputMaybe<BuildingUpdateManyWithoutCityNestedInput>;
  complexes?: InputMaybe<ComplexUpdateManyWithoutCityNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  districts?: InputMaybe<DistrictUpdateManyWithoutCityNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CityUpsertWithWhereUniqueWithoutRegionInput = {
  create: CityCreateWithoutRegionInput;
  update: CityUpdateWithoutRegionInput;
  where: CityWhereUniqueInput;
};

export type CityUpsertWithoutBuildingsInput = {
  create: CityCreateWithoutBuildingsInput;
  update: CityUpdateWithoutBuildingsInput;
};

export type CityUpsertWithoutComplexesInput = {
  create: CityCreateWithoutComplexesInput;
  update: CityUpdateWithoutComplexesInput;
};

export type CityUpsertWithoutDistrictsInput = {
  create: CityCreateWithoutDistrictsInput;
  update: CityUpdateWithoutDistrictsInput;
};

export type CityWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Complex = {
  __typename?: 'Complex';
  _count: ComplexCount;
  buildings?: Maybe<Array<Building>>;
  city: City;
  cityId: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  district: District;
  districtId: Scalars['Int'];
  domClickId?: Maybe<Scalars['Int']>;
  domRfId?: Maybe<Scalars['Int']>;
  group: Group;
  groupId: Scalars['Int'];
  id: Scalars['Int'];
  info?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  shortName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  website?: Maybe<Scalars['String']>;
};

export type ComplexAvgAggregate = {
  __typename?: 'ComplexAvgAggregate';
  cityId?: Maybe<Scalars['Float']>;
  districtId?: Maybe<Scalars['Float']>;
  domClickId?: Maybe<Scalars['Float']>;
  domRfId?: Maybe<Scalars['Float']>;
  groupId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type ComplexCount = {
  __typename?: 'ComplexCount';
  buildings: Scalars['Int'];
};

export type ComplexCountAggregate = {
  __typename?: 'ComplexCountAggregate';
  _all: Scalars['Int'];
  cityId: Scalars['Int'];
  createdAt: Scalars['Int'];
  districtId: Scalars['Int'];
  domClickId: Scalars['Int'];
  domRfId: Scalars['Int'];
  groupId: Scalars['Int'];
  id: Scalars['Int'];
  info: Scalars['Int'];
  name: Scalars['Int'];
  shortName: Scalars['Int'];
  updatedAt: Scalars['Int'];
  website: Scalars['Int'];
};

export type ComplexCreateManyCityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  districtId: Scalars['Int'];
  domClickId?: InputMaybe<Scalars['Int']>;
  domRfId?: InputMaybe<Scalars['Int']>;
  groupId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  info?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  shortName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
};

export type ComplexCreateManyCityInputEnvelope = {
  data: Array<ComplexCreateManyCityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ComplexCreateManyDistrictInput = {
  cityId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  domClickId?: InputMaybe<Scalars['Int']>;
  domRfId?: InputMaybe<Scalars['Int']>;
  groupId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  info?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  shortName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
};

export type ComplexCreateManyDistrictInputEnvelope = {
  data: Array<ComplexCreateManyDistrictInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ComplexCreateManyGroupInput = {
  cityId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  districtId: Scalars['Int'];
  domClickId?: InputMaybe<Scalars['Int']>;
  domRfId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  info?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  shortName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
};

export type ComplexCreateManyGroupInputEnvelope = {
  data: Array<ComplexCreateManyGroupInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ComplexCreateNestedManyWithoutCityInput = {
  connect?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ComplexCreateOrConnectWithoutCityInput>>;
  create?: InputMaybe<Array<ComplexCreateWithoutCityInput>>;
  createMany?: InputMaybe<ComplexCreateManyCityInputEnvelope>;
};

export type ComplexCreateNestedManyWithoutDistrictInput = {
  connect?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ComplexCreateOrConnectWithoutDistrictInput>>;
  create?: InputMaybe<Array<ComplexCreateWithoutDistrictInput>>;
  createMany?: InputMaybe<ComplexCreateManyDistrictInputEnvelope>;
};

export type ComplexCreateNestedManyWithoutGroupInput = {
  connect?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ComplexCreateOrConnectWithoutGroupInput>>;
  create?: InputMaybe<Array<ComplexCreateWithoutGroupInput>>;
  createMany?: InputMaybe<ComplexCreateManyGroupInputEnvelope>;
};

export type ComplexCreateNestedOneWithoutBuildingsInput = {
  connect?: InputMaybe<ComplexWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ComplexCreateOrConnectWithoutBuildingsInput>;
  create?: InputMaybe<ComplexCreateWithoutBuildingsInput>;
};

export type ComplexCreateOrConnectWithoutBuildingsInput = {
  create: ComplexCreateWithoutBuildingsInput;
  where: ComplexWhereUniqueInput;
};

export type ComplexCreateOrConnectWithoutCityInput = {
  create: ComplexCreateWithoutCityInput;
  where: ComplexWhereUniqueInput;
};

export type ComplexCreateOrConnectWithoutDistrictInput = {
  create: ComplexCreateWithoutDistrictInput;
  where: ComplexWhereUniqueInput;
};

export type ComplexCreateOrConnectWithoutGroupInput = {
  create: ComplexCreateWithoutGroupInput;
  where: ComplexWhereUniqueInput;
};

export type ComplexCreateWithoutBuildingsInput = {
  city: CityCreateNestedOneWithoutComplexesInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  district: DistrictCreateNestedOneWithoutComplexesInput;
  domClickId?: InputMaybe<Scalars['Int']>;
  domRfId?: InputMaybe<Scalars['Int']>;
  group: GroupCreateNestedOneWithoutComplexesInput;
  info?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  shortName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
};

export type ComplexCreateWithoutCityInput = {
  buildings?: InputMaybe<BuildingCreateNestedManyWithoutComplexInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  district: DistrictCreateNestedOneWithoutComplexesInput;
  domClickId?: InputMaybe<Scalars['Int']>;
  domRfId?: InputMaybe<Scalars['Int']>;
  group: GroupCreateNestedOneWithoutComplexesInput;
  info?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  shortName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
};

export type ComplexCreateWithoutDistrictInput = {
  buildings?: InputMaybe<BuildingCreateNestedManyWithoutComplexInput>;
  city: CityCreateNestedOneWithoutComplexesInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  domClickId?: InputMaybe<Scalars['Int']>;
  domRfId?: InputMaybe<Scalars['Int']>;
  group: GroupCreateNestedOneWithoutComplexesInput;
  info?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  shortName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
};

export type ComplexCreateWithoutGroupInput = {
  buildings?: InputMaybe<BuildingCreateNestedManyWithoutComplexInput>;
  city: CityCreateNestedOneWithoutComplexesInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  district: DistrictCreateNestedOneWithoutComplexesInput;
  domClickId?: InputMaybe<Scalars['Int']>;
  domRfId?: InputMaybe<Scalars['Int']>;
  info?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  shortName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
};

export type ComplexMaxAggregate = {
  __typename?: 'ComplexMaxAggregate';
  cityId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  districtId?: Maybe<Scalars['Int']>;
  domClickId?: Maybe<Scalars['Int']>;
  domRfId?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  info?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
};

export type ComplexMinAggregate = {
  __typename?: 'ComplexMinAggregate';
  cityId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  districtId?: Maybe<Scalars['Int']>;
  domClickId?: Maybe<Scalars['Int']>;
  domRfId?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  info?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
};

export type ComplexScalarWhereInput = {
  AND?: InputMaybe<Array<ComplexScalarWhereInput>>;
  NOT?: InputMaybe<Array<ComplexScalarWhereInput>>;
  OR?: InputMaybe<Array<ComplexScalarWhereInput>>;
  cityId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  districtId?: InputMaybe<IntFilter>;
  domClickId?: InputMaybe<IntNullableFilter>;
  domRfId?: InputMaybe<IntNullableFilter>;
  groupId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  info?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  shortName?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  website?: InputMaybe<StringNullableFilter>;
};

export type ComplexSumAggregate = {
  __typename?: 'ComplexSumAggregate';
  cityId?: Maybe<Scalars['Int']>;
  districtId?: Maybe<Scalars['Int']>;
  domClickId?: Maybe<Scalars['Int']>;
  domRfId?: Maybe<Scalars['Int']>;
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type ComplexUncheckedCreateInput = {
  buildings?: InputMaybe<BuildingUncheckedCreateNestedManyWithoutComplexInput>;
  cityId: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  districtId: Scalars['Int'];
  domClickId?: InputMaybe<Scalars['Int']>;
  domRfId?: InputMaybe<Scalars['Int']>;
  groupId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  info?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  shortName?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
};

export type ComplexUncheckedCreateNestedManyWithoutCityInput = {
  connect?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ComplexCreateOrConnectWithoutCityInput>>;
  create?: InputMaybe<Array<ComplexCreateWithoutCityInput>>;
  createMany?: InputMaybe<ComplexCreateManyCityInputEnvelope>;
};

export type ComplexUncheckedCreateNestedManyWithoutDistrictInput = {
  connect?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ComplexCreateOrConnectWithoutDistrictInput>>;
  create?: InputMaybe<Array<ComplexCreateWithoutDistrictInput>>;
  createMany?: InputMaybe<ComplexCreateManyDistrictInputEnvelope>;
};

export type ComplexUncheckedCreateNestedManyWithoutGroupInput = {
  connect?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ComplexCreateOrConnectWithoutGroupInput>>;
  create?: InputMaybe<Array<ComplexCreateWithoutGroupInput>>;
  createMany?: InputMaybe<ComplexCreateManyGroupInputEnvelope>;
};

export type ComplexUncheckedUpdateInput = {
  buildings?: InputMaybe<BuildingUncheckedUpdateManyWithoutComplexNestedInput>;
  cityId?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  districtId?: InputMaybe<IntFieldUpdateOperationsInput>;
  domClickId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  domRfId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  groupId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  info?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  shortName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ComplexUncheckedUpdateManyWithoutCityNestedInput = {
  connect?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ComplexCreateOrConnectWithoutCityInput>>;
  create?: InputMaybe<Array<ComplexCreateWithoutCityInput>>;
  createMany?: InputMaybe<ComplexCreateManyCityInputEnvelope>;
  delete?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ComplexScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  set?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  update?: InputMaybe<Array<ComplexUpdateWithWhereUniqueWithoutCityInput>>;
  updateMany?: InputMaybe<Array<ComplexUpdateManyWithWhereWithoutCityInput>>;
  upsert?: InputMaybe<Array<ComplexUpsertWithWhereUniqueWithoutCityInput>>;
};

export type ComplexUncheckedUpdateManyWithoutDistrictNestedInput = {
  connect?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ComplexCreateOrConnectWithoutDistrictInput>>;
  create?: InputMaybe<Array<ComplexCreateWithoutDistrictInput>>;
  createMany?: InputMaybe<ComplexCreateManyDistrictInputEnvelope>;
  delete?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ComplexScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  set?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  update?: InputMaybe<Array<ComplexUpdateWithWhereUniqueWithoutDistrictInput>>;
  updateMany?: InputMaybe<Array<ComplexUpdateManyWithWhereWithoutDistrictInput>>;
  upsert?: InputMaybe<Array<ComplexUpsertWithWhereUniqueWithoutDistrictInput>>;
};

export type ComplexUncheckedUpdateManyWithoutGroupNestedInput = {
  connect?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ComplexCreateOrConnectWithoutGroupInput>>;
  create?: InputMaybe<Array<ComplexCreateWithoutGroupInput>>;
  createMany?: InputMaybe<ComplexCreateManyGroupInputEnvelope>;
  delete?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ComplexScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  set?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  update?: InputMaybe<Array<ComplexUpdateWithWhereUniqueWithoutGroupInput>>;
  updateMany?: InputMaybe<Array<ComplexUpdateManyWithWhereWithoutGroupInput>>;
  upsert?: InputMaybe<Array<ComplexUpsertWithWhereUniqueWithoutGroupInput>>;
};

export type ComplexUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  domClickId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  domRfId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  info?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  shortName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ComplexUpdateManyWithWhereWithoutCityInput = {
  data: ComplexUpdateManyMutationInput;
  where: ComplexScalarWhereInput;
};

export type ComplexUpdateManyWithWhereWithoutDistrictInput = {
  data: ComplexUpdateManyMutationInput;
  where: ComplexScalarWhereInput;
};

export type ComplexUpdateManyWithWhereWithoutGroupInput = {
  data: ComplexUpdateManyMutationInput;
  where: ComplexScalarWhereInput;
};

export type ComplexUpdateManyWithoutCityNestedInput = {
  connect?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ComplexCreateOrConnectWithoutCityInput>>;
  create?: InputMaybe<Array<ComplexCreateWithoutCityInput>>;
  createMany?: InputMaybe<ComplexCreateManyCityInputEnvelope>;
  delete?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ComplexScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  set?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  update?: InputMaybe<Array<ComplexUpdateWithWhereUniqueWithoutCityInput>>;
  updateMany?: InputMaybe<Array<ComplexUpdateManyWithWhereWithoutCityInput>>;
  upsert?: InputMaybe<Array<ComplexUpsertWithWhereUniqueWithoutCityInput>>;
};

export type ComplexUpdateManyWithoutDistrictNestedInput = {
  connect?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ComplexCreateOrConnectWithoutDistrictInput>>;
  create?: InputMaybe<Array<ComplexCreateWithoutDistrictInput>>;
  createMany?: InputMaybe<ComplexCreateManyDistrictInputEnvelope>;
  delete?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ComplexScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  set?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  update?: InputMaybe<Array<ComplexUpdateWithWhereUniqueWithoutDistrictInput>>;
  updateMany?: InputMaybe<Array<ComplexUpdateManyWithWhereWithoutDistrictInput>>;
  upsert?: InputMaybe<Array<ComplexUpsertWithWhereUniqueWithoutDistrictInput>>;
};

export type ComplexUpdateManyWithoutGroupNestedInput = {
  connect?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ComplexCreateOrConnectWithoutGroupInput>>;
  create?: InputMaybe<Array<ComplexCreateWithoutGroupInput>>;
  createMany?: InputMaybe<ComplexCreateManyGroupInputEnvelope>;
  delete?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ComplexScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  set?: InputMaybe<Array<ComplexWhereUniqueInput>>;
  update?: InputMaybe<Array<ComplexUpdateWithWhereUniqueWithoutGroupInput>>;
  updateMany?: InputMaybe<Array<ComplexUpdateManyWithWhereWithoutGroupInput>>;
  upsert?: InputMaybe<Array<ComplexUpsertWithWhereUniqueWithoutGroupInput>>;
};

export type ComplexUpdateOneRequiredWithoutBuildingsNestedInput = {
  connect?: InputMaybe<ComplexWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ComplexCreateOrConnectWithoutBuildingsInput>;
  create?: InputMaybe<ComplexCreateWithoutBuildingsInput>;
  update?: InputMaybe<ComplexUpdateWithoutBuildingsInput>;
  upsert?: InputMaybe<ComplexUpsertWithoutBuildingsInput>;
};

export type ComplexUpdateWithWhereUniqueWithoutCityInput = {
  data: ComplexUpdateWithoutCityInput;
  where: ComplexWhereUniqueInput;
};

export type ComplexUpdateWithWhereUniqueWithoutDistrictInput = {
  data: ComplexUpdateWithoutDistrictInput;
  where: ComplexWhereUniqueInput;
};

export type ComplexUpdateWithWhereUniqueWithoutGroupInput = {
  data: ComplexUpdateWithoutGroupInput;
  where: ComplexWhereUniqueInput;
};

export type ComplexUpdateWithoutBuildingsInput = {
  city?: InputMaybe<CityUpdateOneRequiredWithoutComplexesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  district?: InputMaybe<DistrictUpdateOneRequiredWithoutComplexesNestedInput>;
  domClickId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  domRfId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  group?: InputMaybe<GroupUpdateOneRequiredWithoutComplexesNestedInput>;
  info?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  shortName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ComplexUpdateWithoutCityInput = {
  buildings?: InputMaybe<BuildingUpdateManyWithoutComplexNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  district?: InputMaybe<DistrictUpdateOneRequiredWithoutComplexesNestedInput>;
  domClickId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  domRfId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  group?: InputMaybe<GroupUpdateOneRequiredWithoutComplexesNestedInput>;
  info?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  shortName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ComplexUpdateWithoutDistrictInput = {
  buildings?: InputMaybe<BuildingUpdateManyWithoutComplexNestedInput>;
  city?: InputMaybe<CityUpdateOneRequiredWithoutComplexesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  domClickId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  domRfId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  group?: InputMaybe<GroupUpdateOneRequiredWithoutComplexesNestedInput>;
  info?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  shortName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ComplexUpdateWithoutGroupInput = {
  buildings?: InputMaybe<BuildingUpdateManyWithoutComplexNestedInput>;
  city?: InputMaybe<CityUpdateOneRequiredWithoutComplexesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  district?: InputMaybe<DistrictUpdateOneRequiredWithoutComplexesNestedInput>;
  domClickId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  domRfId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  info?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  shortName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type ComplexUpsertWithWhereUniqueWithoutCityInput = {
  create: ComplexCreateWithoutCityInput;
  update: ComplexUpdateWithoutCityInput;
  where: ComplexWhereUniqueInput;
};

export type ComplexUpsertWithWhereUniqueWithoutDistrictInput = {
  create: ComplexCreateWithoutDistrictInput;
  update: ComplexUpdateWithoutDistrictInput;
  where: ComplexWhereUniqueInput;
};

export type ComplexUpsertWithWhereUniqueWithoutGroupInput = {
  create: ComplexCreateWithoutGroupInput;
  update: ComplexUpdateWithoutGroupInput;
  where: ComplexWhereUniqueInput;
};

export type ComplexUpsertWithoutBuildingsInput = {
  create: ComplexCreateWithoutBuildingsInput;
  update: ComplexUpdateWithoutBuildingsInput;
};

export type ComplexWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export enum DecorType {
  Finishing = 'FINISHING',
  Full = 'FULL',
  Optionally = 'OPTIONALLY',
  UnderFinishing = 'UNDER_FINISHING',
  Without = 'WITHOUT'
}

export type Developer = {
  __typename?: 'Developer';
  _count: DeveloperCount;
  actualAddress?: Maybe<Scalars['String']>;
  buildings?: Maybe<Array<Building>>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  fullName: Scalars['String'];
  group: Group;
  groupId: Scalars['Int'];
  id: Scalars['Int'];
  info?: Maybe<Scalars['String']>;
  inn: Scalars['String'];
  kpp?: Maybe<Scalars['String']>;
  legalAddress?: Maybe<Scalars['String']>;
  manager?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  ogrn?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  website?: Maybe<Scalars['String']>;
};

export type DeveloperAvgAggregate = {
  __typename?: 'DeveloperAvgAggregate';
  groupId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type DeveloperCount = {
  __typename?: 'DeveloperCount';
  buildings: Scalars['Int'];
};

export type DeveloperCountAggregate = {
  __typename?: 'DeveloperCountAggregate';
  _all: Scalars['Int'];
  actualAddress: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  fullName: Scalars['Int'];
  groupId: Scalars['Int'];
  id: Scalars['Int'];
  info: Scalars['Int'];
  inn: Scalars['Int'];
  kpp: Scalars['Int'];
  legalAddress: Scalars['Int'];
  manager: Scalars['Int'];
  name: Scalars['Int'];
  ogrn: Scalars['Int'];
  phone: Scalars['Int'];
  updatedAt: Scalars['Int'];
  website: Scalars['Int'];
};

export type DeveloperCreateManyGroupInput = {
  actualAddress?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  fullName: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  info?: InputMaybe<Scalars['String']>;
  inn: Scalars['String'];
  kpp?: InputMaybe<Scalars['String']>;
  legalAddress?: InputMaybe<Scalars['String']>;
  manager?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  ogrn?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
};

export type DeveloperCreateManyGroupInputEnvelope = {
  data: Array<DeveloperCreateManyGroupInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type DeveloperCreateNestedManyWithoutGroupInput = {
  connect?: InputMaybe<Array<DeveloperWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DeveloperCreateOrConnectWithoutGroupInput>>;
  create?: InputMaybe<Array<DeveloperCreateWithoutGroupInput>>;
  createMany?: InputMaybe<DeveloperCreateManyGroupInputEnvelope>;
};

export type DeveloperCreateNestedOneWithoutBuildingsInput = {
  connect?: InputMaybe<DeveloperWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DeveloperCreateOrConnectWithoutBuildingsInput>;
  create?: InputMaybe<DeveloperCreateWithoutBuildingsInput>;
};

export type DeveloperCreateOrConnectWithoutBuildingsInput = {
  create: DeveloperCreateWithoutBuildingsInput;
  where: DeveloperWhereUniqueInput;
};

export type DeveloperCreateOrConnectWithoutGroupInput = {
  create: DeveloperCreateWithoutGroupInput;
  where: DeveloperWhereUniqueInput;
};

export type DeveloperCreateWithoutBuildingsInput = {
  actualAddress?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  fullName: Scalars['String'];
  group: GroupCreateNestedOneWithoutDevelopersInput;
  info?: InputMaybe<Scalars['String']>;
  inn: Scalars['String'];
  kpp?: InputMaybe<Scalars['String']>;
  legalAddress?: InputMaybe<Scalars['String']>;
  manager?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  ogrn?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
};

export type DeveloperCreateWithoutGroupInput = {
  actualAddress?: InputMaybe<Scalars['String']>;
  buildings?: InputMaybe<BuildingCreateNestedManyWithoutDeveloperInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  fullName: Scalars['String'];
  info?: InputMaybe<Scalars['String']>;
  inn: Scalars['String'];
  kpp?: InputMaybe<Scalars['String']>;
  legalAddress?: InputMaybe<Scalars['String']>;
  manager?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  ogrn?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
};

export type DeveloperMaxAggregate = {
  __typename?: 'DeveloperMaxAggregate';
  actualAddress?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  info?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  kpp?: Maybe<Scalars['String']>;
  legalAddress?: Maybe<Scalars['String']>;
  manager?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ogrn?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
};

export type DeveloperMinAggregate = {
  __typename?: 'DeveloperMinAggregate';
  actualAddress?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  info?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  kpp?: Maybe<Scalars['String']>;
  legalAddress?: Maybe<Scalars['String']>;
  manager?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ogrn?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  website?: Maybe<Scalars['String']>;
};

export type DeveloperScalarWhereInput = {
  AND?: InputMaybe<Array<DeveloperScalarWhereInput>>;
  NOT?: InputMaybe<Array<DeveloperScalarWhereInput>>;
  OR?: InputMaybe<Array<DeveloperScalarWhereInput>>;
  actualAddress?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringNullableFilter>;
  fullName?: InputMaybe<StringFilter>;
  groupId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  info?: InputMaybe<StringNullableFilter>;
  inn?: InputMaybe<StringFilter>;
  kpp?: InputMaybe<StringNullableFilter>;
  legalAddress?: InputMaybe<StringNullableFilter>;
  manager?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  ogrn?: InputMaybe<StringNullableFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  website?: InputMaybe<StringNullableFilter>;
};

export type DeveloperSumAggregate = {
  __typename?: 'DeveloperSumAggregate';
  groupId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type DeveloperUncheckedCreateInput = {
  actualAddress?: InputMaybe<Scalars['String']>;
  buildings?: InputMaybe<BuildingUncheckedCreateNestedManyWithoutDeveloperInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  fullName: Scalars['String'];
  groupId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  info?: InputMaybe<Scalars['String']>;
  inn: Scalars['String'];
  kpp?: InputMaybe<Scalars['String']>;
  legalAddress?: InputMaybe<Scalars['String']>;
  manager?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  ogrn?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
};

export type DeveloperUncheckedCreateNestedManyWithoutGroupInput = {
  connect?: InputMaybe<Array<DeveloperWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DeveloperCreateOrConnectWithoutGroupInput>>;
  create?: InputMaybe<Array<DeveloperCreateWithoutGroupInput>>;
  createMany?: InputMaybe<DeveloperCreateManyGroupInputEnvelope>;
};

export type DeveloperUncheckedUpdateInput = {
  actualAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  buildings?: InputMaybe<BuildingUncheckedUpdateManyWithoutDeveloperNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<StringFieldUpdateOperationsInput>;
  groupId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  info?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  inn?: InputMaybe<StringFieldUpdateOperationsInput>;
  kpp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  legalAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  manager?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  ogrn?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type DeveloperUncheckedUpdateManyWithoutGroupNestedInput = {
  connect?: InputMaybe<Array<DeveloperWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DeveloperCreateOrConnectWithoutGroupInput>>;
  create?: InputMaybe<Array<DeveloperCreateWithoutGroupInput>>;
  createMany?: InputMaybe<DeveloperCreateManyGroupInputEnvelope>;
  delete?: InputMaybe<Array<DeveloperWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<DeveloperScalarWhereInput>>;
  disconnect?: InputMaybe<Array<DeveloperWhereUniqueInput>>;
  set?: InputMaybe<Array<DeveloperWhereUniqueInput>>;
  update?: InputMaybe<Array<DeveloperUpdateWithWhereUniqueWithoutGroupInput>>;
  updateMany?: InputMaybe<Array<DeveloperUpdateManyWithWhereWithoutGroupInput>>;
  upsert?: InputMaybe<Array<DeveloperUpsertWithWhereUniqueWithoutGroupInput>>;
};

export type DeveloperUpdateManyMutationInput = {
  actualAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<StringFieldUpdateOperationsInput>;
  info?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  inn?: InputMaybe<StringFieldUpdateOperationsInput>;
  kpp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  legalAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  manager?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  ogrn?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type DeveloperUpdateManyWithWhereWithoutGroupInput = {
  data: DeveloperUpdateManyMutationInput;
  where: DeveloperScalarWhereInput;
};

export type DeveloperUpdateManyWithoutGroupNestedInput = {
  connect?: InputMaybe<Array<DeveloperWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DeveloperCreateOrConnectWithoutGroupInput>>;
  create?: InputMaybe<Array<DeveloperCreateWithoutGroupInput>>;
  createMany?: InputMaybe<DeveloperCreateManyGroupInputEnvelope>;
  delete?: InputMaybe<Array<DeveloperWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<DeveloperScalarWhereInput>>;
  disconnect?: InputMaybe<Array<DeveloperWhereUniqueInput>>;
  set?: InputMaybe<Array<DeveloperWhereUniqueInput>>;
  update?: InputMaybe<Array<DeveloperUpdateWithWhereUniqueWithoutGroupInput>>;
  updateMany?: InputMaybe<Array<DeveloperUpdateManyWithWhereWithoutGroupInput>>;
  upsert?: InputMaybe<Array<DeveloperUpsertWithWhereUniqueWithoutGroupInput>>;
};

export type DeveloperUpdateOneRequiredWithoutBuildingsNestedInput = {
  connect?: InputMaybe<DeveloperWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DeveloperCreateOrConnectWithoutBuildingsInput>;
  create?: InputMaybe<DeveloperCreateWithoutBuildingsInput>;
  update?: InputMaybe<DeveloperUpdateWithoutBuildingsInput>;
  upsert?: InputMaybe<DeveloperUpsertWithoutBuildingsInput>;
};

export type DeveloperUpdateWithWhereUniqueWithoutGroupInput = {
  data: DeveloperUpdateWithoutGroupInput;
  where: DeveloperWhereUniqueInput;
};

export type DeveloperUpdateWithoutBuildingsInput = {
  actualAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<StringFieldUpdateOperationsInput>;
  group?: InputMaybe<GroupUpdateOneRequiredWithoutDevelopersNestedInput>;
  info?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  inn?: InputMaybe<StringFieldUpdateOperationsInput>;
  kpp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  legalAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  manager?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  ogrn?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type DeveloperUpdateWithoutGroupInput = {
  actualAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  buildings?: InputMaybe<BuildingUpdateManyWithoutDeveloperNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  fullName?: InputMaybe<StringFieldUpdateOperationsInput>;
  info?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  inn?: InputMaybe<StringFieldUpdateOperationsInput>;
  kpp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  legalAddress?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  manager?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  ogrn?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  phone?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  website?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type DeveloperUpsertWithWhereUniqueWithoutGroupInput = {
  create: DeveloperCreateWithoutGroupInput;
  update: DeveloperUpdateWithoutGroupInput;
  where: DeveloperWhereUniqueInput;
};

export type DeveloperUpsertWithoutBuildingsInput = {
  create: DeveloperCreateWithoutBuildingsInput;
  update: DeveloperUpdateWithoutBuildingsInput;
};

export type DeveloperWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  inn?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type District = {
  __typename?: 'District';
  _count: DistrictCount;
  buildings?: Maybe<Array<Building>>;
  city: City;
  cityId: Scalars['Int'];
  complexes?: Maybe<Array<Complex>>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type DistrictAvgAggregate = {
  __typename?: 'DistrictAvgAggregate';
  cityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type DistrictCount = {
  __typename?: 'DistrictCount';
  buildings: Scalars['Int'];
  complexes: Scalars['Int'];
};

export type DistrictCountAggregate = {
  __typename?: 'DistrictCountAggregate';
  _all: Scalars['Int'];
  cityId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type DistrictCreateManyCityInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DistrictCreateManyCityInputEnvelope = {
  data: Array<DistrictCreateManyCityInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type DistrictCreateNestedManyWithoutCityInput = {
  connect?: InputMaybe<Array<DistrictWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DistrictCreateOrConnectWithoutCityInput>>;
  create?: InputMaybe<Array<DistrictCreateWithoutCityInput>>;
  createMany?: InputMaybe<DistrictCreateManyCityInputEnvelope>;
};

export type DistrictCreateNestedOneWithoutBuildingsInput = {
  connect?: InputMaybe<DistrictWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DistrictCreateOrConnectWithoutBuildingsInput>;
  create?: InputMaybe<DistrictCreateWithoutBuildingsInput>;
};

export type DistrictCreateNestedOneWithoutComplexesInput = {
  connect?: InputMaybe<DistrictWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DistrictCreateOrConnectWithoutComplexesInput>;
  create?: InputMaybe<DistrictCreateWithoutComplexesInput>;
};

export type DistrictCreateOrConnectWithoutBuildingsInput = {
  create: DistrictCreateWithoutBuildingsInput;
  where: DistrictWhereUniqueInput;
};

export type DistrictCreateOrConnectWithoutCityInput = {
  create: DistrictCreateWithoutCityInput;
  where: DistrictWhereUniqueInput;
};

export type DistrictCreateOrConnectWithoutComplexesInput = {
  create: DistrictCreateWithoutComplexesInput;
  where: DistrictWhereUniqueInput;
};

export type DistrictCreateWithoutBuildingsInput = {
  city: CityCreateNestedOneWithoutDistrictsInput;
  complexes?: InputMaybe<ComplexCreateNestedManyWithoutDistrictInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DistrictCreateWithoutCityInput = {
  buildings?: InputMaybe<BuildingCreateNestedManyWithoutDistrictInput>;
  complexes?: InputMaybe<ComplexCreateNestedManyWithoutDistrictInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DistrictCreateWithoutComplexesInput = {
  buildings?: InputMaybe<BuildingCreateNestedManyWithoutDistrictInput>;
  city: CityCreateNestedOneWithoutDistrictsInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DistrictMaxAggregate = {
  __typename?: 'DistrictMaxAggregate';
  cityId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DistrictMinAggregate = {
  __typename?: 'DistrictMinAggregate';
  cityId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DistrictScalarWhereInput = {
  AND?: InputMaybe<Array<DistrictScalarWhereInput>>;
  NOT?: InputMaybe<Array<DistrictScalarWhereInput>>;
  OR?: InputMaybe<Array<DistrictScalarWhereInput>>;
  cityId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type DistrictSumAggregate = {
  __typename?: 'DistrictSumAggregate';
  cityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type DistrictUncheckedCreateInput = {
  buildings?: InputMaybe<BuildingUncheckedCreateNestedManyWithoutDistrictInput>;
  cityId: Scalars['Int'];
  complexes?: InputMaybe<ComplexUncheckedCreateNestedManyWithoutDistrictInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DistrictUncheckedCreateNestedManyWithoutCityInput = {
  connect?: InputMaybe<Array<DistrictWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DistrictCreateOrConnectWithoutCityInput>>;
  create?: InputMaybe<Array<DistrictCreateWithoutCityInput>>;
  createMany?: InputMaybe<DistrictCreateManyCityInputEnvelope>;
};

export type DistrictUncheckedUpdateInput = {
  buildings?: InputMaybe<BuildingUncheckedUpdateManyWithoutDistrictNestedInput>;
  cityId?: InputMaybe<IntFieldUpdateOperationsInput>;
  complexes?: InputMaybe<ComplexUncheckedUpdateManyWithoutDistrictNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type DistrictUncheckedUpdateManyWithoutCityNestedInput = {
  connect?: InputMaybe<Array<DistrictWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DistrictCreateOrConnectWithoutCityInput>>;
  create?: InputMaybe<Array<DistrictCreateWithoutCityInput>>;
  createMany?: InputMaybe<DistrictCreateManyCityInputEnvelope>;
  delete?: InputMaybe<Array<DistrictWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<DistrictScalarWhereInput>>;
  disconnect?: InputMaybe<Array<DistrictWhereUniqueInput>>;
  set?: InputMaybe<Array<DistrictWhereUniqueInput>>;
  update?: InputMaybe<Array<DistrictUpdateWithWhereUniqueWithoutCityInput>>;
  updateMany?: InputMaybe<Array<DistrictUpdateManyWithWhereWithoutCityInput>>;
  upsert?: InputMaybe<Array<DistrictUpsertWithWhereUniqueWithoutCityInput>>;
};

export type DistrictUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type DistrictUpdateManyWithWhereWithoutCityInput = {
  data: DistrictUpdateManyMutationInput;
  where: DistrictScalarWhereInput;
};

export type DistrictUpdateManyWithoutCityNestedInput = {
  connect?: InputMaybe<Array<DistrictWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<DistrictCreateOrConnectWithoutCityInput>>;
  create?: InputMaybe<Array<DistrictCreateWithoutCityInput>>;
  createMany?: InputMaybe<DistrictCreateManyCityInputEnvelope>;
  delete?: InputMaybe<Array<DistrictWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<DistrictScalarWhereInput>>;
  disconnect?: InputMaybe<Array<DistrictWhereUniqueInput>>;
  set?: InputMaybe<Array<DistrictWhereUniqueInput>>;
  update?: InputMaybe<Array<DistrictUpdateWithWhereUniqueWithoutCityInput>>;
  updateMany?: InputMaybe<Array<DistrictUpdateManyWithWhereWithoutCityInput>>;
  upsert?: InputMaybe<Array<DistrictUpsertWithWhereUniqueWithoutCityInput>>;
};

export type DistrictUpdateOneRequiredWithoutBuildingsNestedInput = {
  connect?: InputMaybe<DistrictWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DistrictCreateOrConnectWithoutBuildingsInput>;
  create?: InputMaybe<DistrictCreateWithoutBuildingsInput>;
  update?: InputMaybe<DistrictUpdateWithoutBuildingsInput>;
  upsert?: InputMaybe<DistrictUpsertWithoutBuildingsInput>;
};

export type DistrictUpdateOneRequiredWithoutComplexesNestedInput = {
  connect?: InputMaybe<DistrictWhereUniqueInput>;
  connectOrCreate?: InputMaybe<DistrictCreateOrConnectWithoutComplexesInput>;
  create?: InputMaybe<DistrictCreateWithoutComplexesInput>;
  update?: InputMaybe<DistrictUpdateWithoutComplexesInput>;
  upsert?: InputMaybe<DistrictUpsertWithoutComplexesInput>;
};

export type DistrictUpdateWithWhereUniqueWithoutCityInput = {
  data: DistrictUpdateWithoutCityInput;
  where: DistrictWhereUniqueInput;
};

export type DistrictUpdateWithoutBuildingsInput = {
  city?: InputMaybe<CityUpdateOneRequiredWithoutDistrictsNestedInput>;
  complexes?: InputMaybe<ComplexUpdateManyWithoutDistrictNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type DistrictUpdateWithoutCityInput = {
  buildings?: InputMaybe<BuildingUpdateManyWithoutDistrictNestedInput>;
  complexes?: InputMaybe<ComplexUpdateManyWithoutDistrictNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type DistrictUpdateWithoutComplexesInput = {
  buildings?: InputMaybe<BuildingUpdateManyWithoutDistrictNestedInput>;
  city?: InputMaybe<CityUpdateOneRequiredWithoutDistrictsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type DistrictUpsertWithWhereUniqueWithoutCityInput = {
  create: DistrictCreateWithoutCityInput;
  update: DistrictUpdateWithoutCityInput;
  where: DistrictWhereUniqueInput;
};

export type DistrictUpsertWithoutBuildingsInput = {
  create: DistrictCreateWithoutBuildingsInput;
  update: DistrictUpdateWithoutBuildingsInput;
};

export type DistrictUpsertWithoutComplexesInput = {
  create: DistrictCreateWithoutComplexesInput;
  update: DistrictUpdateWithoutComplexesInput;
};

export type DistrictWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type EnumDecorTypeNullableFilter = {
  equals?: InputMaybe<DecorType>;
  in?: InputMaybe<Array<DecorType>>;
  not?: InputMaybe<NestedEnumDecorTypeNullableFilter>;
  notIn?: InputMaybe<Array<DecorType>>;
};

export type EnumPropertyClassNullableFilter = {
  equals?: InputMaybe<PropertyClass>;
  in?: InputMaybe<Array<PropertyClass>>;
  not?: InputMaybe<NestedEnumPropertyClassNullableFilter>;
  notIn?: InputMaybe<Array<PropertyClass>>;
};

export type EnumPropertyTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<PropertyType>;
};

export type EnumPropertyTypeFilter = {
  equals?: InputMaybe<PropertyType>;
  in?: InputMaybe<Array<PropertyType>>;
  not?: InputMaybe<NestedEnumPropertyTypeFilter>;
  notIn?: InputMaybe<Array<PropertyType>>;
};

export type EnumWallMaterialNullableFilter = {
  equals?: InputMaybe<WallMaterial>;
  in?: InputMaybe<Array<WallMaterial>>;
  not?: InputMaybe<NestedEnumWallMaterialNullableFilter>;
  notIn?: InputMaybe<Array<WallMaterial>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type Group = {
  __typename?: 'Group';
  _count: GroupCount;
  buildings?: Maybe<Array<Building>>;
  complexes?: Maybe<Array<Complex>>;
  createdAt: Scalars['DateTime'];
  developers?: Maybe<Array<Developer>>;
  id: Scalars['Int'];
  name: Scalars['String'];
  regions?: Maybe<Array<Region>>;
  updatedAt: Scalars['DateTime'];
};

export type GroupAvgAggregate = {
  __typename?: 'GroupAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type GroupCount = {
  __typename?: 'GroupCount';
  buildings: Scalars['Int'];
  complexes: Scalars['Int'];
  developers: Scalars['Int'];
  regions: Scalars['Int'];
};

export type GroupCountAggregate = {
  __typename?: 'GroupCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type GroupCreateNestedManyWithoutRegionsInput = {
  connect?: InputMaybe<Array<GroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GroupCreateOrConnectWithoutRegionsInput>>;
  create?: InputMaybe<Array<GroupCreateWithoutRegionsInput>>;
};

export type GroupCreateNestedOneWithoutBuildingsInput = {
  connect?: InputMaybe<GroupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GroupCreateOrConnectWithoutBuildingsInput>;
  create?: InputMaybe<GroupCreateWithoutBuildingsInput>;
};

export type GroupCreateNestedOneWithoutComplexesInput = {
  connect?: InputMaybe<GroupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GroupCreateOrConnectWithoutComplexesInput>;
  create?: InputMaybe<GroupCreateWithoutComplexesInput>;
};

export type GroupCreateNestedOneWithoutDevelopersInput = {
  connect?: InputMaybe<GroupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GroupCreateOrConnectWithoutDevelopersInput>;
  create?: InputMaybe<GroupCreateWithoutDevelopersInput>;
};

export type GroupCreateOrConnectWithoutBuildingsInput = {
  create: GroupCreateWithoutBuildingsInput;
  where: GroupWhereUniqueInput;
};

export type GroupCreateOrConnectWithoutComplexesInput = {
  create: GroupCreateWithoutComplexesInput;
  where: GroupWhereUniqueInput;
};

export type GroupCreateOrConnectWithoutDevelopersInput = {
  create: GroupCreateWithoutDevelopersInput;
  where: GroupWhereUniqueInput;
};

export type GroupCreateOrConnectWithoutRegionsInput = {
  create: GroupCreateWithoutRegionsInput;
  where: GroupWhereUniqueInput;
};

export type GroupCreateWithoutBuildingsInput = {
  complexes?: InputMaybe<ComplexCreateNestedManyWithoutGroupInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  developers?: InputMaybe<DeveloperCreateNestedManyWithoutGroupInput>;
  name: Scalars['String'];
  regions?: InputMaybe<RegionCreateNestedManyWithoutGroupsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GroupCreateWithoutComplexesInput = {
  buildings?: InputMaybe<BuildingCreateNestedManyWithoutGroupInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  developers?: InputMaybe<DeveloperCreateNestedManyWithoutGroupInput>;
  name: Scalars['String'];
  regions?: InputMaybe<RegionCreateNestedManyWithoutGroupsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GroupCreateWithoutDevelopersInput = {
  buildings?: InputMaybe<BuildingCreateNestedManyWithoutGroupInput>;
  complexes?: InputMaybe<ComplexCreateNestedManyWithoutGroupInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  regions?: InputMaybe<RegionCreateNestedManyWithoutGroupsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GroupCreateWithoutRegionsInput = {
  buildings?: InputMaybe<BuildingCreateNestedManyWithoutGroupInput>;
  complexes?: InputMaybe<ComplexCreateNestedManyWithoutGroupInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  developers?: InputMaybe<DeveloperCreateNestedManyWithoutGroupInput>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GroupMaxAggregate = {
  __typename?: 'GroupMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GroupMinAggregate = {
  __typename?: 'GroupMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GroupScalarWhereInput = {
  AND?: InputMaybe<Array<GroupScalarWhereInput>>;
  NOT?: InputMaybe<Array<GroupScalarWhereInput>>;
  OR?: InputMaybe<Array<GroupScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GroupSumAggregate = {
  __typename?: 'GroupSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type GroupUncheckedCreateInput = {
  buildings?: InputMaybe<BuildingUncheckedCreateNestedManyWithoutGroupInput>;
  complexes?: InputMaybe<ComplexUncheckedCreateNestedManyWithoutGroupInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  developers?: InputMaybe<DeveloperUncheckedCreateNestedManyWithoutGroupInput>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  regions?: InputMaybe<RegionUncheckedCreateNestedManyWithoutGroupsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GroupUncheckedCreateNestedManyWithoutRegionsInput = {
  connect?: InputMaybe<Array<GroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GroupCreateOrConnectWithoutRegionsInput>>;
  create?: InputMaybe<Array<GroupCreateWithoutRegionsInput>>;
};

export type GroupUncheckedUpdateInput = {
  buildings?: InputMaybe<BuildingUncheckedUpdateManyWithoutGroupNestedInput>;
  complexes?: InputMaybe<ComplexUncheckedUpdateManyWithoutGroupNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  developers?: InputMaybe<DeveloperUncheckedUpdateManyWithoutGroupNestedInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  regions?: InputMaybe<RegionUncheckedUpdateManyWithoutGroupsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GroupUncheckedUpdateManyWithoutRegionsNestedInput = {
  connect?: InputMaybe<Array<GroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GroupCreateOrConnectWithoutRegionsInput>>;
  create?: InputMaybe<Array<GroupCreateWithoutRegionsInput>>;
  delete?: InputMaybe<Array<GroupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GroupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GroupWhereUniqueInput>>;
  set?: InputMaybe<Array<GroupWhereUniqueInput>>;
  update?: InputMaybe<Array<GroupUpdateWithWhereUniqueWithoutRegionsInput>>;
  updateMany?: InputMaybe<Array<GroupUpdateManyWithWhereWithoutRegionsInput>>;
  upsert?: InputMaybe<Array<GroupUpsertWithWhereUniqueWithoutRegionsInput>>;
};

export type GroupUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GroupUpdateManyWithWhereWithoutRegionsInput = {
  data: GroupUpdateManyMutationInput;
  where: GroupScalarWhereInput;
};

export type GroupUpdateManyWithoutRegionsNestedInput = {
  connect?: InputMaybe<Array<GroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GroupCreateOrConnectWithoutRegionsInput>>;
  create?: InputMaybe<Array<GroupCreateWithoutRegionsInput>>;
  delete?: InputMaybe<Array<GroupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GroupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GroupWhereUniqueInput>>;
  set?: InputMaybe<Array<GroupWhereUniqueInput>>;
  update?: InputMaybe<Array<GroupUpdateWithWhereUniqueWithoutRegionsInput>>;
  updateMany?: InputMaybe<Array<GroupUpdateManyWithWhereWithoutRegionsInput>>;
  upsert?: InputMaybe<Array<GroupUpsertWithWhereUniqueWithoutRegionsInput>>;
};

export type GroupUpdateOneRequiredWithoutBuildingsNestedInput = {
  connect?: InputMaybe<GroupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GroupCreateOrConnectWithoutBuildingsInput>;
  create?: InputMaybe<GroupCreateWithoutBuildingsInput>;
  update?: InputMaybe<GroupUpdateWithoutBuildingsInput>;
  upsert?: InputMaybe<GroupUpsertWithoutBuildingsInput>;
};

export type GroupUpdateOneRequiredWithoutComplexesNestedInput = {
  connect?: InputMaybe<GroupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GroupCreateOrConnectWithoutComplexesInput>;
  create?: InputMaybe<GroupCreateWithoutComplexesInput>;
  update?: InputMaybe<GroupUpdateWithoutComplexesInput>;
  upsert?: InputMaybe<GroupUpsertWithoutComplexesInput>;
};

export type GroupUpdateOneRequiredWithoutDevelopersNestedInput = {
  connect?: InputMaybe<GroupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GroupCreateOrConnectWithoutDevelopersInput>;
  create?: InputMaybe<GroupCreateWithoutDevelopersInput>;
  update?: InputMaybe<GroupUpdateWithoutDevelopersInput>;
  upsert?: InputMaybe<GroupUpsertWithoutDevelopersInput>;
};

export type GroupUpdateWithWhereUniqueWithoutRegionsInput = {
  data: GroupUpdateWithoutRegionsInput;
  where: GroupWhereUniqueInput;
};

export type GroupUpdateWithoutBuildingsInput = {
  complexes?: InputMaybe<ComplexUpdateManyWithoutGroupNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  developers?: InputMaybe<DeveloperUpdateManyWithoutGroupNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  regions?: InputMaybe<RegionUpdateManyWithoutGroupsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GroupUpdateWithoutComplexesInput = {
  buildings?: InputMaybe<BuildingUpdateManyWithoutGroupNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  developers?: InputMaybe<DeveloperUpdateManyWithoutGroupNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  regions?: InputMaybe<RegionUpdateManyWithoutGroupsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GroupUpdateWithoutDevelopersInput = {
  buildings?: InputMaybe<BuildingUpdateManyWithoutGroupNestedInput>;
  complexes?: InputMaybe<ComplexUpdateManyWithoutGroupNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  regions?: InputMaybe<RegionUpdateManyWithoutGroupsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GroupUpdateWithoutRegionsInput = {
  buildings?: InputMaybe<BuildingUpdateManyWithoutGroupNestedInput>;
  complexes?: InputMaybe<ComplexUpdateManyWithoutGroupNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  developers?: InputMaybe<DeveloperUpdateManyWithoutGroupNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GroupUpsertWithWhereUniqueWithoutRegionsInput = {
  create: GroupCreateWithoutRegionsInput;
  update: GroupUpdateWithoutRegionsInput;
  where: GroupWhereUniqueInput;
};

export type GroupUpsertWithoutBuildingsInput = {
  create: GroupCreateWithoutBuildingsInput;
  update: GroupUpdateWithoutBuildingsInput;
};

export type GroupUpsertWithoutComplexesInput = {
  create: GroupCreateWithoutComplexesInput;
  update: GroupUpdateWithoutComplexesInput;
};

export type GroupUpsertWithoutDevelopersInput = {
  create: GroupCreateWithoutDevelopersInput;
  update: GroupUpdateWithoutDevelopersInput;
};

export type GroupWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type LeadAvgAggregate = {
  __typename?: 'LeadAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type LeadCountAggregate = {
  __typename?: 'LeadCountAggregate';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  form_id: Scalars['Int'];
  form_name: Scalars['Int'];
  host: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  phone: Scalars['Int'];
  tran_id: Scalars['Int'];
  uniq_id: Scalars['Int'];
  utm_campaign: Scalars['Int'];
  utm_medium: Scalars['Int'];
  utm_source: Scalars['Int'];
  utm_term: Scalars['Int'];
};

export type LeadMaxAggregate = {
  __typename?: 'LeadMaxAggregate';
  email?: Maybe<Scalars['String']>;
  form_id?: Maybe<Scalars['String']>;
  form_name?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  tran_id?: Maybe<Scalars['String']>;
  uniq_id?: Maybe<Scalars['String']>;
  utm_campaign?: Maybe<Scalars['String']>;
  utm_medium?: Maybe<Scalars['String']>;
  utm_source?: Maybe<Scalars['String']>;
  utm_term?: Maybe<Scalars['String']>;
};

export type LeadMinAggregate = {
  __typename?: 'LeadMinAggregate';
  email?: Maybe<Scalars['String']>;
  form_id?: Maybe<Scalars['String']>;
  form_name?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  tran_id?: Maybe<Scalars['String']>;
  uniq_id?: Maybe<Scalars['String']>;
  utm_campaign?: Maybe<Scalars['String']>;
  utm_medium?: Maybe<Scalars['String']>;
  utm_source?: Maybe<Scalars['String']>;
  utm_term?: Maybe<Scalars['String']>;
};

export type LeadSumAggregate = {
  __typename?: 'LeadSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type Log = {
  __typename?: 'Log';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  operation: Scalars['String'];
  user: User;
  userId: Scalars['Int'];
};

export type LogAvgAggregate = {
  __typename?: 'LogAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type LogCountAggregate = {
  __typename?: 'LogCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  operation: Scalars['Int'];
  userId: Scalars['Int'];
};

export type LogMaxAggregate = {
  __typename?: 'LogMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  operation?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type LogMinAggregate = {
  __typename?: 'LogMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  operation?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type LogSumAggregate = {
  __typename?: 'LogSumAggregate';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
  user: TokenPayload;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBuilding: Building;
  createCity: City;
  createComplex: Complex;
  createDeveloper: Developer;
  createDistrict: District;
  createGroup: Group;
  createProperty: Property;
  createRegion: Region;
  createSale: Sale;
  login: LoginResponse;
  refresh: LoginResponse;
  removeBuilding: Building;
  removeCity: City;
  removeComplex: Complex;
  removeDeveloper: Developer;
  removeDistrict: District;
  removeGroup: Group;
  removeProperty: Property;
  removeRegion: Region;
  removeSale: Sale;
  signup: User;
  updateBuilding: Building;
  updateCity: City;
  updateComplex: Complex;
  updateDeveloper: Developer;
  updateDistrict: District;
  updateGroup: Group;
  updateProperty: Property;
  updateRegion: Region;
  updateSale: Sale;
};


export type MutationCreateBuildingArgs = {
  createBuildingInput: BuildingUncheckedCreateInput;
};


export type MutationCreateCityArgs = {
  createCityInput: CityUncheckedCreateInput;
};


export type MutationCreateComplexArgs = {
  createComplexInput: ComplexUncheckedCreateInput;
};


export type MutationCreateDeveloperArgs = {
  input: DeveloperUncheckedCreateInput;
};


export type MutationCreateDistrictArgs = {
  input: DistrictUncheckedCreateInput;
};


export type MutationCreateGroupArgs = {
  input: GroupUncheckedCreateInput;
};


export type MutationCreatePropertyArgs = {
  input: PropertyUncheckedCreateInput;
};


export type MutationCreateRegionArgs = {
  input: RegionUncheckedCreateInput;
};


export type MutationCreateSaleArgs = {
  input: SaleUncheckedCreateInput;
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRemoveBuildingArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveCityArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveComplexArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveDeveloperArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveDistrictArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveGroupArgs = {
  id: Scalars['Int'];
};


export type MutationRemovePropertyArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveRegionArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveSaleArgs = {
  id: Scalars['Int'];
};


export type MutationSignupArgs = {
  input: RegistrationInput;
};


export type MutationUpdateBuildingArgs = {
  id: Scalars['Float'];
  updateBuildingInput: BuildingUncheckedUpdateInput;
};


export type MutationUpdateCityArgs = {
  id: Scalars['Float'];
  input: CityUncheckedUpdateInput;
};


export type MutationUpdateComplexArgs = {
  id: Scalars['Int'];
  input: ComplexUncheckedUpdateInput;
};


export type MutationUpdateDeveloperArgs = {
  id: Scalars['Int'];
  input: DeveloperUncheckedUpdateInput;
};


export type MutationUpdateDistrictArgs = {
  id: Scalars['Int'];
  input: DistrictUncheckedUpdateInput;
};


export type MutationUpdateGroupArgs = {
  id: Scalars['Int'];
  input: GroupUncheckedUpdateInput;
};


export type MutationUpdatePropertyArgs = {
  id: Scalars['Int'];
  input: PropertyUpdateInput;
};


export type MutationUpdateRegionArgs = {
  id: Scalars['Float'];
  input: RegionUncheckedUpdateInput;
};


export type MutationUpdateSaleArgs = {
  id: Scalars['Int'];
  input: SaleUncheckedUpdateInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumDecorTypeNullableFilter = {
  equals?: InputMaybe<DecorType>;
  in?: InputMaybe<Array<DecorType>>;
  not?: InputMaybe<NestedEnumDecorTypeNullableFilter>;
  notIn?: InputMaybe<Array<DecorType>>;
};

export type NestedEnumPropertyClassNullableFilter = {
  equals?: InputMaybe<PropertyClass>;
  in?: InputMaybe<Array<PropertyClass>>;
  not?: InputMaybe<NestedEnumPropertyClassNullableFilter>;
  notIn?: InputMaybe<Array<PropertyClass>>;
};

export type NestedEnumPropertyTypeFilter = {
  equals?: InputMaybe<PropertyType>;
  in?: InputMaybe<Array<PropertyType>>;
  not?: InputMaybe<NestedEnumPropertyTypeFilter>;
  notIn?: InputMaybe<Array<PropertyType>>;
};

export type NestedEnumWallMaterialNullableFilter = {
  equals?: InputMaybe<WallMaterial>;
  in?: InputMaybe<Array<WallMaterial>>;
  not?: InputMaybe<NestedEnumWallMaterialNullableFilter>;
  notIn?: InputMaybe<Array<WallMaterial>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableEnumDecorTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<DecorType>;
};

export type NullableEnumPropertyClassFieldUpdateOperationsInput = {
  set?: InputMaybe<PropertyClass>;
};

export type NullableEnumWallMaterialFieldUpdateOperationsInput = {
  set?: InputMaybe<WallMaterial>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type OfferAvgAggregate = {
  __typename?: 'OfferAvgAggregate';
  area?: Maybe<Scalars['Float']>;
  buildingId?: Maybe<Scalars['Float']>;
  complexId?: Maybe<Scalars['Float']>;
  developerId?: Maybe<Scalars['Float']>;
  floor?: Maybe<Scalars['Float']>;
  floors?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rooms?: Maybe<Scalars['Float']>;
};

export type OfferCountAggregate = {
  __typename?: 'OfferCountAggregate';
  _all: Scalars['Int'];
  address: Scalars['Int'];
  area: Scalars['Int'];
  building: Scalars['Int'];
  buildingId: Scalars['Int'];
  complex: Scalars['Int'];
  complexId: Scalars['Int'];
  createdAt: Scalars['Int'];
  developer: Scalars['Int'];
  developerId: Scalars['Int'];
  floor: Scalars['Int'];
  floors: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  price: Scalars['Int'];
  rooms: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type OfferMaxAggregate = {
  __typename?: 'OfferMaxAggregate';
  address?: Maybe<Scalars['String']>;
  area?: Maybe<Scalars['Float']>;
  building?: Maybe<Scalars['String']>;
  buildingId?: Maybe<Scalars['Int']>;
  complex?: Maybe<Scalars['String']>;
  complexId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  developer?: Maybe<Scalars['String']>;
  developerId?: Maybe<Scalars['Int']>;
  floor?: Maybe<Scalars['Int']>;
  floors?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  rooms?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OfferMinAggregate = {
  __typename?: 'OfferMinAggregate';
  address?: Maybe<Scalars['String']>;
  area?: Maybe<Scalars['Float']>;
  building?: Maybe<Scalars['String']>;
  buildingId?: Maybe<Scalars['Int']>;
  complex?: Maybe<Scalars['String']>;
  complexId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  developer?: Maybe<Scalars['String']>;
  developerId?: Maybe<Scalars['Int']>;
  floor?: Maybe<Scalars['Int']>;
  floors?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  rooms?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OfferSumAggregate = {
  __typename?: 'OfferSumAggregate';
  area?: Maybe<Scalars['Float']>;
  buildingId?: Maybe<Scalars['Int']>;
  complexId?: Maybe<Scalars['Int']>;
  developerId?: Maybe<Scalars['Int']>;
  floor?: Maybe<Scalars['Int']>;
  floors?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  rooms?: Maybe<Scalars['Int']>;
};

export type Property = {
  __typename?: 'Property';
  building: Building;
  buildingId: Scalars['Int'];
  entrance?: Maybe<Scalars['Int']>;
  floor: Scalars['Int'];
  id: Scalars['Int'];
  livingArea?: Maybe<Scalars['Float']>;
  number: Scalars['String'];
  propertyType: PropertyType;
  rooms?: Maybe<Scalars['Int']>;
  totalArea: Scalars['Float'];
  wallHeight?: Maybe<Scalars['Float']>;
};

export type PropertyAvgAggregate = {
  __typename?: 'PropertyAvgAggregate';
  buildingId?: Maybe<Scalars['Float']>;
  entrance?: Maybe<Scalars['Float']>;
  floor?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  livingArea?: Maybe<Scalars['Float']>;
  rooms?: Maybe<Scalars['Float']>;
  totalArea?: Maybe<Scalars['Float']>;
  wallHeight?: Maybe<Scalars['Float']>;
};

export enum PropertyClass {
  Business = 'BUSINESS',
  Comfort = 'COMFORT',
  Economy = 'ECONOMY',
  Premium = 'PREMIUM',
  Typical = 'TYPICAL'
}

export type PropertyCountAggregate = {
  __typename?: 'PropertyCountAggregate';
  _all: Scalars['Int'];
  buildingId: Scalars['Int'];
  entrance: Scalars['Int'];
  floor: Scalars['Int'];
  id: Scalars['Int'];
  livingArea: Scalars['Int'];
  number: Scalars['Int'];
  propertyType: Scalars['Int'];
  rooms: Scalars['Int'];
  totalArea: Scalars['Int'];
  wallHeight: Scalars['Int'];
};

export type PropertyCreateManyBuildingInput = {
  entrance?: InputMaybe<Scalars['Int']>;
  floor: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  livingArea?: InputMaybe<Scalars['Float']>;
  number: Scalars['String'];
  propertyType: PropertyType;
  rooms?: InputMaybe<Scalars['Int']>;
  totalArea: Scalars['Float'];
  wallHeight?: InputMaybe<Scalars['Float']>;
};

export type PropertyCreateManyBuildingInputEnvelope = {
  data: Array<PropertyCreateManyBuildingInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PropertyCreateNestedManyWithoutBuildingInput = {
  connect?: InputMaybe<Array<PropertyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertyCreateOrConnectWithoutBuildingInput>>;
  create?: InputMaybe<Array<PropertyCreateWithoutBuildingInput>>;
  createMany?: InputMaybe<PropertyCreateManyBuildingInputEnvelope>;
};

export type PropertyCreateOrConnectWithoutBuildingInput = {
  create: PropertyCreateWithoutBuildingInput;
  where: PropertyWhereUniqueInput;
};

export type PropertyCreateWithoutBuildingInput = {
  entrance?: InputMaybe<Scalars['Int']>;
  floor: Scalars['Int'];
  livingArea?: InputMaybe<Scalars['Float']>;
  number: Scalars['String'];
  propertyType: PropertyType;
  rooms?: InputMaybe<Scalars['Int']>;
  totalArea: Scalars['Float'];
  wallHeight?: InputMaybe<Scalars['Float']>;
};

export type PropertyMaxAggregate = {
  __typename?: 'PropertyMaxAggregate';
  buildingId?: Maybe<Scalars['Int']>;
  entrance?: Maybe<Scalars['Int']>;
  floor?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  livingArea?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['String']>;
  propertyType?: Maybe<PropertyType>;
  rooms?: Maybe<Scalars['Int']>;
  totalArea?: Maybe<Scalars['Float']>;
  wallHeight?: Maybe<Scalars['Float']>;
};

export type PropertyMinAggregate = {
  __typename?: 'PropertyMinAggregate';
  buildingId?: Maybe<Scalars['Int']>;
  entrance?: Maybe<Scalars['Int']>;
  floor?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  livingArea?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['String']>;
  propertyType?: Maybe<PropertyType>;
  rooms?: Maybe<Scalars['Int']>;
  totalArea?: Maybe<Scalars['Float']>;
  wallHeight?: Maybe<Scalars['Float']>;
};

export type PropertyScalarWhereInput = {
  AND?: InputMaybe<Array<PropertyScalarWhereInput>>;
  NOT?: InputMaybe<Array<PropertyScalarWhereInput>>;
  OR?: InputMaybe<Array<PropertyScalarWhereInput>>;
  buildingId?: InputMaybe<IntFilter>;
  entrance?: InputMaybe<IntNullableFilter>;
  floor?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  livingArea?: InputMaybe<FloatNullableFilter>;
  number?: InputMaybe<StringFilter>;
  propertyType?: InputMaybe<EnumPropertyTypeFilter>;
  rooms?: InputMaybe<IntNullableFilter>;
  totalArea?: InputMaybe<FloatFilter>;
  wallHeight?: InputMaybe<FloatNullableFilter>;
};

export type PropertySumAggregate = {
  __typename?: 'PropertySumAggregate';
  buildingId?: Maybe<Scalars['Int']>;
  entrance?: Maybe<Scalars['Int']>;
  floor?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  livingArea?: Maybe<Scalars['Float']>;
  rooms?: Maybe<Scalars['Int']>;
  totalArea?: Maybe<Scalars['Float']>;
  wallHeight?: Maybe<Scalars['Float']>;
};

export enum PropertyType {
  Commercial = 'COMMERCIAL',
  Living = 'LIVING',
  Parking = 'PARKING'
}

export type PropertyUncheckedCreateInput = {
  buildingId: Scalars['Int'];
  entrance?: InputMaybe<Scalars['Int']>;
  floor: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  livingArea?: InputMaybe<Scalars['Float']>;
  number: Scalars['String'];
  propertyType: PropertyType;
  rooms?: InputMaybe<Scalars['Int']>;
  totalArea: Scalars['Float'];
  wallHeight?: InputMaybe<Scalars['Float']>;
};

export type PropertyUncheckedCreateNestedManyWithoutBuildingInput = {
  connect?: InputMaybe<Array<PropertyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertyCreateOrConnectWithoutBuildingInput>>;
  create?: InputMaybe<Array<PropertyCreateWithoutBuildingInput>>;
  createMany?: InputMaybe<PropertyCreateManyBuildingInputEnvelope>;
};

export type PropertyUncheckedUpdateManyWithoutBuildingNestedInput = {
  connect?: InputMaybe<Array<PropertyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertyCreateOrConnectWithoutBuildingInput>>;
  create?: InputMaybe<Array<PropertyCreateWithoutBuildingInput>>;
  createMany?: InputMaybe<PropertyCreateManyBuildingInputEnvelope>;
  delete?: InputMaybe<Array<PropertyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PropertyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PropertyWhereUniqueInput>>;
  set?: InputMaybe<Array<PropertyWhereUniqueInput>>;
  update?: InputMaybe<Array<PropertyUpdateWithWhereUniqueWithoutBuildingInput>>;
  updateMany?: InputMaybe<Array<PropertyUpdateManyWithWhereWithoutBuildingInput>>;
  upsert?: InputMaybe<Array<PropertyUpsertWithWhereUniqueWithoutBuildingInput>>;
};

export type PropertyUpdateInput = {
  building?: InputMaybe<BuildingUpdateOneRequiredWithoutPropertiesNestedInput>;
  entrance?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  floor?: InputMaybe<IntFieldUpdateOperationsInput>;
  livingArea?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  number?: InputMaybe<StringFieldUpdateOperationsInput>;
  propertyType?: InputMaybe<EnumPropertyTypeFieldUpdateOperationsInput>;
  rooms?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  totalArea?: InputMaybe<FloatFieldUpdateOperationsInput>;
  wallHeight?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
};

export type PropertyUpdateManyMutationInput = {
  entrance?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  floor?: InputMaybe<IntFieldUpdateOperationsInput>;
  livingArea?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  number?: InputMaybe<StringFieldUpdateOperationsInput>;
  propertyType?: InputMaybe<EnumPropertyTypeFieldUpdateOperationsInput>;
  rooms?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  totalArea?: InputMaybe<FloatFieldUpdateOperationsInput>;
  wallHeight?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
};

export type PropertyUpdateManyWithWhereWithoutBuildingInput = {
  data: PropertyUpdateManyMutationInput;
  where: PropertyScalarWhereInput;
};

export type PropertyUpdateManyWithoutBuildingNestedInput = {
  connect?: InputMaybe<Array<PropertyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PropertyCreateOrConnectWithoutBuildingInput>>;
  create?: InputMaybe<Array<PropertyCreateWithoutBuildingInput>>;
  createMany?: InputMaybe<PropertyCreateManyBuildingInputEnvelope>;
  delete?: InputMaybe<Array<PropertyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PropertyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PropertyWhereUniqueInput>>;
  set?: InputMaybe<Array<PropertyWhereUniqueInput>>;
  update?: InputMaybe<Array<PropertyUpdateWithWhereUniqueWithoutBuildingInput>>;
  updateMany?: InputMaybe<Array<PropertyUpdateManyWithWhereWithoutBuildingInput>>;
  upsert?: InputMaybe<Array<PropertyUpsertWithWhereUniqueWithoutBuildingInput>>;
};

export type PropertyUpdateWithWhereUniqueWithoutBuildingInput = {
  data: PropertyUpdateWithoutBuildingInput;
  where: PropertyWhereUniqueInput;
};

export type PropertyUpdateWithoutBuildingInput = {
  entrance?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  floor?: InputMaybe<IntFieldUpdateOperationsInput>;
  livingArea?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  number?: InputMaybe<StringFieldUpdateOperationsInput>;
  propertyType?: InputMaybe<EnumPropertyTypeFieldUpdateOperationsInput>;
  rooms?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  totalArea?: InputMaybe<FloatFieldUpdateOperationsInput>;
  wallHeight?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
};

export type PropertyUpsertWithWhereUniqueWithoutBuildingInput = {
  create: PropertyCreateWithoutBuildingInput;
  update: PropertyUpdateWithoutBuildingInput;
  where: PropertyWhereUniqueInput;
};

export type PropertyWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  building: Building;
  buildingsWithCount: BuildingsResponse;
  cities: Array<City>;
  city: City;
  complex: Complex;
  complexes: Array<Complex>;
  developer: Developer;
  developers: Array<Developer>;
  district: District;
  districts: Array<District>;
  group: Group;
  groups: Array<Group>;
  properties: Array<Property>;
  property: Property;
  region: Region;
  regions: Array<Region>;
  sale: Sale;
  sales: Array<Sale>;
  user: User;
  users: Array<User>;
};


export type QueryBuildingArgs = {
  id: Scalars['Int'];
};


export type QueryBuildingsWithCountArgs = {
  cityId?: InputMaybe<Scalars['Int']>;
  complexId?: InputMaybe<Scalars['Int']>;
  districtId?: InputMaybe<Scalars['Int']>;
  groupId?: InputMaybe<Scalars['Int']>;
  inWork?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryCitiesArgs = {
  regionId?: InputMaybe<Scalars['Int']>;
};


export type QueryCityArgs = {
  id: Scalars['Int'];
};


export type QueryComplexArgs = {
  id: Scalars['Int'];
};


export type QueryComplexesArgs = {
  cityId?: InputMaybe<Scalars['Int']>;
  districtId?: InputMaybe<Scalars['Int']>;
  groupId?: InputMaybe<Scalars['Int']>;
};


export type QueryDeveloperArgs = {
  id: Scalars['Int'];
};


export type QueryDevelopersArgs = {
  groupId?: InputMaybe<Scalars['Int']>;
};


export type QueryDistrictArgs = {
  id: Scalars['Int'];
};


export type QueryDistrictsArgs = {
  cityId?: InputMaybe<Scalars['Int']>;
};


export type QueryGroupArgs = {
  id: Scalars['Int'];
};


export type QueryPropertyArgs = {
  id: Scalars['Int'];
};


export type QueryRegionArgs = {
  id: Scalars['Int'];
};


export type QuerySaleArgs = {
  id: Scalars['Int'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Region = {
  __typename?: 'Region';
  _count: RegionCount;
  cities?: Maybe<Array<City>>;
  createdAt: Scalars['DateTime'];
  groups?: Maybe<Array<Group>>;
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type RegionAvgAggregate = {
  __typename?: 'RegionAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type RegionCount = {
  __typename?: 'RegionCount';
  cities: Scalars['Int'];
  groups: Scalars['Int'];
};

export type RegionCountAggregate = {
  __typename?: 'RegionCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type RegionCreateNestedManyWithoutGroupsInput = {
  connect?: InputMaybe<Array<RegionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RegionCreateOrConnectWithoutGroupsInput>>;
  create?: InputMaybe<Array<RegionCreateWithoutGroupsInput>>;
};

export type RegionCreateNestedOneWithoutCitiesInput = {
  connect?: InputMaybe<RegionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RegionCreateOrConnectWithoutCitiesInput>;
  create?: InputMaybe<RegionCreateWithoutCitiesInput>;
};

export type RegionCreateOrConnectWithoutCitiesInput = {
  create: RegionCreateWithoutCitiesInput;
  where: RegionWhereUniqueInput;
};

export type RegionCreateOrConnectWithoutGroupsInput = {
  create: RegionCreateWithoutGroupsInput;
  where: RegionWhereUniqueInput;
};

export type RegionCreateWithoutCitiesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  groups?: InputMaybe<GroupCreateNestedManyWithoutRegionsInput>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RegionCreateWithoutGroupsInput = {
  cities?: InputMaybe<CityCreateNestedManyWithoutRegionInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RegionMaxAggregate = {
  __typename?: 'RegionMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RegionMinAggregate = {
  __typename?: 'RegionMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RegionScalarWhereInput = {
  AND?: InputMaybe<Array<RegionScalarWhereInput>>;
  NOT?: InputMaybe<Array<RegionScalarWhereInput>>;
  OR?: InputMaybe<Array<RegionScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type RegionSumAggregate = {
  __typename?: 'RegionSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type RegionUncheckedCreateInput = {
  cities?: InputMaybe<CityUncheckedCreateNestedManyWithoutRegionInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  groups?: InputMaybe<GroupUncheckedCreateNestedManyWithoutRegionsInput>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type RegionUncheckedCreateNestedManyWithoutGroupsInput = {
  connect?: InputMaybe<Array<RegionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RegionCreateOrConnectWithoutGroupsInput>>;
  create?: InputMaybe<Array<RegionCreateWithoutGroupsInput>>;
};

export type RegionUncheckedUpdateInput = {
  cities?: InputMaybe<CityUncheckedUpdateManyWithoutRegionNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  groups?: InputMaybe<GroupUncheckedUpdateManyWithoutRegionsNestedInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RegionUncheckedUpdateManyWithoutGroupsNestedInput = {
  connect?: InputMaybe<Array<RegionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RegionCreateOrConnectWithoutGroupsInput>>;
  create?: InputMaybe<Array<RegionCreateWithoutGroupsInput>>;
  delete?: InputMaybe<Array<RegionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RegionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RegionWhereUniqueInput>>;
  set?: InputMaybe<Array<RegionWhereUniqueInput>>;
  update?: InputMaybe<Array<RegionUpdateWithWhereUniqueWithoutGroupsInput>>;
  updateMany?: InputMaybe<Array<RegionUpdateManyWithWhereWithoutGroupsInput>>;
  upsert?: InputMaybe<Array<RegionUpsertWithWhereUniqueWithoutGroupsInput>>;
};

export type RegionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RegionUpdateManyWithWhereWithoutGroupsInput = {
  data: RegionUpdateManyMutationInput;
  where: RegionScalarWhereInput;
};

export type RegionUpdateManyWithoutGroupsNestedInput = {
  connect?: InputMaybe<Array<RegionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RegionCreateOrConnectWithoutGroupsInput>>;
  create?: InputMaybe<Array<RegionCreateWithoutGroupsInput>>;
  delete?: InputMaybe<Array<RegionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RegionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RegionWhereUniqueInput>>;
  set?: InputMaybe<Array<RegionWhereUniqueInput>>;
  update?: InputMaybe<Array<RegionUpdateWithWhereUniqueWithoutGroupsInput>>;
  updateMany?: InputMaybe<Array<RegionUpdateManyWithWhereWithoutGroupsInput>>;
  upsert?: InputMaybe<Array<RegionUpsertWithWhereUniqueWithoutGroupsInput>>;
};

export type RegionUpdateOneRequiredWithoutCitiesNestedInput = {
  connect?: InputMaybe<RegionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RegionCreateOrConnectWithoutCitiesInput>;
  create?: InputMaybe<RegionCreateWithoutCitiesInput>;
  update?: InputMaybe<RegionUpdateWithoutCitiesInput>;
  upsert?: InputMaybe<RegionUpsertWithoutCitiesInput>;
};

export type RegionUpdateWithWhereUniqueWithoutGroupsInput = {
  data: RegionUpdateWithoutGroupsInput;
  where: RegionWhereUniqueInput;
};

export type RegionUpdateWithoutCitiesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  groups?: InputMaybe<GroupUpdateManyWithoutRegionsNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RegionUpdateWithoutGroupsInput = {
  cities?: InputMaybe<CityUpdateManyWithoutRegionNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type RegionUpsertWithWhereUniqueWithoutGroupsInput = {
  create: RegionCreateWithoutGroupsInput;
  update: RegionUpdateWithoutGroupsInput;
  where: RegionWhereUniqueInput;
};

export type RegionUpsertWithoutCitiesInput = {
  create: RegionCreateWithoutCitiesInput;
  update: RegionUpdateWithoutCitiesInput;
};

export type RegionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type RegistrationInput = {
  /** Email */
  email: Scalars['String'];
  /** Имя пользователя */
  name?: InputMaybe<Scalars['String']>;
  /** Пароль */
  password: Scalars['String'];
  /** Телефон */
  phone?: InputMaybe<Scalars['String']>;
};

export enum Role {
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  User = 'USER'
}

export type Sale = {
  __typename?: 'Sale';
  amount: Scalars['Int'];
  area: Scalars['Float'];
  building: Building;
  buildingId: Scalars['Int'];
  id: Scalars['Int'];
  month: Scalars['Int'];
  propertyType: PropertyType;
  sum: Scalars['Float'];
  year: Scalars['Int'];
};

export type SaleAvgAggregate = {
  __typename?: 'SaleAvgAggregate';
  amount?: Maybe<Scalars['Float']>;
  area?: Maybe<Scalars['Float']>;
  buildingId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  month?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

export type SaleCountAggregate = {
  __typename?: 'SaleCountAggregate';
  _all: Scalars['Int'];
  amount: Scalars['Int'];
  area: Scalars['Int'];
  buildingId: Scalars['Int'];
  id: Scalars['Int'];
  month: Scalars['Int'];
  propertyType: Scalars['Int'];
  sum: Scalars['Int'];
  year: Scalars['Int'];
};

export type SaleCreateManyBuildingInput = {
  amount: Scalars['Int'];
  area: Scalars['Float'];
  id?: InputMaybe<Scalars['Int']>;
  month: Scalars['Int'];
  propertyType: PropertyType;
  sum: Scalars['Float'];
  year: Scalars['Int'];
};

export type SaleCreateManyBuildingInputEnvelope = {
  data: Array<SaleCreateManyBuildingInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type SaleCreateNestedManyWithoutBuildingInput = {
  connect?: InputMaybe<Array<SaleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SaleCreateOrConnectWithoutBuildingInput>>;
  create?: InputMaybe<Array<SaleCreateWithoutBuildingInput>>;
  createMany?: InputMaybe<SaleCreateManyBuildingInputEnvelope>;
};

export type SaleCreateOrConnectWithoutBuildingInput = {
  create: SaleCreateWithoutBuildingInput;
  where: SaleWhereUniqueInput;
};

export type SaleCreateWithoutBuildingInput = {
  amount: Scalars['Int'];
  area: Scalars['Float'];
  month: Scalars['Int'];
  propertyType: PropertyType;
  sum: Scalars['Float'];
  year: Scalars['Int'];
};

export type SaleMaxAggregate = {
  __typename?: 'SaleMaxAggregate';
  amount?: Maybe<Scalars['Int']>;
  area?: Maybe<Scalars['Float']>;
  buildingId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  propertyType?: Maybe<PropertyType>;
  sum?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Int']>;
};

export type SaleMinAggregate = {
  __typename?: 'SaleMinAggregate';
  amount?: Maybe<Scalars['Int']>;
  area?: Maybe<Scalars['Float']>;
  buildingId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  propertyType?: Maybe<PropertyType>;
  sum?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Int']>;
};

export type SaleScalarWhereInput = {
  AND?: InputMaybe<Array<SaleScalarWhereInput>>;
  NOT?: InputMaybe<Array<SaleScalarWhereInput>>;
  OR?: InputMaybe<Array<SaleScalarWhereInput>>;
  amount?: InputMaybe<IntFilter>;
  area?: InputMaybe<FloatFilter>;
  buildingId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  month?: InputMaybe<IntFilter>;
  propertyType?: InputMaybe<EnumPropertyTypeFilter>;
  sum?: InputMaybe<FloatFilter>;
  year?: InputMaybe<IntFilter>;
};

export type SaleSumAggregate = {
  __typename?: 'SaleSumAggregate';
  amount?: Maybe<Scalars['Int']>;
  area?: Maybe<Scalars['Float']>;
  buildingId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  sum?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Int']>;
};

export type SaleUncheckedCreateInput = {
  amount: Scalars['Int'];
  area: Scalars['Float'];
  buildingId: Scalars['Int'];
  id?: InputMaybe<Scalars['Int']>;
  month: Scalars['Int'];
  propertyType: PropertyType;
  sum: Scalars['Float'];
  year: Scalars['Int'];
};

export type SaleUncheckedCreateNestedManyWithoutBuildingInput = {
  connect?: InputMaybe<Array<SaleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SaleCreateOrConnectWithoutBuildingInput>>;
  create?: InputMaybe<Array<SaleCreateWithoutBuildingInput>>;
  createMany?: InputMaybe<SaleCreateManyBuildingInputEnvelope>;
};

export type SaleUncheckedUpdateInput = {
  amount?: InputMaybe<IntFieldUpdateOperationsInput>;
  area?: InputMaybe<FloatFieldUpdateOperationsInput>;
  buildingId?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<IntFieldUpdateOperationsInput>;
  month?: InputMaybe<IntFieldUpdateOperationsInput>;
  propertyType?: InputMaybe<EnumPropertyTypeFieldUpdateOperationsInput>;
  sum?: InputMaybe<FloatFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SaleUncheckedUpdateManyWithoutBuildingNestedInput = {
  connect?: InputMaybe<Array<SaleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SaleCreateOrConnectWithoutBuildingInput>>;
  create?: InputMaybe<Array<SaleCreateWithoutBuildingInput>>;
  createMany?: InputMaybe<SaleCreateManyBuildingInputEnvelope>;
  delete?: InputMaybe<Array<SaleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SaleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SaleWhereUniqueInput>>;
  set?: InputMaybe<Array<SaleWhereUniqueInput>>;
  update?: InputMaybe<Array<SaleUpdateWithWhereUniqueWithoutBuildingInput>>;
  updateMany?: InputMaybe<Array<SaleUpdateManyWithWhereWithoutBuildingInput>>;
  upsert?: InputMaybe<Array<SaleUpsertWithWhereUniqueWithoutBuildingInput>>;
};

export type SaleUpdateManyMutationInput = {
  amount?: InputMaybe<IntFieldUpdateOperationsInput>;
  area?: InputMaybe<FloatFieldUpdateOperationsInput>;
  month?: InputMaybe<IntFieldUpdateOperationsInput>;
  propertyType?: InputMaybe<EnumPropertyTypeFieldUpdateOperationsInput>;
  sum?: InputMaybe<FloatFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SaleUpdateManyWithWhereWithoutBuildingInput = {
  data: SaleUpdateManyMutationInput;
  where: SaleScalarWhereInput;
};

export type SaleUpdateManyWithoutBuildingNestedInput = {
  connect?: InputMaybe<Array<SaleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SaleCreateOrConnectWithoutBuildingInput>>;
  create?: InputMaybe<Array<SaleCreateWithoutBuildingInput>>;
  createMany?: InputMaybe<SaleCreateManyBuildingInputEnvelope>;
  delete?: InputMaybe<Array<SaleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SaleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SaleWhereUniqueInput>>;
  set?: InputMaybe<Array<SaleWhereUniqueInput>>;
  update?: InputMaybe<Array<SaleUpdateWithWhereUniqueWithoutBuildingInput>>;
  updateMany?: InputMaybe<Array<SaleUpdateManyWithWhereWithoutBuildingInput>>;
  upsert?: InputMaybe<Array<SaleUpsertWithWhereUniqueWithoutBuildingInput>>;
};

export type SaleUpdateWithWhereUniqueWithoutBuildingInput = {
  data: SaleUpdateWithoutBuildingInput;
  where: SaleWhereUniqueInput;
};

export type SaleUpdateWithoutBuildingInput = {
  amount?: InputMaybe<IntFieldUpdateOperationsInput>;
  area?: InputMaybe<FloatFieldUpdateOperationsInput>;
  month?: InputMaybe<IntFieldUpdateOperationsInput>;
  propertyType?: InputMaybe<EnumPropertyTypeFieldUpdateOperationsInput>;
  sum?: InputMaybe<FloatFieldUpdateOperationsInput>;
  year?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type SaleUpsertWithWhereUniqueWithoutBuildingInput = {
  create: SaleCreateWithoutBuildingInput;
  update: SaleUpdateWithoutBuildingInput;
  where: SaleWhereUniqueInput;
};

export type SaleWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Token = {
  __typename?: 'Token';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  refreshToken: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Int'];
};

export type TokenAvgAggregate = {
  __typename?: 'TokenAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type TokenCountAggregate = {
  __typename?: 'TokenCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  refreshToken: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type TokenMaxAggregate = {
  __typename?: 'TokenMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type TokenMinAggregate = {
  __typename?: 'TokenMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['Int']>;
};

export type TokenPayload = {
  __typename?: 'TokenPayload';
  activated: Scalars['Boolean'];
  email: Scalars['String'];
  id: Scalars['Int'];
  role: Scalars['String'];
};

export type TokenSumAggregate = {
  __typename?: 'TokenSumAggregate';
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  activated?: Maybe<Scalars['Boolean']>;
  activationLink?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  logs?: Maybe<Array<Log>>;
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  role: Role;
  token?: Maybe<Token>;
  updatedAt: Scalars['DateTime'];
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UserCount = {
  __typename?: 'UserCount';
  logs: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  activated: Scalars['Int'];
  activationLink: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  password: Scalars['Int'];
  phone: Scalars['Int'];
  role: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  activated?: Maybe<Scalars['Boolean']>;
  activationLink?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  activated?: Maybe<Scalars['Boolean']>;
  activationLink?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export enum WallMaterial {
  Blocks = 'BLOCKS',
  Brick = 'BRICK',
  Monolith = 'MONOLITH',
  MonolithBrick = 'MONOLITH_BRICK',
  Panel = 'PANEL'
}
