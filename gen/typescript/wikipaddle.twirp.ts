import {
  TwirpContext,
  TwirpServer,
  RouterEvents,
  TwirpError,
  TwirpErrorCode,
  Interceptor,
  TwirpContentType,
  chainInterceptors,
} from "twirp-ts";
import {
  UserRequest,
  UserResponse,
  GuideRequest,
  GuideResponse,
  GetGuidesCollectionRequest,
  GetGuidesCollectionResponse,
  GetCurrentUserRequest,
  GetGuideCommentsCollectionRequest,
  GetGuideCommentsCollectionResponse,
  CreateGuideCommentRequest,
  GuideComment,
} from "./wikipaddle";

//==================================//
//          Client Code             //
//==================================//

interface Rpc {
  request(
    service: string,
    method: string,
    contentType: "application/json" | "application/protobuf",
    data: object | Uint8Array
  ): Promise<object | Uint8Array>;
}

export interface MobileClient {
  GetUser(request: UserRequest): Promise<UserResponse>;
  GetGuide(request: GuideRequest): Promise<GuideResponse>;
  GetGuidesCollection(
    request: GetGuidesCollectionRequest
  ): Promise<GetGuidesCollectionResponse>;
  GetCurrentUser(request: GetCurrentUserRequest): Promise<UserResponse>;
  GetGuideCommentsCollection(
    request: GetGuideCommentsCollectionRequest
  ): Promise<GetGuideCommentsCollectionResponse>;
  CreateGuideComment(request: CreateGuideCommentRequest): Promise<GuideComment>;
}

export class MobileClientJSON implements MobileClient {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetUser.bind(this);
    this.GetGuide.bind(this);
    this.GetGuidesCollection.bind(this);
    this.GetCurrentUser.bind(this);
    this.GetGuideCommentsCollection.bind(this);
    this.CreateGuideComment.bind(this);
  }
  GetUser(request: UserRequest): Promise<UserResponse> {
    const data = UserRequest.toJson(request, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    });
    const promise = this.rpc.request(
      "wikipaddle.api.v1.Mobile",
      "GetUser",
      "application/json",
      data as object
    );
    return promise.then((data) =>
      UserResponse.fromJson(data as any, { ignoreUnknownFields: true })
    );
  }

  GetGuide(request: GuideRequest): Promise<GuideResponse> {
    const data = GuideRequest.toJson(request, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    });
    const promise = this.rpc.request(
      "wikipaddle.api.v1.Mobile",
      "GetGuide",
      "application/json",
      data as object
    );
    return promise.then((data) =>
      GuideResponse.fromJson(data as any, { ignoreUnknownFields: true })
    );
  }

  GetGuidesCollection(
    request: GetGuidesCollectionRequest
  ): Promise<GetGuidesCollectionResponse> {
    const data = GetGuidesCollectionRequest.toJson(request, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    });
    const promise = this.rpc.request(
      "wikipaddle.api.v1.Mobile",
      "GetGuidesCollection",
      "application/json",
      data as object
    );
    return promise.then((data) =>
      GetGuidesCollectionResponse.fromJson(data as any, {
        ignoreUnknownFields: true,
      })
    );
  }

  GetCurrentUser(request: GetCurrentUserRequest): Promise<UserResponse> {
    const data = GetCurrentUserRequest.toJson(request, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    });
    const promise = this.rpc.request(
      "wikipaddle.api.v1.Mobile",
      "GetCurrentUser",
      "application/json",
      data as object
    );
    return promise.then((data) =>
      UserResponse.fromJson(data as any, { ignoreUnknownFields: true })
    );
  }

  GetGuideCommentsCollection(
    request: GetGuideCommentsCollectionRequest
  ): Promise<GetGuideCommentsCollectionResponse> {
    const data = GetGuideCommentsCollectionRequest.toJson(request, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    });
    const promise = this.rpc.request(
      "wikipaddle.api.v1.Mobile",
      "GetGuideCommentsCollection",
      "application/json",
      data as object
    );
    return promise.then((data) =>
      GetGuideCommentsCollectionResponse.fromJson(data as any, {
        ignoreUnknownFields: true,
      })
    );
  }

  CreateGuideComment(
    request: CreateGuideCommentRequest
  ): Promise<GuideComment> {
    const data = CreateGuideCommentRequest.toJson(request, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    });
    const promise = this.rpc.request(
      "wikipaddle.api.v1.Mobile",
      "CreateGuideComment",
      "application/json",
      data as object
    );
    return promise.then((data) =>
      GuideComment.fromJson(data as any, { ignoreUnknownFields: true })
    );
  }
}

