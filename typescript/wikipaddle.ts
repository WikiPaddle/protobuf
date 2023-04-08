/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "wikipaddle.api.v1";

export interface GetGuidesCollectionRequest {
  page: number;
}

export interface GetGuidesCollectionResponse {
  pagination: Pagination | undefined;
  guides: GuideCollectionItem[];
}

export interface GuideCollectionItemPhoto {
  url: string;
}

export interface GuideCollectionItem {
  id: string;
  title: string;
  country: string;
  state: string;
  localizedDistance: string;
  starRating: string;
  photos: GuideCollectionItemPhoto[];
}

export interface GetCurrentUserRequest {
}

export interface Pagination {
  currentPage: number;
  perPage: number;
  totalResults: number;
  totalPages: number;
}

export interface UserRequest {
  id: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  avatarUrl: string;
}

export interface UserResponse {
  user: User | undefined;
}

export interface GuideRequest {
  id: string;
}

export interface GuideResponse {
  guide: Guide | undefined;
}

export interface LatLng {
  latitude: number;
  longitude: number;
}

export interface Guide {
  id: string;
  title: string;
  description: string;
  url: string;
  startLatLng: LatLng | undefined;
  endLatLng: LatLng | undefined;
  polyline: Uint8Array;
  country: string;
  state: string;
  localizedDistance: string;
  commentsCount: number;
  uploadsCount: number;
  starRating: string;
}

export interface FitnessActivity {
  id: string;
  name: string;
  startLatLng: LatLng | undefined;
  endLatLng: LatLng | undefined;
  polyline: Uint8Array;
}

export interface GuideComment {
  id: string;
  body: string;
  userFullName: string;
  userAvatarUrl: string;
  createdAt: string;
  starRating: number;
}

export interface GetGuideCommentsCollectionRequest {
  guideId: string;
  page: number;
}

export interface GetGuideCommentsCollectionResponse {
  pagination: Pagination | undefined;
  comments: GuideComment[];
}

export interface CreateGuideCommentRequest {
  guideId: string;
  body: string;
  starRating: number;
}

function createBaseGetGuidesCollectionRequest(): GetGuidesCollectionRequest {
  return { page: 0 };
}

