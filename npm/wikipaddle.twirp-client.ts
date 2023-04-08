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
      "wikipaddle_api.v1.Mobile",
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
      "wikipaddle_api.v1.Mobile",
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
      "wikipaddle_api.v1.Mobile",
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
      "wikipaddle_api.v1.Mobile",
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
      "wikipaddle_api.v1.Mobile",
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
      "wikipaddle_api.v1.Mobile",
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
      "wikipaddle_api.v1.Mobile",
      "GetUser",
      "application/protobuf",
      data
    );
    return promise.then((data) => UserResponse.fromBinary(data as Uint8Array));
  }

  GetGuide(request: GuideRequest): Promise<GuideResponse> {
    const data = GuideRequest.toBinary(request);
    const promise = this.rpc.request(
      "wikipaddle_api.v1.Mobile",
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
      "wikipaddle_api.v1.Mobile",
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
      "wikipaddle_api.v1.Mobile",
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
      "wikipaddle_api.v1.Mobile",
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
      "wikipaddle_api.v1.Mobile",
      "CreateGuideComment",
      "application/protobuf",
      data
    );
    return promise.then((data) => GuideComment.fromBinary(data as Uint8Array));
  }
}