export class MobileClientProtobuf implements MobileClient {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetUser.bind(this);
    this.GetGuide.bind(this);
    this.GetGuidesCollection.bind(this);
    this.GetCurrentUser.bind(this);
    this.GetGuideCommentsCollection.bind(this);
    this.CreateGuideComment.bind(this);
  }
  GetUser(request: UserRequest): Promise<UserResponse> {
    const data = UserRequest.toBinary(request);
    const promise = this.rpc.request(
      "wikipaddle.api.v1.Mobile",
      "GetUser",
      "application/protobuf",
      data
    );
    return promise.then((data) => UserResponse.fromBinary(data as Uint8Array));
  }

  GetGuide(request: GuideRequest): Promise<GuideResponse> {
    const data = GuideRequest.toBinary(request);
    const promise = this.rpc.request(
      "wikipaddle.api.v1.Mobile",
      "GetGuide",
      "application/protobuf",
      data
    );
    return promise.then((data) => GuideResponse.fromBinary(data as Uint8Array));
  }

  GetGuidesCollection(
    request: GetGuidesCollectionRequest
  ): Promise<GetGuidesCollectionResponse> {
    const data = GetGuidesCollectionRequest.toBinary(request);
    const promise = this.rpc.request(
      "wikipaddle.api.v1.Mobile",
      "GetGuidesCollection",
      "application/protobuf",
      data
    );
    return promise.then((data) =>
      GetGuidesCollectionResponse.fromBinary(data as Uint8Array)
    );
  }

  GetCurrentUser(request: GetCurrentUserRequest): Promise<UserResponse> {
    const data = GetCurrentUserRequest.toBinary(request);
    const promise = this.rpc.request(
      "wikipaddle.api.v1.Mobile",
      "GetCurrentUser",
      "application/protobuf",
      data
    );
    return promise.then((data) => UserResponse.fromBinary(data as Uint8Array));
  }

  GetGuideCommentsCollection(
    request: GetGuideCommentsCollectionRequest
  ): Promise<GetGuideCommentsCollectionResponse> {
    const data = GetGuideCommentsCollectionRequest.toBinary(request);
    const promise = this.rpc.request(
      "wikipaddle.api.v1.Mobile",
      "GetGuideCommentsCollection",
      "application/protobuf",
      data
    );
    return promise.then((data) =>
      GetGuideCommentsCollectionResponse.fromBinary(data as Uint8Array)
    );
  }

  CreateGuideComment(
    request: CreateGuideCommentRequest
  ): Promise<GuideComment> {
    const data = CreateGuideCommentRequest.toBinary(request);
    const promise = this.rpc.request(
      "wikipaddle.api.v1.Mobile",
      "CreateGuideComment",
      "application/protobuf",
      data
    );
    return promise.then((data) => GuideComment.fromBinary(data as Uint8Array));
  }
}

//==================================//
//          Server Code             //
//==================================//

export interface MobileTwirp<T extends TwirpContext = TwirpContext> {
  GetUser(ctx: T, request: UserRequest): Promise<UserResponse>;
  GetGuide(ctx: T, request: GuideRequest): Promise<GuideResponse>;
  GetGuidesCollection(
    ctx: T,
    request: GetGuidesCollectionRequest
  ): Promise<GetGuidesCollectionResponse>;
  GetCurrentUser(ctx: T, request: GetCurrentUserRequest): Promise<UserResponse>;
  GetGuideCommentsCollection(
    ctx: T,
    request: GetGuideCommentsCollectionRequest
  ): Promise<GetGuideCommentsCollectionResponse>;
  CreateGuideComment(
    ctx: T,
    request: CreateGuideCommentRequest
  ): Promise<GuideComment>;
}

export enum MobileMethod {
  GetUser = "GetUser",
  GetGuide = "GetGuide",
  GetGuidesCollection = "GetGuidesCollection",
  GetCurrentUser = "GetCurrentUser",
  GetGuideCommentsCollection = "GetGuideCommentsCollection",
  CreateGuideComment = "CreateGuideComment",
}

export const MobileMethodList = [
  MobileMethod.GetUser,
  MobileMethod.GetGuide,
  MobileMethod.GetGuidesCollection,
  MobileMethod.GetCurrentUser,
  MobileMethod.GetGuideCommentsCollection,
  MobileMethod.CreateGuideComment,
];

export function createMobileServer<T extends TwirpContext = TwirpContext>(
  service: MobileTwirp<T>
) {
  return new TwirpServer<MobileTwirp, T>({
    service,
    packageName: "wikipaddle.api.v1",
    serviceName: "Mobile",
    methodList: MobileMethodList,
    matchRoute: matchMobileRoute,
  });
}