export const GetGuidesCollectionRequest = {
  encode(message: GetGuidesCollectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== 0) {
      writer.uint32(8).int32(message.page);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGuidesCollectionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGuidesCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.page = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetGuidesCollectionRequest {
    return { page: isSet(object.page) ? Number(object.page) : 0 };
  },

  toJSON(message: GetGuidesCollectionRequest): unknown {
    const obj: any = {};
    message.page !== undefined && (obj.page = Math.round(message.page));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetGuidesCollectionRequest>, I>>(base?: I): GetGuidesCollectionRequest {
    return GetGuidesCollectionRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetGuidesCollectionRequest>, I>>(object: I): GetGuidesCollectionRequest {
    const message = createBaseGetGuidesCollectionRequest();
    message.page = object.page ?? 0;
    return message;
  },
};

function createBaseGetGuidesCollectionResponse(): GetGuidesCollectionResponse {
  return { pagination: undefined, guides: [] };
}

export const GetGuidesCollectionResponse = {
  encode(message: GetGuidesCollectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.guides) {
      GuideCollectionItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGuidesCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGuidesCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.pagination = Pagination.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.guides.push(GuideCollectionItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetGuidesCollectionResponse {
    return {
      pagination: isSet(object.pagination) ? Pagination.fromJSON(object.pagination) : undefined,
      guides: Array.isArray(object?.guides) ? object.guides.map((e: any) => GuideCollectionItem.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetGuidesCollectionResponse): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? Pagination.toJSON(message.pagination) : undefined);
    if (message.guides) {
      obj.guides = message.guides.map((e) => e ? GuideCollectionItem.toJSON(e) : undefined);
    } else {
      obj.guides = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetGuidesCollectionResponse>, I>>(base?: I): GetGuidesCollectionResponse {
    return GetGuidesCollectionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetGuidesCollectionResponse>, I>>(object: I): GetGuidesCollectionResponse {
    const message = createBaseGetGuidesCollectionResponse();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? Pagination.fromPartial(object.pagination)
      : undefined;
    message.guides = object.guides?.map((e) => GuideCollectionItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGuideCollectionItemPhoto(): GuideCollectionItemPhoto {
  return { url: "" };
}

export const GuideCollectionItemPhoto = {
  encode(message: GuideCollectionItemPhoto, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GuideCollectionItemPhoto {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGuideCollectionItemPhoto();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.url = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GuideCollectionItemPhoto {
    return { url: isSet(object.url) ? String(object.url) : "" };
  },

  toJSON(message: GuideCollectionItemPhoto): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  create<I extends Exact<DeepPartial<GuideCollectionItemPhoto>, I>>(base?: I): GuideCollectionItemPhoto {
    return GuideCollectionItemPhoto.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GuideCollectionItemPhoto>, I>>(object: I): GuideCollectionItemPhoto {
    const message = createBaseGuideCollectionItemPhoto();
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseGuideCollectionItem(): GuideCollectionItem {
  return { id: "", title: "", country: "", state: "", localizedDistance: "", starRating: "", photos: [] };
}

export const GuideCollectionItem = {
  encode(message: GuideCollectionItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.country !== "") {
      writer.uint32(26).string(message.country);
    }
    if (message.state !== "") {
      writer.uint32(34).string(message.state);
    }
    if (message.localizedDistance !== "") {
      writer.uint32(42).string(message.localizedDistance);
    }
    if (message.starRating !== "") {
      writer.uint32(50).string(message.starRating);
    }
    for (const v of message.photos) {
      GuideCollectionItemPhoto.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GuideCollectionItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGuideCollectionItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.title = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.country = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.state = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.localizedDistance = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.starRating = reader.string();
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.photos.push(GuideCollectionItemPhoto.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GuideCollectionItem {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      title: isSet(object.title) ? String(object.title) : "",
      country: isSet(object.country) ? String(object.country) : "",
      state: isSet(object.state) ? String(object.state) : "",
      localizedDistance: isSet(object.localizedDistance) ? String(object.localizedDistance) : "",
      starRating: isSet(object.starRating) ? String(object.starRating) : "",
      photos: Array.isArray(object?.photos) ? object.photos.map((e: any) => GuideCollectionItemPhoto.fromJSON(e)) : [],
    };
  },

  toJSON(message: GuideCollectionItem): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.title !== undefined && (obj.title = message.title);
    message.country !== undefined && (obj.country = message.country);
    message.state !== undefined && (obj.state = message.state);
    message.localizedDistance !== undefined && (obj.localizedDistance = message.localizedDistance);
    message.starRating !== undefined && (obj.starRating = message.starRating);
    if (message.photos) {
      obj.photos = message.photos.map((e) => e ? GuideCollectionItemPhoto.toJSON(e) : undefined);
    } else {
      obj.photos = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GuideCollectionItem>, I>>(base?: I): GuideCollectionItem {
    return GuideCollectionItem.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GuideCollectionItem>, I>>(object: I): GuideCollectionItem {
    const message = createBaseGuideCollectionItem();
    message.id = object.id ?? "";
    message.title = object.title ?? "";
    message.country = object.country ?? "";
    message.state = object.state ?? "";
    message.localizedDistance = object.localizedDistance ?? "";
    message.starRating = object.starRating ?? "";
    message.photos = object.photos?.map((e) => GuideCollectionItemPhoto.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetCurrentUserRequest(): GetCurrentUserRequest {
  return {};
}

export const GetCurrentUserRequest = {
  encode(_: GetCurrentUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCurrentUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCurrentUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GetCurrentUserRequest {
    return {};
  },

  toJSON(_: GetCurrentUserRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetCurrentUserRequest>, I>>(base?: I): GetCurrentUserRequest {
    return GetCurrentUserRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetCurrentUserRequest>, I>>(_: I): GetCurrentUserRequest {
    const message = createBaseGetCurrentUserRequest();
    return message;
  },
};

function createBasePagination(): Pagination {
  return { currentPage: 0, perPage: 0, totalResults: 0, totalPages: 0 };
}

export const Pagination = {
  encode(message: Pagination, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currentPage !== 0) {
      writer.uint32(8).int32(message.currentPage);
    }
    if (message.perPage !== 0) {
      writer.uint32(16).int32(message.perPage);
    }
    if (message.totalResults !== 0) {
      writer.uint32(24).int32(message.totalResults);
    }
    if (message.totalPages !== 0) {
      writer.uint32(32).int32(message.totalPages);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pagination {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePagination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.currentPage = reader.int32();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.perPage = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.totalResults = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.totalPages = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Pagination {
    return {
      currentPage: isSet(object.currentPage) ? Number(object.currentPage) : 0,
      perPage: isSet(object.perPage) ? Number(object.perPage) : 0,
      totalResults: isSet(object.totalResults) ? Number(object.totalResults) : 0,
      totalPages: isSet(object.totalPages) ? Number(object.totalPages) : 0,
    };
  },

  toJSON(message: Pagination): unknown {
    const obj: any = {};
    message.currentPage !== undefined && (obj.currentPage = Math.round(message.currentPage));
    message.perPage !== undefined && (obj.perPage = Math.round(message.perPage));
    message.totalResults !== undefined && (obj.totalResults = Math.round(message.totalResults));
    message.totalPages !== undefined && (obj.totalPages = Math.round(message.totalPages));
    return obj;
  },

  create<I extends Exact<DeepPartial<Pagination>, I>>(base?: I): Pagination {
    return Pagination.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Pagination>, I>>(object: I): Pagination {
    const message = createBasePagination();
    message.currentPage = object.currentPage ?? 0;
    message.perPage = object.perPage ?? 0;
    message.totalResults = object.totalResults ?? 0;
    message.totalPages = object.totalPages ?? 0;
    return message;
  },
};

function createBaseUserRequest(): UserRequest {
  return { id: "" };
}

export const UserRequest = {
  encode(message: UserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: UserRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create<I extends Exact<DeepPartial<UserRequest>, I>>(base?: I): UserRequest {
    return UserRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserRequest>, I>>(object: I): UserRequest {
    const message = createBaseUserRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseUser(): User {
  return { id: "", firstName: "", lastName: "", fullName: "", avatarUrl: "" };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.firstName !== "") {
      writer.uint32(18).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(26).string(message.lastName);
    }
    if (message.fullName !== "") {
      writer.uint32(34).string(message.fullName);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(42).string(message.avatarUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.firstName = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.lastName = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.fullName = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.avatarUrl = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      firstName: isSet(object.firstName) ? String(object.firstName) : "",
      lastName: isSet(object.lastName) ? String(object.lastName) : "",
      fullName: isSet(object.fullName) ? String(object.fullName) : "",
      avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : "",
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.firstName !== undefined && (obj.firstName = message.firstName);
    message.lastName !== undefined && (obj.lastName = message.lastName);
    message.fullName !== undefined && (obj.fullName = message.fullName);
    message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.id = object.id ?? "";
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    message.fullName = object.fullName ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    return message;
  },
};

function createBaseUserResponse(): UserResponse {
  return { user: undefined };
}

export const UserResponse = {
  encode(message: UserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserResponse {
    return { user: isSet(object.user) ? User.fromJSON(object.user) : undefined };
  },

  toJSON(message: UserResponse): unknown {
    const obj: any = {};
    message.user !== undefined && (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<UserResponse>, I>>(base?: I): UserResponse {
    return UserResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserResponse>, I>>(object: I): UserResponse {
    const message = createBaseUserResponse();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseGuideRequest(): GuideRequest {
  return { id: "" };
}

export const GuideRequest = {
  encode(message: GuideRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GuideRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGuideRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GuideRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: GuideRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create<I extends Exact<DeepPartial<GuideRequest>, I>>(base?: I): GuideRequest {
    return GuideRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GuideRequest>, I>>(object: I): GuideRequest {
    const message = createBaseGuideRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGuideResponse(): GuideResponse {
  return { guide: undefined };
}

export const GuideResponse = {
  encode(message: GuideResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guide !== undefined) {
      Guide.encode(message.guide, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GuideResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGuideResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.guide = Guide.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GuideResponse {
    return { guide: isSet(object.guide) ? Guide.fromJSON(object.guide) : undefined };
  },

  toJSON(message: GuideResponse): unknown {
    const obj: any = {};
    message.guide !== undefined && (obj.guide = message.guide ? Guide.toJSON(message.guide) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GuideResponse>, I>>(base?: I): GuideResponse {
    return GuideResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GuideResponse>, I>>(object: I): GuideResponse {
    const message = createBaseGuideResponse();
    message.guide = (object.guide !== undefined && object.guide !== null) ? Guide.fromPartial(object.guide) : undefined;
    return message;
  },
};

function createBaseLatLng(): LatLng {
  return { latitude: 0, longitude: 0 };
}

export const LatLng = {
  encode(message: LatLng, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.latitude !== 0) {
      writer.uint32(9).double(message.latitude);
    }
    if (message.longitude !== 0) {
      writer.uint32(17).double(message.longitude);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LatLng {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLatLng();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 9) {
            break;
          }

          message.latitude = reader.double();
          continue;
        case 2:
          if (tag != 17) {
            break;
          }

          message.longitude = reader.double();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LatLng {
    return {
      latitude: isSet(object.latitude) ? Number(object.latitude) : 0,
      longitude: isSet(object.longitude) ? Number(object.longitude) : 0,
    };
  },

  toJSON(message: LatLng): unknown {
    const obj: any = {};
    message.latitude !== undefined && (obj.latitude = message.latitude);
    message.longitude !== undefined && (obj.longitude = message.longitude);
    return obj;
  },

  create<I extends Exact<DeepPartial<LatLng>, I>>(base?: I): LatLng {
    return LatLng.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<LatLng>, I>>(object: I): LatLng {
    const message = createBaseLatLng();
    message.latitude = object.latitude ?? 0;
    message.longitude = object.longitude ?? 0;
    return message;
  },
};

function createBaseGuide(): Guide {
  return {
    id: "",
    title: "",
    description: "",
    url: "",
    startLatLng: undefined,
    endLatLng: undefined,
    polyline: new Uint8Array(),
    country: "",
    state: "",
    localizedDistance: "",
    commentsCount: 0,
    uploadsCount: 0,
    starRating: "",
  };
}

export const Guide = {
  encode(message: Guide, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.url !== "") {
      writer.uint32(42).string(message.url);
    }
    if (message.startLatLng !== undefined) {
      LatLng.encode(message.startLatLng, writer.uint32(50).fork()).ldelim();
    }
    if (message.endLatLng !== undefined) {
      LatLng.encode(message.endLatLng, writer.uint32(58).fork()).ldelim();
    }
    if (message.polyline.length !== 0) {
      writer.uint32(66).bytes(message.polyline);
    }
    if (message.country !== "") {
      writer.uint32(74).string(message.country);
    }
    if (message.state !== "") {
      writer.uint32(82).string(message.state);
    }
    if (message.localizedDistance !== "") {
      writer.uint32(90).string(message.localizedDistance);
    }
    if (message.commentsCount !== 0) {
      writer.uint32(96).int32(message.commentsCount);
    }
    if (message.uploadsCount !== 0) {
      writer.uint32(104).int32(message.uploadsCount);
    }
    if (message.starRating !== "") {
      writer.uint32(114).string(message.starRating);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Guide {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGuide();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.title = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.url = reader.string();
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.startLatLng = LatLng.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.endLatLng = LatLng.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.polyline = reader.bytes();
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.country = reader.string();
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.state = reader.string();
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.localizedDistance = reader.string();
          continue;
        case 12:
          if (tag != 96) {
            break;
          }

          message.commentsCount = reader.int32();
          continue;
        case 13:
          if (tag != 104) {
            break;
          }

          message.uploadsCount = reader.int32();
          continue;
        case 14:
          if (tag != 114) {
            break;
          }

          message.starRating = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Guide {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      url: isSet(object.url) ? String(object.url) : "",
      startLatLng: isSet(object.startLatLng) ? LatLng.fromJSON(object.startLatLng) : undefined,
      endLatLng: isSet(object.endLatLng) ? LatLng.fromJSON(object.endLatLng) : undefined,
      polyline: isSet(object.polyline) ? bytesFromBase64(object.polyline) : new Uint8Array(),
      country: isSet(object.country) ? String(object.country) : "",
      state: isSet(object.state) ? String(object.state) : "",
      localizedDistance: isSet(object.localizedDistance) ? String(object.localizedDistance) : "",
      commentsCount: isSet(object.commentsCount) ? Number(object.commentsCount) : 0,
      uploadsCount: isSet(object.uploadsCount) ? Number(object.uploadsCount) : 0,
      starRating: isSet(object.starRating) ? String(object.starRating) : "",
    };
  },

  toJSON(message: Guide): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.url !== undefined && (obj.url = message.url);
    message.startLatLng !== undefined &&
      (obj.startLatLng = message.startLatLng ? LatLng.toJSON(message.startLatLng) : undefined);
    message.endLatLng !== undefined &&
      (obj.endLatLng = message.endLatLng ? LatLng.toJSON(message.endLatLng) : undefined);
    message.polyline !== undefined &&
      (obj.polyline = base64FromBytes(message.polyline !== undefined ? message.polyline : new Uint8Array()));
    message.country !== undefined && (obj.country = message.country);
    message.state !== undefined && (obj.state = message.state);
    message.localizedDistance !== undefined && (obj.localizedDistance = message.localizedDistance);
    message.commentsCount !== undefined && (obj.commentsCount = Math.round(message.commentsCount));
    message.uploadsCount !== undefined && (obj.uploadsCount = Math.round(message.uploadsCount));
    message.starRating !== undefined && (obj.starRating = message.starRating);
    return obj;
  },

  create<I extends Exact<DeepPartial<Guide>, I>>(base?: I): Guide {
    return Guide.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Guide>, I>>(object: I): Guide {
    const message = createBaseGuide();
    message.id = object.id ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.url = object.url ?? "";
    message.startLatLng = (object.startLatLng !== undefined && object.startLatLng !== null)
      ? LatLng.fromPartial(object.startLatLng)
      : undefined;
    message.endLatLng = (object.endLatLng !== undefined && object.endLatLng !== null)
      ? LatLng.fromPartial(object.endLatLng)
      : undefined;
    message.polyline = object.polyline ?? new Uint8Array();
    message.country = object.country ?? "";
    message.state = object.state ?? "";
    message.localizedDistance = object.localizedDistance ?? "";
    message.commentsCount = object.commentsCount ?? 0;
    message.uploadsCount = object.uploadsCount ?? 0;
    message.starRating = object.starRating ?? "";
    return message;
  },
};

function createBaseFitnessActivity(): FitnessActivity {
  return { id: "", name: "", startLatLng: undefined, endLatLng: undefined, polyline: new Uint8Array() };
}

export const FitnessActivity = {
  encode(message: FitnessActivity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.startLatLng !== undefined) {
      LatLng.encode(message.startLatLng, writer.uint32(26).fork()).ldelim();
    }
    if (message.endLatLng !== undefined) {
      LatLng.encode(message.endLatLng, writer.uint32(34).fork()).ldelim();
    }
    if (message.polyline.length !== 0) {
      writer.uint32(42).bytes(message.polyline);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FitnessActivity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFitnessActivity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.startLatLng = LatLng.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.endLatLng = LatLng.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.polyline = reader.bytes();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FitnessActivity {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      startLatLng: isSet(object.startLatLng) ? LatLng.fromJSON(object.startLatLng) : undefined,
      endLatLng: isSet(object.endLatLng) ? LatLng.fromJSON(object.endLatLng) : undefined,
      polyline: isSet(object.polyline) ? bytesFromBase64(object.polyline) : new Uint8Array(),
    };
  },

  toJSON(message: FitnessActivity): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.startLatLng !== undefined &&
      (obj.startLatLng = message.startLatLng ? LatLng.toJSON(message.startLatLng) : undefined);
    message.endLatLng !== undefined &&
      (obj.endLatLng = message.endLatLng ? LatLng.toJSON(message.endLatLng) : undefined);
    message.polyline !== undefined &&
      (obj.polyline = base64FromBytes(message.polyline !== undefined ? message.polyline : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<FitnessActivity>, I>>(base?: I): FitnessActivity {
    return FitnessActivity.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FitnessActivity>, I>>(object: I): FitnessActivity {
    const message = createBaseFitnessActivity();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.startLatLng = (object.startLatLng !== undefined && object.startLatLng !== null)
      ? LatLng.fromPartial(object.startLatLng)
      : undefined;
    message.endLatLng = (object.endLatLng !== undefined && object.endLatLng !== null)
      ? LatLng.fromPartial(object.endLatLng)
      : undefined;
    message.polyline = object.polyline ?? new Uint8Array();
    return message;
  },
};

function createBaseGuideComment(): GuideComment {
  return { id: "", body: "", userFullName: "", userAvatarUrl: "", createdAt: "", starRating: 0 };
}

export const GuideComment = {
  encode(message: GuideComment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.body !== "") {
      writer.uint32(18).string(message.body);
    }
    if (message.userFullName !== "") {
      writer.uint32(26).string(message.userFullName);
    }
    if (message.userAvatarUrl !== "") {
      writer.uint32(34).string(message.userAvatarUrl);
    }
    if (message.createdAt !== "") {
      writer.uint32(42).string(message.createdAt);
    }
    if (message.starRating !== 0) {
      writer.uint32(48).int32(message.starRating);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GuideComment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGuideComment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.body = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.userFullName = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.userAvatarUrl = reader.string();
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.createdAt = reader.string();
          continue;
        case 6:
          if (tag != 48) {
            break;
          }

          message.starRating = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GuideComment {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      body: isSet(object.body) ? String(object.body) : "",
      userFullName: isSet(object.userFullName) ? String(object.userFullName) : "",
      userAvatarUrl: isSet(object.userAvatarUrl) ? String(object.userAvatarUrl) : "",
      createdAt: isSet(object.createdAt) ? String(object.createdAt) : "",
      starRating: isSet(object.starRating) ? Number(object.starRating) : 0,
    };
  },

  toJSON(message: GuideComment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.body !== undefined && (obj.body = message.body);
    message.userFullName !== undefined && (obj.userFullName = message.userFullName);
    message.userAvatarUrl !== undefined && (obj.userAvatarUrl = message.userAvatarUrl);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.starRating !== undefined && (obj.starRating = Math.round(message.starRating));
    return obj;
  },

  create<I extends Exact<DeepPartial<GuideComment>, I>>(base?: I): GuideComment {
    return GuideComment.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GuideComment>, I>>(object: I): GuideComment {
    const message = createBaseGuideComment();
    message.id = object.id ?? "";
    message.body = object.body ?? "";
    message.userFullName = object.userFullName ?? "";
    message.userAvatarUrl = object.userAvatarUrl ?? "";
    message.createdAt = object.createdAt ?? "";
    message.starRating = object.starRating ?? 0;
    return message;
  },
};

function createBaseGetGuideCommentsCollectionRequest(): GetGuideCommentsCollectionRequest {
  return { guideId: "", page: 0 };
}

export const GetGuideCommentsCollectionRequest = {
  encode(message: GetGuideCommentsCollectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guideId !== "") {
      writer.uint32(10).string(message.guideId);
    }
    if (message.page !== 0) {
      writer.uint32(16).int32(message.page);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGuideCommentsCollectionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGuideCommentsCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.guideId = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.page = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetGuideCommentsCollectionRequest {
    return {
      guideId: isSet(object.guideId) ? String(object.guideId) : "",
      page: isSet(object.page) ? Number(object.page) : 0,
    };
  },

  toJSON(message: GetGuideCommentsCollectionRequest): unknown {
    const obj: any = {};
    message.guideId !== undefined && (obj.guideId = message.guideId);
    message.page !== undefined && (obj.page = Math.round(message.page));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetGuideCommentsCollectionRequest>, I>>(
    base?: I,
  ): GetGuideCommentsCollectionRequest {
    return GetGuideCommentsCollectionRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetGuideCommentsCollectionRequest>, I>>(
    object: I,
  ): GetGuideCommentsCollectionRequest {
    const message = createBaseGetGuideCommentsCollectionRequest();
    message.guideId = object.guideId ?? "";
    message.page = object.page ?? 0;
    return message;
  },
};

function createBaseGetGuideCommentsCollectionResponse(): GetGuideCommentsCollectionResponse {
  return { pagination: undefined, comments: [] };
}

export const GetGuideCommentsCollectionResponse = {
  encode(message: GetGuideCommentsCollectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      Pagination.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.comments) {
      GuideComment.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGuideCommentsCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGuideCommentsCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.pagination = Pagination.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.comments.push(GuideComment.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetGuideCommentsCollectionResponse {
    return {
      pagination: isSet(object.pagination) ? Pagination.fromJSON(object.pagination) : undefined,
      comments: Array.isArray(object?.comments) ? object.comments.map((e: any) => GuideComment.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetGuideCommentsCollectionResponse): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? Pagination.toJSON(message.pagination) : undefined);
    if (message.comments) {
      obj.comments = message.comments.map((e) => e ? GuideComment.toJSON(e) : undefined);
    } else {
      obj.comments = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetGuideCommentsCollectionResponse>, I>>(
    base?: I,
  ): GetGuideCommentsCollectionResponse {
    return GetGuideCommentsCollectionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetGuideCommentsCollectionResponse>, I>>(
    object: I,
  ): GetGuideCommentsCollectionResponse {
    const message = createBaseGetGuideCommentsCollectionResponse();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? Pagination.fromPartial(object.pagination)
      : undefined;
    message.comments = object.comments?.map((e) => GuideComment.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCreateGuideCommentRequest(): CreateGuideCommentRequest {
  return { guideId: "", body: "", starRating: 0 };
}

export const CreateGuideCommentRequest = {
  encode(message: CreateGuideCommentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guideId !== "") {
      writer.uint32(10).string(message.guideId);
    }
    if (message.body !== "") {
      writer.uint32(18).string(message.body);
    }
    if (message.starRating !== 0) {
      writer.uint32(24).int32(message.starRating);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGuideCommentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGuideCommentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.guideId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.body = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.starRating = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateGuideCommentRequest {
    return {
      guideId: isSet(object.guideId) ? String(object.guideId) : "",
      body: isSet(object.body) ? String(object.body) : "",
      starRating: isSet(object.starRating) ? Number(object.starRating) : 0,
    };
  },

  toJSON(message: CreateGuideCommentRequest): unknown {
    const obj: any = {};
    message.guideId !== undefined && (obj.guideId = message.guideId);
    message.body !== undefined && (obj.body = message.body);
    message.starRating !== undefined && (obj.starRating = Math.round(message.starRating));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateGuideCommentRequest>, I>>(base?: I): CreateGuideCommentRequest {
    return CreateGuideCommentRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateGuideCommentRequest>, I>>(object: I): CreateGuideCommentRequest {
    const message = createBaseCreateGuideCommentRequest();
    message.guideId = object.guideId ?? "";
    message.body = object.body ?? "";
    message.starRating = object.starRating ?? 0;
    return message;
  },
};

export interface Mobile {
  GetUser(request: UserRequest): Promise<UserResponse>;
  GetGuide(request: GuideRequest): Promise<GuideResponse>;
  GetGuidesCollection(request: GetGuidesCollectionRequest): Promise<GetGuidesCollectionResponse>;
  GetCurrentUser(request: GetCurrentUserRequest): Promise<UserResponse>;
  GetGuideCommentsCollection(request: GetGuideCommentsCollectionRequest): Promise<GetGuideCommentsCollectionResponse>;
  CreateGuideComment(request: CreateGuideCommentRequest): Promise<GuideComment>;
}

export class MobileClientImpl implements Mobile {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "wikipaddle.api.v1.Mobile";
    this.rpc = rpc;
    this.GetUser = this.GetUser.bind(this);
    this.GetGuide = this.GetGuide.bind(this);
    this.GetGuidesCollection = this.GetGuidesCollection.bind(this);
    this.GetCurrentUser = this.GetCurrentUser.bind(this);
    this.GetGuideCommentsCollection = this.GetGuideCommentsCollection.bind(this);
    this.CreateGuideComment = this.CreateGuideComment.bind(this);
  }
  GetUser(request: UserRequest): Promise<UserResponse> {
    const data = UserRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetUser", data);
    return promise.then((data) => UserResponse.decode(_m0.Reader.create(data)));
  }

  GetGuide(request: GuideRequest): Promise<GuideResponse> {
    const data = GuideRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetGuide", data);
    return promise.then((data) => GuideResponse.decode(_m0.Reader.create(data)));
  }

  GetGuidesCollection(request: GetGuidesCollectionRequest): Promise<GetGuidesCollectionResponse> {
    const data = GetGuidesCollectionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetGuidesCollection", data);
    return promise.then((data) => GetGuidesCollectionResponse.decode(_m0.Reader.create(data)));
  }

  GetCurrentUser(request: GetCurrentUserRequest): Promise<UserResponse> {
    const data = GetCurrentUserRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetCurrentUser", data);
    return promise.then((data) => UserResponse.decode(_m0.Reader.create(data)));
  }

  GetGuideCommentsCollection(request: GetGuideCommentsCollectionRequest): Promise<GetGuideCommentsCollectionResponse> {
    const data = GetGuideCommentsCollectionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetGuideCommentsCollection", data);
    return promise.then((data) => GetGuideCommentsCollectionResponse.decode(_m0.Reader.create(data)));
  }

  CreateGuideComment(request: CreateGuideCommentRequest): Promise<GuideComment> {
    const data = CreateGuideCommentRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateGuideComment", data);
    return promise.then((data) => GuideComment.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
