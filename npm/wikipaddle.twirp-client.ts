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
    const data = UserRequest.toJSON(request);
    const promise = this.rpc.request(
      "wikipaddle_api.v1.Mobile",
      "GetUser",
      "application/json",
      data as object
    );
    return promise.then((data) => UserResponse.fromJSON(data as any));
  }

  GetGuide(request: GuideRequest): Promise<GuideResponse> {
    const data = GuideRequest.toJSON(request);
    const promise = this.rpc.request(
      "wikipaddle_api.v1.Mobile",
      "GetGuide",
      "application/json",
      data as object
    );
    return promise.then((data) => GuideResponse.fromJSON(data as any));
  }

  GetGuidesCollection(
    request: GetGuidesCollectionRequest
  ): Promise<GetGuidesCollectionResponse> {
    const data = GetGuidesCollectionRequest.toJSON(request);
    const promise = this.rpc.request(
      "wikipaddle_api.v1.Mobile",
      "GetGuidesCollection",
      "application/json",
      data as object
    );
    return promise.then((data) =>
      GetGuidesCollectionResponse.fromJSON(data as any)
    );
  }

  GetCurrentUser(request: GetCurrentUserRequest): Promise<UserResponse> {
    const data = GetCurrentUserRequest.toJSON(request);
    const promise = this.rpc.request(
      "wikipaddle_api.v1.Mobile",
      "GetCurrentUser",
      "application/json",
      data as object
    );
    return promise.then((data) => UserResponse.fromJSON(data as any));
  }

  GetGuideCommentsCollection(
    request: GetGuideCommentsCollectionRequest
  ): Promise<GetGuideCommentsCollectionResponse> {
    const data = GetGuideCommentsCollectionRequest.toJSON(request);
    const promise = this.rpc.request(
      "wikipaddle_api.v1.Mobile",
      "GetGuideCommentsCollection",
      "application/json",
      data as object
    );
    return promise.then((data) =>
      GetGuideCommentsCollectionResponse.fromJSON(data as any)
    );
  }

  CreateGuideComment(
    request: CreateGuideCommentRequest
  ): Promise<GuideComment> {
    const data = CreateGuideCommentRequest.toJSON(request);
    const promise = this.rpc.request(
      "wikipaddle_api.v1.Mobile",
      "CreateGuideComment",
      "application/json",
      data as object
    );
    return promise.then((data) => GuideComment.fromJSON(data as any));
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
    const data = UserRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wikipaddle_api.v1.Mobile",
      "GetUser",
      "application/protobuf",
      data
    );
    return promise.then((data) => UserResponse.decode(data as Uint8Array));
  }

  GetGuide(request: GuideRequest): Promise<GuideResponse> {
    const data = GuideRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wikipaddle_api.v1.Mobile",
      "GetGuide",
      "application/protobuf",
      data
    );
    return promise.then((data) => GuideResponse.decode(data as Uint8Array));
  }

  GetGuidesCollection(
    request: GetGuidesCollectionRequest
  ): Promise<GetGuidesCollectionResponse> {
    const data = GetGuidesCollectionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wikipaddle_api.v1.Mobile",
      "GetGuidesCollection",
      "application/protobuf",
      data
    );
    return promise.then((data) =>
      GetGuidesCollectionResponse.decode(data as Uint8Array)
    );
  }

  GetCurrentUser(request: GetCurrentUserRequest): Promise<UserResponse> {
    const data = GetCurrentUserRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wikipaddle_api.v1.Mobile",
      "GetCurrentUser",
      "application/protobuf",
      data
    );
    return promise.then((data) => UserResponse.decode(data as Uint8Array));
  }

  GetGuideCommentsCollection(
    request: GetGuideCommentsCollectionRequest
  ): Promise<GetGuideCommentsCollectionResponse> {
    const data = GetGuideCommentsCollectionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wikipaddle_api.v1.Mobile",
      "GetGuideCommentsCollection",
      "application/protobuf",
      data
    );
    return promise.then((data) =>
      GetGuideCommentsCollectionResponse.decode(data as Uint8Array)
    );
  }

  CreateGuideComment(
    request: CreateGuideCommentRequest
  ): Promise<GuideComment> {
    const data = CreateGuideCommentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wikipaddle_api.v1.Mobile",
      "CreateGuideComment",
      "application/protobuf",
      data
    );
    return promise.then((data) => GuideComment.decode(data as Uint8Array));
  }
}