function matchMobileRoute<T extends TwirpContext = TwirpContext>(
  method: string,
  events: RouterEvents<T>
) {
  switch (method) {
    case "GetUser":
      return async (
        ctx: T,
        service: MobileTwirp,
        data: Buffer,
        interceptors?: Interceptor<T, UserRequest, UserResponse>[]
      ) => {
        ctx = { ...ctx, methodName: "GetUser" };
        await events.onMatch(ctx);
        return handleMobileGetUserRequest(ctx, service, data, interceptors);
      };
    case "GetGuide":
      return async (
        ctx: T,
        service: MobileTwirp,
        data: Buffer,
        interceptors?: Interceptor<T, GuideRequest, GuideResponse>[]
      ) => {
        ctx = { ...ctx, methodName: "GetGuide" };
        await events.onMatch(ctx);
        return handleMobileGetGuideRequest(ctx, service, data, interceptors);
      };
    case "GetGuidesCollection":
      return async (
        ctx: T,
        service: MobileTwirp,
        data: Buffer,
        interceptors?: Interceptor<
          T,
          GetGuidesCollectionRequest,
          GetGuidesCollectionResponse
        >[]
      ) => {
        ctx = { ...ctx, methodName: "GetGuidesCollection" };
        await events.onMatch(ctx);
        return handleMobileGetGuidesCollectionRequest(
          ctx,
          service,
          data,
          interceptors
        );
      };
    case "GetCurrentUser":
      return async (
        ctx: T,
        service: MobileTwirp,
        data: Buffer,
        interceptors?: Interceptor<T, GetCurrentUserRequest, UserResponse>[]
      ) => {
        ctx = { ...ctx, methodName: "GetCurrentUser" };
        await events.onMatch(ctx);
        return handleMobileGetCurrentUserRequest(
          ctx,
          service,
          data,
          interceptors
        );
      };
    case "GetGuideCommentsCollection":
      return async (
        ctx: T,
        service: MobileTwirp,
        data: Buffer,
        interceptors?: Interceptor<
          T,
          GetGuideCommentsCollectionRequest,
          GetGuideCommentsCollectionResponse
        >[]
      ) => {
        ctx = { ...ctx, methodName: "GetGuideCommentsCollection" };
        await events.onMatch(ctx);
        return handleMobileGetGuideCommentsCollectionRequest(
          ctx,
          service,
          data,
          interceptors
        );
      };
    case "CreateGuideComment":
      return async (
        ctx: T,
        service: MobileTwirp,
        data: Buffer,
        interceptors?: Interceptor<T, CreateGuideCommentRequest, GuideComment>[]
      ) => {
        ctx = { ...ctx, methodName: "CreateGuideComment" };
        await events.onMatch(ctx);
        return handleMobileCreateGuideCommentRequest(
          ctx,
          service,
          data,
          interceptors
        );
      };
    default:
      events.onNotFound();
      const msg = `no handler found`;
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
  }
}

function handleMobileGetUserRequest<T extends TwirpContext = TwirpContext>(
  ctx: T,
  service: MobileTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, UserRequest, UserResponse>[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handleMobileGetUserJSON<T>(ctx, service, data, interceptors);
    case TwirpContentType.Protobuf:
      return handleMobileGetUserProtobuf<T>(ctx, service, data, interceptors);
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
  }
}

function handleMobileGetGuideRequest<T extends TwirpContext = TwirpContext>(
  ctx: T,
  service: MobileTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GuideRequest, GuideResponse>[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handleMobileGetGuideJSON<T>(ctx, service, data, interceptors);
    case TwirpContentType.Protobuf:
      return handleMobileGetGuideProtobuf<T>(ctx, service, data, interceptors);
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
  }
}

function handleMobileGetGuidesCollectionRequest<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: MobileTwirp,
  data: Buffer,
  interceptors?: Interceptor<
    T,
    GetGuidesCollectionRequest,
    GetGuidesCollectionResponse
  >[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handleMobileGetGuidesCollectionJSON<T>(
        ctx,
        service,
        data,
        interceptors
      );
    case TwirpContentType.Protobuf:
      return handleMobileGetGuidesCollectionProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      );
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
  }
}

function handleMobileGetCurrentUserRequest<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: MobileTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetCurrentUserRequest, UserResponse>[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handleMobileGetCurrentUserJSON<T>(
        ctx,
        service,
        data,
        interceptors
      );
    case TwirpContentType.Protobuf:
      return handleMobileGetCurrentUserProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      );
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
  }
}

function handleMobileGetGuideCommentsCollectionRequest<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: MobileTwirp,
  data: Buffer,
  interceptors?: Interceptor<
    T,
    GetGuideCommentsCollectionRequest,
    GetGuideCommentsCollectionResponse
  >[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handleMobileGetGuideCommentsCollectionJSON<T>(
        ctx,
        service,
        data,
        interceptors
      );
    case TwirpContentType.Protobuf:
      return handleMobileGetGuideCommentsCollectionProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      );
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
  }
}

function handleMobileCreateGuideCommentRequest<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: MobileTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, CreateGuideCommentRequest, GuideComment>[]
): Promise<string | Uint8Array> {
  switch (ctx.contentType) {
    case TwirpContentType.JSON:
      return handleMobileCreateGuideCommentJSON<T>(
        ctx,
        service,
        data,
        interceptors
      );
    case TwirpContentType.Protobuf:
      return handleMobileCreateGuideCommentProtobuf<T>(
        ctx,
        service,
        data,
        interceptors
      );
    default:
      const msg = "unexpected Content-Type";
      throw new TwirpError(TwirpErrorCode.BadRoute, msg);
  }
}
async function handleMobileGetUserJSON<T extends TwirpContext = TwirpContext>(
  ctx: T,
  service: MobileTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, UserRequest, UserResponse>[]
) {
  let request: UserRequest;
  let response: UserResponse;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = UserRequest.fromJson(body, { ignoreUnknownFields: true });
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      UserRequest,
      UserResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetUser(ctx, inputReq);
    });
  } else {
    response = await service.GetUser(ctx, request!);
  }

  return JSON.stringify(
    UserResponse.toJson(response, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    }) as string
  );
}

async function handleMobileGetGuideJSON<T extends TwirpContext = TwirpContext>(
  ctx: T,
  service: MobileTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GuideRequest, GuideResponse>[]
) {
  let request: GuideRequest;
  let response: GuideResponse;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = GuideRequest.fromJson(body, { ignoreUnknownFields: true });
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GuideRequest,
      GuideResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetGuide(ctx, inputReq);
    });
  } else {
    response = await service.GetGuide(ctx, request!);
  }

  return JSON.stringify(
    GuideResponse.toJson(response, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    }) as string
  );
}

async function handleMobileGetGuidesCollectionJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: MobileTwirp,
  data: Buffer,
  interceptors?: Interceptor<
    T,
    GetGuidesCollectionRequest,
    GetGuidesCollectionResponse
  >[]
) {
  let request: GetGuidesCollectionRequest;
  let response: GetGuidesCollectionResponse;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = GetGuidesCollectionRequest.fromJson(body, {
      ignoreUnknownFields: true,
    });
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetGuidesCollectionRequest,
      GetGuidesCollectionResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetGuidesCollection(ctx, inputReq);
    });
  } else {
    response = await service.GetGuidesCollection(ctx, request!);
  }

  return JSON.stringify(
    GetGuidesCollectionResponse.toJson(response, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    }) as string
  );
}

async function handleMobileGetCurrentUserJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: MobileTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetCurrentUserRequest, UserResponse>[]
) {
  let request: GetCurrentUserRequest;
  let response: UserResponse;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = GetCurrentUserRequest.fromJson(body, {
      ignoreUnknownFields: true,
    });
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetCurrentUserRequest,
      UserResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetCurrentUser(ctx, inputReq);
    });
  } else {
    response = await service.GetCurrentUser(ctx, request!);
  }

  return JSON.stringify(
    UserResponse.toJson(response, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    }) as string
  );
}

async function handleMobileGetGuideCommentsCollectionJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: MobileTwirp,
  data: Buffer,
  interceptors?: Interceptor<
    T,
    GetGuideCommentsCollectionRequest,
    GetGuideCommentsCollectionResponse
  >[]
) {
  let request: GetGuideCommentsCollectionRequest;
  let response: GetGuideCommentsCollectionResponse;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = GetGuideCommentsCollectionRequest.fromJson(body, {
      ignoreUnknownFields: true,
    });
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetGuideCommentsCollectionRequest,
      GetGuideCommentsCollectionResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetGuideCommentsCollection(ctx, inputReq);
    });
  } else {
    response = await service.GetGuideCommentsCollection(ctx, request!);
  }

  return JSON.stringify(
    GetGuideCommentsCollectionResponse.toJson(response, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    }) as string
  );
}

async function handleMobileCreateGuideCommentJSON<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: MobileTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, CreateGuideCommentRequest, GuideComment>[]
) {
  let request: CreateGuideCommentRequest;
  let response: GuideComment;

  try {
    const body = JSON.parse(data.toString() || "{}");
    request = CreateGuideCommentRequest.fromJson(body, {
      ignoreUnknownFields: true,
    });
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the json request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      CreateGuideCommentRequest,
      GuideComment
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.CreateGuideComment(ctx, inputReq);
    });
  } else {
    response = await service.CreateGuideComment(ctx, request!);
  }

  return JSON.stringify(
    GuideComment.toJson(response, {
      useProtoFieldName: true,
      emitDefaultValues: false,
    }) as string
  );
}
async function handleMobileGetUserProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: MobileTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, UserRequest, UserResponse>[]
) {
  let request: UserRequest;
  let response: UserResponse;

  try {
    request = UserRequest.fromBinary(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      UserRequest,
      UserResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetUser(ctx, inputReq);
    });
  } else {
    response = await service.GetUser(ctx, request!);
  }

  return Buffer.from(UserResponse.toBinary(response));
}

async function handleMobileGetGuideProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: MobileTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GuideRequest, GuideResponse>[]
) {
  let request: GuideRequest;
  let response: GuideResponse;

  try {
    request = GuideRequest.fromBinary(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GuideRequest,
      GuideResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetGuide(ctx, inputReq);
    });
  } else {
    response = await service.GetGuide(ctx, request!);
  }

  return Buffer.from(GuideResponse.toBinary(response));
}

async function handleMobileGetGuidesCollectionProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: MobileTwirp,
  data: Buffer,
  interceptors?: Interceptor<
    T,
    GetGuidesCollectionRequest,
    GetGuidesCollectionResponse
  >[]
) {
  let request: GetGuidesCollectionRequest;
  let response: GetGuidesCollectionResponse;

  try {
    request = GetGuidesCollectionRequest.fromBinary(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetGuidesCollectionRequest,
      GetGuidesCollectionResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetGuidesCollection(ctx, inputReq);
    });
  } else {
    response = await service.GetGuidesCollection(ctx, request!);
  }

  return Buffer.from(GetGuidesCollectionResponse.toBinary(response));
}

async function handleMobileGetCurrentUserProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: MobileTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, GetCurrentUserRequest, UserResponse>[]
) {
  let request: GetCurrentUserRequest;
  let response: UserResponse;

  try {
    request = GetCurrentUserRequest.fromBinary(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetCurrentUserRequest,
      UserResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetCurrentUser(ctx, inputReq);
    });
  } else {
    response = await service.GetCurrentUser(ctx, request!);
  }

  return Buffer.from(UserResponse.toBinary(response));
}

async function handleMobileGetGuideCommentsCollectionProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: MobileTwirp,
  data: Buffer,
  interceptors?: Interceptor<
    T,
    GetGuideCommentsCollectionRequest,
    GetGuideCommentsCollectionResponse
  >[]
) {
  let request: GetGuideCommentsCollectionRequest;
  let response: GetGuideCommentsCollectionResponse;

  try {
    request = GetGuideCommentsCollectionRequest.fromBinary(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      GetGuideCommentsCollectionRequest,
      GetGuideCommentsCollectionResponse
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.GetGuideCommentsCollection(ctx, inputReq);
    });
  } else {
    response = await service.GetGuideCommentsCollection(ctx, request!);
  }

  return Buffer.from(GetGuideCommentsCollectionResponse.toBinary(response));
}

async function handleMobileCreateGuideCommentProtobuf<
  T extends TwirpContext = TwirpContext
>(
  ctx: T,
  service: MobileTwirp,
  data: Buffer,
  interceptors?: Interceptor<T, CreateGuideCommentRequest, GuideComment>[]
) {
  let request: CreateGuideCommentRequest;
  let response: GuideComment;

  try {
    request = CreateGuideCommentRequest.fromBinary(data);
  } catch (e) {
    if (e instanceof Error) {
      const msg = "the protobuf request could not be decoded";
      throw new TwirpError(TwirpErrorCode.Malformed, msg).withCause(e, true);
    }
  }

  if (interceptors && interceptors.length > 0) {
    const interceptor = chainInterceptors(...interceptors) as Interceptor<
      T,
      CreateGuideCommentRequest,
      GuideComment
    >;
    response = await interceptor(ctx, request!, (ctx, inputReq) => {
      return service.CreateGuideComment(ctx, inputReq);
    });
  } else {
    response = await service.CreateGuideComment(ctx, request!);
  }

  return Buffer.from(GuideComment.toBinary(response));
}
